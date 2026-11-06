import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Urinary Tract Infections: Symptoms and Prevention',
  description: 'Learn the common symptoms of urinary tract infections, who is at risk, when to seek care, and practical steps that may help lower your chance of getting one.',
  alternates: { canonical: '/blog/urinary-tract-infections-symptoms-and-prevention' },
  openGraph: {
    title: 'Urinary Tract Infections: Symptoms and Prevention',
    description: 'Learn the common symptoms of urinary tract infections, who is at risk, when to seek care, and practical steps that may help lower your chance of getting one.',
    url: 'https://elenachetvermd.com/blog/urinary-tract-infections-symptoms-and-prevention',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Urinary Tract Infections: Symptoms and Prevention',
    description: 'Learn the common symptoms of urinary tract infections, who is at risk, when to seek care, and practical steps that may help lower your chance of getting one.',
  },
}

const tips = [
  'Drink water regularly throughout the day so you urinate often',
  'Urinate soon after sexual intercourse',
  'Wipe from front to back after using the toilet',
  'Do not hold urine for long stretches when you feel the urge',
  'Avoid irritating feminine products such as douches and powders',
  'Talk with your doctor about options if infections keep returning',
]

const related = [
  { href: '/blog', title: 'All Resources', text: 'Browse every patient education article from the practice.' },
  { href: '/services', title: 'Primary Care Services', text: 'See how the practice approaches everyday health concerns.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out with questions about your symptoms.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Urinary Tract Infections: Symptoms and Prevention</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-urinary-tract-infections-symptoms-and-prevention.jpg"} alt={"Cardboard appliques of human heads with viruses and thermometer in circles during coronavirus pandemic on colorful background"} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          That sudden, nagging urge to urinate. The burning that makes every trip to the bathroom something to dread. If you have ever had a urinary tract infection, you know how quickly it can take over your day. UTIs are among the most common infections seen in primary care, and while they are usually easy to treat, they can be painful, disruptive and sometimes serious when ignored.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is a Urinary Tract Infection?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A urinary tract infection occurs when bacteria enter part of the urinary system, which includes the kidneys, ureters, bladder and urethra. Most infections involve the lower tract, meaning the bladder (cystitis) and urethra. The most common cause is <em>Escherichia coli</em> (E. coli), a bacterium that normally lives in the intestines. When it travels to the urethra and multiplies, an infection can develop.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          If bacteria travel upward to the kidneys, the infection is called pyelonephritis. Kidney infections are more serious and need prompt medical attention.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Symptoms</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Symptoms vary from person to person, but lower urinary tract infections often cause:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-[var(--color-ink)] leading-loose text-base">
          <li>A burning feeling when urinating</li>
          <li>A strong, persistent urge to urinate</li>
          <li>Frequent passing of small amounts of urine</li>
          <li>Cloudy, strong-smelling or blood-tinged urine</li>
          <li>Pressure or pain in the lower abdomen or pelvis</li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          A kidney infection may add fever, chills, nausea, vomiting, and pain in the back or side. In older adults, a UTI sometimes appears as new confusion, weakness or a change in behavior rather than the classic urinary symptoms.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Most Likely to Get One?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone can develop a UTI, but women are affected more often than men because the female urethra is shorter, which gives bacteria a shorter path to the bladder. Research suggests that a large share of women will have at least one UTI in their lifetime, and some will have repeat infections.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Other factors that can raise risk include sexual activity, menopause-related hormonal changes, pregnancy, diabetes, kidney stones, an enlarged prostate, use of a urinary catheter, and anything that prevents the bladder from emptying fully.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Most lower urinary tract infections are easy to treat, but they can become serious when ignored.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Prompt Care Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A simple bladder infection is uncomfortable, but an untreated one can spread to the kidneys and, in rare cases, enter the bloodstream. Pregnant women, people with diabetes, and older adults are especially vulnerable to complications. Diagnosis usually begins with a review of your symptoms and a urine test. A urine culture may be used to identify the bacteria and guide the choice of antibiotic.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Treatment typically involves a short course of antibiotics chosen by your clinician. Antibiotic resistance is a growing concern, which is one reason it is important to take medication exactly as prescribed and to avoid using leftover antibiotics. Drinking fluids and using over-the-counter pain relief may ease symptoms, but they do not replace treatment for a bacterial infection.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps That May Help Prevent UTIs</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          No strategy guarantees you will never get a UTI, but several habits are commonly recommended to lower the chance:
        </p>
        <ul className="mt-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Evidence on cranberry products is mixed. Some studies show a modest reduction in recurrent infections for certain people, while others show little benefit. For postmenopausal women with repeated infections, vaginal estrogen is sometimes considered. These options are worth discussing with a clinician rather than trying on your own.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Care</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Contact a clinician if you notice urinary burning, urgency or blood in your urine. Seek urgent care if you have fever, shaking chills, back or flank pain, vomiting, or symptoms during pregnancy. Having three or more infections in a year, or two in six months, is also a reason to look for underlying causes and a longer-term plan.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          You do not have to simply put up with recurring discomfort. If you are dealing with urinary symptoms or frequent infections, call the office to talk with Elena Chetver, MD about next steps for your care.
        </p>
      </article>

      <section className="bg-white px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
            </svg>
          </div>
          <div>
            <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Elena Chetver, MD</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
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
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}