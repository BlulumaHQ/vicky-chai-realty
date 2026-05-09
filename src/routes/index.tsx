import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ListingsGrid } from "@/components/site/ListingCard";
import { featuredListings, soldListings } from "@/data/listings";
import { neighborhoods } from "@/data/neighborhoods";
import { ArrowRight, Home, KeyRound, TrendingUp } from "lucide-react";

const HEADSHOT =
  "https://assets.rew.ca/property-agent/image/81435/6705_2FF6644F-508D-4B38-ACC8-CDE6A15F1A13.jpeg?auto=format&fit=crop&w=900&h=1100";

const HERO_IMG =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80";

const SITE_URL = "https://vicky-chai-realty.lovable.app";
const OG_IMG = `${SITE_URL}/og-image.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vicky Chai Real Estate | Richmond Realtor" },
      {
        name: "description",
        content:
          "Richmond Realtor Vicky Chai helps families buy and sell homes across Greater Vancouver with personalized bilingual real estate guidance and local market expertise.",
      },
      { property: "og:title", content: "Vicky Chai Real Estate | Richmond Realtor" },
      {
        property: "og:description",
        content:
          "Helping families buy and sell homes across Greater Vancouver with trusted bilingual real estate guidance.",
      },
      { property: "og:image", content: OG_IMG },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:title", content: "Vicky Chai Real Estate | Richmond Realtor" },
      {
        name: "twitter:description",
        content:
          "Helping families buy and sell homes across Greater Vancouver with trusted bilingual real estate guidance.",
      },
      { name: "twitter:image", content: OG_IMG },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Vicky Chai",
          image: OG_IMG,
          url: SITE_URL,
          telephone: "+1-604-726-6802",
          email: "VickyChai@remax.net",
          jobTitle: "Real Estate Advisor",
          knowsLanguage: ["English", "Mandarin Chinese"],
          worksFor: { "@type": "RealEstateOrganization", name: "RE/MAX Westcoast" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "110 - 6086 Russ Baker Way",
            addressLocality: "Richmond",
            addressRegion: "BC",
            postalCode: "V7B 1B4",
            addressCountry: "CA",
          },
          areaServed: ["Richmond", "Vancouver", "Greater Vancouver"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 -top-24 md:-top-28">
          <img
            src={HERO_IMG}
            alt="Greater Vancouver luxury home exterior"
            className="h-full w-full object-cover"
          />
          {/* Subtle dark overlay for text readability only — no bottom fade */}
          <div className="absolute inset-0 bg-foreground/25" />
        </div>
        <div className="container-luxe relative z-10 pb-16 md:pb-28 fade-up text-background">
          <div className="eyebrow !text-background/80 mb-6">
            English · 中文 · Richmond · Greater Vancouver
          </div>
          <h1 className="display text-5xl md:text-7xl lg:text-8xl max-w-4xl text-background">
            Helping families buy & sell with confidence across Greater Vancouver.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-background/85 leading-relaxed">
            A calm, strategic approach to one of life's most important decisions.
            Personal, bilingual advisory built on a decade of Richmond market
            expertise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/listings" className="btn-luxe bg-background text-foreground hover:bg-background/90">
              View Featured Listings
            </Link>
            <Link to="/contact" className="btn-ghost text-background border border-background/40">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="eyebrow mb-4">Why work with Vicky</div>
            <h2 className="display text-4xl md:text-5xl">
              A trusted advisor, not a salesperson.
            </h2>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-10">
            {[
              {
                t: "A Decade of Local Experience",
                d: "11+ years guiding clients through Richmond and Greater Vancouver — through every market cycle.",
              },
              {
                t: "Bilingual, Personal Service",
                d: "Fluent in English and Mandarin. Clear communication, every step of the way.",
              },
              {
                t: "Strategic, Data-Driven",
                d: "An economics and accounting background brings rigour to pricing, negotiation, and investment strategy.",
              },
              {
                t: "Long-Term Relationships",
                d: "A practice built on referrals — most of my clients come from past clients who became friends.",
              },
            ].map((b) => (
              <div key={b.t}>
                <div className="hairline w-10 mb-5 bg-accent" style={{ background: "var(--accent)" }} />
                <h3 className="font-serif text-xl text-foreground">{b.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      {featuredListings.length > 0 && (
        <section className="container-luxe py-24 md:py-28 border-t border-border">
          <SectionHeader
            eyebrow="Featured Listings"
            title="Currently on the market."
            intro="A curated selection of homes representing exceptional value, location, and lifestyle across Greater Vancouver."
            action={
              <Link to="/listings" className="link-underline text-sm uppercase tracking-[0.18em]">
                All listings <ArrowRight className="inline h-3 w-3 ml-1" />
              </Link>
            }
          />
          <ListingsGrid listings={featuredListings.slice(0, 6)} />
        </section>
      )}

      {/* SOLD LISTINGS */}
      {soldListings.length > 0 && (
        <section className="bg-secondary/40 py-24 md:py-28 mt-24">
          <div className="container-luxe">
            <SectionHeader
              eyebrow="Recently Sold"
              title="Results that speak for themselves."
              intro="Successful transactions across Richmond and Vancouver — every one a relationship that began with a conversation."
              action={
                <Link to="/sold" className="link-underline text-sm uppercase tracking-[0.18em]">
                  All sold <ArrowRight className="inline h-3 w-3 ml-1" />
                </Link>
              }
            />
            <ListingsGrid listings={soldListings.slice(0, 6)} />
          </div>
        </section>
      )}

      {/* NEIGHBORHOODS */}
      <section className="container-luxe py-24 md:py-32">
        <SectionHeader
          eyebrow="Local Expertise"
          title="Neighbourhoods I know intimately."
          intro="From Richmond's family enclaves to Vancouver's most coveted streets — local knowledge is the foundation of every great real estate decision."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {neighborhoods.map((n) => (
            <Link
              to="/neighborhoods/$slug"
              params={{ slug: n.slug }}
              key={n.slug}
              className="group relative aspect-[4/5] overflow-hidden block"
            >
              <img
                src={n.image}
                alt={n.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-background">
                <div className="eyebrow text-background/70 mb-2">{n.city}</div>
                <h3 className="font-serif text-3xl">{n.name}</h3>
                <p className="mt-2 text-sm text-background/80 line-clamp-2">
                  {n.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-luxe grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-muted max-w-md">
              <img src={HEADSHOT} alt="Vicky Chai" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">About Vicky</div>
            <h2 className="display text-4xl md:text-5xl">
              Calm, considered, and quietly relentless on your behalf.
            </h2>
            <div className="mt-8 space-y-5 text-base text-foreground/85 leading-relaxed">
              <p>
                A Richmond-based realtor with RE/MAX Westcoast, Vicky brings an
                economics and accounting background to every transaction —
                blending analytical rigour with a warm, family-first
                perspective.
              </p>
              <p>
                Fluent in English and Mandarin, she is the trusted advisor for
                families buying their first home, upgrading into the right
                school catchment, or building long-term real estate wealth in
                Greater Vancouver.
              </p>
            </div>
            <Link to="/about" className="btn-ghost mt-10 text-foreground">
              Read Vicky's Story
            </Link>
          </div>
        </div>
      </section>

      {/* SELLER CTA */}
      <section className="container-luxe py-24 md:py-32 text-center">
        <div className="eyebrow mb-5">For Sellers</div>
        <h2 className="display text-4xl md:text-6xl max-w-3xl mx-auto">
          Curious what your home is worth in today's market?
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
          Receive a complimentary, no-pressure home valuation backed by current
          comparable sales and a tailored marketing strategy.
        </p>
        <Link to="/contact" className="btn-luxe mt-10 inline-flex">
          Get Your Home Value
        </Link>
      </section>

      {/* GUIDANCE */}
      <section className="bg-foreground text-background py-24 md:py-32">
        <div className="container-luxe">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-6">
              <div className="eyebrow text-background/60 mb-4">Guidance</div>
              <h2 className="display text-4xl md:text-5xl">
                Buying, selling, investing — done thoughtfully.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-background/10">
            {[
              {
                Icon: KeyRound,
                t: "Buyers",
                d: "From first-time buyers to luxury upgrades, navigate the search, financing, and negotiation with confidence.",
              },
              {
                Icon: Home,
                t: "Sellers",
                d: "Strategic pricing, premium marketing, and skilled negotiation to maximize your home's value.",
              },
              {
                Icon: TrendingUp,
                t: "Investors",
                d: "Identify long-term opportunities in Richmond, Vancouver, and emerging neighbourhoods.",
              },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="bg-foreground p-10">
                <Icon className="h-7 w-7 text-background/70 mb-6" strokeWidth={1.2} />
                <h3 className="font-serif text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-background/70 leading-relaxed">{d}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-block text-[0.75rem] uppercase tracking-[0.18em] text-background link-underline"
                >
                  Start a Conversation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="container-luxe py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="eyebrow mb-4">Get in Touch</div>
          <h2 className="display text-4xl md:text-5xl">Let's start a conversation.</h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Whether you're months away or ready to move, I'd be delighted to
            answer your questions — no pressure, no obligation.
          </p>
        </div>
        <div className="space-y-5 text-lg">
          <div>
            <div className="eyebrow mb-1">Phone</div>
            <a href="tel:6047266802" className="link-underline">604.726.6802</a>
          </div>
          <div>
            <div className="eyebrow mb-1">Email</div>
            <a href="mailto:VickyChai@remax.net" className="link-underline">VickyChai@remax.net</a>
          </div>
          <div>
            <div className="eyebrow mb-1">Office</div>
            <p>110 – 6086 Russ Baker Way, Richmond, BC V7B 1B4</p>
          </div>
          <Link to="/contact" className="btn-luxe mt-4 inline-flex">
            Contact Vicky
          </Link>
        </div>
      </section>
    </Layout>
  );
}
