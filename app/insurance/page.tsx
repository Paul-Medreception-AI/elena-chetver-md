import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insurance & Billing | Elena Chetver, MD',
  description: 'Learn how coverage verification, billing, and self-pay estimates work at Elena Chetver, MD, a primary care practice in West Hollywood, CA.',
  alternates: { canonical: '/insurance' },
  openGraph: {
    title: 'Insurance & Billing | Elena Chetver, MD',
    description: 'Learn how coverage verification, billing, and self-pay estimates work at Elena Chetver, MD, a primary care practice in West Hollywood, CA.',
    url: 'https://elenachetvermd.com/insurance',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Insurance & Billing | Elena Chetver, MD',
    description: 'Learn how coverage verification, billing, and self-pay estimates work at Elena Chetver, MD, a primary care practice in West Hollywood, CA.',
  },
}

const steps = [
  {
    title: 'Verify Coverage',
    text: 'Before your first visit, the office checks your specific benefits so you know what to expect. Your plan determines what is covered.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m6 2.25a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'Service Provided',
    text: 'You receive care from your physician. A co-pay is a fixed amount some plans ask you to pay at the time of a visit.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: 'Claim Submitted',
    text: 'If your plan applies, a claim goes to your insurer. They send you an Explanation of Benefits (EOB), which is a summary, not a bill.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: 'You Pay Remainder',
    text: 'Any portion left after insurance, such as part of your deductible (what you pay before coverage begins), is your responsibility.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: 'How do I find out if my plan covers care here?',
    a: 'Call the office. Coverage varies a great deal between plans, and the practice can verify your specific benefits before your first visit.',
  },
  {
    q: 'What is the difference between a co-pay and a deductible?',
    a: 'A co-pay is a set amount you pay for a visit. A deductible is the amount you pay toward covered care before your plan begins sharing costs. Your plan documents list both.',
  },
  {
    q: 'What is an Explanation of Benefits (EOB)?',
    a: 'An EOB is a statement from your insurer showing what was billed, what the plan paid, and what you may owe. It is not a bill, but it is worth comparing with any statement you receive.',
  },
  {
    q: 'Can I be a self-pay patient?',
    a: 'Self-pay patients are welcome and receive an estimate up front, before care is provided.',
  },
  {
    q: 'What if I have a question about a charge?',
    a: 'Contact the office and we will walk through it with you in plain language. Having your EOB or statement on hand helps.',
  },
]

export default function InsurancePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light">Insurance &amp; Billing</h1>
          <p className="mt-4 text-lg text-white/90">Transparent pricing and billing information</p>
        </div>
      </section>

      {/* The real accepted-carrier list must be supplied by the practice before any carrier is named on this page. */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Accepted Insurance Plans</h2>
          <div className="animate-fade-up max-w-3xl mx-auto bg-white border border-[var(--color-border)] rounded-2xl p-10 text-center">
            <div className="flex justify-center text-[var(--color-accent)] mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M12 3 4.5 6v5.25c0 4.5 3.2 8.4 7.5 9.75 4.3-1.35 7.5-5.25 7.5-9.75V6L12 3Z" />
              </svg>
            </div>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Coverage for this kind of care varies a great deal between plans, so we do not publish a one-size-fits-all list. The practice verifies your specific benefits before your first visit, so you know what to expect.
            </p>
            <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
              Please call the office to ask about your plan. Self-pay patients are welcome and receive an estimate up front.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">How Billing Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="animate-fade-up bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-8 transition hover:shadow-lg">
                <div className="text-[var(--color-accent)] mb-4">{s.icon}</div>
                <p className="text-sm text-[var(--color-muted)]">Step {i + 1}</p>
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mt-1">{s.title}</h3>
                <p className="mt-3 text-[var(--color-ink)] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto mx-6 my-20">
        <h3 className="font-cormorant text-3xl text-[var(--color-primary)]">Self-Pay Options</h3>
        <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
          If you are paying without insurance, you will receive a good faith estimate before care begins, so you understand the expected cost ahead of time.
        </p>
        <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
          Under the federal No Surprises Act, patients who are uninsured or choose not to use insurance have the right to a good faith estimate of expected charges. Call the office to request yours.
        </p>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Billing Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up group bg-white border border-[var(--color-border)] rounded-xl p-6">
                <summary className="cursor-pointer font-medium text-[var(--color-ink)] transition hover:text-[var(--color-primary)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-ink)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Questions About Coverage or Costs?</h2>
          <p className="mt-4 text-white/90">Reach out and we will help you understand your options before your first visit.</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white ring-1 ring-white/60 transition hover:bg-[var(--color-accent-dark)]"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  )
}