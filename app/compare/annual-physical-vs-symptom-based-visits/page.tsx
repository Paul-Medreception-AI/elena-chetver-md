import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Annual Physical vs Symptom-Based Visits: Which Fits?',
  description:
    'Compare an annual physical with symptom-based visits: purpose, cost structure, time commitment and who each approach suits best, with a simple way to decide.',
  alternates: { canonical: '/compare/annual-physical-vs-symptom-based-visits' },
  openGraph: {
    title: 'Annual Physical vs Symptom-Based Visits: Which Fits?',
    description:
      'Compare an annual physical with symptom-based visits: purpose, cost structure, time commitment and who each approach suits best, with a simple way to decide.',
    url: 'https://elenachetvermd.com/compare/annual-physical-vs-symptom-based-visits',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Annual Physical vs Symptom-Based Visits: Which Fits?',
    description:
      'Compare an annual physical with symptom-based visits: purpose, cost structure, time commitment and who each approach suits best, with a simple way to decide.',
  },
}

const rows = [
  {
    label: 'Effectiveness',
    a: 'Strong for prevention: screening, vaccines, risk-factor review and catching silent problems such as high blood pressure or elevated blood sugar early.',
    b: 'Strong for diagnosing and treating a specific complaint such as pain, cough, rash or fatigue. Does not look for problems you cannot feel.',
  },
  {
    label: 'Side effects / downsides',
    a: 'Little physical risk. Routine tests can occasionally produce false positives that lead to follow-up testing.',
    b: 'Little physical risk from the visit itself. Waiting for symptoms can mean a condition is found later than it could have been.',
  },
  {
    label: 'Cost',
    a: 'Often covered as preventive care by insurance; with a membership model, usually included in the monthly membership fee. Extra tests may carry copays and deductibles.',
    b: 'Copays and deductibles apply under most insurance plans; in a membership model, visits are typically covered by the monthly membership fee.',
  },
  {
    label: 'Time commitment',
    a: 'One longer, scheduled visit per year, plus any lab work and follow-up.',
    b: 'Shorter visits as needed, but timing is unpredictable and may interrupt your week.',
  },
  {
    label: 'Best for',
    a: 'Generally healthy adults, people with family history or risk factors, and anyone who wants a baseline and a plan.',
    b: 'Anyone with a new, changing or worrying symptom, or a flare of a known condition.',
  },
]

const faqs = [
  {
    q: 'Can I skip the annual physical if I feel fine?',
    a: 'Many serious conditions, including high blood pressure, high cholesterol and early diabetes, cause no symptoms. A periodic preventive visit helps find them. How often you need one depends on your age, history and risk factors, so it is worth discussing with your clinician.',
  },
  {
    q: 'Can I bring up symptoms during my annual physical?',
    a: 'Yes, and it helps to say so when booking. Complex or new problems may need their own visit so neither the preventive work nor the symptom gets rushed.',
  },
  {
    q: 'What happens if a symptom visit turns up a bigger issue?',
    a: 'Your clinician may order tests, start treatment, or refer you to a specialist, and plan follow-up visits to monitor progress.',
  },
  {
    q: 'Are the two approaches mutually exclusive?',
    a: 'No. Most people do best with both: a regular preventive visit for the big picture and prompt visits when something changes.',
  },
  {
    q: 'How do I know which visit to book?',
    a: 'If you have a specific problem, book a visit for that problem. If you are well and want screening or a health review, book a physical. If unsure, call the office and describe what is going on.',
  },
]

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="text-[var(--color-ink)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <nav className="mb-6 text-sm text-white/80">
            <Link href="/" className="hover:underline">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Annual Physical vs Symptom-Based Visits: What Do You Need?</h1>
          <p className="mt-6 text-lg text-white/90">
            Two kinds of primary care visits serve two different purposes. Here is how they differ and how to choose.
          </p>
          <p className="mt-4 text-sm text-white/70">By Elena Chetver, MD · November 2026</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-annual-physical-vs-symptom-based-visits.jpg"} alt={"A doctor uses a stethoscope to examine a young boy with his mother present in a medical office."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="animate-fade-up overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <div className="hidden grid-cols-3 bg-[var(--color-primary)] text-white md:grid">
              <div className="p-4 font-semibold">Factor</div>
              <div className="p-4 font-semibold">Annual Physical</div>
              <div className="p-4 font-semibold">Symptom-Based Visit</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-1 md:grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-dark)]">{r.label}</div>
                <div className="p-4 text-sm leading-relaxed"><span className="font-semibold md:hidden">Annual physical: </span>{r.a}</div>
                <div className="p-4 text-sm leading-relaxed"><span className="font-semibold md:hidden">Symptom-based: </span>{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)]">The Annual Physical</h2>
            <p className="mt-4 leading-relaxed">
              An annual physical is a planned visit focused on prevention. It typically includes a review of your history, medications and family risks, vital signs, an exam tailored to your age and concerns, and a discussion of screening tests and vaccines.
            </p>
            <p className="mt-4 leading-relaxed">
              The evidence supports targeted screening, such as blood pressure checks, cholesterol and diabetes testing, and age-appropriate cancer screening. Routine exams without a clear purpose have less proven benefit, which is why a good physical is personalized rather than a fixed checklist.
            </p>
            <p className="mt-4 leading-relaxed">
              Typical patients are adults without current complaints, people managing risk factors, and anyone establishing a baseline with a new primary care clinician. Expect a longer conversation, possible lab orders, and a written plan for the year ahead.
            </p>
          </div>
          <div className="animate-fade-up mt-14">
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)]">Symptom-Based Visits</h2>
            <p className="mt-4 leading-relaxed">
              A symptom-based visit addresses a specific problem: a persistent cough, joint pain, headaches, digestive upset, a skin change, or worsening of a chronic condition. The clinician focuses on diagnosing the cause and starting treatment.
            </p>
            <p className="mt-4 leading-relaxed">
              These visits are essential, but they are reactive by design. They answer the question you bring in, and time is limited, so unrelated screening often gets left out. Some symptoms warrant prompt attention, and chest pain, severe shortness of breath or sudden weakness need emergency care rather than an office visit.
            </p>
            <p className="mt-4 leading-relaxed">
              Expect questions about when the problem started and what changes it, a focused exam, possibly tests or imaging, and a treatment or referral plan with a time frame for follow-up.
            </p>
          </div>
        </div>
      </section>

      <section className="animate-fade-up mx-auto my-20 max-w-3xl rounded-2xl bg-[var(--color-light)] p-12">
        <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-8">How to Decide</h2>
        <h3 className="font-semibold text-[var(--color-dark)] mb-3">Choose an annual physical if…</h3>
        <ul className="space-y-3 mb-8">
          {['You feel well but have not had a check-up in a while', 'You have a family history of heart disease, diabetes or cancer', 'You are due for screenings or vaccines', 'You want a baseline and a prevention plan'].map((t) => (
            <li key={t} className="flex gap-3"><Check />{t}</li>
          ))}
        </ul>
        <h3 className="font-semibold text-[var(--color-dark)] mb-3">Choose a symptom-based visit if…</h3>
        <ul className="space-y-3">
          {['You have a new or worsening symptom', 'A known condition is flaring or not responding to treatment', 'A symptom has lasted longer than expected', 'You need a medication reviewed because of side effects'].map((t) => (
            <li key={t} className="flex gap-3"><Check />{t}</li>
          ))}
        </ul>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up group rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] p-5">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)] transition-colors hover:text-[var(--color-primary)]">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-cormorant text-4xl font-light">Not Sure Which Visit Fits?</h2>
          <p className="mt-4 text-white/90">Tell the office what is going on and get help choosing the right next step in West Hollywood, CA.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[var(--color-dark)] transition-colors hover:bg-[var(--color-light)]">
            Discuss Your Options
          </Link>
        </div>
      </section>
    </main>
  )
}