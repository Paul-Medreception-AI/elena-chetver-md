import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Elena Chetver, MD | West Hollywood Primary Care',
  description: 'Contact Elena Chetver, MD in West Hollywood, CA. Send a message, ask a question, or reach out to schedule a primary care visit.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Elena Chetver, MD | West Hollywood Primary Care',
    description: 'Contact Elena Chetver, MD in West Hollywood, CA. Send a message, ask a question, or reach out to schedule a primary care visit.',
    url: 'https://elenachetvermd.com/contact',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Elena Chetver, MD | West Hollywood Primary Care',
    description: 'Contact Elena Chetver, MD in West Hollywood, CA. Send a message, ask a question, or reach out to schedule a primary care visit.',
  },
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light">Get In Touch</h1>
          <p className="mt-6 text-lg text-white/90">
            We&apos;d love to hear from you. Reach out to schedule an appointment or ask a question.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto px-6">
          <div id="form" className="animate-fade-up bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)] self-start">
            <h2 className="font-cormorant text-3xl mb-8 text-[var(--color-primary)]">Send Us a Message</h2>
            <p className="text-[var(--color-ink)] mb-6">
              Leave a message below and the office will get back to you.
            </p>
            <ContactForm />
            <p className="text-[var(--color-muted)] text-xs mt-4">
              Please do not send medical details through this form or by email. For anything urgent, call the office, or call 911 in an emergency.
            </p>
          </div>

          <div className="space-y-8">
            {/* TODO(optimize): fill in real NAP (name/address/phone) before launch */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <svg className="w-8 h-8 stroke-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <h3 className="font-cormorant text-2xl mt-4 mb-2 text-[var(--color-primary)]">Visit Us</h3>
              <p className="text-[var(--color-ink)]">[Address to be added]</p>
              <p className="text-[var(--color-muted)]">West Hollywood, CA</p>
            </div>

            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <svg className="w-8 h-8 stroke-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
              </svg>
              <h3 className="font-cormorant text-2xl mt-4 mb-2 text-[var(--color-primary)]">Call or Email</h3>
              <p className="font-cormorant text-3xl font-bold text-[var(--color-ink)]">[Phone to be added]</p>
              <p className="text-[var(--color-muted)] mt-2">[Email to be added]</p>
            </div>

            <div className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-8">
              <svg className="w-8 h-8 stroke-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
              </svg>
              <h3 className="font-cormorant text-2xl mt-4 mb-2 text-[var(--color-primary)]">Hours</h3>
              <p className="text-[var(--color-ink)]">[Hours to be added]</p>
            </div>

            <div className="animate-fade-up bg-[var(--color-primary)] text-white rounded-2xl p-8">
              <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M8 3v4M16 3v4" />
              </svg>
              <h3 className="font-cormorant text-2xl mt-4 mb-2">Book an Appointment</h3>
              <p className="text-white/90 mb-6">
                Send a message and the office will explain how the practice works and what to expect at your first visit.
              </p>
              <a href="#form" className="inline-block rounded-full bg-white px-6 py-3 font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-light)]">
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}