import Link from "next/link";
import { Icon } from "@iconify/react";

import Reveal from "@/app/components/common/Reavel";
import { insights } from "@/app/data/insights";

export default function Insights() {
  const featured = insights[0];
  const remainingInsights = insights.slice(1, 3);

  return (
    <section className="relative overflow-hidden bg-off-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="grid gap-10 border-b border-black/10 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:pb-16">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                04 — Insights
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal delay={120}>
              <h2 className="max-w-212.5 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[60px]">
                Perspectives on law,
                <span className="text-brown">
                  {" "}business and change.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-155 text-[15px] leading-7 text-black/55">
                Explore legal perspectives, developments and practical insights
                designed to help individuals and businesses better understand
                the issues affecting them.
              </p>
            </Reveal>
          </div>

        </div>

        {/* =========================
            INSIGHTS CONTENT
        ========================== */}
        <div className="grid gap-12 pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:pt-16">

          {/* =========================
              FEATURED ARTICLE
          ========================== */}
          <Reveal direction="right">
            <article className="group h-full">
              <Link
                href={`/insights/${featured.slug}`}
                className="block h-full"
              >
                <div className="relative flex min-h-105 h-full overflow-hidden bg-black p-7 sm:min-h-125 sm:p-10 lg:min-h-140">

                  {/* Decorative circle */}
                  <div
                    className="absolute -right-28 -top-28 h-82.5 w-82.5 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110"
                    aria-hidden="true"
                  />

                  {/* Brown circle */}
                  <div
                    className="absolute -right-10 -top-10 h-50 w-50 rounded-full border border-brown/40 transition-transform duration-700 group-hover:scale-125"
                    aria-hidden="true"
                  />

                  {/* Decorative Z */}
                  <span
                    className="pointer-events-none absolute -bottom-10 right-4 select-none text-[220px] font-semibold leading-none text-white/[0.035]"
                    aria-hidden="true"
                  >
                    Z
                  </span>

                  {/* Content */}
                  <div className="relative z-10 flex w-full flex-col justify-between">

                    {/* Top */}
                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-light-brown">
                        Featured Insight
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-all duration-300 group-hover:border-brown group-hover:bg-brown">
                        <Icon
                          icon="solar:arrow-right-up-linear"
                          width="19"
                          height="19"
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>

                    </div>

                    {/* Bottom */}
                    <div>

                      {/* Meta */}
                      <div className="mb-5 flex flex-wrap items-center gap-3">

                        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-light-brown">
                          {featured.category}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-white/30" />

                        <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                          {featured.date}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-white/30" />

                        <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                          {featured.readTime}
                        </span>

                      </div>

                      {/* Title */}
                      <h3 className="max-w-175 text-[29px] font-medium leading-[1.2] tracking-tight text-white sm:text-[38px] lg:text-[43px]">
                        {featured.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-5 max-w-155 text-[14px] leading-7 text-white/50">
                        {featured.excerpt}
                      </p>

                      {/* Read */}
                      <div className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-light-brown">
                        Read Insight

                        <Icon
                          icon="solar:arrow-right-linear"
                          width="16"
                          height="16"
                          className="transition-transform duration-300 group-hover:translate-x-2"
                        />
                      </div>

                    </div>

                  </div>
                </div>
              </Link>
            </article>
          </Reveal>

          {/* =========================
              OTHER ARTICLES
          ========================== */}
          <div className="flex flex-col">

            {remainingInsights.map((article, index) => (
              <Reveal
                key={article.id}
                direction="left"
                delay={120 + index * 120}
                className="flex flex-1"
              >
                <article
                  className={`group flex w-full flex-1 ${
                    index !== remainingInsights.length - 1
                      ? "border-b border-black/10"
                      : ""
                  }`}
                >
                  <Link
                    href={`/insights/${article.slug}`}
                    className="flex w-full flex-col justify-between py-8 first:pt-0 lg:py-10"
                  >

                    <div>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-3">

                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brown">
                          {article.category}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-black/20" />

                        <span className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                          {article.date}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-black/20" />

                        <span className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                          {article.readTime}
                        </span>

                      </div>

                      {/* Title */}
                      <h3 className="mt-5 max-w-125 text-[25px] font-medium leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-brown sm:text-[30px]">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-4 max-w-120 text-[13px] leading-6 text-black/50">
                        {article.excerpt}
                      </p>

                    </div>

                    {/* Read article */}
                    <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">

                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black">
                        Read Insight
                      </span>

                      <Icon
                        icon="solar:arrow-right-up-linear"
                        width="18"
                        height="18"
                        className="text-brown transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </div>

                  </Link>
                </article>
              </Reveal>
            ))}

          </div>

        </div>

        {/* =========================
            VIEW ALL INSIGHTS
        ========================== */}
        <Reveal delay={150}>
          <div className="mt-14 flex justify-end border-t border-black/10 pt-8">

            <Link
              href="/insights"
              className="group inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:text-brown"
            >
              Explore All Insights

              <span className="flex h-10 w-10 items-center justify-center border border-black/15 transition-all duration-300 group-hover:border-brown group-hover:bg-brown group-hover:text-white">
                <Icon
                  icon="solar:arrow-right-up-linear"
                  width="18"
                  height="18"
                />
              </span>

            </Link>

          </div>
        </Reveal>

      </div>
    </section>
  );
}