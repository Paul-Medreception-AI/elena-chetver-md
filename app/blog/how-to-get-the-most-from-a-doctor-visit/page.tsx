import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'How to Get the Most From a Doctor Visit',
  description: 'Practical, evidence-based tips to prepare for a doctor visit, communicate clearly, understand your plan and follow up so every appointment counts.',
  alternates: { canonical: '/blog/how-to-get-the-most-from-a-doctor-visit' },
  openGraph: {
    title: 'How to Get the Most From a Doctor Visit',
    description: 'Practical, evidence-based tips to prepare for a doctor visit, communicate clearly, understand your plan and follow up so every appointment counts.',
    url: 'https://elenachetvermd.com/blog/how-to-get-the-most-from-a-doctor-visit',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'How to Get the Most From a Doctor Visit',
    description: 'Practical, evidence-based tips to prepare for a doctor visit, communicate clearly, understand your plan and follow up so every appointment counts.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const prep = [
  'Your top two or three concerns, written in order of priority',
  'A list of every medication and supplement, including doses',
  'When symptoms started, what makes them better or worse',
  'Records or results from other clinicians or hospitals',
  'Questions about tests, treatments or next steps',
]

const after = [
  'Repeat the plan back in your own words to confirm it',
  'Ask what to watch for and when to call the office',
  'Write down medication changes and test orders',
  'Ask how you will receive results',
  'Schedule follow-up before you leave when possible',
]

const related = [
  { href: '/blog', title: 'All Resources', text: 'Browse every patient education article from the practice.' },
  { href: '/services', title: 'Primary Care Services', text: 'Learn about the care offered in West Hollywood, CA.' },
  { href: '/contact', title: 'Contact the Office', text: 'Reach out with questions or to start a conversation.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-how-to-get-the-most-from-a-doctor-visit.jpg" alt="Senior man consulting with female doctor in a colorful office setting.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">How to Get the Most From a Doctor Visit</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">You sit down on the exam table, the doctor asks how you are feeling, and your mind goes blank. Twenty minutes later you are in the parking lot remembering the one question you meant to ask. If that sounds familiar, you are far from alone. A doctor visit is short, it matters, and a little preparation can change how much you get out of it.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why preparation matters</h2>
        <p>Research on clinical communication has long shown that patients often leave appointments with unanswered questions, and that many forget a large share of what they were told soon afterward. Visits are also time-limited. When the first few minutes are spent searching for a medication name or trying to recall when a symptom began, there is less time for the things that matter most: understanding your health and making decisions together.</p>
        <p className="mt-4">Preparation does not mean being a perfect patient. It means giving your clinician a clear picture so the time you share is used well. This applies to everyone, whether you come in for a routine checkup, a new symptom, or ongoing management of a chronic condition.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Before the visit: what to bring and write down</h2>
        <p className="mb-4">Take ten minutes the day before to gather the basics. A short written list is more reliable than memory, especially when you feel anxious.</p>
        <ul className="space-y-3 animate-fade-up">
          {prep.map((p) => (
            <li key={p} className="flex gap-3">{check}<span>{p}</span></li>
          ))}
        </ul>
        <p className="mt-4">Bring your actual pill bottles if you can. Names and doses are easy to mix up, and over-the-counter products and supplements can interact with prescriptions in ways that are not obvious.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Start with what worries you most</h2>
        <p>It is common to save the biggest concern for the end of the visit, a pattern sometimes called the &quot;doorknob question.&quot; It might be a mood change, a lump, sexual health, or a fear that feels embarrassing. Clinicians have heard it all, and none of it is too small or too personal to raise.</p>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Say your most important concern in the first minute of the visit.
        </blockquote>

        <p>Say your most important concern in the first minute of the visit. If you have several issues, tell your clinician at the start so you can decide together what to cover now and what to schedule for another time. That is far better than a rushed conversation at the door.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Be specific and honest</h2>
        <p>Details help with diagnosis. Instead of &quot;I feel tired,&quot; try &quot;I have been exhausted for six weeks, I wake up unrefreshed, and my appetite has dropped.&quot; Describe location, timing, severity, and what you have already tried. Mention sleep, stress, alcohol, diet, and activity, because these often explain symptoms.</p>
        <p className="mt-4">Honesty matters just as much. If you stopped a medication because of side effects, missed doses, or cannot afford something, say so. Your clinician is not there to judge. Accurate information leads to a plan that fits your real life.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Ask questions until the plan makes sense</h2>
        <p>Useful questions include: What do you think is going on? What else could it be? Do I need testing, and how will it change what we do? What are the benefits and risks of this treatment? What happens if we wait? Studies on shared decision-making link patient involvement with better understanding and greater confidence in treatment choices.</p>
        <p className="mt-4 mb-4">Before you leave, make sure you understand the next steps:</p>
        <ul className="space-y-3 animate-fade-up">
          {after.map((a) => (
            <li key={a} className="flex gap-3">{check}<span>{a}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">After the visit: follow through</h2>
        <p>Review your notes the same day while the conversation is fresh. Fill prescriptions, book any tests, and put reminders on your calendar. If something is unclear, or a symptom changes or worsens, contact the office rather than waiting for the next appointment. If you ever have severe symptoms such as chest pain, trouble breathing, or signs of a stroke, seek emergency care right away.</p>
        <p className="mt-4">It can also help to bring a trusted friend or family member. A second set of ears catches details you might miss, and they can remind you of questions you wanted to ask.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Make every visit count</h2>
        <p>The best appointments feel like a conversation between two people working on the same problem. A short list, an honest account, and a few good questions go a long way. If you are looking for primary care in West Hollywood, CA, call the office to ask how Elena Chetver, MD can support your health, and bring your questions with you.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-ink)]">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}