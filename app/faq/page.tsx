import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'FAQ | Elena Chetver, MD, West Hollywood'
const DESCRIPTION = 'Answers to common questions about Dr. Elena Chetver\'s internal medicine office in West Hollywood: insurance, new patients, refills, languages, hours and what to bring.'
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: '/faq' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/faq', siteName: 'Elena Chetver, MD', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

const faqs = [
  { q: 'Is Dr. Chetver accepting new patients?', a: 'Yes. Call the office at (323) 650-2991 or send a request through this website and the office will find a time for a first visit.' },
  { q: 'Which insurance plans do you accept?', a: 'The office accepts Medicare and most major plans, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Anthem and Humana. Plans change, so please call with your card handy and the staff will confirm yours before your visit.' },
  { q: 'Do you speak Russian?', a: 'Yes. Dr. Chetver and the office staff speak Russian and English. Visits, phone calls and paperwork can be handled in either language.' },
  { q: 'What are your office hours?', a: 'The office sees patients three days a week. Please call for the current schedule.' },
  { q: 'What should I bring to my first visit?', a: 'A photo ID, your insurance card, a list of your current medications or the bottles themselves, and any recent test results or records from a previous doctor. Please arrive a few minutes early for paperwork.' },
  { q: 'How do I request a prescription refill?', a: 'Ask your pharmacy first, since they can send the request to the office directly. You can also call the office with the name of the medication and your pharmacy. Every refill is reviewed by Dr. Chetver before it is sent, so please allow a few business days and do not wait until you are out.' },
  { q: 'Do I need an appointment to be seen?', a: 'Yes, the office sees patients by appointment. Call and the staff will fit you in as soon as they can.' },
  { q: 'Which hospital is Dr. Chetver affiliated with?', a: 'Dr. Chetver is affiliated with Cedars-Sinai Medical Center.' },
  { q: 'What kind of doctor is an internist?', a: 'An internal medicine physician cares for adults: preventive check-ups, everyday illnesses, and long-term conditions such as high blood pressure, high cholesterol and diabetes. Dr. Chetver is board certified by the American Board of Internal Medicine.' },
  { q: 'What if I have an emergency?', a: 'Call 911 or go to the nearest emergency room. The office line is for appointments, questions and refills during business hours.' },
]

export default function FaqPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SplitHero src="/images/stock/hub-faq.jpg" alt="A physician answering a patient's questions across a desk">
        <nav className="text-sm mb-6 opacity-90"><Link href="/" className="hover:underline">Home</Link><span className="mx-2">›</span><span>FAQ</span></nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Frequently Asked Questions</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">Insurance, new patients, refills, languages and what to bring. Anything else, call (323) 650-2991.</p>
      </SplitHero>
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 divide-y divide-[var(--color-border)]">
          {faqs.map((f) => (
            <details key={f.q} className="py-5 group">
              <summary className="cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex justify-between gap-4">{f.q}<span className="text-[var(--color-primary)] group-open:rotate-45 transition-transform">+</span></summary>
              <p className="text-[var(--color-muted)] leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Still have a question?</h2>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a href="tel:+13236502991" data-ga="phone_click" className="bg-[var(--color-primary)] text-white px-7 py-3.5 rounded-xl font-bold">Call (323) 650-2991</a>
            <Link href="/contact" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-7 py-3.5 rounded-xl font-semibold">Send a message</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
