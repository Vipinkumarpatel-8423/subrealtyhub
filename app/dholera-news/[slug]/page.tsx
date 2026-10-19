
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dholeraNews, getNewsBySlug } from "@/data/dholeraNews";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return dholeraNews.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | SAB Realty Hub" };
  }

  return {
    title: `${article.title} | SAB Realty Hub`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) notFound();

  const recentArticles = dholeraNews
    .filter((item) => item.slug !== article.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-background">

      {/* Page banner */}
      <section className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-brand px-4 py-10 text-center sm:min-h-[220px]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 to-brand/65" />

        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Dholera Smart City
          </h1>

          <p className="mt-3 text-sm text-white/80">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <Link
              href="/category/dholera-smart-city/"
              className="hover:text-accent"
            >
              Dholera Smart City
            </Link>
          </p>
        </div>
      </section>

      {/* Article and sidebar */}
      <section className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 lg:px-8 lg:py-16">

        {/* Main article */}
        <article className="min-w-0">
          <div className="relative aspect-[1.7/1] w-full overflow-hidden rounded-xl bg-light-bg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          {/* Article metadata */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border pb-4 text-sm text-brand-grey">
            <span>✍ SAB Realty Hub</span>
            <time>{article.date}</time>
            <span>{article.readTime}</span>
          </div>

          <h1 className="mt-6 text-2xl font-bold leading-tight text-brand sm:text-3xl">
            {article.title}
          </h1>

          <p className="mt-5 text-base leading-7 text-brand-grey">
            {article.excerpt}
          </p>

          {/* Dynamic article content */}
          <div className="mt-8 space-y-7">
            {article.content.map((section, index) => (
              <section key={`${article.slug}-${index}`}>
                <h2 className="text-xl font-bold leading-snug text-brand sm:text-2xl">
                  {section.heading}
                </h2>

                <div className="mt-3 space-y-4 text-sm leading-7 text-brand-grey sm:text-base">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>

                {section.points && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-brand-grey sm:text-base">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Back to category */}
          <div className="mt-10 border-t border-border pt-6">
            <Link
              href="/category/dholera-smart-city/"
              className="inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              ← More Dholera News
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="min-w-0 space-y-6 lg:sticky lg:top-24">
          <div className="rounded-xl border border-border bg-background p-5">
            <h2 className="text-lg font-semibold text-brand">
              Recent Posts
            </h2>

            <div className="mt-2 h-0.5 w-10 bg-accent" />

            <div className="mt-5 space-y-5">
              {recentArticles.map((item) => (
                <Link
                  key={item.id}
                  href={`/dholera-news/${item.slug}/`}
                  className="group flex items-start gap-3"
                >
                  <div className="relative h-[68px] w-[76px] shrink-0 overflow-hidden rounded-md bg-light-bg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="76px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-brand-grey">
                      {item.date}
                    </p>

                    <h3 className="mt-1 line-clamp-3 text-sm font-medium leading-5 text-brand transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-brand p-6 text-white">
            <h2 className="text-lg font-semibold">
              Get Free Consultations
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Connect with SAB Realty Hub to discuss your property
              requirements and learn about available opportunities.
            </p>

            <Link
              href="/contact/"
              className="mt-5 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Get A Quote
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
