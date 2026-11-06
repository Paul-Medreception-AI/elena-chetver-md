import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Type 2 Diabetes Management',
  description: 'Learn how type 2 diabetes works, who is at risk, and the everyday steps that help manage blood sugar and protect long-term health.',
  alternates: { canonical: '/blog/understanding-type-2-diabetes-management' },
  openGraph: {
    title: 'Understanding Type 2 Diabetes Management',
    description: 'Learn how type 2 diabetes works, who is at risk, and the everyday steps that help manage blood sugar and protect long-term health.',
    url: 'https://elenachetvermd.com/blog/understanding-type-2-diabetes-management',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Understanding Type 2 Diabetes Management',
    description: 'Learn how type 2 diabetes works, who is at risk, and the everyday steps that help manage blood sugar and protect long-term health.',
  },
}

const tips = [
  'Build meals around vegetables, lean protein, legumes and whole grains',
  'Move your body most days, including a short walk after meals',
  'Aim for steady sleep and find realistic ways to manage stress',
  'Keep up with blood sugar checks, lab work and screening exams',
  'Take medications as prescribed and ask questions about side effects',
  'Tell your doctor early if something is not working for you',
]

const related = [
  { href: '/blog', label: 'Blog', title: 'All Patient Resources', text: 'Browse more education articles from the practice.' },
  { href: '/services', label: 'Services', title: 'Primary Care Services', text: 'See how ongoing primary care supports chronic conditions.' },
  { href: '/contact', label: 'Contact', title: 'Contact the Practice', text: 'Reach out with questions about your own care.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Understanding Type 2 Diabetes Management</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-understanding-type-2-diabetes-management.jpg"} alt={"Top view of diabetes management tools including glucose meter and insulin syringes on purple background."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="text-lg">Hearing the words &ldquo;you have type 2 diabetes&rdquo; can feel overwhelming. Many people worry about injections, restrictions, or what the future holds. The truth is more hopeful: type 2 diabetes is a condition that can be managed well, and the choices you make day to day have real influence on how you feel and how your body fares over time.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Type 2 Diabetes Is</h2>
        <p>When you eat, your body breaks food down into glucose, a sugar that fuels your cells. The hormone insulin, made by the pancreas, helps move glucose from the blood into those cells. In type 2 diabetes, the body becomes resistant to insulin, and over time the pancreas may not make enough to keep up. Glucose then builds up in the blood.</p>
        <p className="mt-4">Because this develops gradually, many people have elevated blood sugar for years without noticing. When symptoms do appear, they can include increased thirst, frequent urination, fatigue, blurry vision, slow-healing sores, and tingling in the hands or feet.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p>Type 2 diabetes is common and can affect adults of many backgrounds, and it is increasingly seen in younger people. Risk is higher with:</p>
        <ul className="my-4 space-y-2 list-disc pl-6">
          <li>A family history of diabetes</li>
          <li>Excess weight, especially around the abdomen</li>
          <li>Low physical activity</li>
          <li>High blood pressure or abnormal cholesterol</li>
          <li>A history of gestational diabetes or prediabetes</li>
          <li>Increasing age</li>
        </ul>
        <p>Having risk factors does not mean diabetes is inevitable, and having none does not guarantee you are safe. That is why screening with a simple blood test matters.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Management Matters</h2>
        <p>Over many years, persistently high blood sugar can damage blood vessels and nerves. This raises the risk of heart disease, stroke, kidney disease, vision problems, and nerve damage in the feet. The encouraging part is that steady blood sugar control, along with attention to blood pressure and cholesterol, lowers the chance of these complications.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The encouraging part is that steady blood sugar control, along with attention to blood pressure and cholesterol, lowers the chance of these complications.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p>Large clinical studies have shown that lifestyle changes can make a significant difference. In the Diabetes Prevention Program, people with prediabetes who made modest changes, including moderate weight loss and regular activity, sharply reduced their likelihood of developing diabetes. For people who already have type 2 diabetes, similar changes often improve A1C, a blood test that reflects average blood sugar over about three months.</p>
        <p className="mt-4">Medications also play an important role. Options such as metformin, SGLT2 inhibitors and GLP-1 receptor agonists can lower blood sugar, and some have been shown to protect the heart and kidneys in certain people. The right choice depends on your health history, other conditions, and personal goals, so it is a decision best made together with your doctor.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <p>You do not need to change everything at once. Small, consistent steps tend to last longer than dramatic overhauls.</p>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Routine Checks That Protect You</h2>
        <p>Diabetes care goes beyond glucose numbers. Regular follow-up typically includes A1C testing, blood pressure checks, cholesterol and kidney function tests, a urine test for protein, a yearly dilated eye exam, and a foot exam. Catching changes early gives you more options and often simpler treatment.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Be Kind to Yourself</h2>
        <p>Living with a chronic condition can be tiring, and it is normal to have days when numbers are not where you want them. Diabetes is not a personal failing. Genetics, environment and biology all contribute. If you feel discouraged, tell your doctor; support and adjustments to your plan can help.</p>

        <p className="mt-8">If you have been diagnosed with type 2 diabetes, or you are concerned about your risk, a conversation with a primary care doctor is a good place to start. Call the office or use the contact page to reach Elena Chetver, MD in West Hollywood, CA and talk through your questions.</p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</p>
                <p className="text-[var(--color-ink)]">{r.text}</p>
              </a>
            ))}
          </div>
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