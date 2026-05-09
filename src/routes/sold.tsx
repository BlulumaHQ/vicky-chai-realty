import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ListingsGrid } from "@/components/site/ListingCard";
import { soldListings } from "@/data/listings";

export const Route = createFileRoute("/sold")({
  head: () => ({
    meta: [
      { title: "Recently Sold · Vicky Chai Real Estate" },
      {
        name: "description",
        content:
          "Recent successful transactions across Richmond and Greater Vancouver — proof of Vicky Chai's market expertise and client-first approach.",
      },
      { property: "og:title", content: "Recently Sold · Vicky Chai" },
      {
        property: "og:description",
        content: "Recent sales across Richmond and Greater Vancouver.",
      },
    ],
  }),
  component: Sold,
});

function Sold() {
  return (
    <Layout>
      <section className="container-luxe py-16 md:py-24">
        <SectionHeader
          eyebrow="Recently Sold"
          title="A track record of trusted results."
          intro="Each sale represents a family helped, a relationship built, and a future shaped."
        />
        {soldListings.length > 0 ? (
          <ListingsGrid listings={soldListings} />
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground max-w-md mx-auto">
              Sold portfolio coming soon.
            </p>
            <Link to="/contact" className="btn-luxe mt-8 inline-flex">
              Request Past Sales
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}
