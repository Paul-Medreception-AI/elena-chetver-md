import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Travel Health Tips Before You Go',
  description: 'Plan ahead for a healthy trip: pre-travel checkups, vaccines, medications, food and water safety, and what to pack in your travel health kit.',
  alternates: { canonical: '/blog/travel-health-tips-before-you-go' },
  openGraph: {
    title: 'Travel Health Tips Before You Go',
    description: 'Plan ahead for a healthy trip: pre-travel checkups, vaccines, medications, food and water safety, and what to pack in your travel health kit.',
    url: 'https://elenachetvermd.com/blog/travel-health-tips-before-you-go',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Travel Health Tips Before You Go',
    description: 'Plan ahead for a healthy trip: pre-travel checkups, vaccines, medications, food and water safety, and what to pack in your travel health kit.',
  },
}

function Check() {
  return (
    <svg className="w-5 h-5 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

const related = [
  { href: '/blog', title: 'More Patient Resources', text: 'Browse all of our primary care education articles.' },
  { href: '/services', title: 'Primary Care Services', text: 'Learn how ongoing primary care supports your health.' },
  { href: '/contact', title: 'Contact the Office', text: 'Call the office to ask about planning a pre-trip visit.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-travel-health-tips-before-you-go.jpg" alt="Brown leather bag with passport in an airport setting, ideal for travel and fashion themes.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Travel Health Tips Before You Go</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>You have booked the flights, reserved the hotel, and mapped out the sights. Then a fever, a stomach illness, or a lost prescription turns a long-awaited trip into a stressful one. Most travel health problems are preventable, and a little planning weeks before departure goes a long way.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Travel Health Planning Matters</h2>
        <p>Travelers meet different germs, climates, foods, and healthcare systems than they do at home. Common trip-related problems include traveler&apos;s diarrhea, respiratory infections, motion sickness, sunburn, insect-borne illness, and flare-ups of existing conditions. Anyone who travels can be affected, but people with chronic conditions, older adults, young children, and pregnant travelers have more to consider.</p>
        <p className="mt-4">Public health agencies such as the CDC recommend starting your preparation four to six weeks before departure, because some vaccines need multiple doses or time to build protection.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Start With a Pre-Travel Conversation</h2>
        <p>A visit with your primary care doctor before a trip lets you review your destination, the length of your stay, your planned activities, and your medical history together. Spending time in rural areas, visiting family, or traveling for adventure activities each carry different risks than a resort stay.</p>
        <p className="mt-4">Topics worth discussing include:</p>
        <ul className="mt-4 space-y-3">
          {[
            'Routine vaccines, such as measles, flu, COVID-19, and tetanus, to make sure you are up to date',
            'Destination-specific vaccines or preventive medicines, depending on where you are going',
            'How to manage chronic conditions such as diabetes, asthma, or high blood pressure across time zones',
            'Risks tied to pregnancy, age, or a weakened immune system',
          ].map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Vaccines and Preventive Medicines</h2>
        <p>Recommendations depend on your destination. Depending on where you go, your doctor may discuss hepatitis A, typhoid, yellow fever, rabies, or Japanese encephalitis vaccines, or medicine to prevent malaria. Malaria prevention in particular must usually be started before you arrive and continued afterward, so timing matters.</p>
        <p className="mt-4">Staying current on routine immunizations is just as important. Measles, for example, still circulates in many parts of the world, and travelers can bring it home.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Most travel health problems are preventable, and a little planning weeks before departure goes a long way.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Medications and Medical Records</h2>
        <p>Running out of medicine far from home is one of the most avoidable travel problems. Bring more than you need for the trip, and keep medications in your carry-on in their original labeled containers. Rules about certain medicines vary by country, so check regulations for your destination before you pack.</p>
        <ul className="mt-4 space-y-3">
          {[
            'Carry a list of your diagnoses, medications, doses, and allergies',
            'Keep a copy of key records, such as a recent ECG if you have heart disease',
            'Ask about adjusting dose timing if you will cross several time zones',
            'Learn how to reach a doctor while away, and check what your travel insurance covers',
          ].map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Food, Water, and Insect Safety</h2>
        <p>Traveler&apos;s diarrhea is the most common illness among people visiting regions with different sanitation standards. Simple habits lower the risk: eat food that is cooked and served hot, choose fruit you can peel, drink bottled or treated water where tap water is unsafe, and wash your hands often or use an alcohol-based sanitizer.</p>
        <p className="mt-4">For mosquito-borne illnesses, use an EPA-registered repellent, wear long sleeves in endemic areas, and sleep in screened or air-conditioned rooms when possible.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Staying Well During the Journey</h2>
        <p>Long flights and car rides increase the chance of blood clots in some people. Stand and walk periodically, stretch your calves, stay hydrated, and ask your doctor whether compression stockings make sense for you. Sunscreen, sunglasses, and a hat protect against sun damage, and prioritizing sleep helps your immune system cope with a changed routine.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">A Simple Travel Health Kit</h2>
        <ul className="mt-4 space-y-3">
          {[
            'Prescription medicines plus a few extra days of supply',
            'Pain and fever reducers, antihistamines, and oral rehydration salts',
            'Bandages, antiseptic, and any personal first aid items',
            'Sunscreen, insect repellent, and hand sanitizer',
            'Motion sickness remedies if you are prone to it',
          ].map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">After You Return</h2>
        <p>Pay attention to how you feel for several weeks after getting home. If you develop a fever, persistent diarrhea, a rash, or any unusual symptoms, tell your doctor about your recent travel right away, since it helps narrow down possible causes.</p>

        <p className="mt-8">If a trip is on your calendar, do not wait until the week before you leave. Call the office to talk about planning ahead so you can enjoy your travels with more confidence.</p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
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
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center px-6">
        <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
        <p className="mb-8 text-white/80">We are here to help.</p>
        <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Office</a>
      </section>
    </main>
  )
}