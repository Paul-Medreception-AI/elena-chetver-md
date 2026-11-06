import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Headaches and Migraines: Identifying Your Triggers',
  description: 'Learn how to recognize common headache and migraine triggers, keep a useful diary, and know when to seek care from a primary care doctor in West Hollywood, CA.',
  alternates: { canonical: '/blog/headaches-and-migraines-identifying-your-triggers' },
  openGraph: {
    title: 'Headaches and Migraines: Identifying Your Triggers',
    description: 'Learn how to recognize common headache and migraine triggers, keep a useful diary, and know when to seek care from a primary care doctor in West Hollywood, CA.',
    url: 'https://elenachetvermd.com/blog/headaches-and-migraines-identifying-your-triggers',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Headaches and Migraines: Identifying Your Triggers',
    description: 'Learn how to recognize common headache and migraine triggers, keep a useful diary, and know when to seek care from a primary care doctor in West Hollywood, CA.',
  },
}

const tips = [
  'Write down the date, time and severity of every headache, along with what you ate, how you slept and what your day looked like.',
  'Note stress levels, screen time, weather changes and, if relevant, where you are in your menstrual cycle.',
  'Record every medication you take for the pain and how well it worked.',
  'Look for patterns over four to eight weeks rather than judging by a single episode.',
  'Change one thing at a time so you can tell what actually makes a difference.',
  'Bring your diary to your appointment so the visit can focus on real data.',
]

const related = [
  { href: '/blog', title: 'All Health Resources', desc: 'Browse every article in our patient education library.' },
  { href: '/services', title: 'Primary Care Services', desc: 'See how primary care can support your ongoing health.' },
  { href: '/contact', title: 'Contact the Office', desc: 'Call the office or send a message to start a conversation.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Headaches and Migraines: Identifying Your Triggers</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-headaches-and-migraines-identifying-your-triggers.jpg"} alt={"A woman holding her head in pain, indicating a severe headache outdoors in a sunny setting."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You are in the middle of a busy day when it starts: a dull ache behind the eyes, a shimmer at the edge of your vision, or a pulse that builds until light and sound become unbearable. Headaches can derail work, family time and sleep, and many people live with them for years without understanding why they keep coming back. The good news is that for many people, a clearer picture of personal triggers makes headaches easier to manage.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Headache or migraine? Understanding the difference</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Headache is a broad term. Tension-type headaches are the most common and usually feel like a tight band or steady pressure on both sides of the head. Migraine is a neurological condition that often causes throbbing pain on one side, along with nausea, sensitivity to light and sound, and sometimes an aura, such as flashing lights or blind spots, before the pain begins. Cluster headaches are less common, but they cause severe pain around one eye in repeated episodes.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who is affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Headache disorders affect people of every age. Migraine is estimated to affect roughly one in seven people worldwide, and it is more common in women, particularly during the years of hormonal change. It also tends to run in families. Because migraine is so often dismissed as "just a bad headache," many people go years without a diagnosis or an effective plan.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common triggers worth knowing</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A trigger is something that makes an attack more likely in a susceptible person. Triggers vary widely, and what affects one person may have no effect on another. Frequently reported ones include:
        </p>
        <ul className="my-6 space-y-2 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li>Irregular or insufficient sleep, as well as oversleeping</li>
          <li>Emotional stress, and the "let-down" period after stress ends</li>
          <li>Skipped meals, dehydration and long gaps between eating</li>
          <li>Caffeine excess or sudden caffeine withdrawal</li>
          <li>Alcohol, especially red wine</li>
          <li>Bright or flickering lights, strong smells and loud noise</li>
          <li>Hormonal shifts around menstruation, pregnancy or menopause</li>
          <li>Weather and barometric pressure changes</li>
          <li>Neck and shoulder tension, often from long hours at a desk</li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Food triggers are often overstated. Research suggests that cravings in the early phase of a migraine can be mistaken for causes, so it helps to confirm a suspected food trigger over several episodes before cutting it out.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Look for patterns over four to eight weeks rather than judging by a single episode.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How a headache diary helps</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Memory is unreliable when you are in pain. A simple diary, on paper or in a notes app, is one of the most useful tools for finding your pattern, and clinicians commonly recommend one. Here is what to track:
        </p>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Everyday steps that may reduce attacks</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Once you know your patterns, small habits can make a real difference. Keep consistent sleep and wake times, eat regular meals, drink water throughout the day, and keep caffeine steady. Regular aerobic exercise, relaxation practices and stress management have evidence behind them for reducing frequency. If you work at a screen, take breaks and check your posture and lighting.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Be careful with over-the-counter pain relievers. Using them more than a couple of days per week can lead to medication-overuse headache, a cycle in which the treatment itself keeps the pain going. If you find yourself reaching for pills often, that is a good reason to talk with a clinician.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When a headache needs prompt attention</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most headaches are not dangerous, but some signs call for urgent evaluation. Seek emergency care for a sudden, explosive headache, a headache with fever and stiff neck, confusion, weakness, trouble speaking, vision loss, fainting, or a headache following a head injury. Make an appointment soon if your headaches are new after age 50, are steadily worsening, wake you from sleep, or change in character.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting help that fits you</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not have to simply endure frequent headaches. A primary care visit can review your history, look for contributing factors such as sleep problems, blood pressure, medications or mood, and discuss both acute and preventive treatment options. If you live in or near West Hollywood, CA and your headaches are affecting your life, call the office to talk about next steps. Bring your diary, and we can build a plan around what you have learned.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path strokeLinecap="round" d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
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
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v14H4zM8 9h8M8 13h5" />
                </svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.desc}</p>
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