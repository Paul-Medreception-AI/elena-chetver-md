import type { Metadata } from 'next'
import Link from 'next/link'
import SplitHero from '@/components/SplitHero'

const TITLE = 'Русскоговорящий терапевт в Западном Голливуде | Elena Chetver, MD'
const DESCRIPTION = 'Доктор Елена Четвер, терапевт с опытом более 40 лет, принимает взрослых пациентов в Западном Голливуде на русском и английском языках. Medicare и основные страховки. Russian-speaking internal medicine doctor in West Hollywood, CA.'
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: '/russian-speaking-doctor' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://elenachetvermd.com/russian-speaking-doctor', siteName: 'Elena Chetver, MD', type: 'website', locale: 'ru_RU' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

const ru = [
  { h: 'Что лечит терапевт', p: 'Терапевт (internal medicine) ведёт взрослых пациентов: ежегодные осмотры и Medicare wellness visits, повышенное давление, холестерин, диабет, простуды и инфекции, боли в спине и суставах, направления к узким специалистам.' },
  { h: 'Страховка', p: 'Принимаем Medicare и большинство основных планов, включая Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Anthem и Humana. Позвоните, и персонал проверит вашу страховку до визита.' },
  { h: 'Первый визит', p: 'Возьмите с собой документ с фотографией, страховую карту, список лекарств и результаты недавних анализов. Анкеты можно заполнить в офисе, персонал поможет по-русски.' },
  { h: 'Рецепты', p: 'Сначала попросите аптеку отправить запрос в офис. Можно также позвонить нам и назвать лекарство и аптеку. Каждый рецепт проверяет доктор Четвер, поэтому обращайтесь заранее.' },
]

export default function RussianPage() {
  return (
    <main lang="ru">
      <SplitHero src="/images/practice/dr-chetver-office.jpg" alt="Доктор Елена Четвер в своём кабинете">
        <nav className="text-sm mb-6 opacity-90"><Link href="/" className="hover:underline">Главная</Link><span className="mx-2">›</span><span>По-русски</span></nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Русскоговорящий терапевт в Западном Голливуде</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">Доктор Елена Четвер принимает взрослых пациентов более сорока лет. Приём, звонки и документы на русском и английском языках.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="tel:+13236502991" data-ga="phone_click" className="bg-white text-[var(--color-dark)] px-7 py-3.5 rounded-xl font-bold shadow-xl">Позвонить: (323) 650-2991</a>
          <Link href="/contact" data-ga="consultation_click" className="border-2 border-white text-white px-7 py-3.5 rounded-xl font-semibold">Записаться на приём</Link>
        </div>
      </SplitHero>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-[var(--color-ink)] leading-relaxed">
            <h2 className="font-cormorant text-4xl">О докторе</h2>
            <p>Елена Четвер окончила Первый Московский медицинский институт имени Сеченова и прошла резидентуру по терапии в медицинском центре округа Лос-Анджелес и Университета Южной Калифорнии. Она сертифицирована Американским советом по внутренним болезням (American Board of Internal Medicine) и сотрудничает с медицинским центром Cedars-Sinai.</p>
            <p>Около половины пациентов практики говорят по-русски. Доктор и персонал офиса свободно общаются на обоих языках, поэтому вам не понадобится переводчик ни на приёме, ни по телефону.</p>
            <p>Офис находится на бульваре Санта-Моника, 7607, офис 28, в Западном Голливуде. Приём с понедельника по пятницу с 9:00 до 17:00, по записи. Принимаем новых пациентов.</p>
          </div>
          <aside className="lg:col-span-2 space-y-5">
            {ru.map((x) => (
              <div key={x.h} className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)]"><h3 className="font-cormorant text-2xl text-[var(--color-ink)]">{x.h}</h3><p className="text-[var(--color-muted)] leading-relaxed mt-2">{x.p}</p></div>
            ))}
          </aside>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16" lang="en">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)]">Russian-speaking internal medicine doctor in West Hollywood</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mt-4">Dr. Elena Chetver, a board-certified internist trained in Moscow and at LA County and USC Medical Center, sees adult patients in Russian and English at 7607 Santa Monica Blvd., Suite 28. The office accepts Medicare and major insurance plans and is accepting new patients. Call (323) 650-2991.</p>
        </div>
      </section>
    </main>
  )
}
