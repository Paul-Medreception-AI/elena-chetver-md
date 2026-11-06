import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Visiting Our Office | Elena Chetver, MD',
  description: 'Learn what to expect from an in-person primary care visit with Elena Chetver, MD in West Hollywood, CA, and how to reach the office.',
  alternates: { canonical: '/telehealth' },
  openGraph: {
    title: 'Visiting Our Office | Elena Chetver, MD',
    description: 'Learn what to expect from an in-person primary care visit with Elena Chetver, MD in West Hollywood, CA, and how to reach the office.',
    url: 'https://elenachetvermd.com/telehealth',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Visiting Our Office | Elena Chetver, MD',
    description: 'Learn what to expect from an in-person primary care visit with Elena Chetver, MD in West Hollywood, CA, and how to reach the office.',
  },
}

const steps = [
  {
    number: '01',
    title: 'Call or Request an Appointment',
    description:
      'Call the office or send a message through the contact page. Ask your questions and learn how the practice works before you come in.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5l1.5 4-2 1.5a11 11 0 005.5 5.5L14 12l4 1.5V16a2 2 0 01-2 2h-1C8.8 18 3 12.2 3 6V5z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Visit the Office',
    description:
      'Your first visit is a conversation about your history, current concerns, and health goals. A physical exam may be part of the visit when it is appropriate.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M12 8v3M10.5 9.5h3" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Plan Your Care Together',
    description:
      'Together you review findings, discuss options in plain language, and agree on next steps such as screenings, lab work, or follow-up.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 21a9 9 0 100-18 9 9 0 000 18z" />
      </svg>
    ),
  },
]

export default function VisitingOfficePage() {
  return (
    <main>
      {/* The practice's website does not mention telehealth, so this page describes in-person visits. */}

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light">Visiting Our Office</h1>
          <p className="mt-6 text-lg text-white/90">
            Care starts with an in-person visit, and the office is a call or a message away.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center">
            Your First Visit
          </h2>
          <p className="mt-4 text-center text-[var(--color-muted)] max-w-2xl mx-auto">
            An in-person primary care visit is unhurried and centered on you. In general, it involves the following.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.number}
                className="animate-fade-up bg-white border border-[var(--color-border)] rounded-lg p-8 transition hover:shadow-lg"
              >
                <div className="text-[var(--color-accent)]">{s.icon}</div>
                <p className="mt-4 text-sm tracking-widest text-[var(--color-muted)]">{s.number}</p>
                <h3 className="mt-1 font-cormorant text-2xl font-semibold text-[var(--color-primary)]">{s.title}</h3>
                <p className="mt-3 text-[var(--color-ink)] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="animate-fade-up mt-12 max-w-3xl mx-auto bg-white border border-[var(--color-border)] rounded-lg p-8">
            <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)]">What to Bring</h3>
            <ul className="mt-4 space-y-2 text-[var(--color-ink)] list-disc pl-5">
              <li>A list of current medications and supplements</li>
              <li>Records from previous doctors or recent tests, if you have them</li>
              <li>Questions or concerns you would like to discuss</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center">Finding Us</h2>
          <div className="animate-fade-up mt-12 max-w-3xl mx-auto grid gap-6 sm:grid-cols-3">
            <div className="border border-[var(--color-border)] rounded-lg p-6 text-center">
              <div className="flex justify-center text-[var(--color-accent)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <h3 className="mt-3 font-semibold text-[var(--color-ink)]">Address</h3>
              <p className="mt-2 text-[var(--color-muted)]">[Office address], West Hollywood, CA</p>
            </div>
            <div className="border border-[var(--color-border)] rounded-lg p-6 text-center">
              <div className="flex justify-center text-[var(--color-accent)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5l1.5 4-2 1.5a11 11 0 005.5 5.5L14 12l4 1.5V16a2 2 0 01-2 2h-1C8.8 18 3 12.2 3 6V5z" />
                </svg>
              </div>
              <h3 className="mt-3 font-semibold text-[var(--color-ink)]">Phone</h3>
              <p className="mt-2 text-[var(--color-muted)]">[Phone number]. Call the office.</p>
            </div>
            <div className="border border-[var(--color-border)] rounded-lg p-6 text-center">
              <div className="flex justify-center text-[var(--color-accent)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                </svg>
              </div>
              <h3 className="mt-3 font-semibold text-[var(--color-ink)]">Hours</h3>
              <p className="mt-2 text-[var(--color-muted)]">[Office hours]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="animate-fade-up max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Ready to Get Started?</h2>
          <p className="mt-4 text-white/90">Reach out to the office and we will explain what to expect.</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-[var(--color-accent)] border border-white px-8 py-3 font-medium text-white transition hover:bg-[var(--color-accent-dark)]"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  )
}