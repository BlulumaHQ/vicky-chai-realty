import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/sold", label: "Sold" },
  { to: "/neighborhoods", label: "Neighborhoods" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between py-5 md:py-6">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl md:text-2xl tracking-tight text-foreground">
            Vicky Chai
          </span>
          <span className="eyebrow mt-1 text-[0.6rem] text-muted-foreground">
            Real Estate · RE/MAX Westcoast
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.78rem] uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground transition-colors link-underline"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <span className="eyebrow">EN · 中文</span>
          <Link to="/contact" className="btn-luxe">
            Book a Consultation
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="container-luxe flex items-center justify-between py-5">
            <span className="font-serif text-xl">Vicky Chai</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container-luxe flex flex-col gap-6 mt-10">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <div className="hairline mt-8" />
            <span className="eyebrow mt-6">EN · 中文 · Mandarin</span>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-luxe self-start mt-2"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
