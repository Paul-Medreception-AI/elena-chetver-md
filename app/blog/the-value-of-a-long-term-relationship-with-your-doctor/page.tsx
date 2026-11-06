import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'The Value of a Long-Term Relationship With Your Doctor',
  description: 'Why an ongoing relationship with a primary care doctor can improve prevention, trust and care, and how to build one that works for you.',
  alternates: { canonical: '/blog/the-value-of-a-long-term-relationship-with-your-doctor' },
  openGraph: {
    title: 'The Value of a Long-Term Relationship With Your Doctor',
    description: 'Why an ongoing relationship with a primary care doctor can improve prevention, trust and care, and how to build one that works for you.',
    url: 'https://elenachetvermd.com/blog/the-value-of-a-long-term-relationship-with-your-doctor',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'The Value of a Long-Term Relationship With Your Doctor',
    description: 'Why an ongoing relationship with a primary care doctor can improve prevention, trust and care, and how to build one that works for you.',
  },
}

const tips = [
  'Keep a running list of questions and concerns to bring to each visit.',
  'Be honest about habits, symptoms and worries, even the embarrassing ones.',
  'Share your goals, not just your problems, so care fits your life.',
  'Bring a list of medications and supplements, and update it often.',
  'Follow up when something is not working or you do not understand a plan.',
  'Schedule preventive visits on a regular basis, not only when you are ill.',
]

const related = [
  { href: '/blog', title: 'More Patient Resources', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Primary Care Services', text: 'See the kinds of care offered at the practice.' },
  { href: '/contact', title: 'Contact the Office', text: 'Reach out with questions about care in West Hollywood.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-the-value-of-a-long-term-relationship-with-your-doctor.jpg" alt="Nurse uses digital tablet for patient consultation and diagnosis in a clinical setting.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">The Value of a Long-Term Relationship With Your Doctor</h1>
          <p className="mt-6 text-sm text-white/70">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">Think about the last time you had to explain your entire health history to a stranger while a clock ticked in the background. Now imagine sitting across from someone who already knows your story, remembers what matters to you, and notices when something is off. That difference is the heart of a long-term relationship with your doctor, and it shapes your health in ways that are easy to overlook.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Long-Term Doctor Relationship Means</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Researchers call it continuity of care: seeing the same primary care clinician over time rather than moving between different providers for each concern. It is more than a repeated name on your chart. It is a shared history of conversations, test results, decisions and outcomes that builds into real understanding.</p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">Primary care is designed for this. Your primary care doctor is the one person who looks at the whole picture, including prevention, chronic conditions, mental health, medications and life circumstances, and helps connect the pieces.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Studies across many health systems have linked greater continuity with a primary care clinician to better outcomes. Patients with stronger, longer relationships tend to have higher satisfaction, better follow-through with preventive screenings, and better adherence to medications. Several large reviews have also associated continuity with fewer emergency department visits and fewer hospitalizations, and some have found lower mortality over time.</p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">These findings show association rather than proof that one thing causes another. Still, the pattern is consistent, and it makes intuitive sense: care works better when the person delivering it knows you.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Care works better when the person delivering it knows you.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Familiarity Improves Care</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">A doctor who has known you for years has a baseline. Subtle changes, such as weight shifts, a different mood, a slower pace or a new fatigue, stand out because they are compared against what is normal for you. That can lead to earlier detection of problems that might otherwise be dismissed as routine.</p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">Familiarity also reduces repeated tests and conflicting advice. Your doctor knows what has been tried, what you tolerated, and what did not work. Medication choices become safer because there is a clear record of allergies, side effects and interactions.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Trust Makes Honest Conversations Possible</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Many people hold back from sharing things that matter: sleep trouble, low mood, alcohol use, sexual health concerns, or fear about a symptom. Trust is what opens those conversations. When you feel known and not judged, you are more likely to speak up early, when problems are often easiest to address.</p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">Trust also supports shared decision-making. Instead of being handed a plan, you and your doctor weigh options together, in light of your values, your risks and your preferences. Plans built this way are more likely to be followed.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Benefits Most</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Everyone gains from continuity, but it is especially valuable for people managing chronic conditions such as high blood pressure, diabetes or thyroid disease; those taking several medications; people facing a serious diagnosis; and anyone who simply wants prevention to be a steady habit rather than an afterthought. Healthy people benefit too, because a relationship established now is ready when you need it.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Build and Strengthen the Relationship</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">A good relationship goes both ways. A few habits can help you get the most from it:</p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Start the Conversation</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">You do not need to wait for a crisis to find a doctor you can rely on. If you are in West Hollywood and would like to learn more about primary care with Elena Chetver, MD, call the office or send a message through the contact page. A relationship that lasts begins with a single conversation.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-2">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M6.75 12h10.5M3.75 12a8.25 8.25 0 1016.5 0 8.25 8.25 0 00-16.5 0z" /></svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-sm text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition border border-white/40">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}