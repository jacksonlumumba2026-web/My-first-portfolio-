import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logoMark from '../assets/logo-mark.webp';

const SESSION_KEY = 'jws-intro-seen';

export default function Loader() {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) !== '1';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!visible) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minDisplay = prefersReduced ? 0 : 1100;

    const start = Date.now();
    const finish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minDisplay - elapsed);
      window.setTimeout(() => {
        try {
          sessionStorage.setItem(SESSION_KEY, '1');
        } catch {
          /* ignore */
        }
        setVisible(false);
      }, wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
      // Safety net in case 'load' is delayed by slow third-party assets.
      const fallback = window.setTimeout(finish, 3000);
      return () => {
        window.removeEventListener('load', finish);
        window.clearTimeout(fallback);
      };
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center"
        >
          <motion.img
            src={logoMark}
            alt="Jackson Web Solutions"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-gold mb-7"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-40 h-[3px] rounded-full bg-white/10 overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-5 text-white/35 text-[11px] font-bold tracking-[3px] uppercase"
          >
            Jackson Web Solutions
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
