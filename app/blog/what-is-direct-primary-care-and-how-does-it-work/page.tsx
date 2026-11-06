import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Direct Primary Care and How Does It Work?',
  description: 'Learn what direct primary care (DPC) is, how the membership model works, what it typically includes, and how to decide if it fits your health needs.',
  alternates: { canonical: '/blog/what-is-direct-primary-care-and-how-does-it-work' },
  openGraph: {
    title: 'What Is Direct Primary Care and How Does It Work?',
    description: 'Learn what direct primary care (DPC) is, how the membership model works, what it typically includes, and how to decide if it fits your health needs.',
    url: 'https://elenachetvermd.com/blog/what-is-direct-primary-care-and-how-does-it-work',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'What Is Direct Primary Care and How Does It Work?',
    description: 'Learn what direct primary care (DPC) is, how the membership model works, what it typically includes, and how to decide if it fits your health needs.',
  },
}

const checks = [
  'Ask what the membership includes, and what falls outside it.',
  'Ask how you reach the office between visits.',
  'Ask how labs, imaging and prescriptions are handled.',
  'Check whether you still want insurance for hospital stays and emergencies.',
  'Ask how referrals to specialists are coordinated.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Articles', text: 'Explore more patient education from the practice.' },
  { href: '/services', label: 'Services', title: 'Primary Care Services', text: 'See the kinds of care the practice provides.' },
  { href: '/contact', label: 'Contact', title: 'Talk With the Office', text: 'Ask questions about how care works here.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:underline">Home</a> › <a href="/blog" className="hover:underline">Resources</a> › Article
          </p>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">What Is Direct Primary Care and How Does It Work?</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-what-is-direct-primary-care-and-how-does-it-work.jpg"} alt={"Doctor in office conducting a virtual consultation, creating a modern healthcare environment."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">You wait weeks for an appointment, sit in a waiting room, and then get a visit that feels over before your questions are answered. Many people know this experience well. Direct primary care, often shortened to DPC, was created as a response to it. It is a different way of paying for and delivering everyday medical care, built around time and relationship.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What direct primary care is</h2>
        <p>Direct primary care is a model in which patients pay a recurring membership directly to their primary care practice. Instead of the practice billing an insurance company for each visit, the membership covers an agreed set of primary care services. The relationship runs between the patient and the doctor, with fewer middlemen and less paperwork.</p>
        <p className="mt-4">Because the practice does not depend on billing volume, it can organize its schedule differently. Many DPC practices keep a smaller group of patients so that visits can be unhurried and access can be easier.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How it works day to day</h2>
        <p>While every practice sets its own structure, most DPC practices share a few features:</p>
        <ul className="mt-4 space-y-3">
          <li className="flex gap-3"><Check /><span>A membership that covers a defined range of primary care services.</span></li>
          <li className="flex gap-3"><Check /><span>Longer appointments that leave room for questions and prevention.</span></li>
          <li className="flex gap-3"><Check /><span>Direct ways to contact your doctor between visits.</span></li>
          <li className="flex gap-3"><Check /><span>Clear explanations of what is and is not included.</span></li>
        </ul>
        <p className="mt-4">Details such as how you contact the office, what is included and how membership begins differ from one practice to another, so it is worth asking directly. For this practice, call the office to learn how care is arranged.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
          Because the practice does not depend on billing volume, it can organize its schedule differently.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who it may suit</h2>
        <p>DPC can appeal to people who value continuity with one doctor, such as those managing chronic conditions like high blood pressure, diabetes or thyroid disease. It may also suit people who are generally healthy but want a trusted clinician for prevention, and busy people who find conventional scheduling frustrating. Families who want a consistent relationship over time often value it too.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the research suggests</h2>
        <p>Primary care research consistently links a strong, continuous relationship with a primary care clinician to better preventive care, better management of chronic illness and higher patient satisfaction. Studies also show that longer visits give more time for counseling and shared decision-making. Evidence specific to DPC is still developing and is smaller than for traditional models, so it is reasonable to be cautious about large claims. The underlying principles, however, time and continuity, are well supported.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">DPC and health insurance</h2>
        <p>DPC is a way of paying for primary care. It is generally not a replacement for health insurance. Membership does not typically cover hospitalization, emergency care, surgery or specialist treatment, so many people keep insurance for those events. How a membership fits with your own coverage depends on your plan, so confirm the specifics with your insurer and the practice.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions to ask before you join</h2>
        <ul className="mt-4 space-y-3">
          {checks.map((c) => (
            <li key={c} className="flex gap-3"><Check /><span>{c}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the next step</h2>
        <p>Choosing a primary care doctor is a personal decision. If a more relationship-centered approach sounds appealing, a conversation is the best way to learn whether it fits you. Call the office to ask about how care works and whether this practice is right for your needs.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 transition hover:shadow-lg">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
              <p className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</p>
              <p className="text-sm text-[var(--color-ink)]">{r.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition border border-white/40">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}