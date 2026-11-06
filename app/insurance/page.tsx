import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'Insurance and Billing | Elena Chetver, MD'
const DESCRIPTION = 'Dr. Elena Chetver\'s West Hollywood office accepts Medicare and major plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Anthem and Humana. Call (323) 650-2991 to confirm yours.'
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: '/insurance' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/insurance', siteName: 'Elena Chetver, MD', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

const plans = ['Medicare', 'Aetna', 'Anthem Blue Cross', 'Blue Cross Blue Shield', 'Cigna', 'Humana', 'UnitedHealthcare', 'Optum network plans']
const faqs = [
  { q: 'How do I find out if my plan is accepted?', a: 'Call the office with your insurance card handy. Plans and networks change, and the staff will confirm your specific plan before your first visit.' },
  { q: 'Do you take Medicare?', a: 'Yes. Medicare patients are welcome, including for annual wellness visits.' },
  { q: 'What is the difference between a co-pay and a deductible?', a: 'A co-pay is a set amount you pay at a visit. A deductible is the amount you pay toward covered care each year before your plan starts sharing costs. Both are set by your plan, not by the office.' },
  { q: 'What is an Explanation of Benefits?', a: 'A statement from your insurer showing what was billed, what the plan paid and what you may owe. It is not a bill.' },
  { q: 'Can I be seen without insurance?', a: 'Please call the office to ask about self-pay visits.' },
]

export default function InsurancePage() {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SplitHero src="/images/stock/hub-insurance.jpg" alt="A woman holding up her health insurance card">
        <nav className="text-sm mb-6 opacity-90"><Link href="/" className="hover:underline">Home</Link><span className="mx-2">›</span><span>Insurance and Billing</span></nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Insurance and Billing</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">Medicare and most major plans are accepted. Call with your card and the staff will confirm your coverage before you come in.</p>
        <div className="mt-8"><a href="tel:+13236502991" data-ga="phone_click" className="inline-block bg-white text-[var(--color-dark)] px-7 py-3.5 rounded-xl font-bold shadow-xl">Call (323) 650-2991</a></div>
      </SplitHero>
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center">Plans accepted</h2>
          <p className="text-center text-[var(--color-muted)] mt-3 max-w-2xl mx-auto">Among others. Networks within a plan vary, so please confirm your specific plan with the office.</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => <li key={p} className="bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-center font-semibold text-[var(--color-ink)]">{p}</li>)}
          </ul>
        </div>
      </section>
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Billing questions</h2>
          <div className="mt-6 divide-y divide-[var(--color-border)]">
            {faqs.map((f) => (
              <details key={f.q} className="py-5 group"><summary className="cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex justify-between gap-4">{f.q}<span className="text-[var(--color-primary)] group-open:rotate-45 transition-transform">+</span></summary><p className="text-[var(--color-muted)] leading-relaxed mt-3">{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
