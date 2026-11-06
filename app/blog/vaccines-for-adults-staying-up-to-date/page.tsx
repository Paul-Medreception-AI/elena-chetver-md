import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Vaccines for Adults: Staying Up to Date',
  description: 'Learn which vaccines adults need, why immunity fades over time, and how to review your vaccine history with your primary care doctor in West Hollywood, CA.',
  alternates: { canonical: '/blog/vaccines-for-adults-staying-up-to-date' },
  openGraph: {
    title: 'Vaccines for Adults: Staying Up to Date',
    description: 'Learn which vaccines adults need, why immunity fades over time, and how to review your vaccine history with your primary care doctor in West Hollywood, CA.',
    url: 'https://elenachetvermd.com/blog/vaccines-for-adults-staying-up-to-date',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Vaccines for Adults: Staying Up to Date',
    description: 'Learn which vaccines adults need, why immunity fades over time, and how to review your vaccine history with your primary care doctor in West Hollywood, CA.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Gather any vaccine records you have, including old school, military, or travel records.',
  'Ask whether your tetanus booster is due; it is generally recommended every 10 years.',
  'Get a flu shot each year, ideally in early fall.',
  'Review COVID-19 vaccine recommendations, which are updated periodically.',
  'Discuss shingles, pneumococcal, RSV, hepatitis, and HPV vaccines based on your age and health.',
  'Tell your doctor about travel plans, pregnancy plans, or chronic conditions.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Patient Education Articles', text: 'Explore more guidance on prevention and everyday health.' },
  { href: '/services', label: 'Services', title: 'Primary Care Services', text: 'See how ongoing primary care supports prevention.' },
  { href: '/contact', label: 'Contact', title: 'Contact the Office', text: 'Reach out to ask about reviewing your vaccine history.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-vaccines-for-adults-staying-up-to-date.jpg" alt="A close-up image of an adult with a bandage on the upper arm, likely after vaccination.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Vaccines for Adults: Staying Up to Date</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>
          Most of us remember childhood vaccines as a string of appointments our parents handled. Then adulthood arrives, and the schedule quietly fades from view. Yet protection from some vaccines wears off, new vaccines become available, and certain infections become more dangerous as we age. A short conversation about your vaccine history can prevent illnesses that are serious, disruptive, and often avoidable.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Adults Still Need Vaccines</h2>
        <p>
          Immunity is not always lifelong. Protection against tetanus and diphtheria declines over time, and whooping cough protection can fade within years. Aging also changes the immune system, which is why infections like influenza, pneumonia, and shingles can hit older adults harder. Chronic conditions such as diabetes, heart disease, asthma, and kidney disease raise the stakes further.
        </p>
        <p className="mt-4">
          Vaccination also protects the people around you: infants too young to be immunized, pregnant people, and those with weakened immune systems.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Vaccines Most Adults Should Know About</h2>
        <p>
          Recommendations come from public health bodies such as the CDC and are updated regularly, so your doctor will tailor them to you. In general, these are the main ones discussed in adult care:
        </p>
        <ul className="mt-4 space-y-3 list-disc pl-6">
          <li><strong>Influenza:</strong> recommended yearly for nearly all adults, because the virus changes and immunity declines.</li>
          <li><strong>COVID-19:</strong> recommendations change as the virus and evidence evolve.</li>
          <li><strong>Tdap/Td:</strong> protects against tetanus, diphtheria, and pertussis, with boosters about every 10 years.</li>
          <li><strong>Shingles (recombinant zoster):</strong> generally recommended for adults starting at age 50.</li>
          <li><strong>Pneumococcal:</strong> advised for older adults and for younger adults with certain health conditions.</li>
          <li><strong>RSV:</strong> available for older adults and others at higher risk of severe illness.</li>
          <li><strong>Hepatitis A and B, HPV, MMR:</strong> depending on age, history, occupation, and risk factors.</li>
        </ul>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Immunity is not always lifelong.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Shows</h2>
        <p>
          Decades of research show that vaccines substantially reduce the risk of severe disease, hospitalization, and complications. The recombinant shingles vaccine, for example, has been shown in clinical trials to prevent the large majority of shingles cases and reduce the risk of long-lasting nerve pain. Annual flu vaccination lowers the risk of severe illness, even in years when it does not fully prevent infection.
        </p>
        <p className="mt-4">
          Side effects are usually mild: a sore arm, fatigue, or a low fever for a day or two. Serious reactions are rare. If you have had a severe allergic reaction to a vaccine or its ingredients, tell your doctor so the right choices can be made.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Should Pay Extra Attention</h2>
        <p>
          Some situations call for a closer look at your vaccines: pregnancy or planning a pregnancy, a weakened immune system, chronic illness, caring for newborns or older relatives, healthcare or school work, and international travel. If you do not know your vaccine history, that is common and not a problem. Your doctor can help decide what to confirm, what to repeat, and what to update.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps to Get Current</h2>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">
              {check}
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p>
          Staying current on vaccines is one of the simplest, most effective forms of prevention. If you are unsure where you stand, call the office to talk about your history and which vaccines make sense for you. A personal review takes the guesswork out and helps you stay protected through every stage of life.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
              <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</p>
              <p className="text-[var(--color-ink)] text-sm leading-relaxed">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}