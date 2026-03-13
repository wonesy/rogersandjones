import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Droplets,
  Hammer,
  Wrench,
  Zap,
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  ArrowRight,
  Quote,
  Shield,
  Users,
  ThumbsUp,
} from 'lucide-react'
import { useLocale } from '@/i18n'

export const Route = createFileRoute('/')({ component: HomePage })

const serviceIcons = [
  <Hammer className="w-10 h-10" />,
  <Wrench className="w-10 h-10" />,
  <Droplets className="w-10 h-10" />,
  <Zap className="w-10 h-10" />,
]

const locations = ['Helsinki', 'Espoo', 'Vantaa']

function HomePage() {
  const { t } = useLocale()
  const [reviewIndex, setReviewIndex] = useState(0)

  const prevReview = () =>
    setReviewIndex((i) => (i === 0 ? t.reviews.items.length - 1 : i - 1))
  const nextReview = () =>
    setReviewIndex((i) => (i === t.reviews.items.length - 1 ? 0 : i + 1))

  const review = t.reviews.items[reviewIndex]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-saddle-900 leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-saddle-700 leading-relaxed mb-8 max-w-lg">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-rust-500 hover:bg-rust-600 text-white px-8 py-3.5 rounded-md text-sm font-semibold transition-colors tracking-wide"
              >
                {t.hero.requestQuote}
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-saddle-800 text-saddle-800 hover:bg-saddle-800 hover:text-cream-50 px-8 py-3.5 rounded-md text-sm font-semibold transition-colors tracking-wide"
              >
                {t.hero.ourServices}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full hidden lg:block">
          <div className="w-full h-full bg-gradient-to-l from-saddle-200/30 to-transparent rounded-l-full" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-saddle-900 text-cream-50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <Shield className="w-8 h-8 text-rust-400" />
            <span className="text-3xl font-bold font-[var(--font-display)]">
              {t.stats.yearsValue}
            </span>
            <span className="text-cream-200 text-sm uppercase tracking-wider">
              {t.stats.yearsLabel}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Users className="w-8 h-8 text-rust-400" />
            <span className="text-3xl font-bold font-[var(--font-display)]">
              {t.stats.projectsValue}
            </span>
            <span className="text-cream-200 text-sm uppercase tracking-wider">
              {t.stats.projectsLabel}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ThumbsUp className="w-8 h-8 text-rust-400" />
            <span className="text-3xl font-bold font-[var(--font-display)]">
              {t.stats.ratingValue}
            </span>
            <span className="text-cream-200 text-sm uppercase tracking-wider">
              {t.stats.ratingLabel}
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-saddle-900 mb-4">
              {t.services.title}
            </h2>
            <div className="section-divider" />
            <p className="text-saddle-600 text-lg max-w-xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.items.map((service, i) => (
              <div
                key={i}
                className="bg-white border border-cream-200 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-saddle-200/50 hover:-translate-y-1 group"
              >
                <div className="text-rust-500 mb-5 group-hover:text-rust-600 transition-colors">
                  {serviceIcons[i]}
                </div>
                <h3 className="text-xl font-semibold text-saddle-900 mb-3 font-[var(--font-display)]">
                  {service.title}
                </h3>
                <p className="text-saddle-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Story Section */}
      <section id="about" className="bg-saddle-900 text-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl mb-6">{t.about.title}</h2>
              <div className="w-16 h-0.5 bg-rust-500 mb-8" />
              <p className="text-cream-200 text-lg leading-relaxed mb-6">
                {t.about.paragraph1}
              </p>
              <p className="text-cream-200 text-lg leading-relaxed mb-8">
                {t.about.paragraph2}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-rust-400 hover:text-rust-300 font-semibold transition-colors"
              >
                {t.about.ctaText}
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative">
              <div className="bg-saddle-800 rounded-xl p-10 border border-saddle-700">
                <Quote className="w-10 h-10 text-rust-500 mb-6" />
                <p className="text-cream-100 text-xl leading-relaxed italic font-[var(--font-display)]">
                  &ldquo;{t.about.quoteText}&rdquo;
                </p>
                <p className="text-rust-400 mt-6 font-semibold">
                  {t.about.quoteAttribution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-saddle-900 mb-4">
              {t.locations.title}
            </h2>
            <div className="section-divider" />
            <p className="text-saddle-600 text-lg max-w-xl mx-auto">
              {t.locations.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((city) => (
              <div
                key={city}
                className="bg-white border border-cream-200 rounded-xl p-8 text-center hover:shadow-lg hover:shadow-saddle-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-rust-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <MapPin className="w-6 h-6 text-rust-500" />
                </div>
                <h3 className="text-2xl font-semibold text-saddle-900 font-[var(--font-display)]">
                  {city}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-olive text-cream-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl mb-4">{t.reviews.title}</h2>
            <p className="text-cream-200 text-lg">{t.reviews.subtitle}</p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 text-center min-h-[260px] flex flex-col justify-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-rust-400 text-rust-400"
                  />
                ))}
              </div>
              <p className="text-lg md:text-xl leading-relaxed mb-6 italic font-[var(--font-display)]">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-rust-300 font-semibold">{review.name}</p>
              <p className="text-cream-200 text-sm">{review.city}</p>
            </div>

            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={prevReview}
                className="p-2 rounded-full border border-cream-200/30 hover:bg-white/10 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-cream-200 text-sm tabular-nums">
                {reviewIndex + 1} / {t.reviews.items.length}
              </span>
              <button
                onClick={nextReview}
                className="p-2 rounded-full border border-cream-200/30 hover:bg-white/10 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl text-saddle-900 mb-4">
            {t.contact.title}
          </h2>
          <div className="section-divider" />
          <p className="text-saddle-600 text-lg mb-10 max-w-lg mx-auto">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+358442481210"
              className="inline-flex items-center justify-center gap-2 bg-rust-500 hover:bg-rust-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              +358 44 2481210
            </a>
            <a
              href="mailto:info@rogersandjones.fi"
              className="inline-flex items-center justify-center gap-2 border-2 border-saddle-800 text-saddle-800 hover:bg-saddle-800 hover:text-cream-50 px-8 py-4 rounded-md text-lg font-semibold transition-colors"
            >
              {t.contact.emailUs}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
