import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Back Pain: When Rest Helps and When It Does Not',
  description: 'Learn when rest helps back pain, when staying active heals faster, and which warning signs mean you should seek medical care promptly.',
  alternates: { canonical: '/blog/back-pain-when-rest-helps-and-when-it-does-not' },
  openGraph: {
    title: 'Back Pain: When Rest Helps and When It Does Not',
    description: 'Learn when rest helps back pain, when staying active heals faster, and which warning signs mean you should seek medical care promptly.',
    url: 'https://elenachetvermd.com/blog/back-pain-when-rest-helps-and-when-it-does-not',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Back Pain: When Rest Helps and When It Does Not',
    description: 'Learn when rest helps back pain, when staying active heals faster, and which warning signs mean you should seek medical care promptly.',
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-back-pain-when-rest-helps-and-when-it-does-not.jpg" alt="A physiotherapist aids a patient in a stretching exercise for rehabilitation.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Back Pain: When Rest Helps and When It Does Not</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          It often starts with a small moment: bending to pick up a bag, twisting in the car, or simply getting out of bed. Suddenly your back seizes, and every movement feels risky. The instinct is to lie down and wait for it to pass. That instinct is understandable, but it is only partly right. Knowing when rest helps and when it slows recovery can make a real difference in how quickly you feel like yourself again.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How common is back pain?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Back pain is among the most common reasons adults seek medical care. Most people will experience at least one episode in their lives. It affects office workers, athletes, parents lifting children, and people who spend long hours driving or standing. The good news is that most episodes are not caused by serious disease and improve within a few weeks.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What is usually going on</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most acute back pain is called nonspecific or mechanical. That means it comes from strained muscles, irritated ligaments, or stiff joints in the spine rather than from a fracture, infection, or tumor. Imaging often shows age-related changes such as disc bulges, but these are also common in people with no pain at all, so a scan does not always explain the symptoms.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When rest helps</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          In the first day or two after a flare, a short period of relative rest can calm things down. Avoiding heavy lifting, deep bending, and long stretches in uncomfortable positions gives irritated tissue a chance to settle. Rest in this sense means easing off, not lying flat all day.
        </p>

        <blockquote className="font-cormorant bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
          Rest in this sense means easing off, not lying flat all day.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When rest does not help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research over several decades has shown that prolonged bed rest generally does not speed recovery from low back pain and may lead to more stiffness, weaker muscles, and a longer time away from normal activity. Current guidelines from major medical organizations encourage people to stay as active as pain allows. Gentle movement increases blood flow, keeps joints mobile, and helps you trust your back again.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Fear of movement can also keep pain going. When we brace and avoid activity, muscles tighten and the nervous system becomes more sensitive. Gradual, steady return to normal routines is usually the better path.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical steps for the first few weeks</h2>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3"><Check /><span>Keep walking in short, comfortable bouts and add a little each day.</span></li>
          <li className="flex gap-3"><Check /><span>Change positions often rather than sitting or standing for long periods.</span></li>
          <li className="flex gap-3"><Check /><span>Try heat, which many people find eases muscle tightness.</span></li>
          <li className="flex gap-3"><Check /><span>Sleep in a position that feels supportive, such as on your side with a pillow between the knees.</span></li>
          <li className="flex gap-3"><Check /><span>Ask a clinician which over-the-counter pain relievers are safe for you.</span></li>
          <li className="flex gap-3"><Check /><span>Return to gentle strengthening and stretching once the worst pain eases.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Warning signs that need prompt attention</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Some symptoms call for medical evaluation rather than waiting it out. Seek care urgently if back pain comes with:
        </p>
        <ul className="space-y-3 text-[var(--color-ink)] leading-loose text-base mt-4">
          <li className="flex gap-3"><Check /><span>New loss of bladder or bowel control, or numbness in the groin or inner thighs.</span></li>
          <li className="flex gap-3"><Check /><span>Progressive weakness in a leg or foot.</span></li>
          <li className="flex gap-3"><Check /><span>Fever, unexplained weight loss, or a history of cancer.</span></li>
          <li className="flex gap-3"><Check /><span>Pain after a significant fall or injury.</span></li>
          <li className="flex gap-3"><Check /><span>Severe pain at night or pain that is not eased by any position.</span></li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Also check in with a clinician if pain lasts beyond a few weeks, keeps returning, or spreads down the leg with tingling or numbness.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If your back pain is not improving, or you are unsure whether your symptoms are the kind that can be managed at home, a conversation with a primary care doctor is a sensible next step. A careful history and exam can sort out whether movement, targeted exercise, or further testing makes sense. To talk with the practice, call the office or use the contact page.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
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
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m-5.25-5.25h10.5" /></svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)]">Resources Hub</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">Browse all patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)]">Services</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">See the primary care services the practice provides.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75" /></svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)]">Contact</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">Reach out to the practice in West Hollywood, CA.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact the Practice</a>
        </div>
      </section>
    </main>
  )
}