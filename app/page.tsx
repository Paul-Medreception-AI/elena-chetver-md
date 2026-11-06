import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { focus } from '@/lib/imageFocus'
import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'

const TITLE = 'Internal Medicine in West Hollywood, CA | Elena Chetver, MD'
const DESCRIPTION = 'Dr. Elena Chetver, board-certified internal medicine physician in West Hollywood, CA. Over 40 years caring for adults. English and Russian spoken. Medicare and major plans accepted.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/', siteName: 'Elena Chetver, MD', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

const trust = [
  'Board-certified internal medicine',
  'Over 40 years in practice',
  'English and Russian spoken',
  'Medicare and major plans accepted',
  'Accepting new patients',
]

const why = [
  { title: 'One physician who knows you', body: 'Dr. Chetver is a solo internist. You see the same doctor at every visit, and she knows your history, your medications and your family.' },
  { title: 'Care in your language', body: 'Dr. Chetver and the office staff speak Russian and English, so you can describe what is wrong in the words that come naturally.' },
  { title: 'Decades of experience', body: 'Trained at the First Moscow State Medical University and in internal medicine at LA County and USC Medical Center, Dr. Chetver has cared for West Hollywood patients for decades and is affiliated with Cedars-Sinai Medical Center.' },
  { title: 'Insurance accepted', body: 'The office accepts Medicare and most major plans, including Aetna, Blue Cross Blue Shield, Cigna and UnitedHealthcare. Call to confirm your plan.' },
]

const reviews = [
  { quote: 'I went to see Dr. Chetver for an annual physical and to find a new primary doctor. The booking process was very easy as she had appointments available within the week. The office was easy to find and had free parking spots available (which is a huge bonus for WeHo). The office was a little small and felt old school, but the staff was friendly and did my patient intake and paperwork right away.', name: 'Victoria C.', when: 'August 2022', source: 'Zocdoc, verified patient' },
  { quote: 'I chose Dr. Chetver because of her photo and proximity to where I live, and was pleasantly surprised at how well picking a doctor from an app worked out. I\'ll continue to see Dr. Chetver as my primary care in the future.', name: 'Chelsea H.', when: 'July 2022', source: 'Zocdoc, verified patient' },
]

export default function HomePage() {
  const heroSrc = '/images/practice/dr-chetver-office.jpg'
  return (
    <main className="font-sans">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">West Hollywood, CA · Internal Medicine</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl font-light tracking-tight leading-tight mt-4">
              Internal Medicine and Primary Care for Adults
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">
              Dr. Elena Chetver has cared for adults in West Hollywood for over 40 years, in English and in Russian, with Medicare and major insurance plans accepted.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" data-ga="consultation_click" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
                Request an Appointment
              </Link>
              <a href="tel:+13236502991" data-ga="phone_click" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                Call (323) 650-2991
              </a>
            </div>
            <p className="mt-6 text-white/80" lang="ru">Мы говорим по-русски.</p>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-[var(--color-dark)]">
            <Image src={heroSrc} alt="Dr. Elena Chetver at her desk in her West Hollywood office" fill priority quality={85} sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" style={{ objectPosition: focus(heroSrc) }} />
          </div>
        </div>
      </section>

      <section className="bg-white py-6 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-2.5">
              <svg className="w-5 h-5 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.8} fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-sm font-semibold text-[var(--color-ink)]">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl sm:text-5xl text-center text-[var(--color-ink)] mb-4">Services</h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">Preventive care, sick visits and the long-term management of adult health, from one internist who knows you.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl p-7 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)]">{s.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{s.description}</p>
                <span className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-5">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl sm:text-5xl text-center text-[var(--color-ink)] mb-4">Conditions We Treat</h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">Common adult conditions managed in the office, with referral to a specialist when one is needed.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {CONDITIONS.slice(0, 16).map((c) => (
              <Link key={c.slug} href={`/conditions/${c.slug}`} className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-cream)] text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">{c.title}</Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/conditions" className="text-[var(--color-primary)] font-semibold hover:underline">All conditions we treat →</Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-5 items-start">
          <div className="lg:col-span-2">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Why Patients Choose Dr. Chetver</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mt-5">A small, physician-led office on Santa Monica Boulevard, where the doctor who examines you is the one who answers your questions.</p>
            <Link href="/about" className="inline-block text-[var(--color-primary)] font-semibold mt-6 hover:underline">About Dr. Chetver →</Link>
          </div>
          <div className="lg:col-span-3 grid gap-5 sm:grid-cols-2">
            {why.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 border border-[var(--color-border)]">
                <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">{w.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-2">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/70">Russian-speaking patients</p>
            <h2 className="font-cormorant text-4xl mt-3" lang="ru">Приём ведётся на русском языке</h2>
            <p className="text-white/80 leading-relaxed mt-4" lang="ru">Доктор Елена Четвер, терапевт с более чем сорокалетним опытом, принимает взрослых пациентов в Западном Голливуде. Персонал офиса говорит по-русски и по-английски. Принимаем Medicare и основные страховые планы.</p>
            <a href="tel:+13236502991" data-ga="phone_click" className="inline-block mt-6 bg-white text-[var(--color-ink)] px-6 py-3 rounded-xl font-bold" lang="ru">Позвонить: (323) 650-2991</a>
          </div>
          <div>
            <h3 className="font-cormorant text-2xl">Care in Russian and English</h3>
            <p className="text-white/80 leading-relaxed mt-3">About half of the practice&apos;s patients are Russian speakers. Dr. Chetver trained in Moscow and practises in Los Angeles, and visits, phone calls and paperwork can all be handled in either language.</p>
            <Link href="/russian-speaking-doctor" className="inline-block text-white font-semibold mt-5 underline underline-offset-4">Подробнее / Read more →</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl sm:text-5xl text-center text-[var(--color-ink)] mb-3">What Patients Say</h2>
          <p className="text-center text-[var(--color-muted)] mb-12">Rated 4.5 out of 5 from 140 verified patient reviews on <a href="https://www.zocdoc.com/doctor/elena-chetver-md-144807" target="_blank" rel="noopener noreferrer" className="underline text-[var(--color-primary)]">Zocdoc</a>.</p>
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-border)]">
                <blockquote className="text-[var(--color-ink)] leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 text-sm text-[var(--color-muted)]"><span className="font-semibold text-[var(--color-ink)]">{r.name}</span> · {r.when} · {r.source}</figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center mt-8"><Link href="/reviews" className="text-[var(--color-primary)] font-semibold hover:underline">More patient reviews →</Link></div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Visit the Office</h2>
            <dl className="mt-6 space-y-4 text-[var(--color-ink)]">
              <div><dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Address</dt><dd className="mt-1"><a href="https://maps.google.com/?q=7607+Santa+Monica+Blvd+Suite+28+West+Hollywood+CA+90046" target="_blank" rel="noopener noreferrer" className="hover:underline">7607 Santa Monica Blvd., Suite 28<br />West Hollywood, CA 90046</a></dd></div>
              <div><dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Phone</dt><dd className="mt-1"><a href="tel:+13236502991" data-ga="phone_click" className="font-semibold hover:underline">(323) 650-2991</a></dd></div>
              <div><dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Fax</dt><dd className="mt-1">(323) 650-2993</dd></div>
              <div><dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Hours</dt><dd className="mt-1">Monday to Friday, 9 am to 5 pm. Closed Saturday and Sunday.</dd></div>
            </dl>
          </div>
          <div id="request">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Request an Appointment</h2>
            <p className="text-[var(--color-muted)] mt-3">Leave your name and the best way to reach you. The office calls back during business hours to find a time. Please do not include medical details here.</p>
            <div className="mt-6"><ContactForm /></div>
          </div>
        </div>
      </section>
    </main>
  )
}
