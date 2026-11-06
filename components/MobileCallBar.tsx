/** A sticky call bar on phones (below lg): the one action a mobile visitor to a doctor's site wants. */
export default function MobileCallBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur border-t border-[var(--color-border)] px-4 py-3 flex gap-3" role="region" aria-label="Call the office">
      <a href="tel:+13236502991" data-ga="phone_click" className="flex-1 text-center bg-[var(--color-primary)] text-white font-bold py-3 rounded-xl">Call (323) 650-2991</a>
      <a href="/contact" data-ga="consultation_click" className="flex-1 text-center border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold py-3 rounded-xl">Request a visit</a>
    </div>
  )
}
