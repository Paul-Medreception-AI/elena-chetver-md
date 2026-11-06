import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Why Sleep Matters for Your Overall Health',
  description: 'Learn how sleep affects your heart, mood, weight, and immunity, plus practical, evidence-based tips for better rest and when to talk with a primary care doctor.',
  alternates: { canonical: '/blog/why-sleep-matters-for-your-overall-health' },
  openGraph: {
    title: 'Why Sleep Matters for Your Overall Health',
    description: 'Learn how sleep affects your heart, mood, weight, and immunity, plus practical, evidence-based tips for better rest and when to talk with a primary care doctor.',
    url: 'https://elenachetvermd.com/blog/why-sleep-matters-for-your-overall-health',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Why Sleep Matters for Your Overall Health',
    description: 'Learn how sleep affects your heart, mood, weight, and immunity, plus practical, evidence-based tips for better rest and when to talk with a primary care doctor.',
  },
}

const tips = [
  'Keep a consistent sleep and wake time, even on weekends.',
  'Get morning daylight and move your body during the day.',
  'Limit caffeine after midday and keep alcohol away from bedtime.',
  'Keep your bedroom cool, dark, and quiet.',
  'Put screens away 30 to 60 minutes before bed and build a calming wind-down routine.',
  'If you cannot sleep after about 20 minutes, get up and do something quiet until you feel drowsy.',
]

const related = [
  { href: '/blog', title: 'All Resources', text: 'Browse patient education articles from the practice.' },
  { href: '/services', title: 'Primary Care Services', text: 'See how primary care can support your long-term health.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out to talk about sleep or other health concerns.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-why-sleep-matters-for-your-overall-health.jpg" alt="Peaceful elderly couple sleeping together in bed, showing relaxation and comfort.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Why Sleep Matters for Your Overall Health</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You know the feeling: a night of poor sleep, and the next day everything is harder. Coffee barely helps, patience runs thin, and small problems feel enormous. Now imagine that feeling stretching across weeks or years. Sleep is not a luxury or a sign of laziness. It is one of the most important things your body does to repair, regulate, and protect itself, and when it goes wrong, nearly every part of your health can feel the effects.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Happens While You Sleep</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Sleep is an active process. Over the course of a night, your brain cycles through lighter sleep, deep slow-wave sleep, and REM (rapid eye movement) sleep. Deep sleep is when the body does much of its physical repair, including tissue growth and immune system support. REM sleep is closely tied to memory, learning, and emotional processing. Hormones that control appetite, stress, and blood sugar are also adjusted during these hours. Cutting sleep short interrupts all of this work.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Much Sleep Do Adults Need?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most adults do best with seven to nine hours of sleep per night. Needs vary a little from person to person, but regularly getting less than seven hours is associated with higher health risks. Quality matters as much as quantity. Eight hours in bed with frequent awakenings is not the same as eight hours of consolidated, restorative sleep.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Sleep problems affect people of every age, but they are especially common among shift workers, caregivers, people with chronic pain or anxiety, women during pregnancy and menopause, and adults managing other medical conditions.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Poor Sleep Does to Your Body</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Large studies have linked chronic short sleep to a wide range of problems. Here are some of the most well-documented:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            'Heart health: Insufficient sleep is associated with higher blood pressure, heart disease, and stroke risk.',
            'Blood sugar and weight: Sleep loss can raise hunger hormones, increase cravings, and reduce insulin sensitivity, raising the risk of type 2 diabetes and weight gain.',
            'Mood and mental health: Poor sleep is strongly connected with depression and anxiety, and the relationship works in both directions.',
            'Immunity: People who sleep less tend to get sick more often and may respond less strongly to vaccines.',
            'Thinking and safety: Attention, memory, reaction time, and decision making all decline, and drowsy driving is a real danger.',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Sleep is not a luxury or a sign of laziness.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Sleep Problems Worth Knowing About</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Insomnia, difficulty falling or staying asleep, is the most familiar issue. Obstructive sleep apnea is another common one, in which breathing repeatedly pauses during sleep. Signs include loud snoring, gasping or choking at night, morning headaches, and heavy daytime sleepiness. Restless legs syndrome, circadian rhythm disruption, and sleep problems related to medications, hormones, pain, or mental health can also play a role. Many of these are treatable once they are identified.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Better Sleep</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Small, consistent habits, often called sleep hygiene, are the foundation of better rest. Cognitive behavioral therapy for insomnia (CBT-I) is also considered a first-line treatment by many medical organizations and often works well without medication.
        </p>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Talk With a Doctor</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Consider a conversation with a primary care doctor if trouble sleeping lasts more than a few weeks, if you feel unrefreshed despite enough time in bed, if a partner notices you stop breathing or snore loudly, or if sleepiness interferes with work or driving. A visit can look at medications, medical conditions, mood, and lifestyle factors that may be contributing, and decide whether further testing or treatment makes sense.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          You do not have to simply push through exhaustion. If sleep has been slipping away from you, Elena Chetver, MD offers primary care in West Hollywood, CA. Call the office or use the contact page to start the conversation.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.25v13m0-13C10.8 5.5 9.2 5 7.5 5S4.2 5.5 3 6.25v13C4.2 18.5 5.8 18 7.5 18s3.3.5 4.5 1.25m0-13C13.2 5.5 14.8 5 16.5 5s3.3.5 4.5 1.25v13C19.8 18.5 18.2 18 16.5 18s-3.3.5-4.5 1.25" /></svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact the Practice</a>
        </div>
      </section>
    </main>
  )
}