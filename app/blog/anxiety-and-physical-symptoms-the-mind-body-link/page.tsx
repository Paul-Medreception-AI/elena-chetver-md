import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Anxiety and Physical Symptoms: The Mind-Body Link',
  description: 'Learn how anxiety shows up in the body, from chest tightness to stomach upset, why it happens, and practical steps to feel better.',
  alternates: { canonical: '/blog/anxiety-and-physical-symptoms-the-mind-body-link' },
  openGraph: {
    title: 'Anxiety and Physical Symptoms: The Mind-Body Link',
    description: 'Learn how anxiety shows up in the body, from chest tightness to stomach upset, why it happens, and practical steps to feel better.',
    url: 'https://elenachetvermd.com/blog/anxiety-and-physical-symptoms-the-mind-body-link',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Anxiety and Physical Symptoms: The Mind-Body Link',
    description: 'Learn how anxiety shows up in the body, from chest tightness to stomach upset, why it happens, and practical steps to feel better.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-anxiety-and-physical-symptoms-the-mind-body-link.jpg" alt="Two doctors in lab coats discussing an X-ray in a clinical setting.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Anxiety and Physical Symptoms: The Mind-Body Link</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Your heart pounds in the middle of a quiet afternoon. Your stomach knots before a meeting. You wake at 3 a.m. with a tight chest and a racing mind. You may have wondered whether something is seriously wrong with your body. If so, you are far from alone. Anxiety is often felt first and loudest in the body, and understanding that link can bring real relief.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Anxiety Does to the Body</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anxiety is more than worry. It is the body&apos;s alarm system, known as the fight-or-flight response. When your brain perceives a threat, real or imagined, it signals the release of stress hormones such as adrenaline and cortisol. Heart rate rises, breathing quickens, muscles tense, and digestion slows. This response is helpful if you need to escape danger, but it becomes distressing when it fires during ordinary life.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Physical Symptoms</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Anxiety can affect nearly every body system. Common physical symptoms include:
        </p>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3">{check}<span>Heart palpitations, chest tightness, or a pounding pulse</span></li>
          <li className="flex gap-3">{check}<span>Shortness of breath or a feeling of not getting a full breath</span></li>
          <li className="flex gap-3">{check}<span>Nausea, stomach pain, diarrhea, or constipation</span></li>
          <li className="flex gap-3">{check}<span>Headaches, jaw clenching, and neck or shoulder tension</span></li>
          <li className="flex gap-3">{check}<span>Dizziness, trembling, sweating, or tingling in the hands and feet</span></li>
          <li className="flex gap-3">{check}<span>Fatigue and trouble falling or staying asleep</span></li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
          Anxiety is often felt first and loudest in the body.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anxiety disorders are among the most common mental health conditions, affecting people of every age, background, and profession. Many people never describe feeling &quot;anxious&quot; at all. Instead, they see a clinician about headaches, stomach trouble, or chest discomfort. Because the symptoms are physical, anxiety can go unrecognized for months or years.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research has long connected chronic stress and anxiety with changes in the cardiovascular, digestive, and immune systems. The gut and brain communicate constantly through nerves and chemical messengers, which is one reason anxiety often accompanies irritable bowel symptoms. Long-term anxiety is also associated with sleep problems, muscle pain, and higher blood pressure. Effective treatments exist, including cognitive behavioral therapy, certain medications, and lifestyle approaches, and studies show that many people improve meaningfully with care.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why You Should Not Assume It Is &quot;Just Anxiety&quot;</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Physical symptoms are real, and they deserve a thoughtful evaluation. Chest pain, palpitations, dizziness, and breathlessness can also come from heart, lung, thyroid, or other medical conditions. A careful history, exam, and appropriate testing help rule out other causes so that anxiety is identified accurately rather than assumed. Seek urgent care right away for severe chest pain, fainting, trouble breathing, or symptoms that feel like an emergency.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps That Can Help</h2>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3">{check}<span>Practice slow breathing: inhale for four counts, exhale for six, for a few minutes.</span></li>
          <li className="flex gap-3">{check}<span>Move regularly. Walking and other exercise lower stress hormones and improve sleep.</span></li>
          <li className="flex gap-3">{check}<span>Keep a consistent sleep schedule and limit screens before bed.</span></li>
          <li className="flex gap-3">{check}<span>Reduce caffeine and alcohol, which can intensify palpitations and restlessness.</span></li>
          <li className="flex gap-3">{check}<span>Track symptoms and triggers to spot patterns you can discuss with a clinician.</span></li>
          <li className="flex gap-3">{check}<span>Reach out to trusted people rather than coping alone.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If worry or physical symptoms interfere with work, relationships, sleep, or daily enjoyment, it is time to talk with a professional. You do not need to wait until things feel unmanageable. A primary care visit is a good starting point to review your symptoms, check for other causes, and build a plan that fits you. To start the conversation, call the office or send a message through the contact page.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
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
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">All Patient Resources</h4>
              <p className="text-sm text-[var(--color-muted)]">Browse every article in our resource library.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Our Services</h4>
              <p className="text-sm text-[var(--color-muted)]">See how primary care can support your whole health.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" /></svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Contact the Practice</h4>
              <p className="text-sm text-[var(--color-muted)]">Reach out to start a conversation about your health.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}