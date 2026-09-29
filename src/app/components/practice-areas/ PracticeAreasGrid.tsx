import Link from "next/link";
import { Icon } from "@iconify/react";

import Reveal from "@/app/components/common/Reavel";
import { practiceAreas } from "@/app/data/practiceAreas";

export default function PracticeAreasGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        {/* INTRO */}
        <div className="grid gap-10 border-b border-black/10 pb-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pb-20">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                01 — What We Do
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <h2 className="max-w-225 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[60px]">
                Focused expertise.
                <span className="text-brown">
                  {" "}Practical legal solutions.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-162.5 text-[15px] leading-7 text-black/55">
                Every legal matter comes with its own circumstances and
                objectives. Our role is to understand those circumstances,
                identify the issues that matter and provide clear guidance on
                the way forward.
              </p>
            </Reveal>
          </div>

        </div>

        {/* PRACTICE AREA CARDS */}
        <div className="grid border-l border-t border-black/10 md:grid-cols-2">
          {practiceAreas.map((area, index) => (
            <Reveal
              key={area.id}
              delay={(index % 2) * 100}
              className="h-full"
            >
              <Link
                href={`/practice-areas/${area.slug}`}
                className="group relative flex h-full min-h-120 flex-col justify-between overflow-hidden border-b border-r border-black/10 p-7 transition-colors duration-500 hover:bg-black sm:p-10 lg:min-h-130"
              >

                {/* Top */}
                <div className="flex items-start justify-between">

                  <span className="text-[11px] font-medium text-brown transition-colors duration-500 group-hover:text-light-brown">
                    {area.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center border border-black/10 text-brown transition-all duration-500 group-hover:rotate-45 group-hover:border-brown group-hover:bg-brown group-hover:text-white">
                    <Icon
                      icon="solar:arrow-right-up-linear"
                      width="20"
                      height="20"
                    />
                  </div>

                </div>

                {/* Decorative number */}
                <span
                  className="pointer-events-none absolute right-5 top-22.5 text-[140px] font-semibold leading-none text-black/2.5 transition-colors duration-500 group-hover:text-white/2.5 sm:text-[180px]"
                  aria-hidden="true"
                >
                  {area.number}
                </span>

                {/* Content */}
                <div className="relative z-10">

                  <span className="mb-7 block h-px w-10 bg-brown transition-all duration-500 group-hover:w-20" />

                  <h3 className="max-w-130 text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-black transition-colors duration-500 group-hover:text-white sm:text-[36px]">
                    {area.title}
                  </h3>

                  <p className="mt-5 max-w-125 text-[14px] leading-7 text-black/50 transition-colors duration-500 group-hover:text-white/55">
                    {area.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-black transition-colors duration-500 group-hover:text-light-brown">
                    Explore Practice

                    <Icon
                      icon="solar:arrow-right-linear"
                      width="16"
                      height="16"
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>

                </div>

              </Link>
            </Reveal>
          ))}

          {/* Closing card */}
          <Reveal delay={100} className="h-full">
            <div className="flex min-h-120 h-full flex-col justify-between border-b border-r border-black/10 bg-off-white p-7 sm:p-10 lg:min-h-130">

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brown">
                Need Guidance?
              </span>

              <div>
                <h3 className="max-w-120 text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-black sm:text-[36px]">
                  Not sure which practice area your matter falls under?
                </h3>

                <p className="mt-5 max-w-117.5 text-[14px] leading-7 text-black/50">
                  Tell us about your legal needs and our team can help you
                  determine the appropriate next step.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-4 bg-brown px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-dark-brown"
                >
                  Speak With Us

                  <Icon
                    icon="solar:arrow-right-up-linear"
                    width="17"
                    height="17"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}