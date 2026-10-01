import { notFound } from "next/navigation";
import { dholeraCategories } from "@/data/dholeraCategories";

interface DholeraPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DholeraPage({
  params,
}: DholeraPageProps) {
  const { slug } = await params;

  const category = dholeraCategories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand text-white">
      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-accent">
            SAB Realty Hub
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {category.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            {category.description}
          </p>
        </div>
      </section>

      {/* =========================
          DUMMY CONTENT
      ========================== */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Premium Location",
              "Strategic Connectivity",
              "Future Growth",
              "Investment Opportunity",
              "Modern Infrastructure",
              "Prime Development",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <h2 className="text-xl font-semibold text-white">
                  {item}
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  This is dummy content for the {category.title} page.
                  Detailed project information, images, pricing,
                  location details and investment information will be
                  added here later.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          DUMMY CTA
      ========================== */}
      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-[900px] px-5 text-center">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Explore {category.title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/60">
            More information about this category will be added
            here as the project develops.
          </p>

          <button
            type="button"
            className="mt-7 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Get More Information
          </button>

        </div>
      </section>
    </main>
  );
}