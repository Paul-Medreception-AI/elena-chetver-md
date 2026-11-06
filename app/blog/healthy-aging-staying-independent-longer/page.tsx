import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthy Aging: Staying Independent Longer',
  description: 'Evidence-based ways to protect strength, memory, mobility and health as you age, and how primary care can help you stay independent for longer.',
  alternates: { canonical: '/blog/healthy-aging-staying-independent-longer' },
  openGraph: {
    title: 'Healthy Aging: Staying Independent Longer',
    description: 'Evidence-based ways to protect strength, memory, mobility and health as you age, and how primary care can help you stay independent for longer.',
    url: 'https://elenachetvermd.com/blog/healthy-aging-staying-independent-longer',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Healthy Aging: Staying Independent Longer',
    description: 'Evidence-based ways to protect strength, memory, mobility and health as you age, and how primary care can help you stay independent for longer.',
  },
}

const tips = [
  'Strength training two or more days a week, plus regular walking or other aerobic activity',
  'Balance practice such as standing on one foot near a counter, tai chi, or yoga',
  'Protein at each meal, with plenty of vegetables, fruit, whole grains and healthy fats',
  'Seven to nine hours of sleep and a consistent sleep schedule',
  'Regular time with friends, family, neighbors or community groups',
  'Yearly review of every medication and supplement you take',
]

const check = (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  return (
    <main className="font-sans">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Healthy Aging: Staying Independent Longer</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-healthy-aging-staying-independent-longer.jpg"} alt={"Elderly man in blue shirt lifting dumbbells near laptop, embracing home fitness."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="mb-6">Most of us hope for the same thing as the years pass: to keep living on our own terms. We want to climb our own stairs, cook our own meals, see our grandchildren, and make our own decisions. The good news is that independence in later life is shaped by far more than genes or luck. Daily habits and timely medical care make a real difference.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What healthy aging really means</h2>
        <p className="mb-6">Healthy aging does not mean avoiding every illness or looking young. It means preserving the abilities that matter to you: walking, thinking clearly, managing your own health, and staying connected to people and activities you love. Researchers often call this &ldquo;functional ability,&rdquo; and it is a better predictor of quality of life than any single lab value.</p>
        <p className="mb-6">Some change is normal. Muscle mass gradually declines, reaction time slows a little, and recovery takes longer. But many changes once blamed on age alone, such as severe weakness, frequent falls, or major memory loss, are often influenced by factors we can address.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who is affected and why it matters</h2>
        <p className="mb-6">Everyone ages, but the choices that protect independence start earlier than many people expect. Muscle and bone health begin to shift in midlife, and blood pressure, blood sugar, and cholesterol quietly affect the heart and brain for decades. Adults of any age benefit from these steps, and it is rarely too late to start.</p>
        <p className="mb-6">Falls are a good example of why this matters. In older adults, a fall can lead to a fracture, a hospital stay, and a loss of confidence that makes people move less, which weakens them further. Preventing that cycle is one of the most valuable goals in later-life care.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the research shows</h2>
        <p className="mb-6">Large studies consistently point to a few pillars. Regular physical activity lowers the risk of falls, heart disease, diabetes, depression, and cognitive decline. Resistance training in particular helps older adults maintain muscle and bone, and balance-focused exercise such as tai chi has been shown to reduce falls.</p>
        <p className="mb-6">Nutrition matters too. Eating patterns rich in vegetables, fruit, legumes, fish, and olive oil are linked with better heart and brain health. Adequate protein helps preserve muscle. Good sleep supports memory and mood, and strong social ties are associated with longer life and lower dementia risk.</p>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Independence in later life is shaped by far more than genes or luck.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical steps you can start now</h2>
        <p className="mb-6">You do not need to change everything at once. Pick one or two habits and build from there:</p>
        <ul className="space-y-3 mb-6">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">
              {check}
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The role of preventive primary care</h2>
        <p className="mb-6">A steady relationship with a primary care doctor helps catch problems early and keeps the whole picture in view. Routine care for older adults often includes blood pressure and diabetes checks, cholesterol management, recommended vaccines and cancer screenings, bone density discussions, and vision and hearing checks. Untreated hearing loss and poor vision, for example, are linked to isolation, falls, and cognitive decline.</p>
        <p className="mb-6">Medication review is just as important. As people see more specialists, prescriptions can pile up, and some combinations raise the risk of dizziness, confusion, or falls. A clinician who knows your history can help simplify and adjust.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs worth discussing with your doctor</h2>
        <p className="mb-6">Do not dismiss new changes as &ldquo;just getting older.&rdquo; Talk with your doctor if you notice unexplained weight loss, new unsteadiness or a fall, increasing forgetfulness that affects daily life, persistent low mood, trouble sleeping, or withdrawing from activities you once enjoyed. Many of these have treatable causes, and early attention gives you more options.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the next step</h2>
        <p className="mb-6">Staying independent is a long-term project, and you do not have to plan it alone. If you would like to talk through your goals, review your health, and build a prevention plan that fits your life, call the office or reach out through our contact page. Small steps taken today can protect the years ahead.</p>
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
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m-5.25-5.25h10.5M3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z" />
              </svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Resources Hub</h4>
              <p className="text-sm text-[var(--color-muted)]">Browse all patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Our Services</h4>
              <p className="text-sm text-[var(--color-muted)]">See the primary care services offered.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
              </svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Contact the Office</h4>
              <p className="text-sm text-[var(--color-muted)]">Reach out with questions about your care.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-dark)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}