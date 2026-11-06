import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import SiteHeader from '../components/SiteHeader'

import { GoogleAnalytics } from '@next/third-parties/google'
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: 'Elena Chetver, MD | Unhurried Primary Care Built Around You',
  description: 'Dr. Elena Chetver offers a direct primary care model that puts the patient relationship first. Expect thoughtful visits, clear answers, and a physician who knows your whole health story.',
  metadataBase: new URL('https://elenachetvermd.com'),
  openGraph: {
    title: 'Elena Chetver, MD | Unhurried Primary Care Built Around You',
    description: 'Dr. Elena Chetver offers a direct primary care model that puts the patient relationship first. Expect thoughtful visits, clear answers, and a physician who knows your whole health story.',
    url: 'https://elenachetvermd.com',
    siteName: 'Elena Chetver, MD',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Elena Chetver, MD | Unhurried Primary Care Built Around You',
    description: 'Dr. Elena Chetver offers a direct primary care model that puts the patient relationship first. Expect thoughtful visits, clear answers, and a physician who knows your whole health story.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        <SiteHeader />
        <main>{children}</main>
        <footer className="bg-[var(--color-ink)] text-white py-16">
          {/* TODO(optimize): fill real footer NAP before launch */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <span className="font-cormorant text-2xl font-semibold text-white">Elena Chetver, MD</span>
                <p className="mt-4 text-sm text-white/70 max-w-xs">Thoughtful, personal primary care with Dr. Elena Chetver.</p>
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="/conditions" className="hover:text-white transition-colors">Conditions</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="/team" className="hover:text-white transition-colors">Team</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>[Address to be added]</li>
                  <li>[Phone to be added]</li>
                  <li>[Email to be added]</li>
                  <li>[Hours to be added]</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/15">
              <p className="text-xs text-white/60 mb-4">This website does not collect protected health information. Please do not send medical details through this website.</p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/60">
                <p>© {new Date().getFullYear()} Elena Chetver, MD</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a href="/privacy-sms" className="hover:text-white transition-colors">Privacy Policy</a>
                  <span>|</span>
                  <a href="/terms-sms" className="hover:text-white transition-colors">Terms of Service</a>
                  <span>|</span>
                  <a href="/terms-sms#sms-terms" className="hover:text-white transition-colors">SMS Terms</a>
                  <span>|</span>
                  <a href="/patient-form-sms" className="hover:text-white transition-colors">Text Message Sign-Up</a>
                </div>
              </div>
            </div>
            {/* site-credits:start */}
            <p className="mt-6 text-center sm:text-left text-xs opacity-60">Photos by <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">Pexels</a>{' · '}Website built by <a href="https://www.medreception.ai/" target="_blank" rel="noopener" className="underline-offset-2 hover:underline">MedReception AI</a></p>
            {/* site-credits:end */}
          </div>
        </footer>
        {/* MedReception patient widget: callback, appointment request and the AI chat, filed on
            the practice's Studio board (qa-api lambdaWidget, client id elena-chetver-md). */}
        <Script src="https://widget.medreception.ai/embed.js" data-client-id="elena-chetver-md" strategy="afterInteractive" />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}