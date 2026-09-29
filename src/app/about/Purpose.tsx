import { Icon } from "@iconify/react";

import Reveal from "@/app/components/common/Reavel";

const values = [
  "Integrity",
  "Excellence",
  "Clarity",
  "Responsibility",
];

export default function Purpose() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-32">

      <div className="zanan-container">

        {/* HEADER */}
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pb-20">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-light-brown">
                03 — Our Purpose
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="max-w-212.5 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-white sm:text-[48px] lg:text-[60px]">
              Guided by purpose.
              <span className="text-light-brown"> Defined by principle.</span>
            </h2>
          </Reveal>

        </div>

        {/* MISSION / VISION */}
        <div className="grid lg:grid-cols-2">

          <Reveal direction="right">
            <div className="border-b border-white/10 py-12 lg:border-r lg:pr-14">

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-light-brown">
                  Our Mission
                </span>

                <span className="text-[11px] text-white/20">
                  01
                </span>
              </div>

              <p className="mt-10 max-w-137.5 text-[25px] leading-normal tracking-[-0.02em] text-white/80 sm:text-[29px]">
                To provide thoughtful and practical legal counsel that helps
                our clients understand their options, protect their interests
                and pursue their objectives with confidence.
              </p>

            </div>
          </Reveal>

          <Reveal direction="left" delay={100}>
            <div className="border-b border-white/10 py-12 lg:pl-14">

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-light-brown">
                  Our Vision
                </span>

                <span className="text-[11px] text-white/20">
                  02
                </span>
              </div>

              <p className="mt-10 max-w-137.5 text-[25px] leading-normal tracking-[-0.02em] text-white/80 sm:text-[29px]">
                To build a legal practice recognised for strategic thinking,
                professional integrity and the quality of the relationships we
                establish with our clients.
              </p>

            </div>
          </Reveal>

        </div>

        {/* VALUES */}
        <div className="pt-14 lg:pt-20">

          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-light-brown">
              Our Values
            </p>
          </Reveal>

          <div className="mt-8">
            {values.map((value, index) => (
              <Reveal
                key={value}
                delay={index * 80}
              >
                <div className="group flex items-center justify-between border-t border-white/10 py-6 last:border-b">

                  <div className="flex items-center gap-6 sm:gap-10">

                    <span className="text-[10px] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-[27px] font-medium tracking-tight text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-light-brown sm:text-[34px]">
                      {value}
                    </h3>

                  </div>

                  <Icon
                    icon="solar:arrow-right-linear"
                    width="20"
                    height="20"
                    className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-light-brown"
                  />

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-16 right-0 hidden select-none text-[220px] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] xl:block"
        aria-hidden="true"
      >
        ZANAN
      </div>

    </section>
  );
}