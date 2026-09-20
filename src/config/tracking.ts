// ── AD TRACKING CONFIG ──────────────────────────────────────────────
// Fill these in with your real IDs to activate Google Ads and Meta
// (Facebook/Instagram) ad tracking. Leave any value empty ('') to keep
// that integration switched off — nothing loads and nothing breaks.
//
// GOOGLE_ADS_ID   — Google Ads "Conversion ID", format "AW-XXXXXXXXX".
//                    Google Ads → Tools & Settings → Conversions → your
//                    conversion action → "Tag setup" → Conversion ID.
// GA4_ID          — Optional. Google Analytics 4 Measurement ID,
//                    format "G-XXXXXXXXXX", from Google Analytics →
//                    Admin → Data Streams → your web stream.
// META_PIXEL_ID   — Meta Pixel ID (numeric), from Meta Events Manager
//                    → Data Sources → your Pixel → Settings.

export const GOOGLE_ADS_ID = '';
export const GA4_ID = '';
export const META_PIXEL_ID = '';

// Conversion labels for specific actions (from the same Google Ads
// "Tag setup" screen, the part after "AW-XXXXXXXXX/"). Optional — if
// empty, the WhatsApp/lead events still fire to GA4 and Meta, just not
// as a labelled Google Ads conversion.
export const GOOGLE_ADS_CONTACT_LABEL = '';
export const GOOGLE_ADS_LEAD_LABEL = '';
