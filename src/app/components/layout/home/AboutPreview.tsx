import Link from "next/link";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/common/Reavel";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-off-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        {/* TOP */}
        <div className="grid gap-10 border-b border-black/10 pb-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:pb-20">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                01 — About The Firm
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="max-w-212.5 text-[36px] font-medium leading-[1.15] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[58px]">
              Legal solutions built around
              <span className="text-brown"> clarity, strategy </span>
              and your objectives.
            </h2>
          </Reveal>

        </div>

        {/* CONTENT */}
        <div className="grid gap-12 pt-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:pt-20">

          <Reveal direction="right" delay={100}>
            <div className="flex h-full flex-col justify-between">
              <p className="max-w-75 text-sm leading-7 text-black/50">
                We approach every matter with careful attention, commercial
                awareness and a clear understanding of our clients&apos;
                objectives.
              </p>

              <div className="mt-10 hidden lg:block">
                <span className="text-[110px] font-medium leading-none text-brown/10">
                  Z
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={180}>
              <p className="max-w-190 text-[20px] leading-[1.7] text-black/75 sm:text-[22px]">
                Zanan Legal Practitioners is committed to providing thoughtful
                and dependable legal counsel to individuals, businesses and
                institutions. We combine legal knowledge with a practical
                understanding of the challenges our clients face.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-6 max-w-180 text-[15px] leading-7 text-black/55">
                Our approach is built around understanding the matter before us,
                identifying the issues that matter most and developing solutions
                that protect our clients&apos; interests while supporting their
                broader goals.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-4 border-b border-black pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-black transition-colors duration-300 hover:border-brown hover:text-brown"
              >
                Discover Our Firm

                <Icon
                  icon="solar:arrow-right-up-linear"
                  width="18"
                  height="18"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Reveal>
          </div>

        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-10 right-0 hidden select-none text-[180px] font-semibold leading-none tracking-[-0.07em] text-black/2.5 xl:block"
        aria-hidden="true"
      >
        ZANAN
      </div>
    </section>
  );
}