import { waLink } from '../lib/whatsapp';
import { trackWhatsAppClick } from '../lib/analytics';
import logo from '../assets/logo.webp';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.05] px-5 sm:px-8 lg:px-[5%] py-14">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-white/[0.05]">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Jackson Web Solutions" className="w-11 h-11 rounded-xl object-cover" />
              <div className="font-display text-lg font-bold text-white">
                Jackson <span className="text-gradient-gold">Web</span> Solutions
              </div>
            </div>
            <p className="text-white/40 text-[12.5px] leading-relaxed">
              Premium websites for Kenyan businesses — designed to be found on Google, trusted by
              customers, and built to convert.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <div className="text-white/70 text-[12px] font-bold uppercase tracking-wider mb-4">
                Navigate
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  ['Services', '#services'],
                  ['Work', '#work'],
                  ['Process', '#process'],
                  ['Pricing', '#pricing'],
                  ['FAQ', '#faq'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="text-white/40 text-[13px] hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-white/70 text-[12px] font-bold uppercase tracking-wider mb-4">
                Get in Touch
              </div>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href={waLink("Hi Jackson, I'd like to discuss a project")}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackWhatsAppClick('footer')}
                    className="text-white/40 text-[13px] hover:text-gold transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </li>
                <li className="text-white/40 text-[13px]">Nairobi, Kenya 🇰🇪</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <div className="text-white/25 text-[12px]">
            © {new Date().getFullYear()} Jackson Web Solutions · Nairobi, Kenya 🇰🇪
          </div>
          <div className="text-white/25 text-[12px]">Designed &amp; built by Jackson</div>
        </div>
      </div>
    </footer>
  );
}
