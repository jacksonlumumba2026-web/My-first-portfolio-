#!/usr/bin/env bash
# Renders a 10s branded vertical (720x1280) kinetic-typography video for social posting.
# Usage: make_video.sh <output.mp4> <hook_line1> <hook_line2> <detail_line1> <detail_line2> <cta_line1> <cta_line2>
# hook shows 0.3-2.8s (gold), detail shows 3.0-6.0s (white, boxed), logo+cta shows 6.2-9.5s.
# Font size for each block auto-shrinks to fit its longest line at ~650px, so text can never
# run off the 720px-wide frame - no need to hand-count characters per line.
# Run from this directory (content-factory/). Requires ffmpeg + DejaVu Sans Bold font.
set -euo pipefail

OUT="$1"; HOOK1="$2"; HOOK2="$3"; DETAIL1="$4"; DETAIL2="$5"; CTA1="$6"; CTA2="$7"
FONT=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TMP="$(mktemp -d)"

# ffmpeg drawtext treats '%' as an expansion character - it silently breaks. Never pass a
# literal '%' in any text argument (write "3 in 4" instead of "75%").
printf '%s\n%s\n' "$HOOK1" "$HOOK2" > "$TMP/hook.txt"
printf '%s\n%s\n' "$DETAIL1" "$DETAIL2" > "$TMP/detail.txt"
printf '%s\n%s\n' "$CTA1" "$CTA2" > "$TMP/cta.txt"

# DejaVu Sans Bold averages ~0.62x fontsize per character. Fit longest line into 650px,
# clamped to a sane min/max per block so text never overflows the 720px frame.
fit_size() {
  local max=0 line len
  local floor="$1" cap="$2"; shift 2
  for line in "$@"; do
    len=${#line}
    [ "$len" -gt "$max" ] && max=$len
  done
  [ "$max" -lt 1 ] && max=1
  local size=$(( 650 * 100 / (max * 62) ))
  [ "$size" -gt "$cap" ] && size=$cap
  [ "$size" -lt "$floor" ] && size=$floor
  echo "$size"
}

HOOK_SIZE=$(fit_size 28 54 "$HOOK1" "$HOOK2")
DETAIL_SIZE=$(fit_size 22 40 "$DETAIL1" "$DETAIL2")
CTA_SIZE=$(fit_size 22 38 "$CTA1" "$CTA2")

cat > "$TMP/filter.txt" << EOF
[0:v]zoompan=z='min(zoom+0.0004,1.10)':d=1:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=720x1280:fps=25[zoomed];
[1:v]scale=140:140[logo];
[zoomed]drawtext=fontfile=$FONT:textfile=$TMP/hook.txt:fontsize=$HOOK_SIZE:fontcolor=0xF0D080:line_spacing=14:box=1:boxcolor=black@0.55:boxborderw=26:x=(w-text_w)/2:y=(h-text_h)/2-120:enable='between(t,0.3,2.8)'[t1];
[t1]drawtext=fontfile=$FONT:textfile=$TMP/detail.txt:fontsize=$DETAIL_SIZE:fontcolor=white:line_spacing=10:box=1:boxcolor=black@0.6:boxborderw=24:x=(w-text_w)/2:y=(h-text_h)/2:enable='between(t,3.0,6.0)'[t2];
[t2][logo]overlay=(W-w)/2:400:enable='between(t,6.2,9.5)'[t3];
[t3]drawtext=fontfile=$FONT:textfile=$TMP/cta.txt:fontsize=$CTA_SIZE:fontcolor=0xF0D080:line_spacing=10:x=(w-text_w)/2:y=580:enable='between(t,6.2,9.5)'[vout]
EOF

ffmpeg -y -loop 1 -i "$DIR/bg.png" -i "$DIR/logo.png" \
  -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100 \
  -filter_complex_script "$TMP/filter.txt" -map "[vout]" -map 2:a \
  -t 9.8 -r 25 -c:v libx264 -pix_fmt yuv420p -c:a aac -b:a 128k -shortest \
  "$OUT"

rm -rf "$TMP"
echo "Wrote $OUT (hook=${HOOK_SIZE}px detail=${DETAIL_SIZE}px cta=${CTA_SIZE}px)"
