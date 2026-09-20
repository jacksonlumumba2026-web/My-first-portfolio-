import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { waLink } from '../lib/whatsapp';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) {
          current = s.id;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
          scrolled ? 'bg-ink-900/85 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="section-inner flex items-center justify-between h-[72px] px-5 sm:px-8 lg:px-[5%] lg:max-w-none">
          <a href="#top" className="font-display text-[17px] font-bold tracking-tight text-white">
            Jackson <span className="text-gradient-gold">Web</span> Solutions
          </a>

          <ul className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors ${
                    active === l.href.slice(1) ? 'text-white' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={waLink("Hi Jackson, I'd like to discuss a website project")}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-gold text-ink font-bold text-[13px] px-5 py-[10px] rounded-full transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold"
          >
            Start Your Project
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white rounded-full origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white rounded-full origin-center"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] inset-x-0 z-[99] bg-ink-900/98 backdrop-blur-xl border-b border-white/[0.06] md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-semibold text-white/75 hover:text-white py-4 border-b border-white/[0.05]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={waLink("Hi Jackson, I'd like to discuss a website project")}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="text-[15px] font-extrabold text-gold py-4"
              >
                💬 WhatsApp Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
