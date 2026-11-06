import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bone Health and Osteoporosis Prevention',
  description: 'Learn who is at risk for osteoporosis, how bone density is tested, and practical steps for nutrition, exercise and lifestyle to protect your bones for life.',
  alternates: { canonical: '/blog/bone-health-and-osteoporosis-prevention' },
  openGraph: {
    title: 'Bone Health and Osteoporosis Prevention',
    description: 'Learn who is at risk for osteoporosis, how bone density is tested, and practical steps for nutrition, exercise and lifestyle to protect your bones for life.',
    url: 'https://elenachetvermd.com/blog/bone-health-and-osteoporosis-prevention',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Bone Health and Osteoporosis Prevention',
    description: 'Learn who is at risk for osteoporosis, how bone density is tested, and practical steps for nutrition, exercise and lifestyle to protect your bones for life.',
  },
}

const tips = [
  'Get enough calcium, ideally from food first: dairy, fortified alternatives, sardines, tofu set with calcium, and leafy greens.',
  'Make sure your vitamin D level is adequate, since vitamin D helps your body absorb calcium.',
  'Do weight-bearing and resistance exercise on most days of the week.',
  'Eat enough protein to support bone and muscle.',
  'Stop smoking and keep alcohol to a moderate level.',
  'Work on balance and home safety to lower your risk of falls.',
  'Ask whether a bone density scan is right for you.',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'More Patient Resources', text: 'Browse all of our educational articles on staying well.' },
  { href: '/services', label: 'Services', title: 'Primary Care Services', text: 'See how ongoing primary care supports prevention and screening.' },
  { href: '/contact', label: 'Contact', title: 'Talk With the Office', text: 'Reach out to ask about a bone health conversation.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Bone Health and Osteoporosis Prevention</h1>
          <p className="mt-6 text-sm text-white/70">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-bone-health-and-osteoporosis-prevention.jpg"} alt={"Doctor examining a skull X-ray image on a digital tablet indoors."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>
          Most of us never think about our bones until something goes wrong. A wrist breaks after a small slip. A spine
          shortens by an inch. A parent&apos;s hip fracture changes the course of their later years. Osteoporosis is often
          called a silent condition because it causes no symptoms while bone is quietly thinning. The encouraging news is
          that bone health responds to the choices you make, and it is never too early or too late to start.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Osteoporosis?</h2>
        <p>
          Bone is living tissue that is constantly being broken down and rebuilt. In childhood and the teen years, you build
          more than you lose, and most people reach peak bone mass in their late twenties. After that, the balance slowly
          shifts. Osteoporosis develops when bone loss outpaces rebuilding, leaving bones porous, fragile and more likely to
          fracture. Osteopenia is an earlier stage, with lower than normal density that has not yet reached the osteoporosis range.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is at Risk?</h2>
        <p>
          Anyone can develop osteoporosis, but some people face a higher risk. Women are affected more often than men,
          particularly after menopause, when falling estrogen speeds up bone loss. Men lose bone too, usually later in life.
          Other factors include:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-1">
          <li>A family history of osteoporosis or hip fracture</li>
          <li>Small, thin body frame or low body weight</li>
          <li>Early menopause or low hormone levels</li>
          <li>Long-term use of certain medicines, such as oral corticosteroids</li>
          <li>Conditions such as celiac disease, rheumatoid arthritis, thyroid or parathyroid disorders, and some kidney conditions</li>
          <li>Smoking, heavy alcohol use, and a sedentary lifestyle</li>
          <li>Low calcium or vitamin D intake over many years</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p>
          The danger of osteoporosis is the fracture. Hip and spine fractures in particular can lead to chronic pain, loss
          of height, reduced mobility and loss of independence. Research consistently shows that a fracture from a minor
          fall raises the risk of another fracture. Protecting your bones is really about protecting your ability to walk,
          travel, garden, lift your grandchildren and live on your own terms.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Osteoporosis is often called a silent condition because it causes no symptoms while bone is quietly thinning.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Bone Health Is Measured</h2>
        <p>
          The standard test is a DXA scan, a quick, low-radiation X-ray that measures bone density at the hip and spine.
          Results are reported as a T-score, which compares your bone density with that of a healthy young adult. A score of
          -2.5 or lower indicates osteoporosis. Major guidelines generally recommend screening for women starting at age 65,
          and earlier for postmenopausal women with risk factors. Screening for men is often considered from about age 70, or
          sooner when risk factors are present. Your clinician can also use a tool called FRAX to estimate your ten-year
          chance of a major fracture by combining your bone density with your personal history.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps to Protect Your Bones</h2>
        <p>
          Strong evidence supports a handful of habits. None of them is complicated, and together they make a real difference.
        </p>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Exercise: The Best Medicine for Bone</h2>
        <p>
          Bones get stronger when they are challenged. Walking, hiking, dancing and stair climbing load the skeleton, while
          resistance training with weights or bands stimulates bone and builds the muscle that supports it. Balance practices
          such as tai chi and yoga lower fall risk. If you already have low bone density, ask for guidance before starting,
          because some movements, like deep forward bending or heavy twisting, may need to be modified.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When Medication Is Considered</h2>
        <p>
          For people with osteoporosis or a high fracture risk, medication can lower the chance of breaking a bone. Several
          types exist, and the right choice depends on your bone density, age, other health conditions and preferences.
          Lifestyle steps remain important alongside any treatment. This is a decision best made in conversation with your
          clinician, weighing benefits and possible side effects.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p>
          If you have risk factors, have noticed a loss of height, have had a fracture from a minor fall, or simply want to
          understand where your bones stand, a conversation with your primary care doctor is a good place to begin. Together
          you can review your history, decide whether screening makes sense, and build a plan that fits your life. Call the
          office to start that conversation.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
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
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-ink)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}