import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Common Causes of Fatigue and When to Get Checked',
  description: 'Learn the most common causes of ongoing fatigue, from sleep and stress to thyroid and anemia, and the signs that mean it is time to see a doctor.',
  alternates: { canonical: '/blog/common-causes-of-fatigue-and-when-to-get-checked' },
  openGraph: {
    title: 'Common Causes of Fatigue and When to Get Checked',
    description: 'Learn the most common causes of ongoing fatigue, from sleep and stress to thyroid and anemia, and the signs that mean it is time to see a doctor.',
    url: 'https://elenachetvermd.com/blog/common-causes-of-fatigue-and-when-to-get-checked',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Common Causes of Fatigue and When to Get Checked',
    description: 'Learn the most common causes of ongoing fatigue, from sleep and stress to thyroid and anemia, and the signs that mean it is time to see a doctor.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Keep a consistent sleep and wake time, even on weekends.',
  'Limit caffeine after midday and alcohol close to bedtime.',
  'Move your body daily; even a 20-minute walk can lift energy.',
  'Eat regular meals with protein, fiber and iron-rich foods.',
  'Write down when fatigue is worst so you can share the pattern with your doctor.',
]

const redFlags = [
  'Fatigue lasting more than two to four weeks without a clear reason',
  'Unexplained weight loss or gain',
  'Shortness of breath, chest discomfort or a racing heartbeat',
  'Heavy periods, black stools or other signs of blood loss',
  'Persistent low mood, loss of interest or thoughts of self-harm',
  'Fever, night sweats or swollen glands',
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-common-causes-of-fatigue-and-when-to-get-checked.jpg" alt="A woman lying on a sofa showing visible stress and emotion, clutching a pillow.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Common Causes of Fatigue and When to Get Checked</h1>
          <p className="mt-6 text-sm text-white/70">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You slept eight hours and still woke up exhausted. The coffee wore off by ten, and by afternoon even simple tasks feel heavy. If that sounds familiar, you are far from alone. Fatigue is one of the most common reasons people seek primary care, and it is also one of the most frustrating, because it is real, it affects everything, and it rarely has a single obvious cause.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What fatigue actually is</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Everyone feels tired after a long day or a poor night of sleep. That kind of tiredness improves with rest. Fatigue is different: a persistent lack of energy, motivation or stamina that does not fully lift after rest and interferes with daily life. It can be physical, mental or both, and it is a symptom rather than a diagnosis. That means the task is to find what is driving it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Everyday causes that add up</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The most common explanations are often the least dramatic, and they frequently overlap.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          <strong>Sleep problems.</strong> Not just too little sleep, but poor quality sleep. Sleep apnea, restless legs and insomnia can leave you unrefreshed even after a full night. Loud snoring, gasping at night or morning headaches are clues worth mentioning.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          <strong>Stress, anxiety and depression.</strong> Ongoing stress keeps the body in a state of alert that is physically draining. Depression and anxiety commonly show up as exhaustion, sometimes before a person recognizes low mood.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          <strong>Lifestyle factors.</strong> Inactivity, irregular meals, heavy alcohol use, excess caffeine and long screen time at night all affect energy more than most people expect.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Fatigue is a symptom rather than a diagnosis.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Medical conditions that can cause fatigue</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          When rest and lifestyle changes do not help, a medical cause becomes more likely. Several are common and treatable:
        </p>
        <ul className="mt-4 space-y-3 text-[var(--color-ink)] leading-loose text-base list-none">
          <li className="flex gap-3">{check}<span><strong>Anemia and iron deficiency,</strong> especially in people with heavy periods, restricted diets or digestive conditions.</span></li>
          <li className="flex gap-3">{check}<span><strong>Thyroid disorders,</strong> particularly an underactive thyroid, which slows metabolism.</span></li>
          <li className="flex gap-3">{check}<span><strong>Diabetes or prediabetes,</strong> where blood sugar swings sap energy.</span></li>
          <li className="flex gap-3">{check}<span><strong>Vitamin deficiencies,</strong> such as low vitamin B12 or vitamin D.</span></li>
          <li className="flex gap-3">{check}<span><strong>Infections,</strong> including lingering effects after viral illnesses.</span></li>
          <li className="flex gap-3">{check}<span><strong>Heart, lung, kidney or liver conditions,</strong> which reduce how efficiently the body delivers energy.</span></li>
          <li className="flex gap-3">{check}<span><strong>Medication side effects,</strong> including some antihistamines, blood pressure medicines and sedatives.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the evidence says</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research consistently shows that most fatigue has more than one contributing factor, and that a careful history is often more useful than a long list of tests. Clinical guidance generally recommends starting with a conversation about sleep, mood, medications, diet, alcohol and physical activity, followed by a physical exam and targeted blood work. Common first-line tests include a complete blood count, thyroid function, blood sugar, and kidney, liver and electrolyte panels, with others added based on your symptoms. In a meaningful share of people, no single disease is found, and gradual improvements in sleep, activity and stress management make the difference.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical steps you can try first</h2>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base list-none">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to get checked</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Do not wait for fatigue to become unbearable. Consider scheduling a visit if you notice any of the following:
        </p>
        <ul className="mt-4 space-y-3 text-[var(--color-ink)] leading-loose text-base list-none">
          {redFlags.map((r) => (
            <li key={r} className="flex gap-3">{check}<span>{r}</span></li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          If you have chest pain, severe shortness of breath, fainting or thoughts of harming yourself, seek emergency care right away.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">You deserve an answer</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Being told to simply rest more is not much help when you have been tired for weeks. A thoughtful evaluation can rule out treatable causes and give you a plan. If fatigue is wearing you down in West Hollywood or anywhere else, call the office to talk through your symptoms and decide on next steps together.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-2xl text-[var(--color-ink)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Resources Hub</p>
              <p className="text-sm text-[var(--color-muted)]">Browse all patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Services</p>
              <p className="text-sm text-[var(--color-muted)]">See how primary care can support your health.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Contact the Office</p>
              <p className="text-sm text-[var(--color-muted)]">Reach out to discuss your symptoms.</p>
            </a>
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