import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care Physician vs Specialist: Who to See First',
  description: 'Not sure whether to see a primary care physician or a specialist first? Compare roles, cost, time and when each is the right choice.',
  alternates: { canonical: '/compare/primary-care-physician-vs-specialist' },
  openGraph: {
    title: 'Primary Care Physician vs Specialist: Who to See First',
    description: 'Not sure whether to see a primary care physician or a specialist first? Compare roles, cost, time and when each is the right choice.',
    url: 'https://elenachetvermd.com/compare/primary-care-physician-vs-specialist',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Primary Care Physician vs Specialist: Who to See First',
    description: 'Not sure whether to see a primary care physician or a specialist first? Compare roles, cost, time and when each is the right choice.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Very effective for common conditions, prevention, and sorting out symptoms that are not yet diagnosed. Coordinates your overall care.', b: 'Most effective once a diagnosis is known or a problem clearly falls within one organ system or disease area.' },
  { label: 'Side effects and risks', a: 'Tends to favor conservative first steps and avoids unnecessary tests or procedures. Reviews all medications together.', b: 'May recommend more specialized tests, procedures or drugs, which carry their own risks. Focus is narrower, so overall medication review can be missed.' },
  { label: 'Cost', a: 'Copays and deductibles apply as your plan sets them, and a primary care visit is usually the lower-cost first step.', b: 'Copays and deductibles typically apply, and some plans require a referral. Added testing or procedures can increase the total.' },
  { label: 'Time commitment', a: 'Often one visit to evaluate a problem, with ongoing relationship visits over time.', b: 'Wait times for a first appointment can be longer, and care may involve several visits and tests.' },
  { label: 'Best for', a: 'New symptoms, checkups, chronic disease management, prevention, and deciding who else you need.', b: 'A known or strongly suspected condition needing expert-level evaluation or procedures.' },
]

const aList = [
  'You have a new symptom and are not sure what is causing it',
  'You want a single clinician who knows your full history',
  'You are managing conditions such as high blood pressure, diabetes or cholesterol',
  'You need preventive care, screenings or vaccines',
  'Your insurance plan requires a referral to see a specialist',
]
const bList = [
  'You already have a diagnosis that needs expert management',
  'Your primary care clinician has recommended a referral',
  'You need a procedure or a highly specific test',
  'Symptoms persist despite appropriate first-line treatment',
  'You need a second opinion on a complex condition',
]

const faqs = [
  { q: 'Can I go straight to a specialist?', a: 'Often yes, but it depends on your insurance plan. Some plans require a referral. For undiagnosed symptoms, starting with primary care can save time by pointing you to the right specialist the first time.' },
  { q: 'Is a primary care physician the same as a specialist?', a: 'No. Primary care physicians have broad training across common conditions and prevention. Specialists focus deeply on one organ system, disease group or procedure type.' },
  { q: 'When is a specialist the better first choice?', a: 'When you have a known condition within that specialty, or a symptom that clearly needs expert evaluation. Emergencies, such as chest pain or stroke symptoms, need emergency care first.' },
  { q: 'Will seeing a primary care physician delay my care?', a: 'Usually not. A primary care clinician can begin the workup, order initial tests and make a targeted referral, so the specialist visit is more productive.' },
  { q: 'Can I keep my primary care physician if I see a specialist?', a: 'Yes, and it is a good idea. Your primary care clinician can coordinate between specialists, review medication interactions and keep your overall health plan consistent.' },
]

const Check = () => (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  return (
    <main className="bg-white text-[var(--color-ink)]">
      <SplitHero src="/images/stock/compare-primary-care-physician-vs-specialist.jpg" alt="Close-up of a female doctor holding a blue stethoscope, emphasizing healthcare and professionalism.">
        <div>
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:underline">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Primary Care Physician vs Specialist: Who Should You See First?</h1>
          <p className="mt-6 text-lg text-white/90">A clear guide to choosing where to start, so you get the right care without extra steps.</p>
        </div>
      </SplitHero>


      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4"> </div>
              <div className="p-4">Primary Care Physician</div>
              <div className="p-4">Specialist</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-dark)]">{r.label}</div>
                <div className="p-4">{r.a}</div>
                <div className="p-4">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">The Primary Care Physician</h2>
            <p className="mb-4 leading-relaxed">A primary care physician is trained to evaluate a wide range of symptoms and conditions, from infections and joint pain to blood pressure and metabolic health. They are usually the first point of contact and the clinician who sees the whole picture.</p>
            <p className="mb-4 leading-relaxed">Research on health systems has consistently linked strong primary care with better preventive care, better chronic disease management and more coordinated treatment. Having one clinician who knows your history helps avoid duplicate tests and conflicting prescriptions.</p>
            <p className="mb-12 leading-relaxed">A typical patient has a new or unclear symptom, ongoing conditions, or wants a long-term partner for prevention. Expect a conversation about your history, a focused exam, possible initial testing, and a plan that may include a referral if needed.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">The Specialist</h2>
            <p className="mb-4 leading-relaxed">Specialists complete additional years of training in a single area, such as cardiology, dermatology or gastroenterology. They have deeper experience with uncommon presentations, advanced testing and procedures within that field.</p>
            <p className="mb-4 leading-relaxed">Specialist care is most valuable when the question is specific. Once the problem has been narrowed down, a specialist can offer expertise that general care cannot match, and referrals tend to be more productive when initial testing is already done.</p>
            <p className="leading-relaxed">A typical specialist patient has a confirmed diagnosis, a complex or persistent problem, or needs a procedure. Expect a focused evaluation, targeted testing, and a plan that is shared back with your primary care clinician.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl mb-4 text-[var(--color-dark)]">Choose a primary care physician if...</h3>
        <ul className="space-y-3 mb-10">
          {aList.map((t) => (<li key={t} className="flex gap-3"><Check /><span>{t}</span></li>))}
        </ul>
        <h3 className="font-semibold text-xl mb-4 text-[var(--color-dark)]">Choose a specialist if...</h3>
        <ul className="space-y-3">
          {bList.map((t) => (<li key={t} className="flex gap-3"><Check /><span>{t}</span></li>))}
        </ul>
      </section>

      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-[var(--color-border)] rounded-xl p-5 animate-fade-up">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)]">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Not Sure Where to Start?</h2>
          <p className="mb-8 text-white/90">Talk through your symptoms and goals with Elena Chetver, MD, and get guidance on the right next step.</p>
          <Link href="/contact" className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[var(--color-accent)] transition-colors hover:bg-[var(--color-light)] hover:text-[var(--color-accent-dark)]">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}