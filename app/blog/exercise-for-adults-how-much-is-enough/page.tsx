import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exercise for Adults: How Much Is Enough?',
  description: 'Learn how much exercise adults need each week, what counts, and practical ways to build movement into a busy life, from a primary care perspective.',
  alternates: { canonical: '/blog/exercise-for-adults-how-much-is-enough' },
  openGraph: {
    title: 'Exercise for Adults: How Much Is Enough?',
    description: 'Learn how much exercise adults need each week, what counts, and practical ways to build movement into a busy life, from a primary care perspective.',
    url: 'https://elenachetvermd.com/blog/exercise-for-adults-how-much-is-enough',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Exercise for Adults: How Much Is Enough?',
    description: 'Learn how much exercise adults need each week, what counts, and practical ways to build movement into a busy life, from a primary care perspective.',
  },
}

const tips = [
  'Aim for at least 150 minutes of moderate activity each week, such as brisk walking.',
  'Add muscle-strengthening work for all major muscle groups on two or more days.',
  'Break activity into short bouts. Ten minutes at a time still counts.',
  'Sit less and stand up to move for a few minutes every hour.',
  'Choose activities you enjoy so you can keep them up for years.',
  'Increase time or intensity gradually to lower your risk of injury.',
]

const related = [
  { href: '/blog', title: 'Browse All Resources', text: 'Explore more patient education articles from the practice.' },
  { href: '/services', title: 'Our Services', text: 'See the primary care services offered at the practice.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out with questions about your health and activity goals.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Exercise for Adults: How Much Is Enough?</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-exercise-for-adults-how-much-is-enough.jpg"} alt={"Middle-aged woman working out on gym machine for a healthy lifestyle."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="text-lg">
          You know you should exercise more. Maybe you have started and stopped a dozen times, or you wonder whether your daily errands count at all. The good news is that the answer to &quot;how much is enough?&quot; is more forgiving than most people expect, and even small changes can make a real difference to how you feel and how you age.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the guidelines recommend</h2>
        <p>
          Major health organizations, including the World Health Organization and the U.S. Department of Health and Human Services, give similar advice for most adults. Aim for at least 150 minutes of moderate-intensity aerobic activity each week, or 75 minutes of vigorous activity, or a combination of the two. On top of that, include muscle-strengthening activities on two or more days a week.
        </p>
        <p className="mt-4">
          Moderate intensity means your heart rate rises and you breathe harder, but you can still talk. Brisk walking, cycling on level ground, water aerobics and doubles tennis all fit. Vigorous activity, such as running or swimming laps, leaves you able to say only a few words at a time.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why movement matters</h2>
        <p>
          Regular physical activity is one of the most powerful tools for long-term health. Large studies consistently link it with a lower risk of heart disease, type 2 diabetes, stroke, several cancers and depression. It also helps with sleep, blood pressure, weight management, bone strength and thinking skills as we age.
        </p>
        <p className="mt-4">
          The benefits begin early. Research suggests that the biggest gains in lowered risk come when people move from doing nothing to doing a little. If you are currently inactive, you do not need to reach the full target to benefit.
        </p>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          If you are currently inactive, you do not need to reach the full target to benefit.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who needs to pay attention</h2>
        <p>
          Everyone benefits, but certain groups should think carefully about their routine. Adults who sit for long stretches at a desk, people with a family history of heart disease or diabetes, and those managing chronic conditions such as high blood pressure or arthritis often gain the most. Older adults should add balance training, like standing on one foot or tai chi, to reduce the risk of falls.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What counts as exercise</h2>
        <p>
          Exercise does not have to mean a gym membership. Gardening, dancing, taking the stairs, playing with children, walking a dog and carrying groceries all add up. Strength work can be done with body weight, resistance bands, or free weights. What matters is that you move regularly and challenge your muscles and heart a little.
        </p>
        <p className="mt-4">
          Sitting less matters too. Long uninterrupted sitting is linked with worse health outcomes, even in people who exercise. Standing, stretching or walking for a few minutes each hour is a simple habit worth building.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical ways to get started</h2>
        <ul className="space-y-4 mt-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to check in with a doctor</h2>
        <p>
          Most adults can safely begin walking or other light activity. Talk with a clinician before starting a vigorous program if you have heart disease, diabetes, lung disease or kidney problems, if you have been inactive for a long time, or if you are pregnant. Stop and seek care if you notice chest pain, severe shortness of breath, dizziness or fainting during activity.
        </p>
        <p className="mt-4">
          If you are unsure where to begin, a primary care visit is a good place to talk through your health history, set realistic goals and build a plan that fits your life. To discuss your own activity plan, call the office or send a message through the contact page.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
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
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact the Practice</a>
        </div>
      </section>
    </main>
  )
}