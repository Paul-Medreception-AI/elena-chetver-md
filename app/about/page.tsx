import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'About Dr. Elena Chetver | Internist in West Hollywood'
const DESCRIPTION = 'Dr. Elena Chetver is a board-certified internal medicine physician in West Hollywood, CA, trained in Moscow and at LA County and USC Medical Center, caring for adults for over 40 years in English and Russian.'
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: '/about' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/about', siteName: 'Elena Chetver, MD', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

const facts = [
  { label: 'Specialty', value: 'Internal medicine, adult primary care' },
  { label: 'Medical school', value: 'First Moscow State Medical University (Sechenov)' },
  { label: 'Residency', value: 'Internal medicine, LA County and USC Medical Center' },
  { label: 'Board certification', value: 'American Board of Internal Medicine' },
  { label: 'Hospital affiliation', value: 'Cedars-Sinai Medical Center' },
  { label: 'Languages', value: 'English and Russian' },
  { label: 'In practice', value: 'Over 40 years' },
]

export default function AboutPage() {
  return (
    <main>
      <SplitHero src="/images/practice/dr-chetver-headshot-wide.jpg" alt="Dr. Elena Chetver" position="50% 50%">
        <nav className="text-sm mb-6 opacity-90"><Link href="/" className="hover:underline">Home</Link><span className="mx-2">›</span><span>About</span></nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">About Dr. Elena Chetver</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">A solo internist on Santa Monica Boulevard who has looked after West Hollywood adults for decades, in English and in Russian.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" data-ga="consultation_click" className="bg-white text-[var(--color-dark)] px-7 py-3.5 rounded-xl font-bold shadow-xl">Request an Appointment</Link>
          <a href="tel:+13236502991" data-ga="phone_click" className="border-2 border-white text-white px-7 py-3.5 rounded-xl font-semibold">Call (323) 650-2991</a>
        </div>
      </SplitHero>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-[var(--color-ink)] leading-relaxed">
            <h2 className="font-cormorant text-4xl">A physician who knows your whole history</h2>
            <p>Dr. Chetver is an internal medicine physician, the specialty that cares for adults across the whole range of everyday and long-term health: annual physicals and Medicare wellness visits, blood pressure, cholesterol and diabetes, infections and injuries, and the questions in between. She practises alone, so the doctor you see at your first visit is the one you see at every visit after it.</p>
            <p>She earned her medical degree at the First Moscow State Medical University, one of Russia&apos;s oldest medical schools, and completed her residency in internal medicine at LA County and USC Medical Center. She is board certified by the American Board of Internal Medicine and is affiliated with Cedars-Sinai Medical Center.</p>
            <p>About half of the practice&apos;s patients are Russian speakers. Dr. Chetver and her staff speak Russian and English, and visits, phone calls and paperwork can be handled in either language.</p>
            <p>The office is in Suite 28 at 7607 Santa Monica Boulevard in West Hollywood, open Monday to Friday from 9 am to 5 pm. It accepts Medicare and most major plans, and is accepting new patients.</p>
            <p className="pt-2"><Link href="/team" className="text-[var(--color-primary)] font-semibold hover:underline">Meet the team →</Link></p>
          </div>
          <aside className="lg:col-span-2">
            <div className="bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-border)]">
              <h2 className="font-cormorant text-2xl text-[var(--color-ink)]">At a glance</h2>
              <dl className="mt-5 space-y-4">
                {facts.map((f) => (
                  <div key={f.label}><dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">{f.label}</dt><dd className="text-[var(--color-ink)] mt-1">{f.value}</dd></div>
                ))}
              </dl>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] mt-6">
              <h2 className="font-cormorant text-2xl text-[var(--color-ink)]">Visit us</h2>
              <dl className="mt-4 space-y-3 text-[var(--color-ink)]">
                <div><dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Phone</dt><dd><a href="tel:+13236502991" data-ga="phone_click" className="font-semibold hover:underline">(323) 650-2991</a></dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Address</dt><dd>7607 Santa Monica Blvd., Suite 28<br />West Hollywood, CA 90046</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Hours</dt><dd>Mon to Fri, 9 am to 5 pm</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl" lang="ru">О докторе Елене Четвер</h2>
          <p className="text-white/80 leading-relaxed mt-4" lang="ru">Доктор Четвер окончила Первый Московский медицинский институт имени Сеченова и прошла резидентуру по терапии в медицинском центре округа Лос-Анджелес и Университета Южной Калифорнии. Более сорока лет она принимает взрослых пациентов в Западном Голливуде. Приём ведётся на русском и английском языках.</p>
          <Link href="/russian-speaking-doctor" className="inline-block mt-6 text-white font-semibold underline underline-offset-4">Подробнее →</Link>
        </div>
      </section>
    </main>
  )
}
