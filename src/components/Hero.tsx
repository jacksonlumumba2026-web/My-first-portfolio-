import { motion } from 'framer-motion';
import { fadeUp, fadeUpSmall, staggerContainer, viewportOnce } from '../lib/motion';
import { waLink } from '../lib/whatsapp';
import jackson from '../assets/jackson.webp';

const STATS = [
  { num: '8+', label: 'Live client websites' },
  { num: '5d', label: 'Average delivery' },
  { num: '100%', label: 'Mobile-first design' },
  { num: '3×', label: 'More inquiries for clients' },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-[120px] pb-20 px-5 sm:px-8 lg:px-[5%]">
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gold-radial pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] bg-gold-radial opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="section-inner relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold text-[11px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Nairobi's Premium Web Agency
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-white leading-[1.05] tracking-tightest text-[clamp(38px,5.5vw,64px)] mb-6"
          >
            Websites That <span className="text-gradient-gold">Bring You</span> Clients
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/55 text-base sm:text-lg leading-relaxed max-w-[460px] mb-10"
          >
            We design and build fast, conversion-focused websites for Kenyan manufacturers,
            construction firms, clinics, and growing businesses — Google-ready,
            WhatsApp-connected, M-Pesa integrated.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3.5 mb-14">
            <a
              href={waLink("Hi Jackson, I'd like to discuss a website project")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-ink font-bold text-sm px-7 py-[14px] rounded-xl transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold"
            >
              💬 Start Your Project
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-white/15 text-white/75 font-semibold text-sm px-7 py-[14px] rounded-xl transition-all hover:border-white/40 hover:text-white"
            >
              View Our Work →
            </a>
          </motion.div>

          <motion.div variants={fadeUpSmall} className="flex items-center gap-3">
            <img
              src={jackson}
              alt="Jackson, founder of Jackson Web Solutions"
              className="w-11 h-11 rounded-full object-cover border-2 border-gold/40"
            />
            <div>
              <div className="text-white text-[13px] font-semibold">Built personally by Jackson</div>
              <div className="text-white/40 text-[11.5px]">Founder &amp; Lead Developer, Nairobi</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="grid grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden glass"
        >
          {STATS.map((s) => (
            <div key={s.label} className="p-7 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
              <div className="font-display text-4xl font-extrabold text-gradient-gold tracking-tight leading-none mb-1.5">
                {s.num}
              </div>
              <div className="text-white/45 text-[12px] font-medium leading-snug">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
