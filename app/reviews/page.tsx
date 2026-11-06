import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'Patient Reviews | Elena Chetver, MD'
const DESCRIPTION = 'Dr. Elena Chetver is rated 4.5 out of 5 from 140 verified patient reviews on Zocdoc. Read what West Hollywood patients say about her internal medicine practice.'
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: '/reviews' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/reviews', siteName: 'Elena Chetver, MD', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

const reviews = [
  { quote: 'I went to see Dr. Chetver for an annual physical and to find a new primary doctor. The booking process was very easy as she had appointments available within the week. The office was easy to find and had free parking spots available (which is a huge bonus for WeHo). The office was a little small and felt old school, but the staff was friendly and did my patient intake and paperwork right away.', name: 'Victoria C.', when: 'August 1, 2022', source: 'Zocdoc, verified patient (excerpt)' },
  { quote: 'I chose Dr. Chetver because of her photo and proximity to where I live, and was pleasantly surprised at how well picking a doctor from an app worked out. I\'ll continue to see Dr. Chetver as my primary care in the future.', name: 'Chelsea H.', when: 'July 8, 2022', source: 'Zocdoc, verified patient' },
]

export default function ReviewsPage() {
  return (
    <main>
      <SplitHero src="/images/stock/hub-reviews.jpg" alt="A doctor and a patient shaking hands outside a clinic">
        <nav className="text-sm mb-6 opacity-90"><Link href="/" className="hover:underline">Home</Link><span className="mx-2">›</span><span>Patient Reviews</span></nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Patient Reviews</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">Rated 4.5 out of 5 from 140 verified patient reviews on Zocdoc, with 91% of patients satisfied with their care.</p>
      </SplitHero>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-3 text-center">
            {[['4.5 / 5', 'overall rating'], ['4.7 / 5', 'bedside manner'], ['4.6 / 5', 'wait time']].map(([n, l]) => (
              <div key={l} className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)]"><div className="font-cormorant text-4xl text-[var(--color-ink)]">{n}</div><div className="text-sm text-[var(--color-muted)] mt-1">{l}</div></div>
            ))}
          </div>
          <p className="text-center text-sm text-[var(--color-muted)] mt-4">Ratings from 140 verified patient reviews on <a href="https://www.zocdoc.com/doctor/elena-chetver-md-144807" target="_blank" rel="noopener noreferrer" className="underline text-[var(--color-primary)]">Zocdoc</a>.</p>

          <div className="grid gap-6 md:grid-cols-2 mt-12">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-border)]">
                <blockquote className="text-[var(--color-ink)] leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 text-sm text-[var(--color-muted)]"><span className="font-semibold text-[var(--color-ink)]">{r.name}</span> · {r.when} · {r.source}</figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center mt-8"><a href="https://www.zocdoc.com/doctor/elena-chetver-md-144807" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline">Read all 140 reviews on Zocdoc →</a></p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Become a patient</h2>
          <p className="text-[var(--color-muted)] mt-4">Dr. Chetver is accepting new patients. Call the office or send a request.</p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" data-ga="consultation_click" className="bg-[var(--color-primary)] text-white px-7 py-3.5 rounded-xl font-bold">Request an Appointment</Link>
            <a href="tel:+13236502991" data-ga="phone_click" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-7 py-3.5 rounded-xl font-semibold">Call (323) 650-2991</a>
          </div>
        </div>
      </section>
    </main>
  )
}
