import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'How to Read Your Lab Results | Elena Chetver, MD',
  description: 'A plain-language guide to reading your lab results: reference ranges, common panels, what flags mean, and questions to ask about your numbers.',
  alternates: { canonical: '/blog/how-to-read-your-lab-results' },
  openGraph: {
    title: 'How to Read Your Lab Results | Elena Chetver, MD',
    description: 'A plain-language guide to reading your lab results: reference ranges, common panels, what flags mean, and questions to ask about your numbers.',
    url: 'https://elenachetvermd.com/blog/how-to-read-your-lab-results',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'How to Read Your Lab Results | Elena Chetver, MD',
    description: 'A plain-language guide to reading your lab results: reference ranges, common panels, what flags mean, and questions to ask about your numbers.',
  },
}

const tips = [
  'Look at the reference range printed next to each result, since it differs between laboratories.',
  'Compare results to your own past values, not just to the range.',
  'Note whether you fasted, were ill, or took supplements before the draw.',
  'Write down questions before your follow-up conversation.',
  'Ask what a result means for your decisions, not only whether it is normal.',
]

const related = [
  { href: '/services', title: 'Primary Care Services', desc: 'See the kinds of care the practice provides.' },
  { href: '/conditions', title: 'Conditions We Care For', desc: 'Browse common health concerns and how they are approached.' },
  { href: '/blog', title: 'All Resources', desc: 'Return to the full library of patient education articles.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-how-to-read-your-lab-results.jpg" alt="A blood sample tube placed on a chemistry panel document, showcasing medical testing.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">How to Read Your Lab Results</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The notification arrives on your phone: your results are ready. You open the portal and find a column of abbreviations, numbers, and a few items marked in red or flagged with an H or an L. Your heart speeds up before you have understood a single line. This experience is extremely common, and it is not a sign that you are doing anything wrong. Lab reports are written for clinicians, not for patients. With a little background, you can read yours with more confidence and walk into your next conversation with better questions.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a lab report actually shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A lab report lists the test name, your result, the unit of measurement, and a reference range. The reference range is the span of values seen in most healthy people tested by that laboratory. It is usually built from a statistical middle portion of a healthy population, which means a small share of perfectly healthy people will fall slightly outside it. Ranges also vary by laboratory, age, and sex, so always use the range printed on your own report.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why "abnormal" does not always mean "disease"</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A flagged value simply means a number sits outside the reference range. It does not diagnose anything on its own. Hydration, a recent meal, intense exercise, a cold, stress, medications, and even the time of day can nudge results. A mildly out-of-range value is often repeated to see whether it was a one-time fluctuation. Likewise, a result inside the range is not always reassuring if it has changed sharply from your usual numbers.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          A flagged value simply means a number sits outside the reference range.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common panels and what they look at</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most routine blood work falls into a few familiar groups:
        </p>
        <ul className="my-4 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li><strong>Complete blood count (CBC):</strong> counts red cells, white cells, and platelets. It can point toward anemia, infection, or other blood conditions.</li>
          <li><strong>Basic or comprehensive metabolic panel:</strong> measures glucose, electrolytes, kidney function markers such as creatinine, and in the comprehensive version, liver enzymes and proteins.</li>
          <li><strong>Lipid panel:</strong> reports total cholesterol, LDL, HDL, and triglycerides, which help estimate cardiovascular risk.</li>
          <li><strong>Hemoglobin A1c:</strong> reflects average blood sugar over roughly the past three months and is used to screen for and monitor diabetes.</li>
          <li><strong>Thyroid stimulating hormone (TSH):</strong> a screening measure of how the thyroid gland is functioning.</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the research says about context</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Clinical guidelines consistently emphasize that test results should be interpreted alongside symptoms, medical history, family history, and physical examination. Cardiovascular risk, for example, is generally estimated from several factors together, including age, blood pressure, smoking status, and cholesterol, rather than from one number. Trends over time are also valuable. A fasting glucose that rises gradually across several years can be more informative than a single reading, which is why keeping your past reports matters.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical tips for reviewing your results</h2>
        <ul className="my-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Be careful with internet searches</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          It is natural to search for a result the moment you see it. Search results tend to surface the most alarming possibilities, and they cannot account for your age, history, or the circumstances of your blood draw. If a result worries you, write down the test name, the value, and the range, and bring those to a clinician who knows your story.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Talk it through with someone who knows you</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Numbers on a screen are only part of the picture. If you have questions about your own results, or you would like help making sense of them in the context of your health goals, call the office to talk with Elena Chetver, MD. You deserve to understand your health information, not just receive it.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-2">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-muted)] text-sm">{r.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}