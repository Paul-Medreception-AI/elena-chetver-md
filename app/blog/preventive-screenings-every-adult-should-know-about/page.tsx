import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preventive Screenings Every Adult Should Know About',
  description: 'A plain-language guide to the preventive screenings adults commonly discuss with their primary care doctor, from blood pressure to cancer screening.',
  alternates: { canonical: '/blog/preventive-screenings-every-adult-should-know-about' },
  openGraph: {
    title: 'Preventive Screenings Every Adult Should Know About',
    description: 'A plain-language guide to the preventive screenings adults commonly discuss with their primary care doctor, from blood pressure to cancer screening.',
    url: 'https://elenachetvermd.com/blog/preventive-screenings-every-adult-should-know-about',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Preventive Screenings Every Adult Should Know About',
    description: 'A plain-language guide to the preventive screenings adults commonly discuss with their primary care doctor, from blood pressure to cancer screening.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const related = [
  { href: '/blog', label: 'Resources', title: 'More Patient Education Articles', text: 'Browse all of our health education articles in one place.' },
  { href: '/services', label: 'Services', title: 'Our Primary Care Services', text: 'See how ongoing primary care can support prevention.' },
  { href: '/contact', label: 'Contact', title: 'Talk With the Office', text: 'Questions about screening? Reach out to the practice.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Preventive Screenings Every Adult Should Know About</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-preventive-screenings-every-adult-should-know-about.jpg"} alt={"Medical consultation as a doctor reviews ECG results with a masked patient in a clinic setting."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most of us only think about our health when something hurts. Yet many serious conditions, including high blood pressure, diabetes and several cancers, can develop quietly for years without a single symptom. Screening exists for exactly this reason: to find problems early, when they are usually easier to treat. If you have been putting off a checkup, this guide is a gentle place to start.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is a Preventive Screening?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A screening is a test or exam done in people who feel well, to look for disease before symptoms appear. It is different from a diagnostic test, which is ordered to explain a symptom you already have. Screening recommendations are based on age, sex, family history and personal risk factors, so the right schedule for you may differ from a friend&apos;s.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Heart and Metabolic Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Cardiovascular disease remains a leading cause of death in the United States, and its biggest risk factors are often silent.
        </p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Blood pressure:</strong> Adults are generally checked at routine visits. High blood pressure rarely causes symptoms but raises the risk of heart attack and stroke.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Cholesterol:</strong> A blood test helps estimate heart disease risk and guides decisions about lifestyle changes or medication.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Diabetes and prediabetes:</strong> Blood sugar testing is commonly recommended for adults with overweight or other risk factors, and for many adults starting in middle age.</span></li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Screening exists for exactly this reason: to find problems early, when they are usually easier to treat.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Cancer Screenings</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Several cancers have screening tests shown in research to reduce deaths when used at appropriate ages. National guidelines, such as those from the U.S. Preventive Services Task Force, change over time, so it is worth reviewing them with a clinician.
        </p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Colorectal cancer:</strong> Screening is generally recommended beginning at age 45, using options such as colonoscopy or stool-based tests.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Breast cancer:</strong> Mammography is commonly recommended for women starting in their 40s, with timing based on personal and family history.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Cervical cancer:</strong> Pap and HPV testing are recommended at intervals for people with a cervix, typically from age 21.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Lung cancer:</strong> Low-dose CT may be advised for older adults with a significant smoking history.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Prostate cancer:</strong> PSA testing is a personal decision that is best made after discussing benefits and limits with your doctor.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Infections, Bones and Mental Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Screening is not only about cancer and heart disease. Guidelines also support one-time or periodic testing for several other concerns.
        </p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>HIV and hepatitis C:</strong> Most adults are advised to be tested at least once, since both can be present without symptoms and both are treatable.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Sexually transmitted infections:</strong> Testing depends on age and risk, and is a routine, judgment-free part of care.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Bone density:</strong> Recommended for women 65 and older, and sooner for those with risk factors for osteoporosis.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Depression and anxiety:</strong> Short questionnaires can help identify concerns that deserve support.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Personal Risk Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A guideline is a starting point, not a verdict. A family history of colon cancer, for example, may mean beginning screening earlier. Conditions like high blood pressure, pregnancy complications or certain autoimmune diseases can also change what is advised. Screening has trade-offs too, including false positives and follow-up tests, which is why a thoughtful conversation matters more than a one-size-fits-all checklist.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare for a Prevention Visit</h2>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Write down your family history, including relatives&apos; diagnoses and the ages they were found.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Gather records of past screenings, vaccines and test results.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>List your medications and supplements.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Bring your questions, including ones that feel awkward. Your doctor has heard them before.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the First Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not need to have everything figured out to begin. If you are unsure which screenings fit your age and history, call the office to ask about a visit with Dr. Chetver and build a plan that feels manageable. Small, steady steps toward prevention can make a lasting difference.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</p>
                <p className="text-[var(--color-ink)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}