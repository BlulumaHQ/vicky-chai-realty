import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { neighborhoods } from "@/data/neighborhoods";

export const Route = createFileRoute("/neighborhoods/$slug")({
  loader: ({ params }) => {
    const n = neighborhoods.find((x) => x.slug === params.slug);
    if (!n) throw notFound();
    return n;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.name} Real Estate Guide | Vicky Chai` },
            {
              name: "description",
              content: `${loaderData.name} real estate guide by Richmond Realtor Vicky Chai — ${loaderData.tagline} Explore homes, schools, and lifestyle insights in ${loaderData.city}.`,
            },
            {
              property: "og:title",
              content: `${loaderData.name} Real Estate Guide | Vicky Chai`,
            },
            { property: "og:description", content: loaderData.tagline },
            { property: "og:image", content: loaderData.image },
            { name: "twitter:image", content: loaderData.image },
          ],
        }
      : {},
  component: NeighborhoodPage,
  notFoundComponent: () => (
    <Layout>
      <div className="container-luxe py-32 text-center">
        <h1 className="display text-4xl">Neighbourhood not found</h1>
        <Link to="/neighborhoods" className="btn-luxe mt-8 inline-flex">
          Browse All
        </Link>
      </div>
    </Layout>
  ),
  errorComponent: () => (
    <Layout>
      <div className="container-luxe py-32 text-center">
        <h1 className="display text-4xl">Something went wrong</h1>
        <Link to="/neighborhoods" className="btn-luxe mt-8 inline-flex">
          Browse All
        </Link>
      </div>
    </Layout>
  ),
});

function NeighborhoodPage() {
  const n = Route.useLoaderData();
  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden -mt-24 md:-mt-28">
        <img src={n.image} alt={n.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="container-luxe relative z-10 h-full flex flex-col justify-end pb-12 text-background">
          <div className="eyebrow text-background/70 mb-3">{n.city}</div>
          <h1 className="display text-5xl md:text-7xl">{n.name}</h1>
        </div>
      </section>
      <section className="container-luxe py-20 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-foreground leading-snug">
            {n.tagline}
          </p>
          <p className="mt-8 text-foreground/85 leading-relaxed">
            {n.description}
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Detailed market insights, school information, and lifestyle guides
            for {n.name} are coming soon. In the meantime, reach out for
            personalized neighbourhood expertise.
          </p>
        </div>
        <aside className="bg-secondary p-8">
          <div className="eyebrow mb-3">Considering {n.name}?</div>
          <h3 className="font-serif text-2xl mb-5">
            Let's talk about your goals.
          </h3>
          <Link to="/contact" className="btn-luxe w-full">
            Book a Consultation
          </Link>
        </aside>
      </section>
    </Layout>
  );
}
