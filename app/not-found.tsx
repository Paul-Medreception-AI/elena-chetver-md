import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-[var(--color-cream)] min-h-screen flex items-center justify-center px-6">
      <div className="text-center animate-fade-up">
        <p className="font-cormorant text-9xl text-[var(--color-primary)] opacity-20 leading-none">404</p>
        <h1 className="font-cormorant text-4xl text-[var(--color-ink)] mt-4">Page Not Found</h1>
        <p className="text-[var(--color-muted)] mt-2">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-white font-medium transition-colors hover:bg-[var(--color-accent-dark)]"
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.125 1.125 0 011.592 0L21.75 12M4.5 9.75V19.5a.75.75 0 00.75.75H9.75v-5.25h4.5v5.25h4.5a.75.75 0 00.75-.75V9.75" />
            </svg>
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-6 py-3 text-[var(--color-primary)] font-medium transition-colors hover:bg-[var(--color-light)]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}