import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { neighborhoods } from "@/data/neighborhoods";

export const Route = createFileRoute("/neighborhoods/")({
  head: () => ({
    meta: [
      { title: "Richmond Real Estate Guide | Vicky Chai" },
      {
        name: "description",
        content:
          "Explore Richmond neighborhoods, schools, lifestyle insights, and homes for sale with local Realtor Vicky Chai.",
      },
      { property: "og:title", content: "Richmond Real Estate Guide | Vicky Chai" },
      {
        property: "og:description",
        content:
          "Explore Richmond neighborhoods, schools, lifestyle insights, and homes for sale with local Realtor Vicky Chai.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: NeighborhoodsIndex,
});

function NeighborhoodsIndex() {
  return (
    <Layout>
      <section className="container-luxe py-16 md:py-24">
        <SectionHeader
          eyebrow="Local Expertise"
          title="The neighbourhoods I know best."
          intro="Each community has its own rhythm, schools, and lifestyle. Here's a look at where I've helped clients put down roots."
        />
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {neighborhoods.map((n) => (
            <Link
              to="/neighborhoods/$slug"
              params={{ slug: n.slug }}
              key={n.slug}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={n.image}
                  alt={n.name}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="pt-6">
                <div className="eyebrow">{n.city}</div>
                <h3 className="font-serif text-3xl mt-2">{n.name}</h3>
                <p className="mt-3 text-muted-foreground">{n.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
