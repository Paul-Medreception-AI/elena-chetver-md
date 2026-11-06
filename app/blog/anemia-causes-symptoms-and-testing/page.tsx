import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anemia: Causes, Symptoms, and Testing',
  description: 'Learn what causes anemia, the symptoms to watch for, and which blood tests help find the reason, so you know when to seek care from a primary care doctor.',
  alternates: { canonical: '/blog/anemia-causes-symptoms-and-testing' },
  openGraph: {
    title: 'Anemia: Causes, Symptoms, and Testing',
    description: 'Learn what causes anemia, the symptoms to watch for, and which blood tests help find the reason, so you know when to seek care from a primary care doctor.',
    url: 'https://elenachetvermd.com/blog/anemia-causes-symptoms-and-testing',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Anemia: Causes, Symptoms, and Testing',
    description: 'Learn what causes anemia, the symptoms to watch for, and which blood tests help find the reason, so you know when to seek care from a primary care doctor.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const tips = [
  'Write down when the tiredness started and what else has changed, such as diet, periods, or medicines.',
  'Bring a list of all medicines and supplements, including aspirin and anti-inflammatory pain relievers.',
  'Note any blood you have seen in stool, urine, or from heavy periods.',
  'Do not start iron on your own before testing, since too much iron can cause harm and may hide the real cause.',
  'Ask for follow-up blood work to confirm that treatment is working.',
]

const related = [
  { href: '/blog', title: 'Browse All Resources', text: 'Explore more patient education articles from the practice.' },
  { href: '/services', title: 'Our Services', text: 'See the primary care services available at the practice.' },
  { href: '/contact', title: 'Contact the Practice', text: 'Reach out to ask a question or schedule a visit.' },
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
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Anemia: Causes, Symptoms, and Testing</h1>
          <p className="mt-6 text-sm text-white/80">Published November 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-anemia-causes-symptoms-and-testing.jpg"} alt={"Close-up of a healthcare worker performing a blood test using sterile gloves."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">
          You are tired in a way that sleep does not fix. Stairs leave you winded, your hands feel cold, and your focus keeps slipping. Many people blame stress or a busy schedule and push through for months. Sometimes, though, the cause is anemia, a common and very treatable condition that deserves a closer look.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Anemia?</h2>
        <p>
          Anemia means your blood does not have enough healthy red blood cells or enough hemoglobin, the protein that carries oxygen from your lungs to the rest of your body. When tissues receive less oxygen than they need, you feel it as fatigue, weakness, and shortness of breath. Anemia is not a disease by itself. It is a sign that something else is going on, and finding that something is the real goal of an evaluation.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>
          Anemia can affect anyone, but some groups are at higher risk. These include women with heavy or long menstrual periods, people who are pregnant, older adults, people with chronic conditions such as kidney disease or inflammatory disorders, and those who follow diets low in iron, vitamin B12, or folate. People with digestive conditions that limit nutrient absorption, and those who take medicines that can cause stomach bleeding, also face added risk.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Causes</h2>
        <p>
          Anemia generally develops in one of three ways: the body loses blood, it does not make enough red blood cells, or it breaks them down too quickly.
        </p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3">{check}<span><strong>Iron deficiency:</strong> the most common cause worldwide, often from blood loss or low dietary intake.</span></li>
          <li className="flex gap-3">{check}<span><strong>Vitamin B12 or folate deficiency:</strong> can result from diet, absorption problems, or autoimmune conditions.</span></li>
          <li className="flex gap-3">{check}<span><strong>Chronic disease:</strong> long-term inflammation, infection, or kidney problems can reduce red blood cell production.</span></li>
          <li className="flex gap-3">{check}<span><strong>Inherited conditions:</strong> such as thalassemia or sickle cell disease.</span></li>
          <li className="flex gap-3">{check}<span><strong>Bone marrow problems:</strong> less common, but important to rule out when other causes do not fit.</span></li>
        </ul>
        <p>
          In adults, particularly men and postmenopausal women, iron deficiency can signal slow bleeding in the digestive tract. This is why the cause should always be identified rather than simply treated.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Symptoms to Watch For</h2>
        <p>
          Mild anemia may cause no symptoms at all, and it can develop so slowly that your body adapts. When symptoms appear, they may include:
        </p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3">{check}<span>Ongoing fatigue or low energy</span></li>
          <li className="flex gap-3">{check}<span>Pale skin or pale inner eyelids</span></li>
          <li className="flex gap-3">{check}<span>Shortness of breath or a racing heartbeat with mild activity</span></li>
          <li className="flex gap-3">{check}<span>Dizziness, headaches, or trouble concentrating</span></li>
          <li className="flex gap-3">{check}<span>Cold hands and feet, or brittle nails</span></li>
          <li className="flex gap-3">{check}<span>Cravings for ice or non-food items, which can accompany iron deficiency</span></li>
        </ul>
        <p>
          Chest pain, fainting, black or bloody stools, or severe shortness of breath need urgent medical attention.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
          Anemia is not a disease by itself.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Anemia Is Tested</h2>
        <p>
          Diagnosis starts with a conversation about your symptoms, diet, periods, family history, and medicines, followed by a physical exam. A simple blood draw does most of the work. The complete blood count (CBC) measures hemoglobin, hematocrit, and red blood cell size. Size is a helpful clue: small cells often point to iron deficiency, while large cells may suggest low B12 or folate.
        </p>
        <p>
          Depending on the results, additional tests may include ferritin and iron studies, vitamin B12 and folate levels, a reticulocyte count to see how actively your marrow is making new cells, kidney and thyroid tests, and a look at the blood under a microscope. If bleeding is suspected, further evaluation of the digestive tract may be recommended. Clinical guidelines consistently emphasize finding the underlying cause, not just correcting the number.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Treatment and Practical Steps</h2>
        <p>
          Treatment depends entirely on the cause. Iron deficiency is often treated with iron supplements and by addressing the source of blood loss. B12 deficiency may be treated with oral supplements or injections. Anemia linked to chronic illness improves when the underlying condition is managed. Most people feel noticeably better once the cause is treated, though restoring iron stores can take several months.
        </p>
        <p>Before and after you see a doctor, these steps can help:</p>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Get Help</h2>
        <p>
          Persistent fatigue is not something you simply have to live with. If you have the symptoms described here, a straightforward blood test can give you real answers. Call the office to talk about your concerns and arrange an evaluation with a primary care doctor who can look for the cause and build a plan with you.
        </p>
      </article>

      <section className="max-w-3xl mx-auto px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
            </svg>
          </div>
          <div>
            <p className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">From Elena Chetver, MD</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-ink)] text-base">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/90">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full border border-white/40 transition-colors">Contact the Office</a>
        </div>
      </section>
    </main>
  )
}