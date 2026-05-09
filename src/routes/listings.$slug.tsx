import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { allListings, getListingBySlug, type Listing } from "@/data/listings";
import { ArrowLeft, Bath, BedDouble, Maximize2, Home as HomeIcon } from "lucide-react";

export const Route = createFileRoute("/listings/$slug")({
  loader: ({ params }) => {
    const listing = getListingBySlug(params.slug);
    if (!listing) throw notFound();
    return { listing };
  },
  head: ({ loaderData }) => {
    const l = loaderData?.listing;
    if (!l) return { meta: [{ title: "Listing · Vicky Chai" }] };
    return {
      meta: [
        {
          title: `${l.address}, ${l.city} · ${l.price} · Vicky Chai`,
        },
        { name: "description", content: l.description },
        { property: "og:title", content: `${l.address} · ${l.price}` },
        { property: "og:description", content: l.description },
        { property: "og:image", content: l.image },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <section className="container-luxe py-24 text-center">
        <div className="eyebrow mb-3">404</div>
        <h1 className="display text-4xl">Listing not found</h1>
        <Link to="/listings" className="btn-luxe mt-8 inline-flex">
          Back to Listings
        </Link>
      </section>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <section className="container-luxe py-24 text-center">
        <p className="text-destructive">{error.message}</p>
        <Link to="/listings" className="btn-luxe mt-8 inline-flex">
          Back to Listings
        </Link>
      </section>
    </Layout>
  ),
  component: ListingDetail,
});

function ListingDetail() {
  const { listing } = Route.useLoaderData() as { listing: Listing };
  const isSold = listing.status === "sold";
  const gallery = listing.images.length > 0 ? listing.images : [listing.image];

  return (
    <Layout>
      <section className="container-luxe pt-6 pb-4">
        <Link
          to="/listings"
          className="inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Listings
        </Link>
      </section>

      {/* Header */}
      <section className="container-luxe pb-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow mb-3">
              {isSold ? "Sold" : "For Sale"} · {listing.propertyType}
              {listing.mlsNumber && ` · MLS ${listing.mlsNumber}`}
            </div>
            <h1 className="display text-4xl md:text-6xl">{listing.address}</h1>
            <p className="mt-3 text-muted-foreground">
              {listing.neighborhood} · {listing.city}
            </p>
          </div>
          <div className="font-serif text-3xl md:text-4xl text-foreground">
            {listing.price}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-luxe">
        <div className="grid gap-3 md:gap-4 md:grid-cols-4 md:grid-rows-2">
          <div className="md:col-span-3 md:row-span-2 aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
            <img
              src={gallery[0]}
              alt={listing.address}
              className="h-full w-full object-cover"
            />
          </div>
          {gallery.slice(1, 5).map((src: string, i: number) => (
            <div key={i} className="aspect-[4/3] overflow-hidden bg-muted hidden md:block">
              <img src={src} alt={`${listing.address} ${i + 2}`} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        {gallery.length > 5 && (
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {gallery.slice(5).map((src: string, i: number) => (
              <div key={i} className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={src} alt={`${listing.address} ${i + 6}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Facts + description */}
      <section className="container-luxe py-16 md:py-24 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="display text-3xl md:text-4xl">About this property</h2>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            {listing.description}
          </p>

          {listing.highlights.length > 0 && (
            <div className="mt-12">
              <div className="eyebrow mb-4">Highlights</div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-foreground/85">
                {listing.highlights.map((h: string) => (
                  <li key={h} className="flex gap-3">
                    <span
                      className="mt-2 h-1 w-4 shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="md:border-l md:border-border md:pl-10 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <Stat icon={<BedDouble className="h-4 w-4" />} label="Beds" value={String(listing.beds)} />
            <Stat icon={<Bath className="h-4 w-4" />} label="Baths" value={String(listing.baths)} />
            <Stat icon={<Maximize2 className="h-4 w-4" />} label="Sq Ft" value={listing.sqft.toLocaleString()} />
            <Stat icon={<HomeIcon className="h-4 w-4" />} label="Type" value={listing.propertyType} />
            {listing.lotSize && (
              <Stat icon={<Maximize2 className="h-4 w-4" />} label="Lot" value={listing.lotSize} />
            )}
          </div>

          <div className="hairline" />

          <div>
            <div className="eyebrow mb-3">
              {isSold ? "Successfully Represented" : "Interested?"}
            </div>
            <p className="text-sm text-muted-foreground">
              {isSold
                ? "Successfully represented by Vicky Chai. Curious about a similar opportunity? Let's start a conversation."
                : "Schedule a private showing or request the full property package and recent comparable sales."}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {!isSold && (
                <Link to="/contact" className="btn-luxe">
                  Book a Private Showing
                </Link>
              )}
              <Link to="/contact" className="btn-ghost text-foreground">
                Contact Vicky
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </Layout>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-muted-foreground text-[0.7rem] uppercase tracking-[0.18em]">
        {icon}
        {label}
      </div>
      <div className="mt-1 font-serif text-xl text-foreground">{value}</div>
    </div>
  );
}

// Pre-render all known listing slugs at build time (for static generation).
// Components don't import this — TanStack Router uses it during SSG.
export const _knownSlugs = allListings.map((l) => l.slug);
