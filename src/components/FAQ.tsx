import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '../lib/motion';
import Reveal from './Reveal';

const FAQS = [
  {
    q: 'How long does it take to build my website?',
    a: 'Most sites are delivered in 3–10 days depending on the package. Starter Presence sites take 3–5 days, Business Growth 5–7 days, and Market Leader builds with M-Pesa and booking systems take 7–10 days.',
  },
  {
    q: 'Do I need to pay the full amount upfront?',
    a: 'No. We typically work with a 50% deposit to begin the build, with the balance due before the site goes live on your domain. We can discuss a payment plan that works for your business on WhatsApp.',
  },
  {
    q: 'Can I make changes after the site is live?',
    a: 'Yes. Every package includes a free support window (1–3 months depending on the plan) for text, image, and content updates. After that, ongoing monthly management is available from KSh 8,000/month.',
  },
  {
    q: 'Do you handle my domain and hosting?',
    a: 'Yes — we can register your .co.ke or .com domain, set up secure hosting, and connect everything so your site works immediately, including business email like info@yourbusiness.co.ke.',
  },
  {
    q: 'Will my site work well on mobile phones?',
    a: 'Every site we build is mobile-first by default — over 80% of Kenyan customers browse on mobile, so your site is designed and tested on phones before desktop.',
  },
  {
    q: 'What if I want M-Pesa payments on my site?',
    a: 'We integrate M-Pesa STK Push so customers can pay directly on your website with one tap. This is included in the Market Leader package or available as an add-on to any plan.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-ink-900">
      <div className="section-inner max-w-3xl">
        <Reveal>
          <span className="text-gold text-[11px] font-extrabold tracking-[3px] uppercase mb-4 block text-center">
            Questions
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-extrabold text-white text-[clamp(30px,4.2vw,46px)] tracking-tightest leading-[1.1] mb-14 text-center">
            Frequently asked questions
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="flex flex-col gap-3"
        >
          {FAQS.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={f.q}
                variants={fadeUp}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-white font-semibold text-[14.5px]">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gold text-xl shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-white/50 text-[13.5px] leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
