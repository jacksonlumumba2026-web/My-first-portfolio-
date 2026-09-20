import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import Reveal from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Discovery Call',
    desc: 'We chat on WhatsApp or a quick call to understand your business, customers, and goals.',
  },
  {
    n: '02',
    title: 'Design Concept',
    desc: 'You get a custom design direction — colours, layout, tone — built around your brand.',
  },
  {
    n: '03',
    title: 'Build & Integrate',
    desc: 'We build the full site: mobile-first, fast, with WhatsApp, M-Pesa, and Google set up.',
  },
  {
    n: '04',
    title: 'Review & Refine',
    desc: 'You review the live preview and request changes — we refine until it is exactly right.',
  },
  {
    n: '05',
    title: 'Launch & Grow',
    desc: 'Your site goes live on your domain, with Google Business and ongoing support in place.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-ink-900">
      <div className="section-inner">
        <Reveal>
          <span className="text-gold text-[11px] font-extrabold tracking-[3px] uppercase mb-4 block">
            How It Works
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-extrabold text-white text-[clamp(30px,4.2vw,46px)] tracking-tightest leading-[1.1] mb-5 max-w-xl">
            From idea to live site in days, not months
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-white/45 text-base leading-relaxed max-w-lg mb-16">
            A clear, guided process — you always know what's happening and when your site
            goes live.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="relative grid md:grid-cols-5 gap-8 md:gap-6"
        >
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          {STEPS.map((s) => (
            <motion.div key={s.n} variants={fadeUp} className="relative">
              <div className="w-12 h-12 rounded-full bg-ink-800 border border-gold/30 text-gold font-display font-bold text-sm flex items-center justify-center mb-6 relative z-10 shadow-gold">
                {s.n}
              </div>
              <h3 className="text-white font-bold text-[15.5px] tracking-tight mb-2">{s.title}</h3>
              <p className="text-white/45 text-[13px] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
