import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import Reveal from './Reveal';
import { waLink } from '../lib/whatsapp';

const PLANS = [
  {
    name: 'Starter Presence',
    price: 'KSh 25,000',
    period: 'One-time payment',
    desc: 'Get your business online properly with a professional site that builds trust.',
    features: [
      '5-page professional website',
      'Mobile-first responsive design',
      'WhatsApp chat integration',
      'Contact form with notifications',
      'Google Business Profile setup',
      'Basic SEO setup',
      '1 month free support',
      'Delivered in 3–5 days',
    ],
    featured: false,
  },
  {
    name: 'Business Growth',
    price: 'KSh 55,000',
    period: 'One-time payment',
    desc: 'For businesses ready to get found on Google and start generating real leads.',
    features: [
      'Everything in Starter',
      'Google Search Console & SEO',
      'Google Ads campaign setup',
      'Lead capture forms',
      'Business email setup',
      'Google Analytics',
      'Speed optimization',
      '2 months support',
      'Delivered in 5–7 days',
    ],
    featured: true,
  },
  {
    name: 'Market Leader',
    price: 'KSh 100,000',
    period: 'One-time payment',
    desc: 'For established businesses ready to dominate their industry online.',
    features: [
      'Everything in Business Growth',
      'M-Pesa STK Push payments',
      'Online booking system',
      'Premium animations & UI',
      'WhatsApp Business API',
      '3 months Google Ads management',
      'Monthly SEO reports (3 months)',
      'Priority support 3 months',
      'Delivered in 7–10 days',
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-ink">
      <div className="section-inner">
        <Reveal>
          <span className="text-gold text-[11px] font-extrabold tracking-[3px] uppercase mb-4 block">
            Investment
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-extrabold text-white text-[clamp(30px,4.2vw,46px)] tracking-tightest leading-[1.1] mb-5 max-w-xl">
            Transparent pricing. No surprises.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-white/45 text-base leading-relaxed max-w-lg mb-14">
            Fixed packages. Clear deliverables. You know exactly what you're getting before you
            pay a shilling.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid lg:grid-cols-3 gap-6 items-start"
        >
          {PLANS.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-9 border transition-shadow duration-300 ${
                p.featured
                  ? 'bg-ink-800 border-gold/50 shadow-gold lg:scale-[1.03]'
                  : 'border-white/10 hover:border-gold/30'
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink text-[10px] font-extrabold px-4 py-[5px] rounded-full tracking-wide whitespace-nowrap">
                  ⭐ MOST POPULAR
                </div>
              )}
              <div className="text-gold text-[11px] font-bold tracking-[2px] uppercase mb-3">
                {p.name}
              </div>
              <div className={`font-display text-4xl font-extrabold tracking-tight mb-1 ${p.featured ? 'text-white' : 'text-white'}`}>
                {p.price}
              </div>
              <div className="text-white/40 text-xs mb-5">{p.period}</div>
              <p className="text-white/50 text-[13px] leading-relaxed mb-6 pb-6 border-b border-white/10">
                {p.desc}
              </p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-white/70 text-[13px] leading-snug">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hi Jackson, I'm interested in the ${p.name} package (${p.price})`)}
                target="_blank"
                rel="noreferrer"
                className={`block w-full text-center py-3.5 rounded-xl text-sm font-bold transition-all ${
                  p.featured
                    ? 'bg-gold text-ink hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold'
                    : 'bg-white text-ink hover:bg-white/90'
                }`}
              >
                Get Started →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
