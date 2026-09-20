import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import Reveal from './Reveal';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Business Website Design',
    desc: 'Premium, fast-loading websites built to impress clients and generate inquiries. Every site is mobile-first and Google-ready.',
    price: 'From KSh 25,000',
  },
  {
    icon: '📱',
    title: 'M-Pesa Integration',
    desc: 'Accept payments directly on your website via M-Pesa STK Push. Customers pay with one tap — no manual till numbers.',
    price: 'From KSh 30,000',
  },
  {
    icon: '📢',
    title: 'Google Ads Management',
    desc: 'Targeted Google campaigns that put your business in front of people actively searching for your services in Kenya.',
    price: 'KSh 10,000/month',
  },
  {
    icon: '📍',
    title: 'Google Business Profile',
    desc: 'Get your business on Google Maps so local customers find you instantly when they search for your service nearby.',
    price: 'KSh 6,000 once',
  },
  {
    icon: '📧',
    title: 'Business Email Setup',
    desc: 'Professional email like info@yourbusiness.co.ke. Builds instant trust with clients and looks far more credible than Gmail.',
    price: 'KSh 5,000 once',
  },
  {
    icon: '🔧',
    title: 'Monthly Management',
    desc: 'Site updates, Google Ads optimization, SEO reports, and WhatsApp check-ins — we keep your digital presence growing.',
    price: 'From KSh 8,000/month',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-ink">
      <div className="section-inner">
        <Reveal>
          <span className="text-gold text-[11px] font-extrabold tracking-[3px] uppercase mb-4 block">
            What We Do
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-extrabold text-white text-[clamp(30px,4.2vw,46px)] tracking-tightest leading-[1.1] mb-5 max-w-xl">
            Everything your business needs to win online
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-white/45 text-base leading-relaxed max-w-lg mb-14">
            From design to Google visibility — we handle the full digital presence so you focus
            on running your business.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-8 bg-white/[0.02] border border-white/[0.07] hover:border-gold/30 hover:bg-white/[0.04] transition-colors duration-300"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-2xl mb-6">
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-[17px] tracking-tight mb-2.5">{s.title}</h3>
              <p className="text-white/45 text-[13.5px] leading-relaxed mb-6">{s.desc}</p>
              <div className="text-gold font-bold text-[13px]">{s.price}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
