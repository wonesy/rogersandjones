import { Link } from '@tanstack/react-router'
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'
import { useLocale } from '@/i18n'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="bg-saddle-900 text-cream-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Rogers & Jones"
                className="h-16 brightness-200 mb-4"
              />
            </Link>
            <p className="text-cream-200 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-cream-50 font-semibold mb-4 uppercase text-sm tracking-wider">
              {t.footer.servicesHeading}
            </h4>
            <ul className="space-y-2 text-sm text-cream-200">
              {t.footer.serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="hover:text-rust-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream-50 font-semibold mb-4 uppercase text-sm tracking-wider">
              {t.footer.companyHeading}
            </h4>
            <ul className="space-y-2 text-sm text-cream-200">
              {t.footer.companyLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="hover:text-rust-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream-50 font-semibold mb-4 uppercase text-sm tracking-wider">
              {t.footer.contactHeading}
            </h4>
            <ul className="space-y-3 text-sm text-cream-200">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-rust-400" />
                <span>+358 44 2481210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-rust-400" />
                <span>info@rogersandjones.fi</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-rust-400 mt-0.5" />
                <span>Helsinki, Espoo &amp; Vantaa</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-cream-200 hover:text-rust-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-cream-200 hover:text-rust-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-saddle-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-300 text-xs">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-xs text-cream-300">
            <a href="#" className="hover:text-rust-400 transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="hover:text-rust-400 transition-colors">
              {t.footer.termsOfService}
            </a>
            <a href="#" className="hover:text-rust-400 transition-colors">
              {t.footer.accessibility}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
