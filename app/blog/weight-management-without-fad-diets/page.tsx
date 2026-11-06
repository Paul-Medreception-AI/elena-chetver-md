import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weight Management Without Fad Diets',
  description: 'Why fad diets fail and what works instead: sustainable habits, sleep, activity, medical factors and steady support for lasting weight management.',
  alternates: { canonical: '/blog/weight-management-without-fad-diets' },
  openGraph: {
    title: 'Weight Management Without Fad Diets',
    description: 'Why fad diets fail and what works instead: sustainable habits, sleep, activity, medical factors and steady support for lasting weight management.',
    url: 'https://elenachetvermd.com/blog/weight-management-without-fad-diets',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Weight Management Without Fad Diets',
    description: 'Why fad diets fail and what works instead: sustainable habits, sleep, activity, medical factors and steady support for lasting weight management.',
  },
}

const tips = [
  'Build meals around vegetables, lean protein, whole grains and healthy fats',
  'Aim for steady movement most days, including walking and strength work',
  'Protect your sleep, since short sleep raises hunger hormones',
  'Track one or two habits rather than every calorie',
  'Plan for setbacks so one hard week does not become quitting',
  'Ask about medical contributors such as thyroid, medications and mood',
]

const related = [
  { href: '/blog', label: 'All Resources', text: 'Browse more patient education articles from the practice.' },
  { href: '/services', label: 'Primary Care Services', text: 'See how ongoing primary care supports your long-term health.' },
  { href: '/contact', label: 'Contact the Office', text: 'Reach out to talk about your health goals.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Weight Management Without Fad Diets</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-weight-management-without-fad-diets.jpg"} alt={"A fork entwined with a blue measuring tape, symbolizing dieting and weight management."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you have ever started a diet with real hope, only to feel discouraged a few weeks later, you are far from alone. The problem is rarely willpower. Most fad diets are built for a short sprint, while weight is managed over a lifetime. This article explains why quick fixes tend to fail and what a more patient, evidence-based approach looks like.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Fad Diets Fall Short</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Fad diets usually promise fast results by cutting entire food groups, severely limiting calories or relying on a single &quot;miracle&quot; food or supplement. They can produce quick scale changes, much of it water and some of it muscle. But restrictive plans are hard to follow, and the body responds to rapid loss by increasing hunger and slowing energy use.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research on long-term outcomes consistently shows that many people regain much of the weight they lose on highly restrictive plans. That cycle can also affect mood and your relationship with food, which is why the approach matters as much as the goal.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Weight concerns touch people of every age and background. Weight is shaped by genetics, hormones, sleep, stress, medications, food access, work schedules and family history. Seeing weight as a health topic influenced by many factors, rather than a personal failing, is often the first helpful shift.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters for Your Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Excess weight is associated with higher risk of type 2 diabetes, high blood pressure, sleep apnea, joint pain and heart disease. The encouraging news is that modest changes help. Studies show that losing even 5 to 10 percent of body weight can improve blood pressure, blood sugar and cholesterol. You do not need a dramatic transformation to benefit.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Weight is managed over a lifetime, not in a sprint.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Supports</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          The strongest evidence favors sustainable patterns over named diets. Eating patterns rich in vegetables, fruit, legumes, whole grains and lean protein, such as a Mediterranean-style approach, are linked to better long-term health. Regular physical activity supports weight maintenance and protects muscle and bone. Behavioral support, including goal setting and regular check-ins, improves results.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Sleep and stress matter too. Poor sleep can increase appetite and cravings, and chronic stress can influence eating habits. Addressing these is not a distraction from weight management; it is part of it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Start Now</h2>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When Medical Factors Play a Role</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Sometimes weight changes are connected to an underlying condition or a medication. Thyroid disorders, insulin resistance, polycystic ovary syndrome, depression and some prescriptions can all influence weight. A clinician can review your history, order appropriate tests and discuss whether medical treatment options make sense for you. Having this conversation is not an admission of failure; it is using all the tools available.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting Support</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Lasting change goes better with a partner who knows your history and will adjust the plan as life changes. If you would like to talk through your goals without judgment, call the office or send a message through the contact page. Together we can build a plan that fits your life instead of fighting it.
        </p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
            </svg>
          </div>
          <div>
            <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Elena Chetver, MD</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.label}</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center px-6">
        <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
        <p className="mb-8 text-white/80">We are here to help.</p>
        <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Office</a>
      </section>
    </main>
  )
}