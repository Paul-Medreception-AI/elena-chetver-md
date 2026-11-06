import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meet Our Team | Elena Chetver, MD',
  description: 'Learn about the care team at Elena Chetver, MD, a primary care practice in West Hollywood, CA. Provider profiles are coming soon.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Meet Our Team | Elena Chetver, MD',
    description: 'Learn about the care team at Elena Chetver, MD, a primary care practice in West Hollywood, CA. Provider profiles are coming soon.',
    url: 'https://elenachetvermd.com/team',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Meet Our Team | Elena Chetver, MD',
    description: 'Learn about the care team at Elena Chetver, MD, a primary care practice in West Hollywood, CA. Provider profiles are coming soon.',
  },
}

export default function TeamPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light">Meet Our Team</h1>
          <p className="font-dm-sans mt-6 text-lg text-white/90 leading-relaxed">
            Our practice is built around unhurried, thoughtful primary care and a close relationship between patient and physician.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Our Providers &amp; Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* TODO(optimize): replace with real provider bios + headshots once supplied */}
            <div className="animate-fade-up bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative bg-[var(--color-light)] h-72 flex items-center justify-center">
                <svg className="stroke-[var(--color-primary)] w-20 h-20 opacity-40" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">Our Provider Team</h3>
                <p className="font-dm-sans text-sm text-[var(--color-muted)] leading-relaxed mt-3">
                  Full provider profiles are coming soon. Please call to learn more about our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light">Questions About Our Practice?</h2>
          <p className="font-dm-sans mt-4 text-white/80 leading-relaxed">
            Call the office to learn more about how the practice works and what to expect.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-dm-sans font-semibold transition-colors"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  )
}