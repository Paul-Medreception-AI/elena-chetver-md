import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'
import { SERVICES } from '@/lib/data/services'

const TITLE = 'West Hollywood Internal Medicine Doctor | Elena Chetver, MD'
const DESCRIPTION = 'Dr. Elena Chetver, internal medicine physician at 7531 Santa Monica Blvd., Suite 210, West Hollywood, CA 90046. Over 40 years of adult primary care, in English and Russian. Call (323) 650-2991.'
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: '/locations/west-hollywood-ca' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/locations/west-hollywood-ca', siteName: 'Elena Chetver, MD', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

const areas = ['West Hollywood', 'Hollywood', 'Fairfax District', 'Beverly Grove', 'Hancock Park', 'Los Feliz', 'Beverly Hills', 'Mid-City']

export default function WestHollywoodPage() {
  return (
    <main>
      <SplitHero src="/images/stock/location-west-hollywood-ca.jpg" alt="Santa Monica Boulevard in West Hollywood lined with palm trees">
        <nav className="text-sm mb-6 opacity-90"><Link href="/" className="hover:underline">Home</Link><span className="mx-2">›</span><span>West Hollywood, CA</span></nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Internal Medicine in West Hollywood, CA</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">On Santa Monica Boulevard, caring for the adults of West Hollywood and the neighbourhoods around it for over 40 years.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" data-ga="consultation_click" className="bg-white text-[var(--color-dark)] px-7 py-3.5 rounded-xl font-bold shadow-xl">Request an Appointment</Link>
          <a href="tel:+13236502991" data-ga="phone_click" className="border-2 border-white text-white px-7 py-3.5 rounded-xl font-semibold">Call (323) 650-2991</a>
        </div>
      </SplitHero>
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">The office</h2>
            <p className="text-[var(--color-ink)] mt-4">7531 Santa Monica Blvd., Suite 210<br />West Hollywood, CA 90046</p>
            <p className="mt-2"><a href="tel:+13236502991" data-ga="phone_click" className="font-semibold text-[var(--color-ink)] hover:underline">(323) 650-2991</a> · Fax (323) 650-2993</p>
            <p className="text-[var(--color-muted)] mt-4 leading-relaxed">Dr. Chetver has practised in West Hollywood for decades and is affiliated with Cedars-Sinai Medical Center. The office speaks English and Russian, accepts Medicare and major plans, and is accepting new patients.</p>
            <a href="https://maps.google.com/?q=7531+Santa+Monica+Blvd+Suite+210+West+Hollywood+CA+90046" target="_blank" rel="noopener noreferrer" className="inline-block mt-5 text-[var(--color-primary)] font-semibold hover:underline">Open in Google Maps →</a>
          </div>
          <div>
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Patients come from</h2>
            <ul className="mt-5 flex flex-wrap gap-2">{areas.map((a) => <li key={a} className="px-4 py-2 rounded-full bg-[var(--color-cream)] border border-[var(--color-border)] text-sm font-semibold text-[var(--color-ink)]">{a}</li>)}</ul>
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-10">Services</h2>
            <ul className="mt-4 space-y-2">{SERVICES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-[var(--color-primary)] font-semibold hover:underline">{s.title}</Link></li>)}</ul>
          </div>
        </div>
      </section>
    </main>
  )
}
