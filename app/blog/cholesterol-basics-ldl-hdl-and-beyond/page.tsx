import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Cholesterol Basics: LDL, HDL, and Beyond',
  description: 'Learn what LDL, HDL, triglycerides, and non-HDL cholesterol mean, why they matter for heart health, and practical steps to improve your numbers.',
  alternates: { canonical: '/blog/cholesterol-basics-ldl-hdl-and-beyond' },
  openGraph: {
    title: 'Cholesterol Basics: LDL, HDL, and Beyond',
    description: 'Learn what LDL, HDL, triglycerides, and non-HDL cholesterol mean, why they matter for heart health, and practical steps to improve your numbers.',
    url: 'https://elenachetvermd.com/blog/cholesterol-basics-ldl-hdl-and-beyond',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cholesterol Basics: LDL, HDL, and Beyond',
    description: 'Learn what LDL, HDL, triglycerides, and non-HDL cholesterol mean, why they matter for heart health, and practical steps to improve your numbers.',
  },
}

const tips = [
  'Build meals around vegetables, beans, whole grains, nuts, and fish.',
  'Swap saturated fats (butter, fatty meats) for olive oil and other unsaturated fats.',
  'Aim for regular movement, such as brisk walking most days of the week.',
  'Limit alcohol and refined sugar, which can raise triglycerides.',
  'Quit smoking if you smoke. It lowers HDL and damages blood vessels.',
  'Ask about repeat testing so you can see how your numbers change over time.',
]

const related = [
  { href: '/blog', title: 'Browse All Resources', text: 'Explore more patient education articles from the practice.' },
  { href: '/services', title: 'Our Primary Care Services', text: 'See how ongoing primary care supports prevention and long-term health.' },
  { href: '/contact', title: 'Talk With the Office', text: 'Call the office or reach out to ask about your own cholesterol results.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-cholesterol-basics-ldl-hdl-and-beyond.jpg" alt="Close-up of a digital blood pressure monitor with ECG printout, pills, and medical tools.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Cholesterol Basics: LDL, HDL, and Beyond</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You get your lab results back and a few numbers are flagged. Maybe you feel perfectly fine, and that makes the news confusing, or even a little frightening. Cholesterol is one of the most talked-about numbers in health, yet few people are ever walked through what it actually means. Understanding it is the first step toward feeling in control of your heart health.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Cholesterol?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Cholesterol is a waxy, fat-like substance found in every cell of your body. You need it to build cell membranes, make hormones, produce vitamin D, and create bile for digestion. Your liver makes most of the cholesterol you need, and the rest comes from food. Problems arise not because cholesterol exists, but because too much of certain types can build up in the walls of your arteries.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">LDL: The &ldquo;Bad&rdquo; Cholesterol</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Low-density lipoprotein (LDL) carries cholesterol from the liver to the tissues. When LDL levels are high, particles can lodge in artery walls and contribute to plaque, a process called atherosclerosis. Over years, plaque can narrow arteries and raise the risk of heart attack and stroke. Because high LDL rarely causes symptoms, a blood test is the only reliable way to know where you stand.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">HDL: The &ldquo;Good&rdquo; Cholesterol</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          High-density lipoprotein (HDL) helps carry cholesterol back to the liver for removal. Higher HDL has long been linked with lower heart risk, but research has shown the story is more nuanced. Medicines that simply raise HDL have not consistently reduced heart attacks. HDL is useful context, but it is not a number to chase on its own.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Because high LDL rarely causes symptoms, a blood test is the only reliable way to know where you stand.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Beyond LDL and HDL</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A standard lipid panel includes more than two numbers. Looking at the whole picture gives a clearer view of risk.
        </p>
        <ul className="list-disc pl-6 mt-4 text-[var(--color-ink)] leading-loose text-base">
          <li><strong>Total cholesterol:</strong> the sum of all cholesterol in your blood.</li>
          <li><strong>Triglycerides:</strong> a type of fat influenced by sugar, refined carbohydrates, alcohol, and excess calories. High levels are linked with heart disease and, when very high, pancreatitis.</li>
          <li><strong>Non-HDL cholesterol:</strong> total cholesterol minus HDL. It captures all the potentially artery-clogging particles.</li>
          <li><strong>Apolipoprotein B (ApoB):</strong> a count of the atherogenic particles in your blood, sometimes used when results are unclear.</li>
          <li><strong>Lipoprotein(a):</strong> a largely inherited particle that raises risk. Many experts suggest checking it at least once in a lifetime.</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected and Why It Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Abnormal cholesterol can affect anyone, including people who are thin, active, and eat well. Genetics play a major role; familial hypercholesterolemia, an inherited condition, causes very high LDL from a young age. Other contributors include diabetes, thyroid disease, kidney disease, menopause, certain medications, smoking, and a diet high in saturated fat. Large studies over decades have shown that lowering LDL reduces the risk of heart attack and stroke, and that the earlier and longer LDL is kept in a healthy range, the greater the benefit.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What You Can Do</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Lifestyle changes make a real difference and are the foundation of any plan:
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When Medication Is Part of the Plan</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          For some people, diet and exercise are not enough, especially with inherited high cholesterol, existing heart disease, or diabetes. Statins are the most studied option and have decades of evidence showing fewer heart attacks and strokes. Other medicines, such as ezetimibe, can be added when needed. Decisions are individual and weigh your overall risk, your family history, your preferences, and any side effects you experience.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Your cholesterol numbers are not a verdict. They are information you can act on. If you have not had a lipid panel recently, or you have questions about results you have received, call the office to talk through what they mean for you and what a sensible plan might look like.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}