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
  Clock,
  ArrowRight,
  Quote,
  Shield,
  Users,
  ThumbsUp,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

const services = [
  {
    icon: <Hammer className="w-10 h-10" />,
    title: 'Construction & Building',
    description:
      'New builds, extensions, and renovations — from foundation to finish. We build to Finnish standards and beyond.',
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    title: 'Repairs & Renovation',
    description:
      'Kitchens, bathrooms, facades, and structural repairs. We restore what time and weather have worn down.',
  },
  {
    icon: <Droplets className="w-10 h-10" />,
    title: 'Plumbing Services',
    description:
      'Pipe installation, underfloor heating, fixture fitting, and full replumbing for residential and commercial properties.',
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Emergency Call-Outs',
    description:
      'Burst pipes, storm damage, or urgent structural issues — we respond fast across the Helsinki region, day or night.',
  },
]

const locations = [
  {
    city: 'Helsinki',
    address: 'Aleksanterinkatu 28',
    phone: '+358 9 555 0147',
    hours: 'Ma–Pe 7:00–17:00',
  },
  {
    city: 'Espoo',
    address: 'Leppävaarankatu 12',
    phone: '+358 9 555 0293',
    hours: 'Ma–Pe 7:00–17:00',
  },
  {
    city: 'Vantaa',
    address: 'Tikkurilantie 44',
    phone: '+358 9 555 0384',
    hours: 'Ma–Pe 7:00–17:00',
  },
]

const reviews = [
  {
    text: 'Rogers & Jones renovated our 1950s apartment in Kallio — new plumbing, bathroom, kitchen, everything. The quality is outstanding and they finished on schedule. Highly recommended.',
    name: 'Antti S.',
    city: 'Helsinki',
    rating: 5,
  },
  {
    text: 'We hired them to build a sauna extension on our house in Espoo. Professional from start to finish, and they handled all the permits. The result is perfect.',
    name: 'Maria & Jukka L.',
    city: 'Espoo',
    rating: 5,
  },
  {
    text: 'A frozen pipe burst in our basement during January. They arrived within two hours, fixed it, and repaired the water damage the following week. Lifesavers.',
    name: 'Kari V.',
    city: 'Vantaa',
    rating: 5,
  },
  {
    text: 'Completely replumbed our rowhouse and installed underfloor heating. The team was clean, communicative, and the work has been flawless for two years now.',
    name: 'Elina T.',
    city: 'Helsinki',
    rating: 5,
  },
  {
    text: 'They built our summer cottage from the ground up — timber frame, plumbing, everything. Genuine craftsmen who take pride in their work.',
    name: 'Pekka R.',
    city: 'Porvoo',
    rating: 5,
  },
]

function HomePage() {
  const [reviewIndex, setReviewIndex] = useState(0)

  const prevReview = () =>
    setReviewIndex((i) => (i === 0 ? reviews.length - 1 : i - 1))
  const nextReview = () =>
    setReviewIndex((i) => (i === reviews.length - 1 ? 0 : i + 1))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-saddle-900 leading-tight mb-6">
              We build, repair, and plumb — the right way.
            </h1>
            <p className="text-lg md:text-xl text-saddle-700 leading-relaxed mb-8 max-w-lg">
              Rogers &amp; Jones is a full-service contractor based in Helsinki.
              Construction, renovation, and plumbing across the capital region
              — built on Nordic craftsmanship and honest work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-rust-500 hover:bg-rust-600 text-white px-8 py-3.5 rounded-md text-sm font-semibold transition-colors tracking-wide"
              >
                Request a Quote
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-saddle-800 text-saddle-800 hover:bg-saddle-800 hover:text-cream-50 px-8 py-3.5 rounded-md text-sm font-semibold transition-colors tracking-wide"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Decorative element */}
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
              20+
            </span>
            <span className="text-cream-200 text-sm uppercase tracking-wider">
              Years in Finland
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Users className="w-8 h-8 text-rust-400" />
            <span className="text-3xl font-bold font-[var(--font-display)]">
              5,000+
            </span>
            <span className="text-cream-200 text-sm uppercase tracking-wider">
              Projects Completed
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ThumbsUp className="w-8 h-8 text-rust-400" />
            <span className="text-3xl font-bold font-[var(--font-display)]">
              4.9
            </span>
            <span className="text-cream-200 text-sm uppercase tracking-wider">
              Average Rating
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-saddle-900 mb-4">
              Everything your property needs.
            </h2>
            <div className="section-divider" />
            <p className="text-saddle-600 text-lg max-w-xl mx-auto">
              From ground-up construction to a leaking tap — every job gets the
              same care and Finnish precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-cream-200 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-saddle-200/50 hover:-translate-y-1 group"
              >
                <div className="text-rust-500 mb-5 group-hover:text-rust-600 transition-colors">
                  {service.icon}
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
              <h2 className="text-3xl md:text-5xl mb-6">
                Nordic craftsmanship, no shortcuts.
              </h2>
              <div className="w-16 h-0.5 bg-rust-500 mb-8" />
              <p className="text-cream-200 text-lg leading-relaxed mb-6">
                Rogers &amp; Jones was founded in Helsinki by two contractors who
                shared a simple belief: build it right, or don&apos;t build it
                at all. Over twenty years later, that principle drives every
                project we take on.
              </p>
              <p className="text-cream-200 text-lg leading-relaxed mb-8">
                We know Finnish building codes inside and out. We work through
                the harshest winters and deliver results that last for decades.
                Our crews are local, licensed, and proud of the work they do
                across the Helsinki region.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-rust-400 hover:text-rust-300 font-semibold transition-colors"
              >
                Talk to us about your project
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative">
              <div className="bg-saddle-800 rounded-xl p-10 border border-saddle-700">
                <Quote className="w-10 h-10 text-rust-500 mb-6" />
                <p className="text-cream-100 text-xl leading-relaxed italic font-[var(--font-display)]">
                  &ldquo;In Finland, a building has to survive everything —
                  minus thirty winters, spring floods, endless summer light. We
                  build for all of it.&rdquo;
                </p>
                <p className="text-rust-400 mt-6 font-semibold">
                  — Mike Rogers, Co-Founder
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
              Across the Helsinki region.
            </h2>
            <div className="section-divider" />
            <p className="text-saddle-600 text-lg max-w-xl mx-auto">
              Based in Helsinki, serving Espoo, Vantaa, and the wider
              Uusimaa region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="bg-white border border-cream-200 rounded-xl p-8 text-center hover:shadow-lg hover:shadow-saddle-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-rust-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <MapPin className="w-6 h-6 text-rust-500" />
                </div>
                <h3 className="text-2xl font-semibold text-saddle-900 mb-4 font-[var(--font-display)]">
                  {loc.city}
                </h3>
                <div className="space-y-2 text-saddle-600 text-sm">
                  <p>{loc.address}</p>
                  <p className="flex items-center justify-center gap-1.5">
                    <Phone size={13} />
                    {loc.phone}
                  </p>
                  <p className="flex items-center justify-center gap-1.5">
                    <Clock size={13} />
                    {loc.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-olive text-cream-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl mb-4">
              Trusted by our neighbours.
            </h2>
            <p className="text-cream-200 text-lg">
              Real reviews from real customers across the capital region.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 text-center min-h-[260px] flex flex-col justify-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: reviews[reviewIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-rust-400 text-rust-400"
                    />
                  ),
                )}
              </div>
              <p className="text-lg md:text-xl leading-relaxed mb-6 italic font-[var(--font-display)]">
                &ldquo;{reviews[reviewIndex].text}&rdquo;
              </p>
              <p className="text-rust-300 font-semibold">
                {reviews[reviewIndex].name}
              </p>
              <p className="text-cream-200 text-sm">
                {reviews[reviewIndex].city}
              </p>
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
                {reviewIndex + 1} / {reviews.length}
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
            Let&apos;s talk about your project.
          </h2>
          <div className="section-divider" />
          <p className="text-saddle-600 text-lg mb-10 max-w-lg mx-auto">
            Call us or send an email — we&apos;ll get back to you within the day
            with a free estimate. No obligations, no surprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+358955501470"
              className="inline-flex items-center justify-center gap-2 bg-rust-500 hover:bg-rust-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              +358 9 555 0147
            </a>
            <a
              href="mailto:info@rogersandjones.fi"
              className="inline-flex items-center justify-center gap-2 border-2 border-saddle-800 text-saddle-800 hover:bg-saddle-800 hover:text-cream-50 px-8 py-4 rounded-md text-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
