import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skin Changes to Mention to Your Doctor',
  description: 'Learn which skin changes, from new moles to persistent rashes, are worth bringing up with your primary care doctor, and what to note before your visit.',
  alternates: { canonical: '/blog/skin-changes-to-mention-to-your-doctor' },
  openGraph: {
    title: 'Skin Changes to Mention to Your Doctor',
    description: 'Learn which skin changes, from new moles to persistent rashes, are worth bringing up with your primary care doctor, and what to note before your visit.',
    url: 'https://elenachetvermd.com/blog/skin-changes-to-mention-to-your-doctor',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Skin Changes to Mention to Your Doctor',
    description: 'Learn which skin changes, from new moles to persistent rashes, are worth bringing up with your primary care doctor, and what to note before your visit.',
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
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Skin Changes to Mention to Your Doctor</h1>
          <p className="mt-6 text-white/80 text-sm">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-skin-changes-to-mention-to-your-doctor.jpg"} alt={"Crop smiling young ethnic female doctor in medical uniform with stethoscope and notebook standing in modern medical room with panoramic window"} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">You notice a spot on your shoulder while getting dressed. Maybe it has always been there, maybe it has not. You tell yourself it is probably nothing, and most of the time you would be right. But skin is the one organ you can see, and that makes it a useful early signal. Knowing which changes deserve a conversation can spare you worry, or catch a problem while it is easy to treat.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why your skin deserves attention</h2>
        <p>Skin cancer is the most common cancer in the United States, and many types are highly treatable when found early. But skin changes are not only about cancer. Your skin can also reflect what is happening elsewhere in the body, including thyroid problems, diabetes, liver or kidney disease, allergies, autoimmune conditions, and medication reactions. A primary care visit is a good place to connect those dots, because your doctor sees the whole picture rather than a single spot.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Changes in moles and spots</h2>
        <p>The most familiar guide is the ABCDE checklist used to evaluate moles:</p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3">{check}<span><strong>Asymmetry:</strong> one half does not match the other.</span></li>
          <li className="flex gap-3">{check}<span><strong>Border:</strong> edges are ragged, notched, or blurred.</span></li>
          <li className="flex gap-3">{check}<span><strong>Color:</strong> multiple shades of brown, black, red, white, or blue.</span></li>
          <li className="flex gap-3">{check}<span><strong>Diameter:</strong> larger than about a pencil eraser, though melanomas can be smaller.</span></li>
          <li className="flex gap-3">{check}<span><strong>Evolving:</strong> any change in size, shape, color, or sensation.</span></li>
        </ul>
        <p>Evolving is often the most important sign. A mole that itches, bleeds, crusts, or simply looks different from last season is worth showing someone. Also mention the &quot;ugly duckling,&quot; a spot that looks unlike the others around it.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
          Skin is the one organ you can see, and that makes it a useful early signal.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Sores, bumps, and patches that do not heal</h2>
        <p>Basal cell and squamous cell carcinomas, the most common skin cancers, often do not look dramatic. Watch for:</p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3">{check}<span>A sore that bleeds or scabs and has not healed within a few weeks.</span></li>
          <li className="flex gap-3">{check}<span>A pearly, shiny, or waxy bump, sometimes with visible tiny blood vessels.</span></li>
          <li className="flex gap-3">{check}<span>A rough, scaly, or crusted patch, especially on sun-exposed areas like the face, ears, scalp, and hands.</span></li>
          <li className="flex gap-3">{check}<span>A growing, firm, red nodule.</span></li>
        </ul>
        <p>Rough patches called actinic keratoses are considered precancerous and are common after years of sun exposure. They are worth mentioning even if they do not bother you.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Rashes, itching, and color changes</h2>
        <p>Many rashes are harmless and short-lived. Bring one up if it lasts more than a couple of weeks, keeps coming back, spreads, blisters, or interferes with sleep. Other changes that merit a conversation include:</p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3">{check}<span>Widespread itching without an obvious rash, which can sometimes relate to liver, kidney, thyroid, or blood conditions.</span></li>
          <li className="flex gap-3">{check}<span>Yellowing of the skin or eyes.</span></li>
          <li className="flex gap-3">{check}<span>Darkened, velvety patches in the neck or underarm folds, which can accompany insulin resistance.</span></li>
          <li className="flex gap-3">{check}<span>New white patches, or sudden loss of pigment.</span></li>
          <li className="flex gap-3">{check}<span>Easy bruising or small purple spots with no clear cause.</span></li>
          <li className="flex gap-3">{check}<span>A rash that began after starting a new medication or supplement.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs that need prompt attention</h2>
        <p>Seek care quickly for a rash with fever, facial swelling, difficulty breathing, or rapidly spreading redness, warmth, and pain, which can signal infection or an allergic reaction. Painful blistering that follows a band-like pattern on one side of the body may be shingles, which is best treated early. A painful, peeling, or blistering rash in the mouth or eyes needs urgent evaluation.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to prepare for your visit</h2>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3">{check}<span>Take a clear, well-lit photo of a spot now, then another in a month, so changes are easy to compare.</span></li>
          <li className="flex gap-3">{check}<span>Note when you first noticed it and whether it itches, hurts, or bleeds.</span></li>
          <li className="flex gap-3">{check}<span>Bring a list of medications, supplements, and new skin or hair products.</span></li>
          <li className="flex gap-3">{check}<span>Mention family history of skin cancer and past sunburns or tanning bed use.</span></li>
          <li className="flex gap-3">{check}<span>Remove nail polish and point out spots in hard-to-see places like the scalp, back, and feet.</span></li>
        </ul>
        <p>Your doctor may examine the area, treat it, or refer you to a dermatologist for a closer look or biopsy. Being referred does not mean something is wrong; it means a specialist tool is the best way to be sure.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Do not wait on a worry</h2>
        <p>Nobody expects you to diagnose your own skin. Your job is simply to notice and speak up. If something looks new, different, or just feels off, call the office to talk it through with Elena Chetver, MD. A short conversation now is almost always easier than a long one later.</p>
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

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M6.75 12h10.5" /></svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)]">More Patient Resources</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">Browse all articles from the practice.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)]">Our Services</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">See the primary care services offered.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0L12 13.5 2.25 6.75" /></svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)]">Contact the Office</h4>
              <p className="text-sm text-[var(--color-muted)] mt-2">Reach out with questions about your care.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}