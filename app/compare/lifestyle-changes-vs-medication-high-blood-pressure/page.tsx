import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lifestyle Changes vs Medication for High Blood Pressure',
  description: 'Compare lifestyle changes and medication for high blood pressure: effectiveness, side effects, cost, time commitment and who each approach suits best.',
  alternates: { canonical: '/compare/lifestyle-changes-vs-medication-high-blood-pressure' },
  openGraph: {
    title: 'Lifestyle Changes vs Medication for High Blood Pressure',
    description: 'Compare lifestyle changes and medication for high blood pressure: effectiveness, side effects, cost, time commitment and who each approach suits best.',
    url: 'https://elenachetvermd.com/compare/lifestyle-changes-vs-medication-high-blood-pressure',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Lifestyle Changes vs Medication for High Blood Pressure',
    description: 'Compare lifestyle changes and medication for high blood pressure: effectiveness, side effects, cost, time commitment and who each approach suits best.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Can lower systolic pressure by roughly 4 to 11 mmHg or more depending on the change (DASH-style eating, sodium reduction, exercise, weight loss). Results vary with consistency.', b: 'Most single medications lower systolic pressure by about 8 to 15 mmHg, and combinations lower it further. Effect is reliable while taking it.' },
  { label: 'Side effects', a: 'Few risks. Possible muscle soreness from new exercise or adjustment to dietary changes. Overall health benefits extend beyond blood pressure.', b: 'Depends on the drug class: cough, dizziness, swelling, frequent urination or fatigue in some people. Many people tolerate treatment well, and options can be adjusted.' },
  { label: 'Cost', a: 'Generally low direct cost, though healthier groceries, a gym or classes may add expense. Primary care visits may be covered by a monthly membership fee or by copays and deductibles, depending on your arrangement.', b: 'Many blood pressure medications are available as generics. Costs depend on your pharmacy and coverage, with copays and deductibles applying for insured patients.' },
  { label: 'Time commitment', a: 'Ongoing daily effort: meal planning, regular activity, sleep and stress habits. Improvement often shows over weeks to months.', b: 'Minimal daily time (usually a pill each day), plus periodic follow-up and home or office blood pressure checks. Works within days to weeks.' },
  { label: 'Best for', a: 'Elevated or stage 1 hypertension with low overall cardiovascular risk, and as a foundation for everyone.', b: 'Stage 2 hypertension, very high readings, existing heart, kidney or diabetes risk, or when lifestyle alone has not reached goal.' },
]

const faqs = [
  { q: 'Can I lower my blood pressure without medication?', a: 'Some people with mildly elevated readings can reach their goal with lifestyle changes alone. Whether that is realistic for you depends on your starting numbers and overall cardiovascular risk, so it is worth reviewing with a clinician.' },
  { q: 'Do I have to take blood pressure medication forever?', a: 'Not always. Some people can reduce or stop medication after sustained weight loss, diet changes and exercise, but only under medical supervision. Stopping on your own can cause dangerous rebound increases.' },
  { q: 'Can I combine lifestyle changes and medication?', a: 'Yes. This is the most common approach. Lifestyle changes often allow a lower medication dose or fewer drugs, and they improve heart health in ways medication alone does not.' },
  { q: 'How long should I try lifestyle changes before considering medication?', a: 'For lower-risk stage 1 hypertension, guidelines commonly allow a few months of lifestyle effort with follow-up readings. For higher readings or higher risk, medication is typically started alongside lifestyle changes.' },
  { q: 'How do I know if my blood pressure is actually high?', a: 'A single reading is not enough. Diagnosis usually relies on repeated measurements, often including home monitoring, so that stress or "white coat" effects do not skew the picture.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  const aList = [
    'Your readings are elevated or in the stage 1 range',
    'You have no heart disease, diabetes or kidney disease',
    'You are willing to make steady changes to diet and activity',
    'You can monitor your pressure and follow up regularly',
  ]
  const bList = [
    'Your readings are in the stage 2 range or consistently very high',
    'You have diabetes, kidney disease or prior cardiovascular events',
    'Lifestyle changes alone have not reached your goal',
    'You want reliable control while building healthier habits',
  ]
  return (
    <main className="text-[var(--color-ink)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Lifestyle Changes vs Medication for High Blood Pressure</h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">An honest look at both approaches so you can have a more informed conversation about your treatment in West Hollywood, CA.</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-lifestyle-changes-vs-medication-high-blood-pressure.jpg"} alt={"Close-up image of various colored pharmaceutical pills. Ideal for medical and healthcare topics."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="hidden md:grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4">Factor</div>
              <div className="p-4">Lifestyle Changes</div>
              <div className="p-4">Medication</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-1 md:grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-dark)]">{r.label}</div>
                <div className="p-4 text-sm leading-relaxed"><span className="md:hidden font-semibold block text-[var(--color-primary)]">Lifestyle Changes</span>{r.a}</div>
                <div className="p-4 text-sm leading-relaxed"><span className="md:hidden font-semibold block text-[var(--color-primary)]">Medication</span>{r.b}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--color-muted)]">General information only, not a substitute for medical advice. Ranges are approximate and vary by person.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Lifestyle Changes</h2>
            <p className="mb-4 leading-relaxed">The strongest evidence supports the DASH eating pattern, reducing sodium, losing excess weight, regular aerobic exercise, limiting alcohol and not smoking. Each can lower blood pressure on its own, and the effects add up when combined.</p>
            <p className="mb-4 leading-relaxed">The typical candidate has readings that are mildly elevated and few other risk factors, though nearly everyone with hypertension benefits from these habits. Expect gradual progress: home readings often improve over several weeks, with the full effect taking a few months.</p>
            <p className="mb-12 leading-relaxed">The main challenge is consistency. Lifestyle change works only while it is maintained, and some people find their numbers do not drop enough, which is not a personal failure but a sign that additional treatment may help.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Medication</h2>
            <p className="mb-4 leading-relaxed">Large clinical trials show that lowering blood pressure with medication reduces the risk of stroke, heart attack and heart failure. Common classes include ACE inhibitors, ARBs, calcium channel blockers and thiazide diuretics, and the choice is tailored to your health profile.</p>
            <p className="mb-4 leading-relaxed">Medication is typically recommended for stage 2 hypertension, for people with diabetes, kidney disease or established cardiovascular disease, and when lifestyle changes alone fall short. Expect a follow-up visit or two to check readings, labs and tolerance, and possibly dose adjustments.</p>
            <p className="leading-relaxed">Side effects are possible but often manageable, and switching drug classes frequently resolves them. Taking medication does not replace healthy habits; the two work best together.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl mb-4 text-[var(--color-dark)]">Choose lifestyle changes first if...</h3>
        <ul className="space-y-3 mb-10">
          {aList.map((t) => (<li key={t} className="flex gap-3"><Check /><span>{t}</span></li>))}
        </ul>
        <h3 className="font-semibold text-xl mb-4 text-[var(--color-dark)]">Choose medication (with lifestyle changes) if...</h3>
        <ul className="space-y-3">
          {bList.map((t) => (<li key={t} className="flex gap-3"><Check /><span>{t}</span></li>))}
        </ul>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-10 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-[var(--color-border)] rounded-xl p-5 animate-fade-up">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)] list-none flex justify-between items-center gap-4">
                  {f.q}
                  <svg className="w-5 h-5 shrink-0 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl mb-4">Not Sure Which Path Fits You?</h2>
          <p className="mb-8 text-white/90">Talk through your readings, risks and preferences with Elena Chetver, MD. Call the office or reach out online.</p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-semibold px-8 py-3 rounded-full hover:bg-[var(--color-light)] transition-colors">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}