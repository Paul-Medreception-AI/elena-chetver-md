import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Menopause and Perimenopause: What to Expect',
  description: 'Learn the stages, common symptoms and treatment options for perimenopause and menopause, plus practical steps to feel better during the transition.',
  alternates: { canonical: '/blog/menopause-and-perimenopause-what-to-expect' },
  openGraph: {
    title: 'Menopause and Perimenopause: What to Expect',
    description: 'Learn the stages, common symptoms and treatment options for perimenopause and menopause, plus practical steps to feel better during the transition.',
    url: 'https://elenachetvermd.com/blog/menopause-and-perimenopause-what-to-expect',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Menopause and Perimenopause: What to Expect',
    description: 'Learn the stages, common symptoms and treatment options for perimenopause and menopause, plus practical steps to feel better during the transition.',
  },
}

const tips = [
  'Track your cycles and symptoms for a few months so patterns become clear.',
  'Prioritize strength training and weight-bearing exercise to protect bone and muscle.',
  'Keep a consistent sleep schedule and a cool bedroom.',
  'Notice your personal hot flash triggers, such as alcohol, spicy food or caffeine.',
  'Ask about treatment options rather than waiting for symptoms to pass.',
  'Keep up with blood pressure, cholesterol, bone health and screening visits.',
]

const related = [
  { title: 'Preventive Care and Annual Wellness Visits', href: "/services/preventive-care-and-wellness", tag: 'Service' },
  { title: 'Sleep Problems and Insomnia', href: "/conditions", tag: 'Condition' },
  { title: 'Our Resources Hub', href: '/blog', tag: 'Resources' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-menopause-and-perimenopause-what-to-expect.jpg" alt="Charming portrait of an elderly Asian woman smiling against a rustic stone wall.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Menopause and Perimenopause: What to Expect</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You wake at 3 a.m. drenched in sweat, your periods have become unpredictable, and you cannot find the word you were just about to say. If this sounds familiar, you are not imagining things, and you are far from alone. The years around menopause bring real physical and emotional changes, yet many women are never told what to expect. Understanding the transition is the first step toward feeling like yourself again.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Perimenopause and Menopause?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Perimenopause is the transition leading up to menopause. During this time, the ovaries gradually make less estrogen, and hormone levels rise and fall unevenly. Menopause itself is defined as having gone 12 consecutive months without a period. Postmenopause describes all the years that follow.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Because hormone levels fluctuate rather than decline in a straight line, perimenopause can feel unpredictable. Symptoms may come and go, and they can intensify before they settle.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who It Affects and When It Starts</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Menopause occurs at an average age of about 51 in the United States, but perimenopause often begins in the 40s and can start earlier for some women. It can last several years, commonly four to eight. Menopause that happens before age 40 is called premature ovarian insufficiency and deserves a medical evaluation. Surgery that removes the ovaries, as well as certain cancer treatments, can also bring on menopause suddenly.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Symptoms</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Every woman experiences this transition differently. Some notice little, while others find that symptoms disrupt work, relationships and sleep. Common changes include:
        </p>
        <ul className="space-y-2 mb-4 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li>Irregular, heavier or lighter periods</li>
          <li>Hot flashes and night sweats</li>
          <li>Trouble sleeping</li>
          <li>Mood changes, irritability, anxiety or low mood</li>
          <li>Vaginal dryness and discomfort with intimacy</li>
          <li>Changes in libido</li>
          <li>Difficulty concentrating, often described as brain fog</li>
          <li>Joint aches and changes in weight distribution</li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Hot flashes, also called vasomotor symptoms, affect a large majority of women and can last for many years for some. Urinary symptoms, such as urgency or recurrent infections, may also appear as tissues in the genitourinary tract change.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Understanding the transition is the first step toward feeling like yourself again.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters for Long-Term Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Estrogen helps protect bones, blood vessels and more. After menopause, bone density declines faster, raising the risk of osteoporosis and fractures. Cholesterol patterns often shift, and cardiovascular risk rises with age. This is why the menopausal years are a valuable moment to review heart health, bone health and routine screenings, not just to manage hot flashes.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Says About Treatment</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Menopausal hormone therapy is the most effective treatment for hot flashes and night sweats, and it also helps prevent bone loss. Research over the past two decades has clarified that for many healthy women under 60, or within 10 years of menopause, the benefits often outweigh the risks. It is not right for everyone, though. A history of certain cancers, blood clots, stroke or liver disease may change the picture, so the decision should be individualized.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Non-hormonal options exist as well. Certain antidepressants, gabapentin and newer non-hormonal medications can reduce hot flashes. Low-dose vaginal estrogen, moisturizers and lubricants can treat genitourinary symptoms effectively, with minimal absorption into the body. Cognitive behavioral therapy has also shown benefit for sleep, mood and the distress of hot flashes.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Be cautious with unregulated supplements marketed for menopause. Evidence for most is limited, and some can interact with other medications.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reach out if symptoms interfere with daily life, if bleeding is very heavy, occurs between periods, or returns after menopause, or if you feel persistently low or anxious. You do not have to simply endure this phase. A primary care visit can help sort out what is menopause and what is not, such as thyroid problems, and build a plan suited to your health history and goals. Call the office to talk through your concerns.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
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
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v12m0-12C10.5 5.5 8 5 5 5v12c3 0 5.5.5 7 1.75m0-12C13.5 5.5 16 5 19 5v12c-3 0-5.5.5-7 1.75" />
                </svg>
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.tag}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)]">{r.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}