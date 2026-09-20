import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import Reveal from './Reveal';

const TESTIMONIALS = [
  {
    initial: 'I',
    name: 'Irene W.',
    role: 'Owner · Irene Household Services',
    quote:
      'Jackson built our website within days and it looks incredibly professional. Our customers keep complimenting it and we\'ve seen more inquiries since going online. Best investment for our business.',
  },
  {
    initial: 'B',
    name: 'Brandshine Team',
    role: 'Brandshine Tent Makers · Kenya',
    quote:
      'Very professional and fast. He understood exactly what we needed for our tent business and delivered beyond expectations. Our online presence has never been better. Highly recommend.',
  },
  {
    initial: 'P',
    name: 'Pestokil Team',
    role: 'Pestokil Kenya · Pest Control',
    quote:
      'Jackson built our pest control website and bookings increased significantly. It loads fast, works perfectly on mobile, and our Google Ads campaign brought real customers within the first week.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-cream">
      <div className="section-inner">
        <Reveal>
          <span className="text-gold-dim text-[11px] font-extrabold tracking-[3px] uppercase mb-4 block">
            Client Feedback
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-extrabold text-ink text-[clamp(30px,4.2vw,46px)] tracking-tightest leading-[1.1] mb-14 max-w-xl">
            Real businesses. Real results.
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative bg-white border border-ink/[0.07] rounded-2xl p-7 shadow-sm hover:shadow-premium transition-shadow duration-300"
            >
              <span className="absolute top-3 right-5 font-serif text-6xl text-gold/15 leading-none select-none">
                &rdquo;
              </span>
              <div className="text-gold text-sm tracking-[2px] mb-4">★★★★★</div>
              <p className="text-ink/70 text-[13.5px] leading-relaxed italic mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center text-gold font-extrabold text-base shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="text-ink font-bold text-[13px]">{t.name}</div>
                  <div className="text-ink/45 text-[11.5px] mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
