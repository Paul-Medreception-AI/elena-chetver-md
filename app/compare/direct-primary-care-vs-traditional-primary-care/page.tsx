import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Direct Primary Care vs Traditional Primary Care',
  description: 'Compare direct primary care and traditional primary care side by side: cost structure, access, time with your doctor, and who each model suits best.',
  alternates: { canonical: '/compare/direct-primary-care-vs-traditional-primary-care' },
  openGraph: {
    title: 'Direct Primary Care vs Traditional Primary Care',
    description: 'Compare direct primary care and traditional primary care side by side: cost structure, access, time with your doctor, and who each model suits best.',
    url: 'https://elenachetvermd.com/compare/direct-primary-care-vs-traditional-primary-care',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Direct Primary Care vs Traditional Primary Care',
    description: 'Compare direct primary care and traditional primary care side by side: cost structure, access, time with your doctor, and who each model suits best.',
  },
}

const rows = [
  { label: 'Quality of care', dpc: 'Longer visits and a continuous relationship support thorough prevention and follow-up. Care quality depends on the individual clinician in either model.', trad: 'Evidence-based care is widely delivered, though shorter visits and larger patient panels can limit time for prevention and discussion.' },
  { label: 'Drawbacks', dpc: 'Membership does not replace insurance for hospital care, specialists, imaging or emergencies. Not every service is included.', trad: 'Shorter appointments, longer waits for visits, and more administrative steps such as referrals and prior authorizations.' },
  { label: 'Cost structure', dpc: 'A monthly membership fee covers the primary care services the practice includes. Insurance is still advised for major medical needs.', trad: 'Insurance premiums, with copays and deductibles applying to visits and services. Billing is typically handled through insurers.' },
  { label: 'Time commitment', dpc: 'Typically less time spent in waiting rooms and on paperwork, with more unhurried time in the visit itself.', trad: 'Scheduling can take longer, and visits are often brief, with more time spent on check-in and billing steps.' },
  { label: 'Best for', dpc: 'People who want a closer relationship with one doctor, easier access, and a personalized prevention plan.', trad: 'People who prefer insurance-billed visits, have simple needs, or want care tied closely to a large health system.' },
]

const faqs = [
  { q: 'Is direct primary care the same as concierge medicine?', a: 'They are similar but not identical. Both use a membership model, but direct primary care generally does not bill insurance for visits and is often structured more simply. Ask any practice exactly what its membership includes.' },
  { q: 'Do I still need health insurance with direct primary care?', a: 'In most cases, yes. Membership typically covers primary care services, while hospitalizations, specialist care, advanced imaging and emergencies are usually handled through insurance.' },
  { q: 'Can I keep my current insurance with a traditional practice?', a: 'Traditional primary care bills your insurance, so your plan, network and benefits determine which practices you can see and what you pay at each visit.' },
  { q: 'What does the membership cost?', a: 'Fees vary by practice. Please call the office to ask about membership details for this practice.' },
  { q: 'How do I know which model is right for me?', a: 'Consider how much time you want with your doctor, how often you seek care, how you prefer to pay, and how important access and continuity are to you. The decision guide above can help.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="text-[var(--color-ink)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Direct Primary Care vs Traditional Primary Care: Which Is Right for You?</h1>
          <p className="mt-6 text-lg text-white/90">A clear look at how the two models differ in access, cost structure and the time you get with your doctor.</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-direct-primary-care-vs-traditional-primary-care.jpg"} alt={"Detailed image of a stethoscope on a vibrant yellow surface."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4"></div>
              <div className="p-4">Direct Primary Care</div>
              <div className="p-4">Traditional Primary Care</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-dark)]">{r.label}</div>
                <div className="p-4">{r.dpc}</div>
                <div className="p-4">{r.trad}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Direct Primary Care</h2>
            <p className="mb-4 leading-relaxed">In direct primary care, patients pay a recurring membership fee to a practice rather than billing insurance for each visit. Because the practice is not built around insurance billing, it can often keep a smaller patient panel and offer longer appointments.</p>
            <p className="mb-4 leading-relaxed">Research on the model is still developing, but studies and reports point to high patient satisfaction and good access. Continuity with one doctor is well recognized as helping with prevention, chronic condition management and trust.</p>
            <p className="mb-12 leading-relaxed">A typical member is someone who values time to talk, wants a doctor who knows their history, and is comfortable pairing membership with insurance for hospital and specialist needs. Expect a visit that is less rushed and a practice that can explain exactly what the membership covers.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Traditional Primary Care</h2>
            <p className="mb-4 leading-relaxed">Traditional primary care bills your insurance for visits and services. Your cost depends on your plan, including premiums, copays and deductibles. Many practices are part of larger health systems that coordinate labs, imaging and specialists.</p>
            <p className="mb-4 leading-relaxed">This model has the strongest evidence base overall, since most primary care research comes from it. Higher visit volume can mean shorter appointments and less flexibility in scheduling, though this varies widely between practices.</p>
            <p className="leading-relaxed">It often suits people who rarely need care, who have coverage they are happy with, or who want everything connected within one health system. Expect standard check-in, insurance billing and referral processes.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl mb-4 text-[var(--color-dark)]">Choose direct primary care if...</h3>
        <ul className="space-y-3 mb-10">
          {['You want longer, less rushed visits', 'You value an ongoing relationship with one doctor', 'You prefer a predictable membership instead of per-visit billing', 'You are comfortable keeping insurance for major medical needs'].map((t) => (
            <li key={t} className="flex gap-3"><Check />{t}</li>
          ))}
        </ul>
        <h3 className="font-semibold text-xl mb-4 text-[var(--color-dark)]">Choose traditional primary care if...</h3>
        <ul className="space-y-3">
          {['You want your insurance to cover primary care visits', 'You seek care only occasionally', 'You prefer a large system with connected specialists', 'You are happy with your current doctor and access'].map((t) => (
            <li key={t} className="flex gap-3"><Check />{t}</li>
          ))}
        </ul>
      </section>

      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] p-5 animate-fade-up">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl mb-4">Not sure which fits you?</h2>
          <p className="mb-8 text-white/90">Reach out to talk through your needs and the questions you have about primary care with Elena Chetver, MD in West Hollywood, CA.</p>
          <Link href="/contact" className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[var(--color-accent)] hover:bg-[var(--color-light)] transition-colors">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}