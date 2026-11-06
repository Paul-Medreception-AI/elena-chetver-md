import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gout: Understanding Flares and Prevention',
  description: 'Learn what causes gout flares, who is at risk, how gout is treated, and practical steps that can lower the chance of another painful attack.',
  alternates: { canonical: '/blog/gout-understanding-flares-and-prevention' },
  openGraph: {
    title: 'Gout: Understanding Flares and Prevention',
    description: 'Learn what causes gout flares, who is at risk, how gout is treated, and practical steps that can lower the chance of another painful attack.',
    url: 'https://elenachetvermd.com/blog/gout-understanding-flares-and-prevention',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Gout: Understanding Flares and Prevention',
    description: 'Learn what causes gout flares, who is at risk, how gout is treated, and practical steps that can lower the chance of another painful attack.',
  },
}

const tips = [
  'Drink plenty of water throughout the day',
  'Limit alcohol, especially beer and spirits',
  'Cut back on sugary drinks containing fructose',
  'Moderate red meat, organ meats and some shellfish',
  'Work toward a healthy weight gradually',
  'Take prescribed urate-lowering medicine consistently',
]

const related = [
  { href: '/blog', title: 'All Resources', text: 'Browse every patient education article from the practice.' },
  { href: '/conditions', title: 'Conditions We Care For', text: 'Explore the health conditions addressed in primary care.' },
  { href: '/services', title: 'Primary Care Services', text: 'See how ongoing primary care can support your health.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Gout: Understanding Flares and Prevention</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-gout-understanding-flares-and-prevention.jpg"} alt={"A professional doctor holding a stethoscope, focusing on hands and medical tools."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up text-lg">
          You go to bed feeling fine, and at 3 a.m. your big toe is hot, swollen and so tender that even a bedsheet is unbearable. For many people, this is how gout announces itself. It is sudden, intense and frightening, and it often comes back. The good news is that gout is one of the most treatable forms of arthritis, and understanding it is the first step toward fewer flares.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Gout?</h2>
        <p>
          Gout is a form of inflammatory arthritis caused by too much uric acid in the blood. Uric acid forms when the body breaks down purines, substances found in your own cells and in certain foods. When levels stay high, needle-shaped urate crystals can build up in and around joints. The immune system reacts to these crystals, producing the sudden pain, redness, warmth and swelling known as a flare.
        </p>
        <p className="mt-4">
          The big toe is the classic site, but gout can also affect the ankles, knees, heels, wrists, fingers and elbows. Flares often peak within 12 to 24 hours and may last several days to a couple of weeks, even without treatment.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>
          Gout is more common in men, and in women it becomes more likely after menopause. Risk rises with a family history of gout, obesity, high blood pressure, chronic kidney disease, diabetes and metabolic syndrome. Certain medicines, including some diuretics (water pills) and low-dose aspirin, can raise uric acid. Diet and lifestyle matter too, but genetics play a large role, so gout is never a matter of blame.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Flare Triggers</h2>
        <p>
          A flare can appear without warning, but several triggers are well recognized. These include alcohol (particularly beer and spirits), sugary drinks sweetened with fructose, large servings of red meat or some seafood, dehydration, recent surgery or illness, injury to a joint, and starting or stopping urate-lowering medicine. Rapid weight loss and crash diets can also set off an attack.
        </p>

        <blockquote className="animate-fade-up bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Gout is one of the most treatable forms of arthritis, and understanding it is the first step toward fewer flares.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Gout Is Diagnosed</h2>
        <p>
          Diagnosis starts with your symptoms, history and an exam of the affected joint. A blood test can measure uric acid, though levels may look normal during a flare, so one result does not settle the question. The most definitive test is examining fluid drawn from the joint for urate crystals. Imaging such as ultrasound or dual-energy CT may help in some cases. Because infection and other types of arthritis can look similar, a hot, swollen joint with fever should be evaluated promptly.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Treating a Flare and Preventing the Next One</h2>
        <p>
          Treatment has two separate goals. The first is calming a flare. Options commonly used include anti-inflammatory medicines (NSAIDs), colchicine, and short courses of corticosteroids. Starting treatment early usually works best, and the right choice depends on your kidney function, stomach, heart health and other medicines.
        </p>
        <p className="mt-4">
          The second goal is lowering uric acid over the long term. Guidelines from the American College of Rheumatology support urate-lowering therapy, most often allopurinol, for people with frequent flares, tophi (chalky deposits under the skin), joint damage or kidney stones. The usual target is a blood uric acid level below 6 mg/dL, which allows existing crystals to dissolve over time. Flares can actually increase in the first months of treatment, so doctors often add a low-dose preventive medicine during that period. Staying consistent is key, even when you feel well.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps That Help</h2>
        <p className="mb-4">Lifestyle changes support, but rarely replace, medical treatment. Helpful habits include:</p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          Gout also travels with other conditions, so managing blood pressure, blood sugar, cholesterol and kidney health is part of good care. Untreated, repeated flares can lead to permanent joint damage, which is why ongoing follow-up matters.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Help</h2>
        <p>
          If you have a sudden, severely painful joint, especially with fever or chills, seek care right away. If you have had one flare, or several, talk with a primary care doctor about whether long-term prevention makes sense for you. A personal plan can reduce attacks and protect your joints. To discuss your symptoms, call the office and ask about scheduling a visit with Elena Chetver, MD.
        </p>
      </article>

      <section className="bg-white px-6">
        <div className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m-5.25-5.25h10.5" />
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
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}