import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'How to Prepare for Your Annual Physical',
  description: 'Practical steps to get more from your annual physical: what to gather, questions to ask, and how to share your health history with your primary care doctor.',
  alternates: { canonical: '/blog/how-to-prepare-for-your-annual-physical' },
  openGraph: {
    title: 'How to Prepare for Your Annual Physical',
    description: 'Practical steps to get more from your annual physical: what to gather, questions to ask, and how to share your health history with your primary care doctor.',
    url: 'https://elenachetvermd.com/blog/how-to-prepare-for-your-annual-physical',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'How to Prepare for Your Annual Physical',
    description: 'Practical steps to get more from your annual physical: what to gather, questions to ask, and how to share your health history with your primary care doctor.',
  },
}

const checkIcon = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const prepList = [
  'A list of every medication, vitamin and supplement, with doses',
  'Names and contact details of other doctors you see',
  'Records from recent tests, imaging, hospital stays or vaccinations',
  'Your family history of heart disease, cancer, diabetes and other conditions',
  'A written list of symptoms, concerns and questions, ranked by importance',
  'Your glasses, hearing aids or any devices you use daily',
]

const questions = [
  'Which screenings are right for my age and risk factors?',
  'Are my vaccinations up to date?',
  'Do my blood pressure, cholesterol and blood sugar suggest I should change anything?',
  'What is one habit that would make the biggest difference for me?',
  'When should I come back, and what should I watch for before then?',
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-how-to-prepare-for-your-annual-physical.jpg" alt="Medical professional in scrubs consulting with a patient while taking notes.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">How to Prepare for Your Annual Physical</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most of us know the feeling: the appointment is on the calendar, life is busy, and suddenly you are sitting on the exam table trying to remember the question you meant to ask. Then the visit is over, and it comes back to you in the parking lot. A little preparation turns an annual physical from a rushed checklist into a real conversation about your health, and it does not take much.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What an annual physical is for</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          An annual physical, sometimes called a wellness visit or preventive exam, is a scheduled check-in when you are not necessarily sick. It typically includes a review of your medical history, measurements such as blood pressure, heart rate and weight, a physical exam, and a discussion of screenings, vaccinations and lifestyle. Its purpose is to catch problems early, keep chronic conditions under control, and build a relationship with a doctor who knows your baseline.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who benefits from a yearly visit</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Nearly every adult can benefit, though the content of the visit changes with age and risk. A healthy 30-year-old may need little more than blood pressure and cholesterol checks and a conversation about sleep, stress and mood. Someone in midlife may add colorectal, breast, cervical or lung cancer screening depending on guidelines and personal risk. Older adults often focus on balance, memory, bone health and medication safety. People managing diabetes, high blood pressure or heart disease use the visit to review how their treatment is working.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the evidence says</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research on routine checkups is nuanced. Large reviews have found that general health checks for people without symptoms do not clearly reduce the risk of death on their own. However, specific preventive services, such as blood pressure control, cholesterol management, vaccination and recommended cancer screenings, have solid evidence behind them. The value of the visit comes largely from doing the right things for you, which depends on a clear, honest exchange of information. That is exactly what preparation improves.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          A little preparation turns an annual physical from a rushed checklist into a real conversation about your health.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What to gather before you go</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          A week or so ahead, set aside twenty minutes to pull together the essentials:
        </p>
        <ul className="space-y-3 mb-4">
          {prepList.map((item) => (
            <li key={item} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              {checkIcon}
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Bringing the actual bottles, or clear photos of the labels, is often more reliable than recalling names from memory. Supplements and over-the-counter products matter too, since they can interact with prescriptions.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Be honest about the things that feel awkward</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Doctors hear about alcohol, sleep trouble, low mood, sexual health, bladder or bowel changes, and missed medications every day. None of it is shocking, and all of it can shape good advice. If something has been worrying you, say so early in the visit rather than as you reach for the door. If you are nervous, tell your doctor; it helps them slow down and explain each step.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions worth asking</h2>
        <ul className="space-y-3 mb-4">
          {questions.map((item) => (
            <li key={item} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              {checkIcon}
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical tips for the day itself</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Ask when you book whether you should fast before blood work; some tests need it and many do not. Wear comfortable clothing that is easy to remove or roll up. Arrive a few minutes early to complete forms. Consider bringing a trusted family member or friend if you want a second set of ears, and take brief notes or ask for a written summary of the plan. Before you leave, confirm what follow-up is needed, which tests are being ordered, and how you will receive results.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">After the visit</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Put follow-up items on your calendar right away: screenings to schedule, prescriptions to fill, habits to try. If a result or instruction is unclear, contact the office rather than guessing. One or two realistic changes you actually make are worth more than a long list you forget.
        </p>

        <p className="text-[var(--color-ink)] leading-loose text-base mt-12">
          If you are due for a physical, or have questions that have been sitting in the back of your mind, we invite you to call the office or reach out through the contact page. Elena Chetver, MD provides primary care in West Hollywood, CA, and a thoughtful conversation is a good place to begin.
        </p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
            </svg>
          </div>
          <div>
            <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Elena Chetver, MD</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Resources</p>
              <p className="font-cormorant text-2xl text-[var(--color-primary)]">Browse All Articles</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Patient education from the practice on everyday health topics.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Services</p>
              <p className="font-cormorant text-2xl text-[var(--color-primary)]">Our Services</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">See the primary care services offered in West Hollywood, CA.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Contact</p>
              <p className="font-cormorant text-2xl text-[var(--color-primary)]">Contact the Office</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Reach out with questions or to ask about scheduling a visit.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}