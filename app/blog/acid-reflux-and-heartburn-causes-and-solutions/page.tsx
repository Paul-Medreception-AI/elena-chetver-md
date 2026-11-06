import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acid Reflux and Heartburn: Causes and Solutions',
  description: 'Learn what causes acid reflux and heartburn, who is at risk, which lifestyle changes help, and when symptoms deserve a visit with a primary care doctor.',
  alternates: { canonical: '/blog/acid-reflux-and-heartburn-causes-and-solutions' },
  openGraph: {
    title: 'Acid Reflux and Heartburn: Causes and Solutions',
    description: 'Learn what causes acid reflux and heartburn, who is at risk, which lifestyle changes help, and when symptoms deserve a visit with a primary care doctor.',
    url: 'https://elenachetvermd.com/blog/acid-reflux-and-heartburn-causes-and-solutions',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Acid Reflux and Heartburn: Causes and Solutions',
    description: 'Learn what causes acid reflux and heartburn, who is at risk, which lifestyle changes help, and when symptoms deserve a visit with a primary care doctor.',
  },
}

const tips = [
  'Eat smaller meals and stop eating two to three hours before lying down.',
  'Raise the head of your bed six to eight inches if night symptoms are common.',
  'Notice your personal triggers, such as fatty foods, chocolate, caffeine, alcohol, mint, or spicy dishes.',
  'Work toward a healthy weight, since even modest weight loss can ease symptoms.',
  'Quit smoking and limit alcohol, both of which relax the valve at the base of the esophagus.',
  'Avoid tight waistbands that squeeze the abdomen after meals.',
]

const warnings = [
  'Difficulty or pain when swallowing',
  'Unintended weight loss',
  'Persistent vomiting or vomiting blood',
  'Black, tarry, or bloody stools',
  'Chest pain with shortness of breath, sweating, or pain spreading to the arm or jaw (call 911)',
  'Symptoms more than twice a week despite treatment',
]

const related = [
  { href: '/blog', title: 'Resources Hub', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Primary Care Services', text: 'See how ongoing primary care supports your health.' },
  { href: '/contact', title: 'Contact the Office', text: 'Reach out with questions about your symptoms.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Acid Reflux and Heartburn: Causes and Solutions</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-acid-reflux-and-heartburn-causes-and-solutions.jpg"} alt={"Close-up of a doctor examining a patient's throat with a tongue depressor in a clinical setting."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          It starts as a warm, burning feeling behind the breastbone after a good dinner. Maybe it wakes you at 2 a.m., or you find yourself reaching for antacids every afternoon. Heartburn is so common that many people simply live with it, yet it can disrupt sleep, limit the foods you enjoy, and sometimes signal something that deserves attention. The good news is that most people can find real relief once they understand what is happening.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Acid Reflux and Heartburn?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Acid reflux happens when stomach contents flow backward into the esophagus, the tube that carries food from your mouth to your stomach. Heartburn is the burning sensation this causes. At the bottom of the esophagus sits a ring of muscle called the lower esophageal sphincter. It normally opens to let food through and then closes. When it relaxes at the wrong time or is weak, acid can splash upward and irritate the lining.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Occasional reflux is normal. When it happens regularly, typically twice a week or more, it may be gastroesophageal reflux disease, or GERD.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reflux affects people of every age, and surveys suggest that a substantial share of adults in the United States experience symptoms regularly. Risk is higher with obesity, pregnancy, smoking, and a hiatal hernia, in which part of the stomach pushes up through the diaphragm. Certain medications can also contribute, including some anti-inflammatory pain relievers, calcium channel blockers, and sedatives.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Causes and Triggers</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reflux rarely has a single cause. Large meals stretch the stomach and increase pressure on the valve. Lying down soon after eating removes gravity&apos;s help. Foods such as fried dishes, chocolate, peppermint, citrus, tomato, coffee, and alcohol are frequent culprits, though triggers differ from person to person.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Stress does not create acid, but it can make you more aware of discomfort and may lead to habits, such as late-night eating, that worsen symptoms.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Occasional reflux is normal.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Persistent acid exposure can inflame the esophagus, a condition called esophagitis. Over time, untreated reflux may lead to narrowing of the esophagus or changes in the lining known as Barrett&apos;s esophagus, which carries a small increased risk of esophageal cancer. Reflux can also cause chronic cough, hoarseness, throat clearing, and worsen asthma. Research consistently shows that lifestyle changes are an effective first step, and that medication can heal irritated tissue when needed.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps That Help</h2>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Medication Options</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Antacids neutralize acid quickly and suit occasional symptoms. H2 blockers, such as famotidine, reduce acid production for several hours. Proton pump inhibitors are stronger and heal the esophageal lining, but they are best used at the lowest effective dose and reviewed regularly with a clinician. Long-term use has been linked to concerns such as lower magnesium and vitamin B12 levels, so ongoing use should be a considered decision rather than a habit.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Care</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Heartburn can mimic cardiac chest pain, so never assume. Seek prompt evaluation for any of the following:
        </p>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {warnings.map((w) => (
            <li key={w} className="flex gap-3"><Check /><span>{w}</span></li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-8">
          If reflux is interrupting your sleep, your meals, or your peace of mind, you do not have to manage it alone. A primary care visit can sort out likely causes, review your medications, decide whether testing such as endoscopy is appropriate, and build a plan that fits your life. Call the office to start the conversation.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
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
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M6.75 12h10.5" />
                </svg>
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
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}