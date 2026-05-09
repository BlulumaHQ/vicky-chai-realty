import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

const HEADSHOT =
  "https://assets.rew.ca/property-agent/image/81435/6705_2FF6644F-508D-4B38-ACC8-CDE6A15F1A13.jpeg?auto=format&fit=crop&w=900&h=1100";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vicky Chai · Richmond Realtor · RE/MAX Westcoast" },
      {
        name: "description",
        content:
          "A bilingual Richmond realtor with an economics and accounting background, helping families buy and sell across Greater Vancouver since 2015.",
      },
      { property: "og:title", content: "About Vicky Chai" },
      {
        property: "og:description",
        content: "Bilingual Richmond realtor with RE/MAX Westcoast since 2015.",
      },
      { property: "og:image", content: HEADSHOT },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="container-luxe py-16 md:py-24 grid md:grid-cols-12 gap-12 md:gap-20 items-start">
        <div className="md:col-span-5 md:sticky md:top-32">
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img src={HEADSHOT} alt="Vicky Chai" className="h-full w-full object-cover" />
          </div>
          <div className="mt-6 space-y-1 text-sm">
            <div className="eyebrow">RE/MAX Westcoast</div>
            <p className="font-serif text-2xl">Vicky Chai</p>
            <p className="text-muted-foreground">11+ Years Experience</p>
            <p className="text-muted-foreground">English · 中文</p>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="eyebrow mb-4">About Vicky</div>
          <h1 className="display text-4xl md:text-6xl">
            Real estate, done thoughtfully.
          </h1>
          <div className="mt-10 space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed">
            <p>
              I'm a passionate, professional Real Estate Agent with RE/MAX
              Westcoast in Richmond, BC. My mission is simple: deliver a
              one-stop, hassle-free, high-standard, customized real estate
              experience for every family I work with.
            </p>
            <p>
              I bring an economics and accounting background to every
              transaction. I completed my Economics degree at the University of
              Victoria in two years, then studied accounting, business, and
              real estate at the University of British Columbia from 2012 to
              2014. I obtained my real estate license in January 2015.
            </p>
            <p>
              As a mother of two, I understand what it means to find the right
              home for the next chapter of your life. My values — thinking big,
              acting small, living large, and leading by example — guide every
              client relationship.
            </p>
            <p>
              I'm fluent in English and Mandarin. Whether you're buying,
              selling, investing, or exploring mortgages, I'd be honoured to
              help you create a clear, calm path forward.
            </p>
          </div>

          <div className="hairline my-12" />

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="eyebrow mb-2">Brokerage</div>
              <p>RE/MAX Westcoast<br />110 – 6086 Russ Baker Way, Richmond, BC</p>
            </div>
            <div>
              <div className="eyebrow mb-2">Direct</div>
              <p>
                <a href="tel:6047266802" className="link-underline">604.726.6802</a><br />
                <a href="mailto:VickyChai@remax.net" className="link-underline">VickyChai@remax.net</a>
              </p>
            </div>
          </div>

          <Link to="/contact" className="btn-luxe mt-12 inline-flex">
            Book a Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
