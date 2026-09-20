import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';
import { waLink } from '../lib/whatsapp';
import { trackLeadSubmit } from '../lib/analytics';

const PROJECT_TYPES = [
  'New website',
  'Website redesign',
  'Online store / e-commerce',
  'M-Pesa integration',
  'Google Ads management',
  'Not sure yet',
];

const BUDGETS = [
  'Under KSh 25,000',
  'KSh 25,000 – 55,000',
  'KSh 55,000 – 100,000',
  'KSh 100,000+',
  'Not sure yet',
];

const inputClasses =
  'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-[14px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold/50 focus:bg-white/[0.05]';

export default function ProjectBrief() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [description, setDescription] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    const lines = [
      `Hi Jackson, I'd like to start a project.`,
      ``,
      `*Name:* ${name.trim()}`,
      phone.trim() ? `*Phone:* ${phone.trim()}` : null,
      `*Project type:* ${projectType}`,
      `*Budget:* ${budget}`,
      ``,
      `*About my project:*`,
      description.trim(),
    ].filter(Boolean);

    trackLeadSubmit('project_brief_form');
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
    setSent(true);
  }

  function resetForm() {
    setName('');
    setPhone('');
    setProjectType(PROJECT_TYPES[0]);
    setBudget(BUDGETS[0]);
    setDescription('');
    setSent(false);
  }

  return (
    <section id="brief" className="section-pad bg-ink-900">
      <div className="section-inner max-w-3xl">
        <Reveal>
          <span className="text-gold text-[11px] font-extrabold tracking-[3px] uppercase mb-4 block text-center">
            Get Started
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-extrabold text-white text-[clamp(30px,4.2vw,46px)] tracking-tightest leading-[1.1] mb-5 text-center">
            Tell us about your project
          </h2>
        </Reveal>
        <Reveal delay={0.16} className="mb-12">
          <p className="text-white/45 text-base leading-relaxed max-w-lg mx-auto text-center">
            Fill this in once — no back-and-forth chatting needed. We'll open WhatsApp with
            everything filled in, so all you do is hit send.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 overflow-hidden">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-2xl mb-5">
                    💬
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">WhatsApp is opening…</h3>
                  <p className="text-white/50 text-[13.5px] leading-relaxed max-w-sm mb-6">
                    Your project details are already typed out — just tap <b className="text-white/70">Send</b> in
                    WhatsApp and we'll get back to you shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-gold text-[13px] font-semibold hover:text-gold-light transition-colors"
                  >
                    ← Fill in another project
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="grid sm:grid-cols-2 gap-5"
                >
                  <div className="sm:col-span-1">
                    <label className="block text-white/60 text-[12px] font-semibold mb-2">
                      Your name *
                    </label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Irene Wanjiru"
                      className={inputClasses}
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-white/60 text-[12px] font-semibold mb-2">
                      Phone / WhatsApp number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07XX XXX XXX"
                      className={inputClasses}
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-white/60 text-[12px] font-semibold mb-2">
                      Project type
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className={`${inputClasses} appearance-none`}
                    >
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-ink-800">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-white/60 text-[12px] font-semibold mb-2">
                      Budget range
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={`${inputClasses} appearance-none`}
                    >
                      {BUDGETS.map((b) => (
                        <option key={b} value={b} className="bg-ink-800">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-white/60 text-[12px] font-semibold mb-2">
                      Tell us about your business and what you need *
                    </label>
                    <textarea
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      placeholder="e.g. I run a furniture shop in Nairobi and need a website with a product catalogue and WhatsApp ordering…"
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gold text-ink font-bold text-[15px] px-8 py-4 rounded-xl transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold"
                    >
                      💬 Send via WhatsApp
                    </button>
                    <p className="text-white/30 text-[11.5px] text-center mt-3">
                      Opens WhatsApp with your details pre-filled — you just tap send.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
