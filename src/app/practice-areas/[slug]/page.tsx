import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import ContactCTA from "@/app/components/layout/home/ContactCTA";
import Reveal from "@/app/components/common/Reavel";

import {
  getPracticeArea,
  practiceAreas,
} from "@/app/data/practiceAreas";

interface PracticeAreaPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: PracticeAreaPageProps): Promise<Metadata> {
  const { slug } = await params;

  const area = getPracticeArea(slug);

  if (!area) {
    return {
      title: "Practice Area",
    };
  }

  return {
    title: area.title,
    description: area.description,
  };
}

export default async function PracticeAreaPage({
  params,
}: PracticeAreaPageProps) {
  const { slug } = await params;

  const area = getPracticeArea(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden bg-black pb-20 pt-37.5 text-white sm:pt-42.5 lg:pb-28 lg:pt-47.5">

          <div
            className="pointer-events-none absolute -right-42.5 top-12.5 h-125 w-125 rounded-full border border-white/6"
            aria-hidden="true"
          />

          <div className="zanan-container relative z-10">

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
                  href="/practice-areas"
                  className="text-white/35 transition-colors hover:text-light-brown"
                >
                  Practice Areas
                </Link>

                <Icon
                  icon="solar:arrow-right-linear"
                  width="13"
                  height="13"
                  className="text-white/20"
                />

                <span className="text-light-brown">
                  {area.shortTitle}
                </span>

              </div>
            </Reveal>

            <div className="grid gap-10 pt-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pt-20">

              <Reveal direction="right" delay={100}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-light-brown">
                  Practice Area {area.number}
                </span>
              </Reveal>

              <div>
                <Reveal delay={150}>
                  <h1 className="max-w-237.5 text-[48px] font-medium leading-[1.04] tracking-[-0.045em] text-white sm:text-[62px] lg:text-[78px]">
                    {area.title}
                  </h1>
                </Reveal>

                <Reveal delay={250}>
                  <p className="mt-8 max-w-170 text-[16px] leading-8 text-white/55">
                    {area.description}
                  </p>
                </Reveal>
              </div>

            </div>
          </div>

        </section>

        {/* OVERVIEW */}
        <section className="bg-white py-20 sm:py-24 lg:py-32">
          <div className="zanan-container">

            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

              <Reveal direction="right">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-brown" />

                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                      Overview
                    </span>
                  </div>
                </div>
              </Reveal>

              <div>

                <Reveal delay={100}>
                  <h2 className="max-w-212.5 text-[36px] font-medium leading-[1.15] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[58px]">
                    Strategic advice built around
                    <span className="text-brown"> your objectives.</span>
                  </h2>
                </Reveal>

                <Reveal delay={200}>
                  <p className="mt-8 max-w-187.5 text-[17px] leading-8 text-black/60">
                    {area.intro}
                  </p>
                </Reveal>

              </div>

            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-off-white py-20 sm:py-24 lg:py-32">
          <div className="zanan-container">

            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

              <Reveal direction="right">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brown" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                    What We Assist With
                  </span>
                </div>
              </Reveal>

              <div>
                {area.services.map((service, index) => (
                  <Reveal
                    key={service}
                    delay={index * 70}
                  >
                    <div className="group flex items-center justify-between border-t border-black/10 py-7 last:border-b">

                      <div className="flex items-center gap-6">

                        <span className="text-[10px] text-brown">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-[22px] font-medium tracking-[-0.02em] text-black transition-all duration-300 group-hover:translate-x-2 group-hover:text-brown sm:text-[27px]">
                          {service}
                        </h3>

                      </div>

                      <Icon
                        icon="solar:arrow-right-linear"
                        width="18"
                        height="18"
                        className="text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brown"
                      />

                    </div>
                  </Reveal>
                ))}
              </div>

            </div>

          </div>
        </section>

        <ContactCTA />

      </main>

      <Footer />
    </>
  );
}