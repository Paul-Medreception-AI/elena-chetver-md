import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Thyroid Problems: Signs You Should Not Ignore',
  description: 'Learn the common signs of an underactive or overactive thyroid, who is at risk, how thyroid problems are tested, and when to talk with a primary care doctor.',
  alternates: { canonical: '/blog/thyroid-problems-signs-you-should-not-ignore' },
  openGraph: {
    title: 'Thyroid Problems: Signs You Should Not Ignore',
    description: 'Learn the common signs of an underactive or overactive thyroid, who is at risk, how thyroid problems are tested, and when to talk with a primary care doctor.',
    url: 'https://elenachetvermd.com/blog/thyroid-problems-signs-you-should-not-ignore',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Thyroid Problems: Signs You Should Not Ignore',
    description: 'Learn the common signs of an underactive or overactive thyroid, who is at risk, how thyroid problems are tested, and when to talk with a primary care doctor.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  return (
    <main className="bg-white">
      <SplitHero src="/images/stock/blog-thyroid-problems-signs-you-should-not-ignore.jpg" alt="Close-up of a woman touching her neck, possibly indicating discomfort or throat pain.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Thyroid Problems: Signs You Should Not Ignore</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You are tired all the time, even after a full night of sleep. Your hair seems thinner, your mood feels off, and the number on the scale will not behave. It is easy to blame stress, age, or a busy life. But sometimes these everyday complaints point to something specific: a thyroid that is not working the way it should.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Thyroid conditions are common, treatable, and often missed. Knowing the signs can help you ask the right questions and get the right tests sooner.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Thyroid Does</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The thyroid is a small butterfly-shaped gland at the front of your neck. It makes hormones that help set the pace of your metabolism, influencing heart rate, body temperature, digestion, energy, and mood. When it makes too little hormone (hypothyroidism) or too much (hyperthyroidism), many systems in the body can be affected at once, which is why symptoms can seem so scattered.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs of an Underactive Thyroid</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Hypothyroidism is the more common problem. It tends to develop slowly, so people often adapt without realizing how much has changed. Symptoms can include:
        </p>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3">{check}<span>Persistent fatigue and sluggishness</span></li>
          <li className="flex gap-3">{check}<span>Feeling cold when others are comfortable</span></li>
          <li className="flex gap-3">{check}<span>Weight gain that is hard to explain</span></li>
          <li className="flex gap-3">{check}<span>Constipation and dry skin</span></li>
          <li className="flex gap-3">{check}<span>Thinning hair or brittle nails</span></li>
          <li className="flex gap-3">{check}<span>Low mood, poor concentration, or &quot;brain fog&quot;</span></li>
          <li className="flex gap-3">{check}<span>Heavier or irregular periods</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs of an Overactive Thyroid</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          With hyperthyroidism, the body runs too fast. Signs may include:
        </p>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3">{check}<span>A racing or irregular heartbeat</span></li>
          <li className="flex gap-3">{check}<span>Unintentional weight loss despite normal eating</span></li>
          <li className="flex gap-3">{check}<span>Anxiety, irritability, or trouble sleeping</span></li>
          <li className="flex gap-3">{check}<span>Tremor in the hands and sweating or heat intolerance</span></li>
          <li className="flex gap-3">{check}<span>Frequent bowel movements</span></li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Thyroid conditions are common, treatable, and often missed.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Most Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone can develop a thyroid problem, but it is more common in women, especially after pregnancy and around menopause. Risk also rises with age, a family history of thyroid disease, other autoimmune conditions such as type 1 diabetes, and prior neck radiation or thyroid surgery. Autoimmune disease is the most frequent cause: Hashimoto&apos;s thyroiditis typically leads to an underactive thyroid, while Graves&apos; disease typically causes an overactive one.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Untreated thyroid disease is more than an inconvenience. Over time, an underactive thyroid can contribute to high cholesterol, heart problems, fertility difficulties, and depression. An overactive thyroid can lead to atrial fibrillation, bone loss, and in severe cases a dangerous surge of symptoms known as thyroid storm. Fortunately, once identified, most thyroid conditions can be managed well with medication or other treatment.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Thyroid Problems Are Diagnosed</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Diagnosis usually starts with a conversation about your symptoms and a physical exam, including a gentle check of the neck for swelling or nodules. A blood test for thyroid-stimulating hormone (TSH) is the standard first step, and your doctor may add free T4, T3, or thyroid antibody tests. If a lump is found, an ultrasound can help evaluate it. Because symptoms overlap with anemia, sleep problems, depression, and perimenopause, testing helps sort out what is actually going on.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What You Can Do Now</h2>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3">{check}<span>Write down your symptoms, when they started, and anything that changed around that time.</span></li>
          <li className="flex gap-3">{check}<span>Share your family history of thyroid or autoimmune disease.</span></li>
          <li className="flex gap-3">{check}<span>Bring a list of medications and supplements, since some, including biotin, can affect lab results.</span></li>
          <li className="flex gap-3">{check}<span>Check your neck for visible swelling, and report any lump, hoarseness, or trouble swallowing promptly.</span></li>
          <li className="flex gap-3">{check}<span>Seek urgent care for chest pain, a very rapid heartbeat, fainting, or confusion.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take Your Symptoms Seriously</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If several of these signs sound familiar, you do not have to keep pushing through. A simple evaluation can bring clarity and, if needed, a clear path to feeling better. Call the office to talk with Elena Chetver, MD about your concerns and whether thyroid testing makes sense for you.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m-5.25-5.25h10.5" /></svg>
              <p className="font-cormorant text-xl text-[var(--color-ink)]">All Health Articles</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Browse patient education from the blog.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <p className="font-cormorant text-xl text-[var(--color-ink)]">Our Services</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">See the primary care services offered.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75L12 13.5l9.75-6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25" /></svg>
              <p className="font-cormorant text-xl text-[var(--color-ink)]">Contact the Practice</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Reach out with questions about your health.</p>
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