import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building a Healthy Eating Pattern That Lasts',
  description: 'Practical, evidence-based ways to build a healthy eating pattern you can keep for life, without strict diets, guilt or all-or-nothing rules.',
  alternates: { canonical: '/blog/building-a-healthy-eating-pattern-that-lasts' },
  openGraph: {
    title: 'Building a Healthy Eating Pattern That Lasts',
    description: 'Practical, evidence-based ways to build a healthy eating pattern you can keep for life, without strict diets, guilt or all-or-nothing rules.',
    url: 'https://elenachetvermd.com/blog/building-a-healthy-eating-pattern-that-lasts',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Building a Healthy Eating Pattern That Lasts',
    description: 'Practical, evidence-based ways to build a healthy eating pattern you can keep for life, without strict diets, guilt or all-or-nothing rules.',
  },
}

const tips = [
  'Add before you subtract: put one vegetable or fruit on the plate at each meal.',
  'Build meals around protein, fiber-rich plants and a modest amount of healthy fat.',
  'Plan two or three default meals you enjoy and can make without effort.',
  'Keep water within reach and notice how often you drink sugary beverages.',
  'Eat without screens at least once a day to notice hunger and fullness.',
  'Expect imperfect days and return to your pattern at the next meal.',
]

const related = [
  { title: 'Our Services', href: '/services', desc: 'See how primary care can support your long-term health goals.' },
  { title: 'Resources Hub', href: '/blog', desc: 'Browse more patient education articles from the practice.' },
  { title: 'Contact the Practice', href: '/contact', desc: 'Reach out with questions about your nutrition and health.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Building a Healthy Eating Pattern That Lasts</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-building-a-healthy-eating-pattern-that-lasts.jpg"} alt={"Kids seated around a table in a colorful classroom, eating snacks happily."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most of us have been there: a new diet begins on Monday with real determination, and by the following weekend it has quietly fallen apart. If that has left you feeling like you lack willpower, please know the problem is rarely you. It is usually the plan. Strict rules are hard to live with, and a healthy way of eating only helps if you can keep doing it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Healthy Eating Pattern Really Means</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A healthy eating pattern is the overall shape of what you eat over weeks and months, not a single meal or a list of forbidden foods. It includes what you choose most of the time, how regularly you eat, and how you relate to food. One dessert or one rushed lunch does not define your health. What you do repeatedly does.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Quick-Fix Diets So Often Fail</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Highly restrictive diets can work in the short term, but many people regain lost weight over time. Strict plans can increase hunger and cravings, take the pleasure out of meals, and set up an all-or-nothing mindset in which one slip feels like total failure. They also tend to ignore real life: work schedules, family meals, budgets, culture and celebrations.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-6">
          Lasting change usually comes from smaller adjustments that fit the life you already have.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Tells Us</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Large studies of eating patterns, including Mediterranean-style and DASH-style diets, consistently link them with lower risk of heart disease, type 2 diabetes and some other chronic conditions. What these patterns share is more than any single rule: plenty of vegetables, fruits, whole grains, beans, nuts and fish, with less highly processed food, added sugar and excess sodium.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-6">
          Notice that none of them require perfection. They describe a direction, and that direction can be adapted to many cuisines, preferences and budgets.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Lasting change usually comes from smaller adjustments that fit the life you already have.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Start This Week</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Pick one or two of these rather than all of them. Once a habit feels automatic, add another.
        </p>
        <ul className="space-y-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-relaxed">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Make It Fit Your Life and Your Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The right pattern looks different for each person. Someone managing high blood pressure, prediabetes, kidney disease, digestive problems or food allergies may need specific adjustments. Medications, pregnancy, age and a history of disordered eating also matter. Personalized guidance helps you avoid advice that works for others but not for you.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Be Kind to Yourself Along the Way</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Stress, poor sleep, grief and busy seasons all affect appetite and choices. Progress is rarely a straight line. When a week goes sideways, skip the guilt and simply make the next meal a supportive one. Consistency over years matters far more than any single day.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Ask for Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you are unsure where to begin, are managing a chronic condition, or find that food feels stressful or out of control, talk with a clinician. Primary care is a good place to start a conversation about nutrition, goals and any related testing. To discuss your questions, call the office or send a message through the contact page.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-2xl text-[var(--color-ink)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Practice</a>
        </div>
      </section>
    </main>
  )
}