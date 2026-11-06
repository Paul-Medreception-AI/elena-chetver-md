import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prediabetes: What It Means and What You Can Do',
  description: 'Learn what prediabetes is, who is at risk, why it matters, and the practical steps that can help lower blood sugar and reduce your risk of type 2 diabetes.',
  alternates: { canonical: '/blog/prediabetes-what-it-means-and-what-you-can-do' },
  openGraph: {
    title: 'Prediabetes: What It Means and What You Can Do',
    description: 'Learn what prediabetes is, who is at risk, why it matters, and the practical steps that can help lower blood sugar and reduce your risk of type 2 diabetes.',
    url: 'https://elenachetvermd.com/blog/prediabetes-what-it-means-and-what-you-can-do',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Prediabetes: What It Means and What You Can Do',
    description: 'Learn what prediabetes is, who is at risk, why it matters, and the practical steps that can help lower blood sugar and reduce your risk of type 2 diabetes.',
  },
}

const tips = [
  'Aim for about 150 minutes a week of moderate activity, such as brisk walking.',
  'Build meals around vegetables, beans, whole grains, fish, nuts, and other minimally processed foods.',
  'Cut back on sugary drinks, which raise blood sugar quickly.',
  'If you carry extra weight, even a modest loss of 5 to 7 percent of body weight can help.',
  'Prioritize sleep and find ways to manage ongoing stress.',
  'If you smoke, ask for help quitting. Smoking raises diabetes risk.',
  'Repeat blood tests as often as your doctor recommends.',
]

const related = [
  { href: '/blog', title: 'Browse All Resources', text: 'Explore more patient education articles from the practice.' },
  { href: '/services', title: 'Primary Care Services', text: 'See how the practice approaches preventive and ongoing care.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out with questions about your own blood sugar and health.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Prediabetes: What It Means and What You Can Do</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-prediabetes-what-it-means-and-what-you-can-do.jpg"} alt={"Blood glucose meter surrounded by sugar cubes on a pink background, highlighting diabetes awareness."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>
          Hearing the word “prediabetes” can feel unsettling. Maybe a routine blood test came back with a number slightly above normal, and suddenly you are wondering what it means for your future. Here is the reassuring part: prediabetes is a warning sign, not a diagnosis of diabetes, and it is often reversible. Many people who learn about it early can change its course.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Prediabetes?</h2>
        <p>
          Prediabetes means your blood sugar is higher than normal but not yet high enough to be called type 2 diabetes. It usually develops when the body becomes less responsive to insulin, the hormone that moves sugar from the blood into cells. The pancreas makes more insulin to compensate, but over time it may not keep up.
        </p>
        <p className="mt-4">
          It is commonly identified with one of three blood tests. In general, the ranges used are:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Hemoglobin A1C of 5.7 to 6.4 percent, which reflects average blood sugar over about three months.</li>
          <li>Fasting plasma glucose of 100 to 125 mg/dL.</li>
          <li>A two-hour glucose of 140 to 199 mg/dL on an oral glucose tolerance test.</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>
          Prediabetes is very common, and many people have it without knowing, because it rarely causes symptoms. Some people notice darkened, velvety skin patches on the neck or armpits, but most notice nothing at all. Factors that raise the likelihood include:
        </p>
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Being overweight, especially with extra weight around the abdomen</li>
          <li>Being age 35 or older</li>
          <li>Having a parent or sibling with type 2 diabetes</li>
          <li>Low physical activity</li>
          <li>A history of gestational diabetes or polycystic ovary syndrome</li>
          <li>High blood pressure or abnormal cholesterol levels</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p>
          Without changes, prediabetes can progress to type 2 diabetes, which is linked to heart disease, kidney disease, nerve damage, and vision problems. Even before diabetes develops, elevated blood sugar can put extra strain on blood vessels. Paying attention now gives you a chance to protect your long-term health.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Prediabetes is a warning sign, not a diagnosis of diabetes, and it is often reversible.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p>
          The large Diabetes Prevention Program trial in the United States found that adults with prediabetes who made lifestyle changes, including moderate weight loss and regular physical activity, reduced their risk of developing type 2 diabetes by about 58 percent over roughly three years. That benefit was greater than the effect of the medication metformin in the same study, though metformin also helped some people. Follow-up studies suggest the protective effects can last for years.
        </p>
        <p className="mt-4">
          The takeaway is encouraging: small, sustainable changes can make a measurable difference, and you do not need to be perfect.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <p className="mb-4">Start with a few habits you can realistically keep:</p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Working With Your Doctor</h2>
        <p>
          A personal plan is more effective than general advice. Your doctor can review your test results, family history, blood pressure, and cholesterol, and discuss whether medication makes sense in your situation. Regular follow-up testing helps you see whether your efforts are working and keeps you motivated.
        </p>
        <p className="mt-4">
          If you have been told your blood sugar is borderline, or you have risk factors and have not been screened, consider scheduling a conversation. To discuss your own health, call the office or reach out through the contact page. Acting now is one of the most useful things you can do for your future health.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] transition hover:shadow-lg">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)]">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 text-white border border-white/40 transition hover:bg-[var(--color-accent-dark)]">Contact the Practice</a>
        </div>
      </section>
    </main>
  )
}