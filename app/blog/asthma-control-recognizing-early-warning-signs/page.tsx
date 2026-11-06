import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Asthma Control: Recognizing Early Warning Signs',
  description: 'Learn the early warning signs that asthma is slipping out of control, what triggers to watch for, and when to call your primary care doctor.',
  alternates: { canonical: '/blog/asthma-control-recognizing-early-warning-signs' },
  openGraph: {
    title: 'Asthma Control: Recognizing Early Warning Signs',
    description: 'Learn the early warning signs that asthma is slipping out of control, what triggers to watch for, and when to call your primary care doctor.',
    url: 'https://elenachetvermd.com/blog/asthma-control-recognizing-early-warning-signs',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Asthma Control: Recognizing Early Warning Signs',
    description: 'Learn the early warning signs that asthma is slipping out of control, what triggers to watch for, and when to call your primary care doctor.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'A cough that is worse at night or in the early morning',
  'Needing your rescue inhaler more often than usual',
  'Waking at night with chest tightness or wheezing',
  'Getting short of breath during activities you usually manage easily',
  'Peak flow readings that drift lower than your personal best',
  'Difficulty finishing sentences or keeping up in conversation',
]

const steps = [
  'Keep a simple symptom diary for two weeks',
  'Write down your triggers and when symptoms flare',
  'Bring every inhaler to your visit so technique can be checked',
  'Ask for a written asthma action plan',
  'Review your plan whenever your symptoms change',
]

const related = [
  { href: '/blog', title: 'Browse All Resources', text: 'Patient education articles on everyday health topics.' },
  { href: '/services', title: 'Primary Care Services', text: 'See how ongoing primary care supports chronic conditions.' },
  { href: '/contact', title: 'Contact the Office', text: 'Reach out to ask questions about your breathing and care.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-asthma-control-recognizing-early-warning-signs.jpg" alt="Man using an inhaler for respiratory health indoors.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Asthma Control: Recognizing Early Warning Signs</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You wake at 3 a.m. with a tight chest and a cough that will not settle. You reach for your inhaler, and it helps, but it is the third time this week. Many people with asthma shrug off moments like this as a bad night. In truth, they are often the first signals that asthma is slipping out of control, and noticing them early can keep a small flare from becoming an emergency.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Asthma Control Really Means</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Asthma is a chronic condition in which the airways become inflamed and sensitive. During a flare, the muscles around the airways tighten, the lining swells, and extra mucus is produced. Air moves in and out with difficulty. Well-controlled asthma means you have few symptoms, sleep through the night, stay active, and rarely need quick-relief medicine. Control is not fixed, though. It can change with seasons, infections, stress, and exposure to triggers.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Asthma can begin at any age. It affects children and adults, and it often appears alongside allergies, eczema, or a family history of the condition. Adults can develop asthma for the first time after respiratory infections, workplace exposures, or hormonal changes. Because symptoms can be mild or intermittent, many adults live with undiagnosed or undertreated asthma for years.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Early Warning Signs to Watch For</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Before a serious attack, the body often gives hints. Paying attention to these changes gives you time to act:
        </p>
        <ul className="space-y-3 mb-6">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              {check}
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Other subtle clues include frequent throat clearing, unusual fatigue, itchy or watery eyes, and a feeling that you cannot take a satisfying deep breath. Some people notice these changes a day or two before a flare.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
          Needing your rescue inhaler more often than usual is one of the clearest signs that your asthma needs attention.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Tells Us</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Guidelines from groups such as the Global Initiative for Asthma and the National Heart, Lung, and Blood Institute emphasize that frequent symptoms and heavy reliance on rescue inhalers are linked to a higher risk of severe attacks. Asthma is driven largely by airway inflammation, which is why many people benefit from daily controller medicine rather than relying only on quick-relief treatment. Studies also show that written action plans, correct inhaler technique, and regular follow-up are associated with fewer emergency visits and better day-to-day control.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Triggers</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Knowing your triggers makes warning signs easier to interpret. Frequent culprits include pollen, dust mites, pet dander, mold, smoke, air pollution, cold air, strong scents, exercise, and viral colds. Heartburn and some medicines can also play a role. A symptom diary helps reveal patterns you might otherwise miss.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <ul className="space-y-3 mb-6">
          {steps.map((s) => (
            <li key={s} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              {check}
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A peak flow meter can add objective information. Record your best reading when you feel well, then compare it with daily numbers. A steady drop can signal trouble before you feel it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Urgent Care</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Call emergency services if you have severe shortness of breath, cannot speak in full sentences, notice blue or gray lips, or find that your rescue inhaler gives little or no relief. Do not wait to see if it passes. Anything that feels like a life-threatening breathing problem deserves immediate help.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you recognize these warning signs in yourself or someone you love, you do not have to simply live with them. A primary care visit can review your symptoms, check inhaler technique, look at your triggers, and adjust your plan. Call the office to talk about your breathing and how to keep asthma under control.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
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
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}