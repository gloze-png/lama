import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import ContactCTA from "@/app/components/layout/home/ContactCTA";
import Reveal from "@/app/components/common/Reavel";

import {
  getInsight,
  insights,
} from "@/app/data/insights";

interface InsightPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;

  const insight = getInsight(slug);

  if (!insight) {
    return {
      title: "Insight",
    };
  }

  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default async function InsightPage({
  params,
}: InsightPageProps) {
  const { slug } = await params;

  const insight = getInsight(slug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>

        {/* ARTICLE HERO */}
        <section className="relative overflow-hidden bg-black pb-20 pt-37.5 text-white sm:pt-42.5 lg:pb-28 lg:pt-47.5">

          <div
            className="pointer-events-none absolute -right-42.5 top-12.5 h-125 w-125 rounded-full border border-white/6"
            aria-hidden="true"
          />

          <div className="zanan-container relative z-10">

            {/* Breadcrumb */}
            <Reveal direction="right">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.17em]">

                <Link
                  href="/"
                  className="text-white/35 transition-colors hover:text-light-brown"
                >
                  Home
                </Link>

                <Icon
                  icon="solar:arrow-right-linear"
                  width="13"
                  height="13"
                  className="text-white/20"
                />

                <Link
                  href="/insights"
                  className="text-white/35 transition-colors hover:text-light-brown"
                >
                  Insights
                </Link>

                <Icon
                  icon="solar:arrow-right-linear"
                  width="13"
                  height="13"
                  className="text-white/20"
                />

                <span className="text-light-brown">
                  {insight.category}
                </span>

              </div>
            </Reveal>

            <div className="grid gap-10 pt-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pt-20">

              <Reveal direction="right" delay={100}>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-light-brown">
                    {insight.category}
                  </span>

                  <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-white/35">
                    {insight.date}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-white/35">
                    {insight.readTime}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <h1 className="max-w-237.5 text-[42px] font-medium leading-[1.1] tracking-[-0.04em] text-white sm:text-[56px] lg:text-[68px] xl:text-[76px]">
                  {insight.title}
                </h1>
              </Reveal>

            </div>

          </div>
        </section>

        {/* ARTICLE BODY */}
        <article className="bg-white py-20 sm:py-24 lg:py-32">
          <div className="zanan-container">

            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

              {/* Sidebar */}
              <Reveal direction="right">
                <aside className="lg:sticky lg:top-30 lg:self-start">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brown">
                    Zanan Insights
                  </span>

                  <div className="mt-6 h-px w-10 bg-brown" />

                  <p className="mt-6 max-w-65 text-[12px] leading-6 text-black/40">
                    Legal perspectives and practical information from Zanan
                    Legal Practitioners.
                  </p>

                  <Link
                    href="/insights"
                    className="group mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-black transition-colors hover:text-brown"
                  >
                    All Insights

                    <Icon
                      icon="solar:arrow-left-linear"
                      width="16"
                      height="16"
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </Link>

                </aside>
              </Reveal>

              {/* Article */}
              <div className="max-w-195">

                <Reveal>
                  <p className="border-b border-black/10 pb-10 text-[21px] font-medium leading-[1.7] tracking-[-0.015em] text-black/75 sm:text-[24px]">
                    {insight.introduction}
                  </p>
                </Reveal>

                {insight.sections.map((section, index) => (
                  <Reveal
                    key={section.heading}
                    delay={Math.min(index * 80, 240)}
                  >
                    <section className="border-b border-black/10 py-10 sm:py-12">

                      <div className="mb-7 flex items-center gap-4">

                        <span className="text-[10px] font-semibold text-brown">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-6 bg-brown/50" />

                      </div>

                      <h2 className="text-[29px] font-medium leading-[1.2] tracking-tight text-black sm:text-[36px]">
                        {section.heading}
                      </h2>

                      <div className="mt-7 space-y-6">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-[15px] leading-8 text-black/60"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                    </section>
                  </Reveal>
                ))}

                {/* Disclaimer */}
                <Reveal>
                  <div className="mt-12 border-l-2 border-brown bg-off-white p-6 sm:p-8">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brown">
                      Important Notice
                    </p>

                    <p className="mt-4 text-[12px] leading-6 text-black/50">
                      This publication provides general information only and
                      does not constitute legal advice. Legal advice should be
                      obtained in relation to your specific circumstances.
                    </p>

                  </div>
                </Reveal>

              </div>

            </div>

          </div>
        </article>

        <ContactCTA />

      </main>

      <Footer />
    </>
  );
}