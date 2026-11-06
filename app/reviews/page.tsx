import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patient Reviews | Elena Chetver, MD',
  description: 'Share your experience with primary care in West Hollywood, CA. Elena Chetver, MD welcomes feedback from patients about their care.',
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Patient Reviews | Elena Chetver, MD',
    description: 'Share your experience with primary care in West Hollywood, CA. Elena Chetver, MD welcomes feedback from patients about their care.',
    url: 'https://elenachetvermd.com/reviews',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Patient Reviews | Elena Chetver, MD',
    description: 'Share your experience with primary care in West Hollywood, CA. Elena Chetver, MD welcomes feedback from patients about their care.',
  },
}

export default function ReviewsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-4">Patient Reviews</h1>
          <p className="text-lg text-white/90">
            If you have been a patient of the practice, we would be grateful to hear about your experience.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
          <svg
            className="w-8 h-8 mx-auto mb-6 text-[var(--color-accent)]"
            stroke="currentColor"
            strokeWidth={1.5}
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.5-.7L3 21l1.8-5A8.4 8.4 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z" />
          </svg>
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">We&apos;d Love Your Feedback</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            Your experience helps us improve and helps others in West Hollywood understand what to expect from unhurried primary care. If you would like to share your thoughts, questions, or suggestions, please get in touch with the office.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white transition-colors hover:bg-[var(--color-accent-dark)]"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Primary Care With Time to Listen</h2>
          <p className="text-white/90 mb-8">
            Reach out to learn how the practice works and what to expect from your first visit.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-3 font-medium text-[var(--color-dark)] transition-colors hover:bg-[var(--color-light)]"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  )
}