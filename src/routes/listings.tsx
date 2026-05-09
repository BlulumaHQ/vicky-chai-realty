import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ListingsGrid } from "@/components/site/ListingCard";
import { featuredListings } from "@/data/listings";

export const Route = createFileRoute("/listings")({
  head: () => ({
    meta: [
      { title: "Featured Listings | Vicky Chai Real Estate" },
      {
        name: "description",
        content:
          "Browse featured homes and real estate listings represented by Richmond Realtor Vicky Chai across Greater Vancouver.",
      },
      { property: "og:title", content: "Featured Listings | Vicky Chai Real Estate" },
      {
        property: "og:description",
        content:
          "Browse featured homes and real estate listings represented by Richmond Realtor Vicky Chai across Greater Vancouver.",
      },
      { property: "og:image", content: "https://vicky-chai-realty.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://vicky-chai-realty.lovable.app/og-image.jpg" },
    ],
  }),
  component: Listings,
});

function Listings() {
  return (
    <Layout>
      <section className="container-luxe py-16 md:py-24">
        <SectionHeader
          eyebrow="Featured Listings"
          title="Currently on the market."
          intro="A curated selection of homes available across Richmond and Greater Vancouver."
        />
        {featuredListings.length > 0 ? (
          <ListingsGrid listings={featuredListings} />
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground max-w-md mx-auto">
              New listings coming soon. In the meantime, reach out for off-market
              opportunities.
            </p>
            <Link to="/contact" className="btn-luxe mt-8 inline-flex">
              Contact Vicky
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}
