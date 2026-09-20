import Reveal from './Reveal';
import { projects } from '../data/projects';

const TRUST = [
  { icon: '🔒', label: 'Secure Hosting' },
  { icon: '📱', label: 'Mobile-First Design' },
  { icon: '🇰🇪', label: 'M-Pesa Payments' },
  { icon: '📍', label: 'Google Business Setup' },
  { icon: '⚡', label: '5-Day Delivery' },
];

export default function SocialProof() {
  const marqueeItems = [...projects, ...projects];

  return (
    <section className="border-y border-white/[0.06] bg-ink-900/60 overflow-hidden">
      <Reveal className="section-pad !py-10 sm:!py-12">
        <div className="section-inner">
          <p className="text-center text-white/35 text-[11px] font-bold tracking-[3px] uppercase mb-8">
            Trusted by growing Kenyan businesses
          </p>

          <div className="relative w-full overflow-hidden mask-fade">
            <div className="flex gap-14 w-max animate-marquee">
              {marqueeItems.map((p, i) => (
                <div
                  key={`${p.domain}-${i}`}
                  className="flex items-center gap-2.5 whitespace-nowrap text-white/40 hover:text-gold transition-colors"
                >
                  <span className="text-lg">{p.icon}</span>
                  <span className="font-display font-semibold text-[15px] tracking-tight">{p.domain}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 mt-12 pt-10 border-t border-white/[0.05]">
            {TRUST.map((t) => (
              <div key={t.label} className="flex items-center gap-2.5 text-white/55 text-[12.5px] font-semibold">
                <span className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[13px]">
                  {t.icon}
                </span>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
