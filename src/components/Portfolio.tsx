import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import Reveal from './Reveal';
import { projects } from '../data/projects';
import { waLink } from '../lib/whatsapp';

export default function Portfolio() {
  return (
    <section id="work" className="section-pad bg-cream">
      <div className="section-inner">
        <Reveal>
          <span className="text-gold-dim text-[11px] font-extrabold tracking-[3px] uppercase mb-4 block">
            Real Work
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-extrabold text-ink text-[clamp(30px,4.2vw,46px)] tracking-tightest leading-[1.1] mb-5 max-w-xl">
            Live client websites
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-ink/55 text-base leading-relaxed max-w-lg mb-14">
            Every site below is live, real, and built end-to-end by Jackson Web Solutions for a
            Kenyan business.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {projects.map((p) => (
            <motion.div
              key={p.domain}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden border border-ink/[0.06] shadow-sm hover:shadow-premium transition-shadow duration-300"
            >
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} flex flex-col items-center justify-center gap-3 overflow-hidden`}>
                <div className="absolute inset-0 bg-noise opacity-40" />
                <span className="absolute top-3.5 left-3.5 bg-gold text-ink text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wide">
                  {p.tag}
                </span>
                <div className="text-4xl relative">{p.icon}</div>
                <div className="text-white/50 text-[11px] font-medium relative">{p.domain}</div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-ink text-[17px] tracking-tight mb-2">
                  {p.name}
                </h3>
                <p className="text-ink/55 text-[12.5px] leading-relaxed mb-5">{p.description}</p>
                <div className="flex gap-2.5">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-[9px] rounded-lg text-[12px] font-bold bg-ink text-white hover:bg-ink-700 transition-colors"
                  >
                    ↗ View Live
                  </a>
                  <a
                    href={waLink(`I want a site like ${p.waLabel}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-[9px] rounded-lg text-[12px] font-bold bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors"
                  >
                    💬 Get This
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
