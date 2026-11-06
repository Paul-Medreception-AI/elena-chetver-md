import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care in West Hollywood, CA | Elena Chetver, MD',
  description: 'Direct primary care in West Hollywood, CA with Dr. Elena Chetver. Unhurried visits, clear answers, and a physician who knows your whole health story.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Primary Care in West Hollywood, CA | Elena Chetver, MD',
    description: 'Direct primary care in West Hollywood, CA with Dr. Elena Chetver. Unhurried visits, clear answers, and a physician who knows your whole health story.',
    url: 'https://elenachetvermd.com/',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Primary Care in West Hollywood, CA | Elena Chetver, MD',
    description: 'Direct primary care in West Hollywood, CA with Dr. Elena Chetver. Unhurried visits, clear answers, and a physician who knows your whole health story.',
  },
}

const trust = [
  'Personalized Care Plans',
  'Evidence-Based Care',
  'Clear Answers to Your Questions',
  'Direct Access to Your Physician',
]

const steps = [
  { number: '01', title: 'Reach Out', description: 'Contact the office with your questions or request an introductory conversation. We will explain how the practice works and what to expect.' },
  { number: '02', title: 'Meet Your Physician', description: 'Your first visit is a thorough conversation about your history, concerns, and goals. There is time to ask anything you like.' },
  { number: '03', title: 'Ongoing Partnership', description: 'Receive continuing care guided by a plan made for you. Follow-up and communication stay simple and direct.' },
]

export default function HomePage() {
  return (
    <main className="font-sans">
      {/* optimize-skill target: pure-gradient hero (no real photo was found on the prior site) */}
      <section className="min-h-[90vh] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center text-white">
        <div className="max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="font-cormorant text-6xl sm:text-7xl font-light tracking-tight leading-tight">
            Primary Care With Time to Listen and Time to Care
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            Dr. Elena Chetver offers a direct primary care model that puts the patient relationship first. Expect thoughtful visits, clear answers, and a physician who knows your whole health story.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              Schedule a Visit
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-4">How We Can Help</h2>
          <p className="text-center text-[var(--color-muted)] mb-16">Primary care in West Hollywood, CA, centered on your health and your questions.</p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10 stroke-[var(--color-primary)]" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3v6a4 4 0 008 0V3" />
                <path d="M10 13v2a5 5 0 0010 0v-1" />
                <circle cx="20" cy="12" r="2" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">Comprehensive Primary Care</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">Whole-person care for adults, from preventive visits to ongoing health concerns. Your physician coordinates every part of your health with a full understanding of your history.</p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">Learn More →</Link>
            </div>
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10 stroke-[var(--color-primary)]" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
                <path d="M8.5 12l2.5 2.5 4.5-5" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">Preventive Care and Wellness</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">Routine screenings, risk assessment, and lifestyle guidance tailored to your goals. We focus on catching issues early and keeping you well.</p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">Learn More →</Link>
            </div>
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10 stroke-[var(--color-primary)]" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20s-8-4.7-8-10.5A4.5 4.5 0 0112 7a4.5 4.5 0 018 2.5C20 15.3 12 20 12 20z" />
                <path d="M3 12h4l2-3 3 6 2-3h2" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">Chronic Disease Management</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">Ongoing support for conditions such as hypertension, diabetes, and thyroid disorders. Regular follow-up helps keep your care plan current and effective.</p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Medicine Rooted in Relationship and Trust</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mt-6">Dr. Elena Chetver founded her practice on the belief that good medicine begins with listening. The direct primary care model allows for visits that are not rushed, so questions get answered and concerns are fully explored.</p>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">Her approach combines evidence-based medicine with respect for each patient&apos;s values, preferences, and circumstances. Care plans are built together, explained clearly, and adjusted as your life and health change.</p>
            <Link href="/team" className="inline-block text-[var(--color-primary)] font-semibold mt-8 hover:underline">Meet Our Team →</Link>
          </div>
          <div className="lg:col-span-2 animate-fade-up bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
            <svg className="w-20 h-20 stroke-[var(--color-primary)] opacity-40" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16">Getting Started Is Simple</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.number} className="animate-fade-up">
                <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60">{s.number}</div>
                <h3 className="font-cormorant text-2xl mt-2">{s.title}</h3>
                <p className="text-sm text-white/70 mt-3 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6">Unhurried Primary Care Built Around You</h2>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  )
}