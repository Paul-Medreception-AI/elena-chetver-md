import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Heart Health Habits for Every Age',
  description: 'Practical, evidence-based heart health habits for your 20s through your 70s and beyond, from movement and nutrition to screenings and sleep.',
  alternates: { canonical: '/blog/heart-health-habits-for-every-age' },
  openGraph: {
    title: 'Heart Health Habits for Every Age',
    description: 'Practical, evidence-based heart health habits for your 20s through your 70s and beyond, from movement and nutrition to screenings and sleep.',
    url: 'https://elenachetvermd.com/blog/heart-health-habits-for-every-age',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Heart Health Habits for Every Age',
    description: 'Practical, evidence-based heart health habits for your 20s through your 70s and beyond, from movement and nutrition to screenings and sleep.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Move your body most days, aiming for about 150 minutes of moderate activity each week.',
  'Build meals around vegetables, fruit, whole grains, legumes, fish, nuts and olive oil.',
  'Do not smoke or vape, and limit alcohol.',
  'Protect your sleep, with a regular schedule and about seven to nine hours for most adults.',
  'Know your numbers: blood pressure, cholesterol and blood sugar.',
  'Find healthy ways to manage stress, such as walking, breathing exercises or time with friends.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Health Resources', text: 'Explore more patient education articles from the practice.' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services', text: 'See how ongoing primary care supports prevention and long-term health.' },
  { href: '/contact', label: 'Contact', title: 'Talk With the Office', text: 'Reach out to ask about a visit or discuss your heart health goals.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-heart-health-habits-for-every-age.jpg" alt="Female doctor in scrubs holding a paper heart symbol, smiling with a stethoscope around her neck.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Heart Health Habits for Every Age</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most of us know someone whose life changed in a single afternoon because of a heart event. A parent, a coworker, a friend who seemed perfectly fine. The hopeful truth is that the heart responds remarkably well to everyday choices, and it is never too early or too late to begin caring for it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Heart Health Matters at Every Stage</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Cardiovascular disease, which includes heart attack, stroke, heart failure and high blood pressure, remains a leading cause of death among adults in the United States. It affects women and men, and it can affect people from many backgrounds. Yet much of the risk is shaped over decades by habits, blood pressure, cholesterol, blood sugar and family history. Because the changes build slowly and often cause no symptoms, prevention works best when it starts early and continues for life.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">In Your 20s and 30s: Build the Foundation</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Younger adults rarely think about their hearts, but this is when habits settle in. Research following people over many years shows that healthy blood pressure, cholesterol and weight in early adulthood are linked with lower risk of heart disease later on.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Focus on regular movement you actually enjoy, avoid tobacco and vaping, and notice how sleep and stress affect you. It is also a good time to learn your family history. A parent or sibling who developed heart disease at a young age is important information to share with your doctor.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">In Your 40s and 50s: Watch the Numbers</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Midlife is when blood pressure, cholesterol and blood sugar often begin to drift upward. Busy careers, family responsibilities and hormonal changes, including menopause, can all play a part. High blood pressure is especially sneaky because it usually causes no symptoms while it quietly strains the arteries.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Regular checks let you and your doctor catch changes early, when lifestyle adjustments may be enough. Strength training twice a week helps preserve muscle and supports healthy blood sugar. Eating patterns such as the Mediterranean diet have been associated with fewer cardiovascular events in large studies.
        </p>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          High blood pressure is especially sneaky because it usually causes no symptoms while it quietly strains the arteries.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">In Your 60s and Beyond: Protect Independence</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Arteries naturally stiffen with age, and the risk of atrial fibrillation, heart failure and stroke rises. Staying active remains one of the most powerful tools. Walking, swimming, gardening and balance exercises all help the heart and lower the risk of falls.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Review your medications with your doctor at least once a year, since many older adults take several. Learn the warning signs of a heart attack and stroke: chest pressure, shortness of breath, pain in the arm, jaw or back, sudden weakness, trouble speaking or facial drooping. Call 911 right away if you notice them.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Habits That Help at Any Age</h2>
        <ul className="space-y-3 mt-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              {check}
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Small Steps Add Up</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not need a perfect plan. Studies consistently show that even modest improvements, such as a daily walk or swapping processed foods for whole foods, are associated with meaningful benefits. Pick one habit this week, make it easy, and build from there. Be kind to yourself along the way; consistency matters more than perfection.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting Personal Guidance</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Your risk depends on your history, your family, and your current health, so general advice only goes so far. If you have questions about blood pressure, cholesterol, or which screenings make sense for you, call the office to talk about a primary care visit in West Hollywood, CA. Together you can create a realistic plan for your heart at the stage of life you are in now.
        </p>
      </article>

      <div className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
            </svg>
          </div>
          <div>
            <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Elena Chetver, MD</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</p>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}