import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medication Safety: Questions to Ask Your Doctor',
  description: 'Learn the key questions to ask your doctor about every medication, from side effects and interactions to refills, so you can take your medicines safely.',
  alternates: { canonical: '/blog/medication-safety-questions-to-ask-your-doctor' },
  openGraph: {
    title: 'Medication Safety: Questions to Ask Your Doctor',
    description: 'Learn the key questions to ask your doctor about every medication, from side effects and interactions to refills, so you can take your medicines safely.',
    url: 'https://elenachetvermd.com/blog/medication-safety-questions-to-ask-your-doctor',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Medication Safety: Questions to Ask Your Doctor',
    description: 'Learn the key questions to ask your doctor about every medication, from side effects and interactions to refills, so you can take your medicines safely.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'What is this medicine for, and how will we know it is working?',
  'How and when should I take it, and with or without food?',
  'What side effects are common, and which ones mean I should call right away?',
  'Does it interact with my other prescriptions, supplements, or alcohol?',
  'How long will I need it, and what happens if I miss a dose?',
  'Is there a lower-risk or non-drug option I should consider?',
]

const related = [
  { href: '/blog', title: 'More Patient Resources', text: 'Browse all of our patient education articles on staying well.' },
  { href: '/services', title: 'Primary Care Services', text: 'See the kinds of primary care the practice provides in West Hollywood, CA.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out with questions about your care or your medications.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Medication Safety: Questions to Ask Your Doctor</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-medication-safety-questions-to-ask-your-doctor.jpg"} alt={"White pills arranged into a question mark shape on a vibrant yellow background."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You leave the appointment with a new prescription and a head full of information. By the time you reach the pharmacy, half of it has slipped away. Was it twice a day or three times? Could you take it with your allergy pill? It is a common experience, and it is exactly where medication mistakes begin. The good news is that a few well-chosen questions can make your medicines far safer.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why medication safety matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Medicines help millions of people manage blood pressure, diabetes, pain, infections, and mood. Yet any medicine can cause harm when it is taken incorrectly, combined badly with something else, or continued longer than needed. Adverse drug events are a well-documented cause of emergency visits and hospital stays, and many are preventable. Safety is not about fearing medication. It is about understanding it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who is most at risk</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone can run into a problem, but some situations raise the odds. People who take several medicines (often called polypharmacy), older adults, those with kidney or liver conditions, and people who see more than one prescriber all face higher risk. So do people who use over-the-counter products, vitamins, or herbal supplements without mentioning them. Changes in weight, pregnancy, or new diagnoses can also change how a drug behaves in your body.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions worth asking at every visit</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Consider bringing this list with you, or saving it on your phone. Write down the answers as you hear them.
        </p>
        <ul className="space-y-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              {check}
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Interactions: the hidden risk</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Drug interactions happen when one substance changes how another works. Some raise the level of a medicine in your blood, others weaken its effect, and some add up side effects such as drowsiness or bleeding. Common examples include certain pain relievers taken with blood thinners, or grapefruit with some cholesterol drugs. Supplements such as St. John&apos;s wort can also interfere with many prescriptions. Tell your doctor about everything you take, including products you consider harmless.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Tell your doctor about everything you take, including products you consider harmless.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the research tells us</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Studies of patient safety consistently find that medication errors often arise at transitions: leaving a hospital, switching prescribers, or filling a new prescription. Health organizations encourage patients to keep an up-to-date medication list and to review it regularly with a clinician. Periodic reviews can also identify medicines that are no longer needed, a process known as deprescribing, which may reduce side effects and simplify your routine.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical steps at home</h2>
        <ul className="space-y-4">
          {[
            'Keep one current list of all medicines, doses, and supplements, and bring it to every appointment.',
            'Use one pharmacy when possible so interactions can be flagged.',
            'Read the label and the pharmacist handout, and ask when something is unclear.',
            'Use a pill organizer or phone reminders to avoid missed or doubled doses.',
            'Never stop a prescribed medicine suddenly without talking to your doctor first.',
            'Store medicines safely and dispose of expired ones properly.',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              {check}
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to call right away</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Seek emergency care for trouble breathing, swelling of the face or throat, fainting, chest pain, or a severe rash. For milder concerns such as new dizziness, stomach upset, or unusual fatigue after starting a medicine, call the office rather than waiting or adjusting the dose yourself.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Your next step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You deserve to understand every medicine you take. If you have questions about your prescriptions or would like a careful review of your medication list, reach out to the practice in West Hollywood, CA. Asking questions is not a bother. It is one of the most effective ways to protect your health.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Elena Chetver, MD</p>
          <p className="text-sm text-[var(--color-muted)] mt-2">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M6.75 12h10.5" />
                </svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}