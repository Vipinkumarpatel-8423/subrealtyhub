
import Image from "next/image";
import Link from "next/link";
import { dholeraNews } from "@/data/dholeraNews";

export const metadata = {
  title: "Dholera Smart City News & Updates | SAB Realty Hub",
  description:
    "Read Dholera Smart City market updates, industrial developments and real estate news.",
};

export default function DholeraCategoryPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page banner */}
      <section className="relative flex min-h-[200px] items-center justify-center overflow-hidden bg-brand px-4 py-12 text-center sm:min-h-[240px]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-brand/60" />

        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Dholera Smart City
          </h1>

          <p className="mt-3 text-sm text-white/80">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-accent">Dholera Smart City</span>
          </p>
        </div>
      </section>

      {/* Category articles */}
      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dholeraNews.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow hover:shadow-lg"
            >
              <Link href={`/dholera-news/${article.slug}/`} className="group block">
                <div className="relative aspect-[1.6/1] overflow-hidden bg-light-bg">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-brand-grey">
                    <span>{article.category}</span>
                    <span>•</span>
                    <time>{article.date}</time>
                  </div>

                  <h2 className="text-lg font-semibold leading-snug text-brand transition-colors group-hover:text-accent">
                    {article.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-brand-grey">
                    {article.excerpt}
                  </p>

                  <span className="mt-4 inline-block text-sm font-semibold text-accent">
                    Read More →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
