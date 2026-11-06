import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vitamin D: Do You Really Need a Supplement?',
  description: 'Learn who may benefit from vitamin D supplements, what blood levels mean, and how to decide whether a supplement is right for you.',
  alternates: { canonical: '/blog/vitamin-d-do-you-really-need-a-supplement' },
  openGraph: {
    title: 'Vitamin D: Do You Really Need a Supplement?',
    description: 'Learn who may benefit from vitamin D supplements, what blood levels mean, and how to decide whether a supplement is right for you.',
    url: 'https://elenachetvermd.com/blog/vitamin-d-do-you-really-need-a-supplement',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Vitamin D: Do You Really Need a Supplement?',
    description: 'Learn who may benefit from vitamin D supplements, what blood levels mean, and how to decide whether a supplement is right for you.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Vitamin D: Do You Really Need a Supplement?</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-vitamin-d-do-you-really-need-a-supplement.jpg"} alt={"Top view of various herbal and pharmaceutical supplements in ceramic bowls on a green background."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Walk into any pharmacy and you will find shelves of vitamin D bottles, each promising stronger bones, a better mood, or a sturdier immune system. If you have ever wondered whether you are missing out by not taking one, you are in good company. The honest answer is that some people benefit a great deal, and many others are simply paying for something they do not need. Here is how to tell the difference.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What vitamin D actually does</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Vitamin D is a fat-soluble vitamin that works more like a hormone in the body. Its best-established job is helping you absorb calcium and phosphorus from food, which keeps bones and teeth strong. It also plays a role in muscle function and in the normal workings of the immune system.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Your skin makes vitamin D when it is exposed to ultraviolet B light from the sun. Smaller amounts come from foods such as fatty fish, egg yolks, and fortified products like milk, some cereals, and some plant milks.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who is more likely to run low</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Low vitamin D is common, and certain groups are at higher risk:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            'People with darker skin, since melanin reduces vitamin D production from sunlight',
            'Older adults, whose skin makes less vitamin D and who often spend more time indoors',
            'People who use sunscreen consistently or cover most of their skin outdoors',
            'People with obesity, because vitamin D can be held in body fat',
            'Those with conditions that affect absorption, such as celiac disease, inflammatory bowel disease, or a history of gastric bypass',
            'People with chronic kidney or liver disease, or who take medicines that interfere with vitamin D metabolism',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Even living in a sunny place does not guarantee adequate levels. Indoor work, sun protection, and skin tone all influence how much your body makes.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the research shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The strongest evidence supports vitamin D for preventing and treating deficiency, rickets in children, and osteomalacia (softened bones) in adults. For people who are truly deficient, correcting the shortage matters.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          For people who already have normal levels, the picture is less exciting. Large randomized trials of vitamin D supplements in generally healthy adults have not shown clear benefit for preventing heart disease, cancer, depression, or most fractures. Earlier observational studies linked low vitamin D to many illnesses, but low levels may often be a marker of poor health or limited time outdoors rather than the cause.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          For people who already have normal levels, the picture is less exciting.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Should you get your level tested?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Routine screening is not recommended for everyone without symptoms. Testing makes more sense if you have risk factors, bone loss or osteoporosis, frequent falls, unexplained muscle weakness or bone pain, or a condition that affects absorption. The usual test measures 25-hydroxyvitamin D in the blood.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Interpreting the number takes context. Laboratories and expert groups use slightly different cutoffs, and a result just under a reference range does not automatically mean you need treatment. Your age, health history, medicines, and bone health all shape the decision.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The risks of taking too much</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          More is not better. Because vitamin D is stored in the body, very high doses over time can raise blood calcium. That can cause nausea, constipation, confusion, kidney stones, and kidney damage. Toxicity is uncommon from food or sun, but it can happen with high-dose supplements, especially when several products overlap, such as a multivitamin, a calcium pill, and a separate vitamin D capsule.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical steps to take</h2>
        <ul className="mt-4 space-y-3">
          {[
            'Start with food: include fatty fish, eggs, and fortified foods when they fit your diet',
            'Spend sensible time outdoors, without risking sunburn or ignoring skin cancer prevention',
            'Review every supplement you take, so doses are not unintentionally doubled',
            'Ask about testing if you have risk factors or symptoms rather than guessing',
            'If a supplement is recommended, take it with a meal that contains some fat for better absorption',
            'Recheck levels when advised, since the right dose can change over time',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Bringing it together</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Vitamin D is essential, but a supplement is not automatically necessary. Some people clearly benefit, especially those who are deficient or at higher risk, while many healthy adults get enough from sun, food, and fortified products. A thoughtful conversation about your own history is more useful than a one-size-fits-all bottle.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          If you are unsure whether vitamin D belongs in your routine, call the office to talk it through with Elena Chetver, MD. Together you can decide whether testing or a supplement makes sense for you in West Hollywood and beyond.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-2xl text-[var(--color-ink)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { href: '/blog', title: 'All Resources', text: 'Browse patient education articles on prevention and everyday health.' },
            { href: '/services', title: 'Our Services', text: 'See the primary care services offered by the practice.' },
            { href: '/contact', title: 'Contact the Practice', text: 'Reach out to ask questions or start a conversation about your care.' },
          ].map((c) => (
            <a key={c.title} href={c.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{c.title}</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">{c.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}