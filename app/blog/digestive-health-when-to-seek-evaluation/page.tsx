import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digestive Health: When to Seek Evaluation',
  description: 'Learn which digestive symptoms are common, which are warning signs, and when to see a primary care doctor for evaluation in West Hollywood, CA.',
  alternates: { canonical: '/blog/digestive-health-when-to-seek-evaluation' },
  openGraph: {
    title: 'Digestive Health: When to Seek Evaluation',
    description: 'Learn which digestive symptoms are common, which are warning signs, and when to see a primary care doctor for evaluation in West Hollywood, CA.',
    url: 'https://elenachetvermd.com/blog/digestive-health-when-to-seek-evaluation',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Digestive Health: When to Seek Evaluation',
    description: 'Learn which digestive symptoms are common, which are warning signs, and when to see a primary care doctor for evaluation in West Hollywood, CA.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Digestive Health: When to Seek Evaluation</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-digestive-health-when-to-seek-evaluation.jpg"} alt={"Doctor checking patient's blood pressure during medical consultation indoors."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Almost everyone has had a queasy stomach, an episode of heartburn, or a few days of irregular bowels. Because these things are so common, many people spend months or even years quietly putting up with symptoms that deserve a closer look. Knowing the difference between a passing annoyance and a signal worth investigating can spare you discomfort, worry, and in some cases a delayed diagnosis.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why digestive symptoms are so easy to ignore</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The digestive tract responds to what we eat, how we sleep, how much stress we carry, and the medications we take. That makes occasional symptoms normal. Bloating after a large meal or loose stools during a stressful week rarely points to anything serious. The challenge is that serious conditions can start with the same vague complaints. Persistence, pattern, and change are what matter most: symptoms that last, keep returning, or differ from your usual baseline.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who is affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Digestive complaints affect people of every age. Gastroesophageal reflux disease, irritable bowel syndrome, constipation, gallbladder problems, celiac disease, and inflammatory bowel disease are among the many conditions seen in primary care. Risk shifts with age, family history, diet, medication use, and other health conditions. Adults over 45 are generally advised to begin colorectal cancer screening, and earlier screening may be appropriate if a close relative has had colorectal cancer or polyps.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Symptoms that should prompt an evaluation</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Consider scheduling a visit if you notice any of the following:
        </p>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3">{check}<span>Heartburn or acid reflux occurring more than twice a week, or not controlled by over-the-counter remedies.</span></li>
          <li className="flex gap-3">{check}<span>A change in bowel habits lasting more than a few weeks, including new constipation, diarrhea, or a change in stool caliber.</span></li>
          <li className="flex gap-3">{check}<span>Blood in the stool, or black, tarry stools.</span></li>
          <li className="flex gap-3">{check}<span>Unintentional weight loss.</span></li>
          <li className="flex gap-3">{check}<span>Difficulty or pain when swallowing, or food that feels stuck.</span></li>
          <li className="flex gap-3">{check}<span>Persistent abdominal pain, bloating, or early fullness.</span></li>
          <li className="flex gap-3">{check}<span>Ongoing nausea or vomiting without a clear cause.</span></li>
          <li className="flex gap-3">{check}<span>Fatigue or pallor that could suggest anemia from slow blood loss.</span></li>
        </ul>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Persistence, pattern, and change are what matter most.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to seek urgent care</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Some symptoms should not wait for a routine appointment. Severe or sudden abdominal pain, vomiting blood, large amounts of blood in the stool, a rigid or very tender abdomen, fainting, or pain with fever and persistent vomiting call for emergency care. Chest pain can sometimes be mistaken for heartburn, so if discomfort comes with shortness of breath, sweating, or pain spreading to the arm or jaw, call 911.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the research tells us</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Guidelines from major gastroenterology and primary care organizations recognize that so-called alarm features, such as bleeding, anemia, weight loss, and trouble swallowing, raise the likelihood of a significant underlying cause and justify further testing. Screening for colorectal cancer is among the best-supported preventive measures in medicine, because precancerous polyps can be found and removed before they cause harm. Evidence also supports that many functional conditions, like irritable bowel syndrome, are real, diagnosable disorders and respond well to dietary, behavioral, and medical strategies once more serious causes are reasonably excluded.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a primary care evaluation looks like</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A thorough visit usually begins with a conversation: when symptoms started, what makes them better or worse, what you eat, what medications and supplements you take, and your family history. A physical exam may follow, along with targeted blood or stool tests, and when appropriate a referral for imaging, endoscopy, or colonoscopy. The goal is to separate benign causes from those that need specialist care, and to build a plan you can actually follow.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical steps before your visit</h2>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3">{check}<span>Keep a short log of symptoms, meals, and bowel patterns for one to two weeks.</span></li>
          <li className="flex gap-3">{check}<span>List every medication and supplement, including pain relievers like ibuprofen, which can irritate the stomach.</span></li>
          <li className="flex gap-3">{check}<span>Note any family history of colon cancer, celiac disease, or inflammatory bowel disease.</span></li>
          <li className="flex gap-3">{check}<span>Avoid dropping foods wholesale before testing, since this can complicate certain diagnoses such as celiac disease.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take your symptoms seriously</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not have to wait until discomfort becomes unbearable to ask for help. Most digestive problems are manageable, and early evaluation often brings reassurance or a clear path forward. If something about your digestion has changed or has simply gone on too long, call the office to talk through your concerns and arrange an evaluation in West Hollywood, CA.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
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
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Resources</p>
              <p className="font-cormorant text-xl text-[var(--color-primary)]">Browse All Articles</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Patient education on preventive care and everyday health.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Services</p>
              <p className="font-cormorant text-xl text-[var(--color-primary)]">Our Services</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">See how primary care can support your health.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Contact</p>
              <p className="font-cormorant text-xl text-[var(--color-primary)]">Contact the Practice</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Reach out with questions about your symptoms.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}