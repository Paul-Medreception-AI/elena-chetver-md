import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Managing Stress for a Healthier Body',
  description: 'Learn how chronic stress affects your body and practical, evidence-based ways to manage it, plus when to talk with a primary care doctor.',
  alternates: { canonical: '/blog/managing-stress-for-a-healthier-body' },
  openGraph: {
    title: 'Managing Stress for a Healthier Body',
    description: 'Learn how chronic stress affects your body and practical, evidence-based ways to manage it, plus when to talk with a primary care doctor.',
    url: 'https://elenachetvermd.com/blog/managing-stress-for-a-healthier-body',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Managing Stress for a Healthier Body',
    description: 'Learn how chronic stress affects your body and practical, evidence-based ways to manage it, plus when to talk with a primary care doctor.',
  },
}

const tips = [
  'Move your body most days, even a brisk 20-minute walk counts',
  'Protect sleep with a consistent bedtime and a screen-free wind-down',
  'Practice slow breathing for a few minutes when tension builds',
  'Stay connected with people who make you feel supported',
  'Limit alcohol, nicotine and late-day caffeine, which can amplify anxiety',
  'Set boundaries around work, news and social media',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Patient Resources', text: 'Browse all of our health education articles.' },
  { href: '/services', label: 'Services', title: 'Primary Care Services', text: 'See how primary care can support your whole health.' },
  { href: '/contact', label: 'Contact', title: 'Talk With the Practice', text: 'Reach out to ask about your own concerns.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-managing-stress-for-a-healthier-body.jpg" alt="Woman practicing yoga poses in a bright living room, promoting relaxation and wellness.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Managing Stress for a Healthier Body</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="text-lg">You lie awake at 2 a.m. replaying tomorrow's to-do list. Your shoulders ache, your stomach is unsettled, and you cannot remember the last time you felt truly relaxed. If this sounds familiar, you are far from alone. Stress is a normal part of life, but when it never switches off, it can quietly shape your physical health in ways that are easy to miss.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Stress Does Inside the Body</h2>
        <p>When you face a threat, real or imagined, your brain signals the adrenal glands to release hormones such as adrenaline and cortisol. Your heart beats faster, blood pressure rises, breathing quickens and blood sugar climbs. This "fight or flight" response is useful in short bursts, helping you react to an emergency or meet a deadline.</p>
        <p className="mt-4">The trouble begins when the alarm keeps ringing. Ongoing work pressure, caregiving, financial worry, grief or relationship strain can keep stress hormones elevated for weeks or months. The body was designed to recover afterward, and without recovery it begins to wear down.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p>Everyone experiences stress, but certain groups carry a heavier load: people juggling demanding jobs, parents and caregivers, those managing chronic illness, and anyone going through major life change. Stress does not look the same in everyone. Some people feel irritable or anxious, while others notice mostly physical symptoms such as headaches, muscle tension, fatigue or digestive upset.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters for Your Health</h2>
        <p>Research has linked long-term stress with a range of health concerns. Large studies and reviews suggest chronic stress is associated with higher risk of high blood pressure and cardiovascular disease, and it can worsen sleep, mood and immune function. Stress may also affect behavior: many people under pressure eat less well, move less, drink more alcohol or skip medical care.</p>
        <p className="mt-4">Common signs that stress may be taking a toll include:</p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Trouble falling or staying asleep</li>
          <li>Frequent headaches, jaw clenching or muscle tightness</li>
          <li>Stomach pain, nausea or changes in appetite</li>
          <li>Racing heart or feeling constantly on edge</li>
          <li>Low mood, difficulty concentrating or feeling overwhelmed</li>
        </ul>
        <p className="mt-4">These symptoms can also have other medical causes, which is why it is wise not to assume everything is "just stress."</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The body was designed to recover afterward, and without recovery it begins to wear down.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Supports</h2>
        <p>Several approaches have good research behind them. Regular physical activity lowers stress hormones and improves mood and sleep. Mindfulness-based practices and slow, diaphragmatic breathing can calm the nervous system and have been shown to reduce anxiety symptoms. Cognitive behavioral therapy helps people reshape unhelpful thought patterns, and strong social support is consistently associated with better health outcomes.</p>
        <p className="mt-4">None of these require perfection. Small, repeatable habits tend to work better than dramatic overhauls.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Lower Stress</h2>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>
        <p className="mt-6">Start with one or two changes. Consistency matters more than intensity, and it is fine to build slowly.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p>Reach out to a healthcare professional if stress is interfering with daily life, sleep or relationships, if you are relying on alcohol or other substances to cope, or if you have physical symptoms that do not improve. A primary care visit can help sort out whether symptoms are stress-related or have another cause, check things like blood pressure, and connect you with counseling or other support when appropriate. If you ever have thoughts of harming yourself, call or text 988 in the United States, or call 911 right away.</p>
        <p className="mt-4">Feeling overwhelmed is not a personal failing. Caring for your stress is part of caring for your body, and support is available. If you would like to talk through what you are experiencing, call the office or send a message through our contact page.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
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
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</p>
                <p className="text-[var(--color-ink)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}