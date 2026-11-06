import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Elena Chetver, MD',
  description: 'Answers to common questions about direct primary care with Elena Chetver, MD in West Hollywood, CA, including visits, medications, referrals and more.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | Elena Chetver, MD',
    description: 'Answers to common questions about direct primary care with Elena Chetver, MD in West Hollywood, CA, including visits, medications, referrals and more.',
    url: 'https://elenachetvermd.com/faq',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Frequently Asked Questions | Elena Chetver, MD',
    description: 'Answers to common questions about direct primary care with Elena Chetver, MD in West Hollywood, CA, including visits, medications, referrals and more.',
  },
}

const faqs = [
  {
    q: 'What is direct primary care?',
    a: 'Direct primary care is a model that centers on the relationship between you and your physician. Rather than rushing through short appointments, the model is built to allow time for thoughtful visits and clear communication. Dr. Chetver uses this approach so that she knows your whole health story. Call the office to learn how the model works in practice.',
  },
  {
    q: 'Who is Dr. Elena Chetver?',
    a: 'Dr. Elena Chetver is the physician behind the practice in West Hollywood, CA. She provides primary care for adults with an emphasis on listening, evidence-based decisions, and plain-language explanations. You can read more on the About page. Patients see their own physician rather than a rotating cast of providers.',
  },
  {
    q: 'Are you accepting new patients?',
    a: 'The best way to find out is to contact the office directly. You can use the contact form or call the office and ask about availability. We are happy to explain how the practice works and answer your questions before you decide anything. There is no pressure to commit during that first conversation.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'Insurance details are best confirmed directly with the office, since arrangements can vary. Please call the office to ask how insurance relates to your care and what to expect. It is also helpful to ask your insurer how they treat direct primary care and any outside services such as labs, imaging or specialists. We will gladly help you sort through the questions.',
  },
  {
    q: 'What does membership or care cost?',
    a: 'We do not post fees on this website. Costs are best discussed directly so that you receive accurate, current information. Please call the office and we will explain what is involved. You are welcome to ask any financial questions before scheduling your first visit.',
  },
  {
    q: 'What should I expect at my first visit?',
    a: 'Your first visit is a thorough conversation about your medical history, current concerns, and health goals. There is time to ask anything you like, and nothing is rushed. Bringing a list of medications, supplements, and past records is very helpful. Together you will outline a care plan that fits you.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'Reach out through the contact page or call the office to request a visit or an introductory conversation. We will explain how the practice works and help you find a time. If you are unsure which service fits your needs, choose General Question on the form and we will point you in the right direction.',
  },
  {
    q: 'What types of care do you provide?',
    a: 'The practice offers comprehensive primary care for adults, preventive care and wellness, chronic disease management, acute illness visits, care coordination, and medication review. This means one physician can look after routine checkups, ongoing conditions, and sudden problems. Visit the Services page for more detail on each area.',
  },
  {
    q: 'Can you help manage chronic conditions?',
    a: 'Yes. The practice supports conditions such as hypertension, diabetes, and thyroid disorders with regular follow-up. Care plans are reviewed over time so they stay current and effective. Because your physician knows your history, adjustments can be made thoughtfully as your health changes.',
  },
  {
    q: 'What if I get sick and need to be seen quickly?',
    a: 'Acute illness visits address infections, injuries, and sudden symptoms, and your own physician evaluates the problem and guides next steps. Call the office to ask about the best way to arrange a timely visit. For emergencies such as chest pain, trouble breathing, stroke symptoms, or severe injury, call 911 or go to the nearest emergency department.',
  },
  {
    q: 'Can you manage and refill my medications?',
    a: 'Medication review is a core part of the practice. Dr. Chetver reviews your prescriptions and supplements to confirm they are necessary and safe together, and she explains each choice in plain language. Bring everything you take to your first visit, including over-the-counter products. Questions about specific refills are best directed to the office.',
  },
  {
    q: 'Do you provide referrals to specialists?',
    a: 'Yes. Care coordination is part of the practice, which includes helping you navigate specialists, imaging, and lab work. The goal is that nothing falls through the cracks. Your physician can help you understand why a referral is recommended and what to expect from it.',
  },
  {
    q: 'How are lab work and imaging handled?',
    a: 'When tests are appropriate, your physician will explain what they are for and what the results may mean. She helps coordinate the lab work or imaging and follows up on results with you. Details on where testing is done and how it is billed are best confirmed by calling the office.',
  },
  {
    q: 'What preventive care do you offer?',
    a: 'Preventive care includes routine screenings, risk assessment, and lifestyle guidance tailored to your goals. The focus is on catching issues early and keeping you well. Recommendations are based on your age, history, and risk factors, and are grounded in evidence rather than one-size-fits-all checklists.',
  },
  {
    q: 'How can I communicate with my physician between visits?',
    a: 'The practice aims to keep communication simple and direct, so you have access to your physician. The specific ways to reach the office and typical response times are best confirmed by calling. Please do not use non-urgent channels for emergencies.',
  },
  {
    q: 'What is your cancellation or late-arrival policy?',
    a: 'Please call the office to ask about scheduling policies. We would rather explain them to you directly so you have accurate information. If something comes up, contacting the office as early as you can is always appreciated.',
  },
  {
    q: 'Do you see children or only adults?',
    a: 'The practice is focused on whole-person care for adults. If you are looking for care for a family member of a different age, call the office and we can discuss whether the practice is the right fit or help point you toward suitable options.',
  },
  {
    q: 'Can I transfer my records to your practice?',
    a: 'Having your prior records is helpful, and many patients request them from previous providers before the first visit. Call the office to ask about the best way to send them. Even without full records, the first visit gives plenty of time to review your history in detail.',
  },
  {
    q: 'Where is the practice located?',
    a: 'The practice serves patients in West Hollywood, CA. Please call the office for location details and directions before your first visit.',
  },
]

export default function FAQPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Frequently Asked Questions</h1>
          <p className="mt-6 text-lg text-white/90">Everything you need to know about our practice and services</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          {faqs.map((f) => (
            <details key={f.q} className="group animate-fade-up border border-[var(--color-border)] rounded-xl mb-3 bg-white">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light">Still have questions?</h2>
          <p className="mt-4 text-white/80">Reach out to the office and we will be glad to explain how the practice works.</p>
          <Link href="/contact" className="inline-block mt-8 px-8 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-dark)] transition-colors">
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  )
}