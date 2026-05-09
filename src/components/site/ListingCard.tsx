import type { Listing } from "@/data/listings";

export function ListingCard({
  listing,
  variant = "grid",
}: {
  listing: Listing;
  variant?: "grid" | "spotlight";
}) {
  const isSpot = variant === "spotlight";
  return (
    <a
      href={listing.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${
        isSpot ? "md:grid md:grid-cols-2 md:gap-12 md:items-center" : ""
      }`}
    >
      <div
        className={`overflow-hidden bg-muted ${
          isSpot ? "aspect-[4/3] md:aspect-[5/4]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={listing.image}
          alt={`${listing.address}, ${listing.city}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className={`pt-6 ${isSpot ? "md:pt-0" : ""}`}>
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow">
            {listing.status === "sold" ? "Sold" : "For Sale"} ·{" "}
            {listing.propertyType}
          </span>
          <span className="font-serif text-xl text-foreground">
            {listing.price}
          </span>
        </div>
        <h3 className="mt-3 font-serif text-2xl md:text-3xl text-foreground">
          {listing.address}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {listing.neighborhood} · {listing.city}
        </p>
        <div className="mt-5 flex items-center gap-5 text-sm text-foreground/80">
          <span>{listing.beds} bd</span>
          <span className="text-border">/</span>
          <span>{listing.baths} ba</span>
          <span className="text-border">/</span>
          <span>{listing.sqft.toLocaleString()} sf</span>
          {listing.lotSize && (
            <>
              <span className="text-border">/</span>
              <span>{listing.lotSize}</span>
            </>
          )}
        </div>
        <div className="mt-6 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.18em] text-foreground link-underline">
          View Details
        </div>
      </div>
    </a>
  );
}

export function ListingsGrid({
  listings,
  emptyMessage,
}: {
  listings: Listing[];
  emptyMessage?: string;
}) {
  if (listings.length === 0) return emptyMessage ? <p className="text-muted-foreground">{emptyMessage}</p> : null;
  if (listings.length === 1) {
    return (
      <div className="max-w-5xl mx-auto">
        <ListingCard listing={listings[0]} variant="spotlight" />
      </div>
    );
  }
  if (listings.length === 2) {
    return (
      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {listings.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
    );
  }
  return (
    <div
      className={`grid gap-10 md:gap-12 ${
        listings.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {listings.map((l) => (
        <ListingCard key={l.id} listing={l} />
      ))}
    </div>
  );
}
