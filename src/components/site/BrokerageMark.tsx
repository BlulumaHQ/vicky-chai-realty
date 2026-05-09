/**
 * Typographic RE/MAX Westcoast brokerage attribution mark.
 * Brand colors: RE/MAX red (#DC1C2E), navy (#003DA5).
 */
export function BrokerageMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex flex-col leading-none ${className}`}
      aria-label="RE/MAX Westcoast"
    >
      <div className="flex items-baseline gap-[2px]">
        <span
          className="font-sans font-extrabold tracking-tight text-[1.4rem]"
          style={{ color: "#DC1C2E" }}
        >
          RE
        </span>
        <span
          className="font-sans font-extrabold tracking-tight text-[1.4rem]"
          style={{ color: "#003DA5" }}
        >
          /
        </span>
        <span
          className="font-sans font-extrabold tracking-tight text-[1.4rem]"
          style={{ color: "#DC1C2E" }}
        >
          MAX
        </span>
        <span
          className="ml-2 font-sans font-semibold uppercase tracking-[0.2em] text-[0.7rem]"
          style={{ color: "#003DA5" }}
        >
          Westcoast
        </span>
      </div>
      <span className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
        Independently Owned & Operated
      </span>
    </div>
  );
}
