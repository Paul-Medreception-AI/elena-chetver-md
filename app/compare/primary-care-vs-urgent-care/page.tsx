import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care vs Urgent Care: Where Should You Go?',
  description: 'Compare primary care and urgent care by cost, time, continuity and best use, so you can choose the right place for your next health concern.',
  alternates: { canonical: '/compare/primary-care-vs-urgent-care' },
  openGraph: {
    title: 'Primary Care vs Urgent Care: Where Should You Go?',
    description: 'Compare primary care and urgent care by cost, time, continuity and best use, so you can choose the right place for your next health concern.',
    url: 'https://elenachetvermd.com/compare/primary-care-vs-urgent-care',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Primary Care vs Urgent Care: Where Should You Go?',
    description: 'Compare primary care and urgent care by cost, time, continuity and best use, so you can choose the right place for your next health concern.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Strongest for ongoing conditions, prevention and follow-up, because one clinician knows your history over time.', b: 'Effective for one-time, minor problems such as a sprain, minor cut or simple infection. Little follow-up.' },
  { label: 'Side effects and risks', a: 'Medication choices are made with your full history in view, which helps reduce interactions and duplicate treatment.', b: 'Prescribers may not see your full record, so there is a greater chance of missed interactions or repeated testing.' },
  { label: 'Cost', a: 'Depends on the model. Direct primary care typically uses a monthly membership fee; traditional primary care bills insurance, and copays and deductibles apply.', b: 'Usually billed per visit, and copays and deductibles apply. Costs can vary widely by facility and services.' },
  { label: 'Time commitment', a: 'Scheduled ahead. Visits are often longer when the practice keeps its schedule less crowded.', b: 'Walk-in style, but waits vary with how busy the clinic is. Visits tend to be brief.' },
  { label: 'Best for', a: 'Chronic conditions, preventive care, new symptoms that are not urgent, medication management and care coordination.', b: 'Sudden minor illness or injury when you cannot reach your regular clinician, or after-hours needs.' },
]

const aList = [
  'You have a chronic condition like high blood pressure, diabetes or thyroid disease',
  'You want preventive care, screenings and vaccines',
  'Your symptoms are bothersome but not an emergency',
  'You want one clinician who knows your history',
  'You need medication review or referral coordination',
]
const bList = [
  'You have a minor injury or sudden illness and cannot get a timely appointment',
  'You need care outside your regular clinician’s availability',
  'You are traveling and away from your usual clinician',
  'Your problem is a one-time issue, like a sprain or simple rash',
  'Your symptoms are not severe or life-threatening',
]

const faqs = [
  { q: 'Can primary care replace urgent care?', a: 'For many concerns, yes. A primary care clinician can often evaluate new problems, and may know your history well. Urgent care fills gaps when you cannot be seen promptly.' },
  { q: 'When should I go to the emergency room instead?', a: 'Go to the emergency room or call 911 for chest pain, trouble breathing, stroke symptoms, severe bleeding, serious head injury or other life-threatening problems. Neither primary care nor urgent care is the right place for these.' },
  { q: 'Is urgent care cheaper than primary care?', a: 'It depends on your coverage and the services you need. In both settings, copays and deductibles may apply. Ask about costs before you are seen.' },
  { q: 'Should I tell my primary care clinician about an urgent care visit?', a: 'Yes. Share visit notes, test results and any new prescriptions so your records stay complete and follow-up can happen.' },
  { q: 'How do I decide quickly if I am unsure?', a: 'Ask whether the problem is minor, new and needs same-day attention. If you are unsure, call the office for guidance. If symptoms feel severe, seek emergency care.' },
]

const check = (
  <svg className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:underline">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Primary Care Visit vs Urgent Care: Where Should You Go?</h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">A clear look at how each option works, so you can choose well when something comes up in West Hollywood, CA or anywhere else.</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-primary-care-vs-urgent-care.jpg"} alt={"A medical professional checking a patient's blood pressure using a sphygmomanometer in a cozy setting."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4"> </div>
              <div className="p-4">Primary Care</div>
              <div className="p-4">Urgent Care</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-1 sm:grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-dark)]">{r.label}</div>
                <div className="p-4 text-[var(--color-ink)] text-sm leading-relaxed">{r.a}</div>
                <div className="p-4 text-[var(--color-ink)] text-sm leading-relaxed">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-[var(--color-ink)] leading-relaxed">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Primary Care Visits</h2>
            <p className="mb-4">Primary care is built around a relationship. Your clinician learns your history, your medications and your goals, which makes it easier to spot changes and to avoid unnecessary tests. Research has linked having a regular source of primary care with better management of chronic disease and more consistent preventive care.</p>
            <p className="mb-4">A typical patient is someone managing ongoing health needs, wanting checkups and screenings, or looking for a trusted place to bring new concerns. Many problems that people take to urgent care, such as mild infections, rashes or medication questions, can also be addressed here when an appointment is available.</p>
            <p className="mb-12">Expect a conversation about your history, an exam as needed, and a plan that includes follow-up. If you need a specialist or imaging, your clinician can coordinate it.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Urgent Care</h2>
            <p className="mb-4">Urgent care centers treat conditions that need prompt attention but are not life-threatening. Many can perform basic X-rays and lab tests and treat minor injuries, which makes them useful when you cannot wait for a regular appointment.</p>
            <p className="mb-4">A typical patient has a sudden problem, such as a twisted ankle, a minor burn or a sore throat, and needs it looked at the same day. Because the clinician usually does not know you, the visit focuses on the immediate complaint.</p>
            <p>Expect a shorter visit and a variable wait. Afterward, follow up with your regular clinician so your records are updated and any lingering issues are addressed.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl text-[var(--color-dark)] mb-3">Choose primary care if...</h3>
        <ul className="space-y-3 mb-8 text-[var(--color-ink)]">
          {aList.map((t) => (<li key={t} className="flex gap-3">{check}<span>{t}</span></li>))}
        </ul>
        <h3 className="font-semibold text-xl text-[var(--color-dark)] mb-3">Choose urgent care if...</h3>
        <ul className="space-y-3 text-[var(--color-ink)]">
          {bList.map((t) => (<li key={t} className="flex gap-3">{check}<span>{t}</span></li>))}
        </ul>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-cream)]">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-ink)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Not Sure Which Is Right for You?</h2>
          <p className="mb-8 text-white/90">Reach out to the practice to talk through your situation and your options. In an emergency, call 911.</p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-accent-dark)] font-semibold px-8 py-3 rounded-full transition hover:bg-[var(--color-light)]">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}