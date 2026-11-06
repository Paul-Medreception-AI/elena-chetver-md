import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'Visiting Our Office | Elena Chetver, MD'
const DESCRIPTION = 'Dr. Elena Chetver\'s office is in Suite 210 at 7531 Santa Monica Blvd., West Hollywood, CA 90046. Phone (323) 650-2991. Directions, hours and what to expect.'
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: '/telehealth' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/telehealth', siteName: 'Elena Chetver, MD', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

export default function VisitingPage() {
  return (
    <main>
      <SplitHero src="/images/stock/hub-visiting.jpg" alt="Palm trees along a sunny Los Angeles boulevard">
        <nav className="text-sm mb-6 opacity-90"><Link href="/" className="hover:underline">Home</Link><span className="mx-2">›</span><span>Visiting Our Office</span></nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Visiting Our Office</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">Suite 28 at 7607 Santa Monica Boulevard, in the heart of West Hollywood.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://maps.google.com/?q=7607+Santa+Monica+Blvd+Suite+28+West+Hollywood+CA+90046" target="_blank" rel="noopener noreferrer" className="bg-white text-[var(--color-dark)] px-7 py-3.5 rounded-xl font-bold shadow-xl">Open in Google Maps</a>
          <a href="tel:+13236502991" data-ga="phone_click" className="border-2 border-white text-white px-7 py-3.5 rounded-xl font-semibold">Call (323) 650-2991</a>
        </div>
      </SplitHero>
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <div className="bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-border)]"><h2 className="font-cormorant text-2xl text-[var(--color-ink)]">Address</h2><p className="mt-3 text-[var(--color-ink)]">7607 Santa Monica Blvd., Suite 28<br />West Hollywood, CA 90046</p><p className="text-[var(--color-muted)] text-sm mt-3">On Santa Monica Boulevard in West Hollywood.</p></div>
          <div className="bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-border)]"><h2 className="font-cormorant text-2xl text-[var(--color-ink)]">Phone and fax</h2><p className="mt-3"><a href="tel:+13236502991" data-ga="phone_click" className="font-semibold text-[var(--color-ink)] hover:underline">(323) 650-2991</a></p><p className="text-[var(--color-muted)] mt-1">Fax (323) 650-2993</p></div>
          <div className="bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-border)]"><h2 className="font-cormorant text-2xl text-[var(--color-ink)]">Hours</h2><p className="mt-3 text-[var(--color-ink)]">Monday to Friday, 9 am to 5 pm. Closed Saturday and Sunday.</p></div>
        </div>
        <div className="max-w-3xl mx-auto px-6 mt-14">
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)]">What to expect</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mt-4">Check in at the front desk, where the staff will copy your ID and insurance card and help with any forms, in English or Russian. Dr. Chetver sees every patient herself. If you need lab work, an EKG or a referral, it is arranged before you leave.</p>
        </div>
      </section>
    </main>
  )
}
