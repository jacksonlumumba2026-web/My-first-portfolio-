import { motion } from 'framer-motion';
import { waLink } from '../lib/whatsapp';
import { trackWhatsAppClick } from '../lib/analytics';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink("Hi Jackson, I'd like to discuss a project")}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackWhatsAppClick('float_button')}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-6 right-6 sm:bottom-7 sm:right-7 z-[90] flex items-center gap-2.5"
    >
      <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-ink-900/85 backdrop-blur-md text-white/80 text-xs font-semibold px-4 py-2.5 rounded-full border border-white/10 whitespace-nowrap">
        Chat with Jackson
      </span>
      <motion.span
        whileHover={{ scale: 1.08 }}
        className="w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center shrink-0"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.743a.5.5 0 0 0 .609.61l5.915-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.371l-.36-.214-3.713.928.944-3.641-.235-.374A9.818 9.818 0 1 1 12 21.818z" />
        </svg>
      </motion.span>
    </motion.a>
  );
}
