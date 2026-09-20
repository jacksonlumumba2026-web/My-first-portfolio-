import Reveal from './Reveal';
import { waLink } from '../lib/whatsapp';
import { trackWhatsAppClick } from '../lib/analytics';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative section-pad bg-ink text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-radial pointer-events-none" />
      <div className="section-inner relative">
        <Reveal className="mb-4">
          <span className="text-gold text-[11px] font-extrabold tracking-[3px] uppercase block">
            Ready to grow?
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-extrabold text-white text-[clamp(30px,4.5vw,48px)] tracking-tightest leading-[1.1] mb-5 max-w-2xl mx-auto">
            Your next client is searching for you on Google right now.
          </h2>
        </Reveal>
        <Reveal delay={0.16} className="mb-10">
          <p className="text-white/45 text-base leading-relaxed max-w-lg mx-auto">
            Let's make sure they find you. WhatsApp us today for a free audit of your current
            online presence — no commitment required.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="flex flex-wrap gap-3.5 justify-center">
          <a
            href={waLink("Hi Jackson, I'd like a free website audit for my business")}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick('final_cta_audit')}
            className="inline-flex items-center gap-2 bg-gold text-ink font-bold text-[15px] px-8 py-4 rounded-xl transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold"
          >
            💬 Get a Free Audit
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 border border-white/15 text-white/75 font-semibold text-[15px] px-8 py-4 rounded-xl transition-all hover:border-white/40 hover:text-white"
          >
            View Pricing →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
