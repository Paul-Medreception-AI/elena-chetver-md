import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Understanding Your Blood Pressure Numbers',
  description: 'Learn what systolic and diastolic blood pressure numbers mean, how readings are categorized, and practical steps to measure and manage your blood pressure.',
  alternates: { canonical: '/blog/understanding-your-blood-pressure-numbers' },
  openGraph: {
    title: 'Understanding Your Blood Pressure Numbers',
    description: 'Learn what systolic and diastolic blood pressure numbers mean, how readings are categorized, and practical steps to measure and manage your blood pressure.',
    url: 'https://elenachetvermd.com/blog/understanding-your-blood-pressure-numbers',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Understanding Your Blood Pressure Numbers',
    description: 'Learn what systolic and diastolic blood pressure numbers mean, how readings are categorized, and practical steps to measure and manage your blood pressure.',
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const tips = [
  'Sit quietly for five minutes before measuring, with your back supported and feet flat on the floor.',
  'Rest your arm at heart level and use a properly sized, validated upper-arm cuff.',
  'Avoid caffeine, exercise and smoking for 30 minutes beforehand.',
  'Measure at the same times each day and record every reading.',
  'Take two readings a minute apart and note both.',
]

const habits = [
  'Eat more vegetables, fruits, whole grains and legumes, and cut back on heavily processed foods.',
  'Reduce sodium and favor potassium-rich foods unless your clinician has advised otherwise.',
  'Move your body: about 150 minutes of moderate activity each week is a common goal.',
  'Limit alcohol and avoid tobacco.',
  'Prioritize sleep and find sustainable ways to manage stress.',
  'Work toward a healthy weight; even modest loss can lower pressure.',
]

const related = [
  { href: '/blog', title: 'All Health Resources', text: 'Browse every patient education article from the practice.' },
  { href: '/services', title: 'Primary Care Services', text: 'See how ongoing primary care supports heart health.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out to ask about a visit or your questions.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-understanding-your-blood-pressure-numbers.jpg" alt="A healthcare professional checks a patient's blood pressure in a clinic in Lagos, Nigeria.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Understanding Your Blood Pressure Numbers</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>You sit down in the exam room, the cuff tightens around your arm, and a moment later someone reads out two numbers. Maybe they sound fine. Maybe they do not. Either way, many people leave without really knowing what those numbers mean for their health. Blood pressure often causes no symptoms at all, which is exactly why understanding it matters so much.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the two numbers mean</h2>
        <p>A blood pressure reading is written as one number over another, such as 120/80 mmHg. The top number, called systolic pressure, measures the force of blood against your artery walls when your heart beats. The bottom number, diastolic pressure, measures that force while your heart rests between beats. Both matter, and either one can be high on its own.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How readings are categorized</h2>
        <p>Guidelines from the American College of Cardiology and American Heart Association describe these general ranges for adults:</p>
        <ul className="my-4 space-y-2 list-disc pl-6">
          <li><strong>Normal:</strong> below 120/80 mmHg</li>
          <li><strong>Elevated:</strong> systolic 120 to 129 and diastolic below 80</li>
          <li><strong>Stage 1 hypertension:</strong> systolic 130 to 139 or diastolic 80 to 89</li>
          <li><strong>Stage 2 hypertension:</strong> systolic 140 or higher, or diastolic 90 or higher</li>
          <li><strong>Hypertensive crisis:</strong> above 180 and/or above 120, which needs urgent medical attention if symptoms such as chest pain, shortness of breath, or vision changes are present</li>
        </ul>
        <p>A diagnosis is rarely made from a single reading. Pressure naturally rises and falls through the day, so clinicians look at patterns across multiple measurements.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why blood pressure matters</h2>
        <p>Over time, high blood pressure strains the heart and damages the delicate lining of blood vessels. Large studies, including the SPRINT trial, have shown that lowering systolic pressure to more intensive targets in higher-risk adults reduced the rate of heart attack, stroke and heart failure. High blood pressure is also linked to kidney disease, vision problems and cognitive decline. Because it is so often silent, it is sometimes called a quiet risk factor.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Because it is so often silent, it is sometimes called a quiet risk factor.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who is affected</h2>
        <p>High blood pressure is common, and it becomes more likely with age. Family history, excess weight, limited physical activity, a high-sodium diet, heavy alcohol use, chronic stress, sleep apnea, diabetes and kidney disease can all raise risk. Younger adults are not immune, and pregnancy can bring its own blood pressure concerns. If any of this sounds familiar, that is not a failure on your part. It is simply useful information to act on.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting an accurate reading</h2>
        <p>Technique changes results more than most people expect. Home monitoring can give a fuller picture than occasional office checks, and it helps identify white coat effect, where pressure rises only in a medical setting. For the most reliable numbers:</p>
        <ul className="my-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>
        <p>Bring your log to your appointments so your clinician can see the trend rather than a single snapshot.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What you can do about it</h2>
        <p>Lifestyle changes are the foundation of blood pressure care, and for many people they make a meaningful difference. The DASH eating pattern, regular activity and reduced sodium have each been shown in trials to lower readings. Some people also need medication, and that is a reasonable, effective choice rather than a sign you have done something wrong.</p>
        <ul className="my-4 space-y-3">
          {habits.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>
        <p>Never stop or change a prescribed medication without talking to your clinician first.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the next step</h2>
        <p>Your numbers are a starting point for a conversation, not a verdict. If your readings have been above normal, if you are unsure how to interpret them, or if you simply have not had a check in a while, consider talking with a primary care clinician about a plan that fits your life. Call the office to start that conversation.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)]">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact the Practice</a>
        </div>
      </section>
    </main>
  )
}