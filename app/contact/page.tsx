import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SplitHero from '@/components/SplitHero'

const TITLE = 'Contact | Elena Chetver, MD, West Hollywood'
const DESCRIPTION = 'Call (323) 650-2991 or send a request to Dr. Elena Chetver\'s office at 7607 Santa Monica Blvd., Suite 28, West Hollywood, CA 90046. English and Russian spoken.'
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: '/contact' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/contact', siteName: 'Elena Chetver, MD', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

export default function ContactPage() {
  return (
    <main>
      <SplitHero src="/images/stock/hub-contact.jpg" alt="The front desk of a medical office">
        <nav className="text-sm mb-6 opacity-90"><Link href="/" className="hover:underline">Home</Link><span className="mx-2">›</span><span>Contact</span></nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Contact the Office</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">Call during office hours, or leave a request and the office will call you back. We speak English and Russian.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="tel:+13236502991" data-ga="phone_click" className="bg-white text-[var(--color-dark)] px-7 py-3.5 rounded-xl font-bold shadow-xl">Call (323) 650-2991</a>
          <a href="#form" className="border-2 border-white text-white px-7 py-3.5 rounded-xl font-semibold">Send a request</a>
        </div>
      </SplitHero>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
          <div id="form">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Send Us a Message</h2>
            <p className="text-[var(--color-muted)] mt-3">Leave your name and the best way to reach you. The office calls back during business hours.</p>
            <div className="mt-6"><ContactForm /></div>
            <p className="text-xs text-[var(--color-muted)] mt-4">Please do not send medical details through this form or by email. For anything urgent, call the office. In an emergency, call 911.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">Visit Us</h3>
              <p className="mt-3 text-[var(--color-ink)]">7607 Santa Monica Blvd., Suite 28<br />West Hollywood, CA 90046</p>
              <a href="https://maps.google.com/?q=7607+Santa+Monica+Blvd+Suite+28+West+Hollywood+CA+90046" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-[var(--color-primary)] font-semibold hover:underline">Open in Google Maps →</a>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">Call or Fax</h3>
              <p className="mt-3"><a href="tel:+13236502991" data-ga="phone_click" className="font-cormorant text-3xl font-bold text-[var(--color-ink)] hover:underline">(323) 650-2991</a></p>
              <p className="text-[var(--color-muted)] mt-2">Fax (323) 650-2993</p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">Hours</h3>
              <p className="mt-3 text-[var(--color-ink)]">Monday to Friday, 9 am to 5 pm. Closed Saturday and Sunday.</p>
            </div>
            <div className="bg-[var(--color-ink)] text-white rounded-2xl p-7">
              <h3 className="font-cormorant text-2xl" lang="ru">По-русски</h3>
              <p className="mt-3 text-white/85" lang="ru">Звоните по телефону (323) 650-2991. Персонал говорит по-русски.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
