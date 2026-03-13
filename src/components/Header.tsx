import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocale } from '@/i18n'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, locale, setLocale } = useLocale()

  const navLinks = [
    { label: t.header.services, href: '#services' },
    { label: t.header.about, href: '#about' },
    { label: t.header.locations, href: '#locations' },
    { label: t.header.reviews, href: '#reviews' },
    { label: t.header.contact, href: '#contact' },
  ]

  const toggleLocale = () => setLocale(locale === 'fi' ? 'en' : 'fi')

  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Rogers & Jones" className="h-14" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-saddle-800 hover:text-rust-500 transition-colors text-sm tracking-wide uppercase font-medium"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleLocale}
            className="flex items-center text-xs font-semibold tracking-wider border border-cream-300 rounded-full overflow-hidden"
          >
            <span
              className={`px-2.5 py-1.5 transition-colors ${locale === 'en' ? 'bg-saddle-800 text-cream-50' : 'text-saddle-600 hover:bg-cream-200'}`}
            >
              EN
            </span>
            <span
              className={`px-2.5 py-1.5 transition-colors ${locale === 'fi' ? 'bg-saddle-800 text-cream-50' : 'text-saddle-600 hover:bg-cream-200'}`}
            >
              FI
            </span>
          </button>

          <a
            href="#contact"
            className="bg-rust-500 hover:bg-rust-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors tracking-wide"
          >
            {t.header.getQuote}
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-saddle-800 hover:text-rust-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-saddle-800 hover:text-rust-500 transition-colors text-sm tracking-wide uppercase font-medium border-b border-cream-200 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between mt-4 gap-4">
            <button
              onClick={toggleLocale}
              className="flex items-center text-xs font-semibold tracking-wider border border-cream-300 rounded-full overflow-hidden"
            >
              <span
                className={`px-2.5 py-1.5 transition-colors ${locale === 'fi' ? 'bg-saddle-800 text-cream-50' : 'text-saddle-600'}`}
              >
                FI
              </span>
              <span
                className={`px-2.5 py-1.5 transition-colors ${locale === 'en' ? 'bg-saddle-800 text-cream-50' : 'text-saddle-600'}`}
              >
                EN
              </span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-rust-500 hover:bg-rust-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors tracking-wide text-center"
            >
              {t.header.getQuote}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
