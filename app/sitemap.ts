// Written by the MedReception website builder from the site's final route set (code,
// not a model). Data-driven pages are mapped from lib/data, so pages appended there
// are listed automatically.
import type { MetadataRoute } from 'next'
import { SERVICES as DATA_0 } from '../lib/data/services'
import { CONDITIONS as DATA_1 } from '../lib/data/conditions'

type Freq = 'daily' | 'weekly' | 'monthly' | 'yearly'
const BASE = "https://elenachetvermd.com"
const STATIC: [string, number, Freq][] = [
  ["/", 1.00, 'weekly'],
  ["/about", 0.70, 'monthly'],
  ["/blog", 0.70, 'weekly'],
  ["/blog/acid-reflux-and-heartburn-causes-and-solutions", 0.60, 'monthly'],
  ["/blog/anemia-causes-symptoms-and-testing", 0.60, 'monthly'],
  ["/blog/anxiety-and-physical-symptoms-the-mind-body-link", 0.60, 'monthly'],
  ["/blog/asthma-control-recognizing-early-warning-signs", 0.60, 'monthly'],
  ["/blog/back-pain-when-rest-helps-and-when-it-does-not", 0.60, 'monthly'],
  ["/blog/bone-health-and-osteoporosis-prevention", 0.60, 'monthly'],
  ["/blog/building-a-healthy-eating-pattern-that-lasts", 0.60, 'monthly'],
  ["/blog/cholesterol-basics-ldl-hdl-and-beyond", 0.60, 'monthly'],
  ["/blog/common-causes-of-fatigue-and-when-to-get-checked", 0.60, 'monthly'],
  ["/blog/digestive-health-when-to-seek-evaluation", 0.60, 'monthly'],
  ["/blog/digital-tools-for-tracking-your-health", 0.60, 'monthly'],
  ["/blog/exercise-for-adults-how-much-is-enough", 0.60, 'monthly'],
  ["/blog/gout-understanding-flares-and-prevention", 0.60, 'monthly'],
  ["/blog/headaches-and-migraines-identifying-your-triggers", 0.60, 'monthly'],
  ["/blog/healthy-aging-staying-independent-longer", 0.60, 'monthly'],
  ["/blog/heart-health-habits-for-every-age", 0.60, 'monthly'],
  ["/blog/how-to-get-the-most-from-a-doctor-visit", 0.60, 'monthly'],
  ["/blog/how-to-prepare-for-your-annual-physical", 0.60, 'monthly'],
  ["/blog/how-to-read-your-lab-results", 0.60, 'monthly'],
  ["/blog/managing-stress-for-a-healthier-body", 0.60, 'monthly'],
  ["/blog/medication-safety-questions-to-ask-your-doctor", 0.60, 'monthly'],
  ["/blog/menopause-and-perimenopause-what-to-expect", 0.60, 'monthly'],
  ["/blog/prediabetes-what-it-means-and-what-you-can-do", 0.60, 'monthly'],
  ["/blog/preventive-screenings-every-adult-should-know-about", 0.60, 'monthly'],
  ["/blog/questions-to-ask-when-choosing-a-primary-care-doctor", 0.60, 'monthly'],
  ["/blog/seasonal-allergies-managing-symptoms-effectively", 0.60, 'monthly'],
  ["/blog/skin-changes-to-mention-to-your-doctor", 0.60, 'monthly'],
  ["/blog/staying-healthy-during-cold-and-flu-season", 0.60, 'monthly'],
  ["/blog/the-value-of-a-long-term-relationship-with-your-doctor", 0.60, 'monthly'],
  ["/blog/thyroid-problems-signs-you-should-not-ignore", 0.60, 'monthly'],
  ["/blog/travel-health-tips-before-you-go", 0.60, 'monthly'],
  ["/blog/understanding-type-2-diabetes-management", 0.60, 'monthly'],
  ["/blog/understanding-your-blood-pressure-numbers", 0.60, 'monthly'],
  ["/blog/urinary-tract-infections-symptoms-and-prevention", 0.60, 'monthly'],
  ["/blog/vaccines-for-adults-staying-up-to-date", 0.60, 'monthly'],
  ["/blog/vitamin-d-do-you-really-need-a-supplement", 0.60, 'monthly'],
  ["/blog/weight-management-without-fad-diets", 0.60, 'monthly'],
  ["/blog/what-is-direct-primary-care-and-how-does-it-work", 0.60, 'monthly'],
  ["/blog/why-sleep-matters-for-your-overall-health", 0.60, 'monthly'],
  ["/compare/annual-physical-vs-symptom-based-visits", 0.70, 'monthly'],
  ["/compare/direct-primary-care-vs-traditional-primary-care", 0.70, 'monthly'],
  ["/compare/lifestyle-changes-vs-medication-high-blood-pressure", 0.70, 'monthly'],
  ["/compare/primary-care-physician-vs-specialist", 0.70, 'monthly'],
  ["/compare/primary-care-vs-urgent-care", 0.70, 'monthly'],
  ["/conditions", 0.90, 'weekly'],
  ["/contact", 0.70, 'monthly'],
  ["/faq", 0.70, 'monthly'],
  ["/insurance", 0.70, 'monthly'],
  ["/locations/west-hollywood-ca", 0.80, 'monthly'],
  ["/new-patients", 0.70, 'monthly'],
  ["/patient-form-sms", 0.30, 'yearly'],
  ["/privacy-sms", 0.30, 'yearly'],
  ["/reviews", 0.70, 'monthly'],
  ["/services", 0.90, 'weekly'],
  ["/team", 0.70, 'monthly'],
  ["/telehealth", 0.70, 'monthly'],
  ["/terms-sms", 0.30, 'yearly'],
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const seen = new Set<string>()
  const out: MetadataRoute.Sitemap = []
  const add = (path: string, priority: number, changeFrequency: Freq) => {
    if (seen.has(path)) return
    seen.add(path)
    // With no origin (no usable target_domain) the URLs stay root-relative: '/' for home, never ''.
    out.push({ url: BASE ? BASE + (path === '/' ? '' : path) : path, lastModified: now, changeFrequency, priority })
  }
  for (const [path, priority, freq] of STATIC) add(path, priority, freq)
  for (const x of DATA_0) add("/services/" + x.slug, 0.85, 'monthly')
  for (const x of DATA_1) add("/conditions/" + x.slug, 0.85, 'monthly')
  return out
}
