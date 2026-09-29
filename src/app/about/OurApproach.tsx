import { Icon } from "@iconify/react";

import Reveal from "@/app/components/common/Reavel";

const approach = [
  {
    number: "01",
    icon: "solar:chat-round-line-linear",
    title: "We Listen",
    description:
      "We begin by understanding the matter, your priorities and the outcome you are working toward.",
  },
  {
    number: "02",
    icon: "solar:document-text-linear",
    title: "We Analyse",
    description:
      "We examine the relevant legal and practical considerations before determining the appropriate strategy.",
  },
  {
    number: "03",
    icon: "solar:map-arrow-right-linear",
    title: "We Advise",
    description:
      "We explain your options clearly and provide guidance designed around your circumstances.",
  },
  {
    number: "04",
    icon: "solar:shield-check-linear",
    title: "We Act",
    description:
      "We work to implement the agreed strategy while protecting your interests throughout the process.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-off-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                02 — Our Approach
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <h2 className="max-w-212.5 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[60px]">
                Clear thinking at every
                <span className="text-brown"> stage.</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-155 text-[15px] leading-7 text-black/55">
                Our approach is structured around understanding the issue,
                evaluating the options and developing a practical strategy
                suited to each client.
              </p>
            </Reveal>
          </div>

        </div>

        {/* Process */}
        <div className="mt-16 grid border-l border-t border-black/10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {approach.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 120}
              className="h-full"
            >
              <div className="group relative h-full min-h-92.5 border-b border-r border-black/10 p-7 transition-colors duration-500 hover:bg-black sm:p-8">

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-black/35 transition-colors duration-500 group-hover:text-white/40">
                    {item.number}
                  </span>

                  <Icon
                    icon={item.icon}
                    width="24"
                    height="24"
                    className="text-brown"
                  />
                </div>

                <div className="absolute bottom-8 left-7 right-7 sm:left-8 sm:right-8">

                  <span className="mb-6 block h-px w-8 bg-brown transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-[23px] font-medium tracking-[-0.02em] text-black transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-black/50 transition-colors duration-500 group-hover:text-white/55">
                    {item.description}
                  </p>

                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}