import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Questions to Ask When Choosing a Primary Care Doctor',
  description: 'Choosing a primary care doctor shapes your long-term health. Use these practical questions to find a physician who fits your needs and communication style.',
  alternates: { canonical: '/blog/questions-to-ask-when-choosing-a-primary-care-doctor' },
  openGraph: {
    title: 'Questions to Ask When Choosing a Primary Care Doctor',
    description: 'Choosing a primary care doctor shapes your long-term health. Use these practical questions to find a physician who fits your needs and communication style.',
    url: 'https://elenachetvermd.com/blog/questions-to-ask-when-choosing-a-primary-care-doctor',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Questions to Ask When Choosing a Primary Care Doctor',
    description: 'Choosing a primary care doctor shapes your long-term health. Use these practical questions to find a physician who fits your needs and communication style.',
  },
}

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

const tips1 = [
  'How long are routine appointments, and can we use that time to talk through more than one concern?',
  'How quickly can I be seen when I am sick?',
  'How do I reach the office with a question between visits?',
  'Who covers when my doctor is away?',
]

const tips2 = [
  'Do you focus on prevention, or mainly on treating problems once they appear?',
  'How do you decide which screenings I need?',
  'How do you involve me in decisions about medications and tests?',
  'When would you refer me to a specialist, and who coordinates that care?',
]

const tips3 = [
  'What does a visit cost, and what is included?',
  'Which insurance plans, if any, does the office work with?',
  'How are lab work and imaging billed?',
  'What is the process if I need to cancel or reschedule?',
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-questions-to-ask-when-choosing-a-primary-care-doctor.jpg" alt="A doctor shakes hands with a smiling patient during a consultation in a bright, welcoming environment.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">
            Questions to Ask When Choosing a Primary Care Doctor
          </h1>
          <p className="mt-6 text-sm text-white/70">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most of us spend more time researching a new phone than choosing the person we will trust with our health. Yet your primary care doctor is often the first call you make when something feels wrong, and the one who notices when something quietly changes. Finding the right fit is worth a little deliberate effort, and the right questions make that effort much easier.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why this choice matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Primary care is the foundation of the health system. Research has repeatedly linked having a consistent primary care physician with better preventive care, better management of chronic conditions such as high blood pressure and diabetes, and fewer avoidable hospital visits. A long-term relationship also means your doctor knows your baseline, your family history, and your preferences, which helps them recognize when something is truly different.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          This decision affects nearly everyone: people moving to a new city, those whose doctor has retired, adults who have not had a regular physician in years, and families looking for a steady source of care.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions about access and communication</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Even an excellent physician cannot help you if you cannot reach them. Ask practical questions about how care actually works day to day.
        </p>
        <ul className="space-y-3">
          {tips1.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check />{t}</li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Appointment length matters more than many people realize. Rushed visits tend to focus on a single complaint, leaving little room for prevention, questions, or the concerns patients often save for the last minute.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          A long-term relationship also means your doctor knows your baseline, your family history, and your preferences.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions about care philosophy</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Doctors differ in how they approach care. Some emphasize prevention and lifestyle, others lean toward a more conventional treat-as-needed model. Neither is automatically right, but the match with your expectations matters.
        </p>
        <ul className="space-y-3">
          {tips2.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check />{t}</li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Pay attention to how the answers feel. Studies of patient experience consistently show that when patients feel heard and included in decisions, they are more likely to follow through on treatment plans and report greater satisfaction.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions about cost and logistics</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Money is an uncomfortable topic, but surprises are worse. Practices vary in which plans they accept and how billing works. Ask plainly so you understand what you are signing up for.
        </p>
        <ul className="space-y-3">
          {tips3.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check />{t}</li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions to ask yourself</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The best fit is partly about you. Do you want a doctor who gives direct recommendations, or one who lays out options and lets you choose? Do you have ongoing conditions that need close follow-up? Is location convenient enough that you will actually come in? Are there language or cultural considerations that would help you speak openly? Writing down your priorities before you call makes it easier to compare practices fairly.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What to notice at the first visit</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A first appointment is also an interview, in both directions. Notice whether your doctor listens without interrupting, explains things in plain language, and welcomes your questions. Notice whether the staff is respectful and the office is organized. If something feels off, it is reasonable to keep looking. Trust builds over time, but a basic sense of comfort should be there from the start.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Bring a list of your medications, past diagnoses, and any records you have, along with the top two or three things you hope to address. That gives the visit a strong start and helps you judge how the doctor engages with your real concerns.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the next step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not need to find a perfect doctor on the first try, only one who listens and whom you feel comfortable calling. If you are considering primary care in West Hollywood, you are welcome to reach out to the practice of Elena Chetver, MD, and ask any of the questions above. Call the office or send a message through the contact page.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-xl text-[var(--color-primary)] mb-2">Resources Hub</p>
              <p className="text-sm text-[var(--color-muted)]">Browse all patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-xl text-[var(--color-primary)] mb-2">Our Services</p>
              <p className="text-sm text-[var(--color-muted)]">Learn about the care the practice provides.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-xl text-[var(--color-primary)] mb-2">Contact the Practice</p>
              <p className="text-sm text-[var(--color-muted)]">Ask your questions before you decide.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}