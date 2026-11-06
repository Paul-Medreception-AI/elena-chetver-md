import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'New Patients | Elena Chetver, MD, West Hollywood'
const DESCRIPTION = 'Becoming a patient of Dr. Elena Chetver in West Hollywood: how to book a first visit, what to bring, insurance accepted, and help in English or Russian.'
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: '/new-patients' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/new-patients', siteName: 'Elena Chetver, MD', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

const steps = [
  { n: '01', title: 'Call or send a request', body: 'Call (323) 650-2991 or use the form on the contact page. The staff will confirm your insurance and find a first appointment.' },
  { n: '02', title: 'Bring your essentials', body: 'Photo ID, insurance card, your medication list or bottles, and any recent results or records. Paperwork is done at the office, in English or Russian.' },
  { n: '03', title: 'Your first visit', body: 'Dr. Chetver reviews your history, examines you, orders any tests you need, and sets a plan with you. Follow-up is with the same physician every time.' },
]

export default function NewPatientsPage() {
  return (
    <main>
      <SplitHero src="/images/stock/hub-new-patients.jpg" alt="A patient filling in a form on a clipboard">
        <nav className="text-sm mb-6 opacity-90"><Link href="/" className="hover:underline">Home</Link><span className="mx-2">›</span><span>New Patients</span></nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">New Patients</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">Dr. Chetver is accepting new adult patients. Here is how a first visit works.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" data-ga="consultation_click" className="bg-white text-[var(--color-dark)] px-7 py-3.5 rounded-xl font-bold shadow-xl">Request an Appointment</Link>
          <a href="tel:+13236502991" data-ga="phone_click" className="border-2 border-white text-white px-7 py-3.5 rounded-xl font-semibold">Call (323) 650-2991</a>
        </div>
      </SplitHero>
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n}><div className="font-cormorant text-6xl text-[var(--color-primary)] opacity-60">{s.n}</div><h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-2">{s.title}</h2><p className="text-[var(--color-muted)] leading-relaxed mt-3">{s.body}</p></div>
          ))}
        </div>
      </section>
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)]">
            <h2 className="font-cormorant text-2xl text-[var(--color-ink)]">Insurance</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mt-3">Medicare and most major plans are accepted, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Anthem and Humana. Please call so the staff can confirm your plan before your visit.</p>
            <Link href="/insurance" className="inline-block text-[var(--color-primary)] font-semibold mt-4 hover:underline">Insurance and billing →</Link>
          </div>
          <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)]">
            <h2 className="font-cormorant text-2xl text-[var(--color-ink)]" lang="ru">Новым пациентам</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mt-3" lang="ru">Доктор Четвер принимает новых взрослых пациентов. Позвоните по телефону (323) 650-2991, персонал ответит по-русски, проверит вашу страховку и подберёт время первого визита. Возьмите с собой документ с фотографией, страховую карту и список лекарств.</p>
            <Link href="/russian-speaking-doctor" className="inline-block text-[var(--color-primary)] font-semibold mt-4 hover:underline">Подробнее →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
