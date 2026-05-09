import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyConsultCTA } from "./StickyConsultCTA";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 md:pt-28">{children}</main>
      <Footer />
      <StickyConsultCTA />
    </div>
  );
}
