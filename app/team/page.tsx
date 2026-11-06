import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'Our Team | Elena Chetver, MD, West Hollywood'
const DESCRIPTION = 'Meet Dr. Elena Chetver, internal medicine physician, and the bilingual English and Russian staff of her West Hollywood office.'
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: '/team' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/team', siteName: 'Elena Chetver, MD', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

export default function TeamPage() {
  return (
    <main>
      <SplitHero src="/images/stock/hub-team.jpg" alt="Chairs in a quiet medical office waiting room">
        <nav className="text-sm mb-6 opacity-90"><Link href="/" className="hover:underline">Home</Link><span className="mx-2">›</span><Link href="/about" className="hover:underline">About</Link><span className="mx-2">›</span><span>Team</span></nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Our Team</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">One physician and a small front office that knows patients by name, in English and in Russian.</p>
      </SplitHero>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl border border-[var(--color-border)] p-8 grid gap-8 md:grid-cols-[auto,1fr] items-start">
            <div className="w-28 h-28 rounded-full bg-[var(--color-light)] text-[var(--color-dark)] flex items-center justify-center font-cormorant text-4xl font-semibold" aria-hidden="true">EC</div>
            <div>
              <h2 className="font-cormorant text-3xl text-[var(--color-ink)]">Elena Chetver, MD</h2>
              <p className="text-[var(--color-primary)] font-semibold mt-1">Internal Medicine Physician</p>
              <p className="text-[var(--color-ink)] leading-relaxed mt-4">Dr. Chetver has practised internal medicine in West Hollywood for over 40 years. She trained at the First Moscow State Medical University and completed her internal medicine residency at LA County and USC Medical Center. She is board certified by the American Board of Internal Medicine, is affiliated with Cedars-Sinai Medical Center, and cares for adult patients in English and Russian.</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-sm text-[var(--color-ink)]">
                <li>Adult primary care and internal medicine</li>
                <li>Annual physicals and Medicare wellness visits</li>
                <li>Blood pressure, cholesterol and diabetes care</li>
                <li>Sick visits, EKGs and pre-surgical clearance</li>
              </ul>
              <Link href="/about" className="inline-block text-[var(--color-primary)] font-semibold mt-5 hover:underline">More about Dr. Chetver →</Link>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-[var(--color-border)] p-8">
            <h2 className="font-cormorant text-2xl text-[var(--color-ink)]">Front office</h2>
            <p className="text-[var(--color-ink)] leading-relaxed mt-3">The office staff handle scheduling, insurance questions, refill requests and paperwork, and speak both Russian and English. Olga, the practice manager, can help with anything the phone system cannot.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">New patients are welcome</h2>
          <p className="text-[var(--color-muted)] mt-4">Call the office or send a request and we will find a time.</p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" data-ga="consultation_click" className="bg-[var(--color-primary)] text-white px-7 py-3.5 rounded-xl font-bold">Request an Appointment</Link>
            <a href="tel:+13236502991" data-ga="phone_click" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-7 py-3.5 rounded-xl font-semibold">Call (323) 650-2991</a>
          </div>
        </div>
      </section>
    </main>
  )
}
