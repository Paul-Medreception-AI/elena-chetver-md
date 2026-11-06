import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Staying Healthy During Cold and Flu Season',
  description: 'Practical, evidence-based ways to lower your risk of colds, flu and other winter respiratory illness, and when to seek care from your primary care doctor.',
  alternates: { canonical: '/blog/staying-healthy-during-cold-and-flu-season' },
  openGraph: {
    title: 'Staying Healthy During Cold and Flu Season',
    description: 'Practical, evidence-based ways to lower your risk of colds, flu and other winter respiratory illness, and when to seek care from your primary care doctor.',
    url: 'https://elenachetvermd.com/blog/staying-healthy-during-cold-and-flu-season',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Staying Healthy During Cold and Flu Season',
    description: 'Practical, evidence-based ways to lower your risk of colds, flu and other winter respiratory illness, and when to seek care from your primary care doctor.',
  },
}

const tips = [
  'Get an annual flu vaccine; it is recommended for most people six months and older.',
  'Wash your hands with soap and water for at least 20 seconds, especially before eating and after being in public places.',
  'Avoid touching your eyes, nose and mouth, which are the main entry points for viruses.',
  'Aim for seven or more hours of sleep, since short sleep is linked to a weaker response to infection.',
  'Stay physically active, drink enough fluids and eat a balanced diet rich in fruits, vegetables and protein.',
  'Stay home when you are sick, and ask others to do the same.',
]

const related = [
  { href: '/blog', title: 'All Resources from the Blog', text: 'Browse every patient education article in one place.' },
  { href: '/services', title: 'Primary Care Services', text: 'See how ongoing primary care supports your health year-round.' },
  { href: '/contact', title: 'Contact the Office', text: 'Have a question about a vaccine or symptoms? Reach out.' },
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
      <SplitHero src="/images/stock/blog-staying-healthy-during-cold-and-flu-season.jpg" alt="Senior man resting on a couch indoors with medicines on the table, looking unwell.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Staying Healthy During Cold and Flu Season</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          There is a particular kind of tired that arrives with the first scratchy throat of winter. You cancel plans, miss work, and wonder whether it was the handshake last week or the crowded train this morning. Cold and flu season touches nearly every household, and while you cannot eliminate your risk, you can meaningfully lower it. This guide covers what these illnesses are, who is most affected, and the habits that make the biggest difference.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Colds and flu: what is the difference?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Both are respiratory illnesses caused by viruses, and they can feel similar at first. Colds are usually milder and come on gradually, with a runny or stuffy nose, sneezing and a sore throat. Influenza tends to arrive suddenly and hits harder, with fever, body aches, chills, headache, fatigue and a dry cough.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          COVID-19 and RSV also circulate in colder months and can look much the same. Symptoms alone often cannot tell them apart, which is one reason testing can be helpful when symptoms are significant or you are at higher risk.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who is most at risk?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Anyone can get sick, but some people are more likely to develop complications such as pneumonia, dehydration or a flare of an existing condition. Higher-risk groups include:
        </p>
        <ul className="text-[var(--color-ink)] leading-loose text-base list-disc pl-6 mb-4">
          <li>Adults 65 and older</li>
          <li>Young children, especially under age five</li>
          <li>Pregnant people</li>
          <li>People with asthma, COPD, heart disease, diabetes or kidney disease</li>
          <li>People with weakened immune systems</li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you live with or care for someone in one of these groups, your own prevention habits protect them too.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the evidence says about prevention</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Vaccination remains the most effective single step. Flu vaccines vary in effectiveness from year to year, but they consistently reduce the risk of illness, and even more reliably reduce the risk of hospitalization and severe disease. Updated COVID-19 vaccines and, for eligible groups, RSV vaccines add further protection.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Hand hygiene has solid research behind it as well. Regular handwashing reduces the spread of respiratory and gastrointestinal infections. Sleep matters too: studies have found that people who sleep less are more likely to catch a cold after being exposed to a virus.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Good ventilation, opening windows when practical, and wearing a well-fitting mask in crowded indoor spaces during peak season or when you are at higher risk can also reduce exposure.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Vaccination remains the most effective single step.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Everyday habits that help</h2>
        <ul className="space-y-4 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">If you do get sick</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Most colds and many cases of flu improve with rest, fluids and time. Fever reducers and pain relievers can ease symptoms, and saline rinses, humidified air and warm liquids may soothe congestion and a sore throat. Antibiotics do not work on viruses, so they are not helpful for colds or flu.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          For influenza, antiviral medication can shorten illness and reduce complications, but it works best when started within the first couple of days of symptoms. That is a good reason to reach out early if you are at higher risk.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to seek care</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Seek urgent medical attention for trouble breathing, chest pain or pressure, confusion, severe or persistent vomiting, signs of dehydration, or a fever that returns after improving. Call your doctor if symptoms last more than about ten days, keep worsening, or if you have a chronic condition that feels unstable.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not have to navigate the season alone. If you have questions about vaccines, a plan for managing a chronic condition through winter, or symptoms that concern you, call the office to talk with Elena Chetver, MD about the right next step for you.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
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
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}