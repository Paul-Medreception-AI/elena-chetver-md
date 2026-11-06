import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Seasonal Allergies: Managing Symptoms Effectively',
  description: 'Learn what triggers seasonal allergies, how to tell them from a cold, and practical, evidence-based steps to ease symptoms and breathe easier.',
  alternates: { canonical: '/blog/seasonal-allergies-managing-symptoms-effectively' },
  openGraph: {
    title: 'Seasonal Allergies: Managing Symptoms Effectively',
    description: 'Learn what triggers seasonal allergies, how to tell them from a cold, and practical, evidence-based steps to ease symptoms and breathe easier.',
    url: 'https://elenachetvermd.com/blog/seasonal-allergies-managing-symptoms-effectively',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Seasonal Allergies: Managing Symptoms Effectively',
    description: 'Learn what triggers seasonal allergies, how to tell them from a cold, and practical, evidence-based steps to ease symptoms and breathe easier.',
  },
}

const tips = [
  'Check daily pollen forecasts and plan outdoor time for when counts are lower, often after rain.',
  'Keep windows closed at home and in the car during high-pollen days, and use air conditioning with a clean filter.',
  'Shower and change clothes after spending time outside so pollen does not travel to your bed.',
  'Wash bedding weekly in hot water and consider allergen-proof pillow covers.',
  'Rinse your nasal passages with saline, using distilled or previously boiled water.',
  'Wear sunglasses outdoors and avoid hanging laundry outside when pollen is high.',
]

const related = [
  { href: '/blog', title: 'More Patient Resources', text: 'Browse all of our patient education articles in the resource hub.' },
  { href: '/services', title: 'Primary Care Services', text: 'See how ongoing primary care can support your everyday health.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out to ask about care for allergy symptoms that will not settle.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-seasonal-allergies-managing-symptoms-effectively.jpg" alt="A man sneezing into a tissue, illustrating symptoms of flu or allergies.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Seasonal Allergies: Managing Symptoms Effectively</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You wake up with itchy eyes, a stuffy nose, and a head that feels wrapped in cotton. You were fine last week. Now the simplest tasks, like a walk outside or a good night of sleep, feel like a struggle. If this pattern returns every year, you are far from alone, and you do not have to simply endure it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Seasonal Allergies?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Seasonal allergies, often called hay fever or allergic rhinitis, happen when your immune system overreacts to airborne particles that are normally harmless. Tree pollen in spring, grass pollen in summer, weed pollen in late summer and fall, and outdoor mold spores are common triggers. When you breathe them in, your body releases histamine and other chemicals, which cause the familiar symptoms.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Typical symptoms include sneezing, a runny or congested nose, itchy or watery eyes, an itchy throat, postnasal drip, and fatigue. In milder climates, plants can release pollen for much of the year, so the season may be longer than you expect.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Allergic rhinitis affects millions of children and adults. It often begins in childhood or young adulthood, but it can appear at any age. A family history of allergies, asthma, or eczema raises the likelihood. People who already have asthma may notice more wheezing or coughing when pollen counts climb.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Allergies or a Cold?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          The two can feel alike, but there are clues. Colds usually last about a week to ten days, may bring body aches or a low fever, and often produce thicker mucus. Allergies tend to last as long as you are exposed to the trigger, cause itching of the eyes and nose, and do not cause fever. Clear, watery nasal discharge and repeated sneezing point toward allergy.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Allergies tend to last as long as you are exposed to the trigger, cause itching of the eyes and nose, and do not cause fever.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Allergy symptoms are more than a nuisance. Poor sleep from nasal congestion can reduce concentration, mood, and work or school performance. Untreated allergic rhinitis is linked with sinus infections, ear problems in children, and worse asthma control. Research consistently shows that treating symptoms early and consistently leads to better results than waiting until you feel miserable.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Supports</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Clinical guidelines generally recognize several effective options:
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
            <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            <span><strong>Intranasal corticosteroid sprays</strong> are widely considered the most effective single treatment for nasal symptoms, and work best when used regularly.</span>
          </li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
            <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            <span><strong>Second-generation oral antihistamines</strong> ease sneezing, itching, and runny nose with less drowsiness than older versions.</span>
          </li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
            <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            <span><strong>Antihistamine eye drops</strong> can relieve itchy, watery eyes.</span>
          </li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
            <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            <span><strong>Allergen immunotherapy</strong> (allergy shots or under-the-tongue tablets) can reduce the underlying sensitivity over time for appropriate patients.</span>
          </li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Decongestant sprays should not be used for more than a few days because rebound congestion can occur. Oral decongestants may not be suitable for people with high blood pressure or heart conditions, so check with a clinician first.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you know your season, starting a prescribed or recommended medication one to two weeks before it begins often works better than starting after symptoms flare.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Reach out to a clinician if over-the-counter options are not enough, if symptoms disrupt sleep or daily life, or if you have wheezing, chest tightness, facial pain, fever, or symptoms lasting beyond what is typical for you. Seek urgent care for trouble breathing or swelling of the face or throat.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You deserve to enjoy the changing seasons rather than dread them. A thoughtful conversation about your triggers, your history, and your goals can lead to a plan that fits your life. To discuss your symptoms, call the office or send a message through the contact page.
        </p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 12h6M9 15.75h6M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-base leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}