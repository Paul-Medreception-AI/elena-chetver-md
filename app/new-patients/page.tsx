import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Patient Information | Elena Chetver, MD',
  description: 'What to expect at your first primary care visit in West Hollywood, CA with Elena Chetver, MD: the steps, what to bring, and the forms to expect.',
  alternates: { canonical: '/new-patients' },
  openGraph: {
    title: 'New Patient Information | Elena Chetver, MD',
    description: 'What to expect at your first primary care visit in West Hollywood, CA with Elena Chetver, MD: the steps, what to bring, and the forms to expect.',
    url: 'https://elenachetvermd.com/new-patients',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'New Patient Information | Elena Chetver, MD',
    description: 'What to expect at your first primary care visit in West Hollywood, CA with Elena Chetver, MD: the steps, what to bring, and the forms to expect.',
  },
}

const steps = [
  { number: '01', title: 'Schedule', description: 'Book online or call the office to set up your first visit. You can also ask any questions about how the practice works before you commit.' },
  { number: '02', title: 'Complete Paperwork', description: 'Intake forms can be completed before your visit or at the first appointment, whichever is easier for you.' },
  { number: '03', title: 'First Visit', description: 'A thorough conversation about your history and concerns, an examination, and time for your questions.' },
  { number: '04', title: 'Care Plan', description: 'Together you agree on a plan that fits your health, your goals, and your life.' },
]

const bring = [
  { label: 'Photo ID and Insurance Card', text: 'A government-issued photo ID, and your insurance card if you have one, so we can confirm your information.' },
  { label: 'Medication List', text: 'Prescriptions, over-the-counter medicines, and supplements, including doses, so we can review them carefully.' },
  { label: 'Prior Records', text: 'Recent lab results, imaging, and notes from other clinicians help us understand your health history.' },
  { label: 'Emergency Contact', text: 'The name and phone number of someone we can reach if needed.' },
]

const forms = [
  { label: 'Intake form', text: 'Your medical history, current concerns, and health goals.' },
  { label: 'Consent form', text: 'Your agreement to receive care and to the practice’s way of working.' },
  { label: 'HIPAA authorization', text: 'Your choices about how your health information is shared and protected.' },
]

function Check() {
  return (
    <svg className="w-8 h-8 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

export default function NewPatientsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light">New Patients</h1>
          <p className="mt-6 text-lg text-white/90">Everything you need to know before your first visit</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Your First Visit</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.number} className="animate-fade-up bg-white border border-[var(--color-border)] rounded-2xl p-8 transition hover:shadow-lg">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">{s.number}</div>
                <h3 className="font-cormorant text-2xl mt-4 text-[var(--color-dark)]">{s.title}</h3>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-primary)]">What to Bring</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {bring.map((b) => (
              <div key={b.label} className="animate-fade-up flex gap-4">
                <Check />
                <div>
                  <p className="font-bold text-[var(--color-ink)]">{b.label}</p>
                  <p className="mt-1 text-[var(--color-muted)] leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20">
          <h2 className="font-cormorant text-3xl text-[var(--color-primary)]">Patient Forms</h2>
          <p className="mt-4 text-[var(--color-ink)]">Forms available at our office or can be completed at your first appointment.</p>
          <ul className="mt-8 space-y-5">
            {forms.map((f) => (
              <li key={f.label} className="flex gap-4">
                <Check />
                <div>
                  <p className="font-bold text-[var(--color-ink)]">{f.label}</p>
                  <p className="text-[var(--color-muted)]">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-cormorant text-3xl text-[var(--color-primary)]">Scheduling Questions</h2>
          <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
            To reschedule an appointment or ask about the office’s policies, call the office and we will be glad to help.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Ready to Get Started?</h2>
          <p className="mt-4 text-white/90">Reach out and we will explain how the practice works and what to expect.</p>
          <Link href="/contact" className="inline-block mt-8 rounded-full bg-white px-8 py-3 font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-light)] hover:text-[var(--color-accent-dark)]">
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  )
}