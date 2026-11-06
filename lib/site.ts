// Practice facts the Studio forms and their server routes read. Written by the MedReception
// website builder in code (src/lib/studioPathway.js) from the build's resolved contact facts.
// A value the build did not know is null and the forms leave it out: nothing here is invented.
export const SITE: {
  name: string
  legalName: string | null
  phone: string | null
  phoneHref: string | null
  email: string | null
  domain: string | null
  origins: string[]
  behavioralHealth: boolean
} = {
  name: "Elena Chetver, MD",
  legalName: "Elena Chetver, M.D.",
  phone: "(323) 650-2991",
  phoneHref: "tel:+13236502991",
  email: null,
  domain: "elenachetvermd.com",
  origins: ["https://elenachetvermd.com","https://www.elenachetvermd.com"],
  behavioralHealth: false,
}

// The brand colours, for the plain HTML page /api/contact answers a no-JavaScript post with.
export const COLORS = {"primary":"#0070c0","dark":"#00497d","light":"#d9eaf6","ink":"#1a2030","cream":"#f7fbfd","muted":"#64748b","border":"#cce5f7","accent":"#0070c0"}

export const PHONE_PLACEHOLDER = "(555) 555-0123"
