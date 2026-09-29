import Link from "next/link";
import { Icon } from "@iconify/react";

import Reveal from "@/app/components/common/Reavel";
import { insights } from "@/app/data/insights";

export default function InsightsList() {
  const featured = insights[0];
  const articles = insights.slice(1);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        {/* Section heading */}
        <div className="grid gap-10 border-b border-black/10 pb-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pb-20">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                01 — Latest Thinking
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="max-w-212.5 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[60px]">
              Legal insight for a
              <span className="text-brown"> changing world.</span>
            </h2>
          </Reveal>

        </div>

        {/* Featured */}
        <Reveal>
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid border-b border-black/10 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20"
          >

            {/* Featured visual */}
            <div className="relative min-h-95 overflow-hidden bg-black p-8 sm:min-h-112.5 sm:p-10">

              <div
                className="absolute -right-24 -top-24 h-75 w-75 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110"
                aria-hidden="true"
              />

              <div
                className="absolute -right-8 -top-8 h-45 w-45 rounded-full border border-brown/40 transition-transform duration-700 group-hover:scale-125"
                aria-hidden="true"
              />

              <span
                className="absolute -bottom-8.75 right-4 text-[210px] font-semibold leading-none text-white/[0.035]"
                aria-hidden="true"
              >
                Z
              </span>

              <div className="relative z-10 flex h-full min-h-77.5 flex-col justify-between sm:min-h-92.5">

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-light-brown">
                  Featured Insight
                </span>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Zanan Legal Practitioners
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/30">
                    Legal Perspectives
                  </p>
                </div>

              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center py-8 lg:py-0">

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brown">
                  {featured.category}
                </span>

                <span className="h-1 w-1 rounded-full bg-black/20" />

                <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">
                  {featured.date}
                </span>

                <span className="h-1 w-1 rounded-full bg-black/20" />

                <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">
                  {featured.readTime}
                </span>
              </div>

              <h3 className="mt-7 max-w-175 text-[34px] font-medium leading-[1.15] tracking-[-0.035em] text-black transition-colors duration-300 group-hover:text-brown sm:text-[42px] lg:text-[48px]">
                {featured.title}
              </h3>

              <p className="mt-6 max-w-155 text-[14px] leading-7 text-black/50">
                {featured.excerpt}
              </p>

              <div className="mt-9 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-black">
                Read Insight

                <span className="flex h-10 w-10 items-center justify-center border border-black/15 text-brown transition-all duration-300 group-hover:border-brown group-hover:bg-brown group-hover:text-white">
                  <Icon
                    icon="solar:arrow-right-up-linear"
                    width="17"
                    height="17"
                  />
                </span>
              </div>

            </div>

          </Link>
        </Reveal>

        {/* All insights */}
        <div className="grid border-l border-t border-black/10 md:grid-cols-2">
          {articles.map((article, index) => (
            <Reveal
              key={article.id}
              delay={(index % 2) * 100}
              className="h-full"
            >
              <Link
                href={`/insights/${article.slug}`}
                className="group flex h-full min-h-100 flex-col justify-between border-b border-r border-black/10 p-7 transition-colors duration-500 hover:bg-black sm:p-9 lg:min-h-110"
              >

                <div className="flex items-start justify-between">

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-brown transition-colors duration-500 group-hover:text-light-brown">
                      {article.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-black/20 group-hover:bg-white/20" />

                    <span className="text-[9px] uppercase tracking-[0.14em] text-black/35 transition-colors duration-500 group-hover:text-white/35">
                      {article.date}
                    </span>
                  </div>

                  <span className="text-[10px] text-black/30 transition-colors duration-500 group-hover:text-white/30">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                </div>

                <div>

                  <span className="mb-7 block h-px w-9 bg-brown transition-all duration-500 group-hover:w-16" />

                  <h3 className="max-w-130 text-[27px] font-medium leading-[1.2] tracking-tight text-black transition-colors duration-500 group-hover:text-white sm:text-[32px]">
                    {article.title}
                  </h3>

                  <p className="mt-5 max-w-125 text-[13px] leading-6 text-black/50 transition-colors duration-500 group-hover:text-white/50">
                    {article.excerpt}
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-[9px] uppercase tracking-[0.15em] text-black/35 transition-colors duration-500 group-hover:text-white/35">
                      {article.readTime}
                    </span>

                    <Icon
                      icon="solar:arrow-right-up-linear"
                      width="19"
                      height="19"
                      className="text-brown transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-light-brown"
                    />

                  </div>

                </div>

              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}