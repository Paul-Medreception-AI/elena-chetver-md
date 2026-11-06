import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Dr. Elena Chetver | Primary Care',
  description: 'Learn about Dr. Elena Chetver and a direct primary care practice in West Hollywood, CA built on listening, clear answers, and lasting relationships.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Dr. Elena Chetver | Primary Care',
    description: 'Learn about Dr. Elena Chetver and a direct primary care practice in West Hollywood, CA built on listening, clear answers, and lasting relationships.',
    url: 'https://elenachetvermd.com/about',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Dr. Elena Chetver | Primary Care',
    description: 'Learn about Dr. Elena Chetver and a direct primary care practice in West Hollywood, CA built on listening, clear answers, and lasting relationships.',
  },
}

const values = [
  {
    title: 'Time to Listen',
    description:
      'Visits are unhurried so your concerns are fully heard. Good questions deserve thoughtful answers, and nothing is rushed.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: 'Evidence With Respect',
    description:
      'Recommendations are grounded in sound medical evidence. They are always shaped by your values, preferences, and circumstances.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Lasting Continuity',
    description:
      'You see the same physician who knows your whole health story. That continuity helps care stay connected as your life changes.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="font-cormorant text-6xl font-light">Medicine Rooted in Relationship and Trust</h1>
          <p className="text-xl text-white/80 mt-4 max-w-2xl">
            A direct primary care practice in West Hollywood, CA focused on thoughtful visits and clear answers.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 lg:pr-12 space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>Dr. Elena Chetver founded her practice on the belief that good medicine begins with listening. The direct primary care model allows for visits that are not rushed, so questions get answered and concerns are fully explored.</p>
            <p>Her approach combines evidence-based medicine with respect for each patient&apos;s values, preferences, and circumstances. Care plans are built together, explained clearly, and adjusted as your life and health change.</p>
            <p>By keeping the practice focused on individual relationships, Dr. Chetver can offer continuity that is hard to find elsewhere. Patients know who is caring for them, and she knows them in return.</p>
          </div>

          <aside className="lg:col-span-2">
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <h2 className="font-cormorant text-3xl text-[var(--color-primary)] mb-6">Visit Us</h2>
              <dl className="space-y-4 text-[var(--color-ink)]">
                <div>
                  <dt className="text-sm text-[var(--color-muted)]">Phone</dt>
                  <dd>[Phone to be added]</dd>
                </div>
                <div>
                  <dt className="text-sm text-[var(--color-muted)]">Address</dt>
                  <dd>[Address to be added]</dd>
                </div>
                <div>
                  <dt className="text-sm text-[var(--color-muted)]">Hours</dt>
                  <dd>[Hours to be added]</dd>
                </div>
              </dl>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 text-white font-medium hover:bg-[var(--color-accent-dark)] transition-colors"
              >
                Contact the Office
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-shadow"
              >
                <div className="text-[var(--color-accent)] mb-4">{v.icon}</div>
                <h3 className="font-cormorant text-xl font-bold text-[var(--color-dark)] mb-3">{v.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-8">Ready to Get Started?</h2>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-10 py-3 font-medium text-[var(--color-dark)] hover:bg-[var(--color-light)] transition-colors"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  )
}