import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Locations', href: '#locations' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Rogers & Jones" className="h-14" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-saddle-800 hover:text-rust-500 transition-colors text-sm tracking-wide uppercase font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-rust-500 hover:bg-rust-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors tracking-wide"
          >
            Get a Quote
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
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-saddle-800 hover:text-rust-500 transition-colors text-sm tracking-wide uppercase font-medium border-b border-cream-200 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 bg-rust-500 hover:bg-rust-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors tracking-wide text-center"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}
