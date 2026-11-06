import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care West Hollywood CA | Elena Chetver, MD',
  description: 'Looking for primary care near West Hollywood, CA? Learn about the services Elena Chetver, MD offers and how to schedule a visit.',
  alternates: { canonical: '/locations/west-hollywood-ca' },
  openGraph: {
    title: 'Primary Care West Hollywood CA | Elena Chetver, MD',
    description: 'Looking for primary care near West Hollywood, CA? Learn about the services Elena Chetver, MD offers and how to schedule a visit.',
    url: 'https://elenachetvermd.com/locations/west-hollywood-ca',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Primary Care West Hollywood CA | Elena Chetver, MD',
    description: 'Looking for primary care near West Hollywood, CA? Learn about the services Elena Chetver, MD offers and how to schedule a visit.',
  },
}

const services = [
  {
    title: 'Preventive Care',
    desc: 'Routine checkups, screenings and guidance to help you stay well and catch concerns early.',
    href: '/services',
    icon: 'M9 12.75 11.25 15 15 9.75m6 2.25a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    title: 'Chronic Condition Management',
    desc: 'Ongoing care for long-term conditions such as high blood pressure, diabetes and cholesterol concerns.',
    href: '/services',
    icon: 'M3 13.5h4.5l2.25-6 3 10.5 2.25-4.5H21',
  },
  {
    title: 'Acute Illness Visits',
    desc: 'Evaluation and treatment for everyday illnesses and minor injuries.',
    href: '/services',
    icon: 'M12 4.5v15m7.5-7.5h-15',
  },
]

const faqs = [
  {
    q: 'How do I get to the office from West Hollywood?',
    a: 'Call the office for the address and directions before your first visit, and plan your route from West Hollywood using your preferred navigation app.',
  },
  {
    q: 'Is the practice taking new patients from West Hollywood?',
    a: 'Call the office or use the contact page to ask about current availability and how to get started.',
  },
  {
    q: 'What should I bring to my first visit?',
    a: 'Bring a photo ID, your insurance card if you have one, a list of current medications and supplements, and any recent medical records or test results.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Use the contact page to send a request, or call the office to schedule.',
  },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:underline">Home</Link> › Locations › <span>West Hollywood, CA</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6">Primary Care Near West Hollywood, CA</h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl">Serving patients from West Hollywood and surrounding CA communities.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium border border-white/40 transition-colors">
            Schedule in West Hollywood
          </Link>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/location-west-hollywood-ca.jpg"} alt={"Sunny day showcasing iconic Dixie Hollywood signage with palm trees and clear blue sky."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-6">Serving the West Hollywood Area</h2>
          <p className="text-[var(--color-ink)] leading-relaxed mb-4">
            Elena Chetver, MD welcomes patients traveling from West Hollywood and nearby neighborhoods. The practice has a single office, so call the office for the address and directions, then plan your route using your preferred map or navigation app.
          </p>
          <p className="text-[var(--color-ink)] leading-relaxed mb-8">
            Patients from West Hollywood can expect an unhurried, personal primary care visit focused on listening to your concerns, reviewing your health history and building a plan together. Reach out through the contact page to ask questions before your first appointment.
          </p>
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-12">Services Available to West Hollywood Patients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="animate-fade-up bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-[var(--color-accent)] mb-4">
                  <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">{s.title}</h3>
                <p className="text-[var(--color-muted)] mb-5 leading-relaxed">{s.desc}</p>
                <Link href={s.href} className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-10">West Hollywood Patient FAQs</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="animate-fade-up bg-white border border-[var(--color-border)] rounded-2xl p-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{f.q}</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-6">Get Expert Care from West Hollywood</h2>
          <p className="text-white/90 mb-8">Reach out to schedule a primary care visit with Elena Chetver, MD.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium border border-white/40 transition-colors">
            Contact the Office
          </Link>
        </div>
      </section>
    </main>
  )
}