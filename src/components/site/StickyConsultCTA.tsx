import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";

/**
 * Vertical sticky "Book a Consultation" CTA on desktop (right edge),
 * compact bottom bar on mobile.
 */
export function StickyConsultCTA() {
  return (
    <>
      {/* Desktop: vertical right-edge button */}
      <Link
        to="/contact"
        aria-label="Book a Consultation"
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40
                   items-center gap-2 px-3 py-6
                   bg-[var(--foreground)] text-[var(--background)]
                   hover:bg-[var(--accent)] transition-colors
                   shadow-lg rounded-l-md
                   text-[0.72rem] uppercase tracking-[0.22em]
                   [writing-mode:vertical-rl] rotate-180"
      >
        Book a Consultation
      </Link>

      {/* Mobile: bottom sticky bar */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pt-2 pointer-events-none">
        <Link
          to="/contact"
          className="pointer-events-auto flex items-center justify-center gap-2
                     w-full py-4 rounded-full
                     bg-[var(--foreground)] text-[var(--background)]
                     hover:bg-[var(--accent)] transition-colors
                     shadow-xl
                     text-[0.78rem] uppercase tracking-[0.2em]"
        >
          <Calendar className="h-4 w-4" />
          Book a Consultation
        </Link>
      </div>
    </>
  );
}
