import { Link } from "@tanstack/react-router";
import { BrokerageMark } from "./BrokerageMark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container-luxe py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl">Vicky Chai</div>
          <div className="eyebrow mt-2">RE/MAX Westcoast · Richmond, BC</div>
          <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
            Helping families across Richmond and Greater Vancouver buy and sell
            with confidence. Bilingual real estate advisory in English and
            Mandarin.
          </p>
          <div className="mt-6 space-y-1 text-sm">
            <a href="tel:6047266802" className="block link-underline">
              604.726.6802
            </a>
            <a
              href="mailto:VickyChai@remax.net"
              className="block link-underline"
            >
              VickyChai@remax.net
            </a>
            <p className="text-muted-foreground mt-3">
              110 – 6086 Russ Baker Way, Richmond, BC V7B 1B4
            </p>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/listings" className="link-underline">Featured Listings</Link></li>
            <li><Link to="/sold" className="link-underline">Sold</Link></li>
            <li><Link to="/neighborhoods" className="link-underline">Neighborhoods</Link></li>
            <li><Link to="/about" className="link-underline">About Vicky</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Sellers & Buyers</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/contact" className="link-underline">Get Your Home Value</Link></li>
            <li><Link to="/contact" className="link-underline">Buyer Consultation</Link></li>
            <li><Link to="/contact" className="link-underline">Investment Advisory</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>
            © {year} Vicky Chai Real Estate. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground link-underline"
            >
              Bluluma
            </a>
          </div>
          <div>Personal Real Estate Corporation · RE/MAX Westcoast</div>
        </div>
      </div>
    </footer>
  );
}
