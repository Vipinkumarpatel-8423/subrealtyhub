
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { dholeraNews } from "@/data/dholeraNews";

export default function DholeraNewsSection() {
  const articles = dholeraNews.slice(0, 6);

  return (
    <section className="overflow-hidden bg-accent-light py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-sm font-semibold uppercase text-accent sm:text-base">
            Dholera News
          </p>

          <div className="mt-2 flex items-center justify-center gap-2">
            <h2 className="text-xl font-semibold text-brand sm:text-2xl">
              Dholera Market Updates
            </h2>
            <ArrowUpRight
              size={26}
              className="-rotate-45 text-accent"
              strokeWidth={1.6}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/dholera-news/${article.slug}/`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[1.78/1] w-full overflow-hidden bg-light-bg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-xl">
                  {article.title}
                </h3>

                <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 pt-5 text-xs text-brand-grey sm:text-sm">
                  <time>{article.date}</time>
                  <span aria-hidden="true">•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/category/dholera-smart-city/"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
