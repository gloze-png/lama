import { Icon } from "@iconify/react";

import Reveal from "@/app/components/common/Reavel";

const reasons = [
  {
    number: "01",
    title: "We understand before we advise.",
    description:
      "Every matter begins with listening carefully and understanding the circumstances, priorities and objectives involved.",
  },
  {
    number: "02",
    title: "We communicate clearly.",
    description:
      "Legal issues can be complex. We focus on making our advice understandable so clients can make informed decisions.",
  },
  {
    number: "03",
    title: "We think strategically.",
    description:
      "We consider both the immediate legal issue and the broader implications of the decisions available to our clients.",
  },
  {
    number: "04",
    title: "We focus on practical outcomes.",
    description:
      "Our work is directed toward solutions that are legally sound, commercially sensible and relevant to each client's needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                04 — Why Zanan
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="max-w-212.5 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[60px]">
              A considered approach to
              <span className="text-brown"> every matter.</span>
            </h2>
          </Reveal>

        </div>

        {/* Reasons */}
        <div className="mt-16 lg:ml-[34%] lg:mt-24">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.number}
              delay={index * 80}
            >
              <div className="group grid gap-5 border-t border-black/10 py-8 last:border-b sm:grid-cols-[70px_1fr_50px] sm:items-start lg:py-10">

                <span className="text-[10px] font-semibold tracking-[0.15em] text-brown">
                  {reason.number}
                </span>

                <div>
                  <h3 className="text-[24px] font-medium tracking-tight text-black transition-colors duration-300 group-hover:text-brown sm:text-[30px]">
                    {reason.title}
                  </h3>

                  <p className="mt-4 max-w-150 text-[14px] leading-7 text-black/50">
                    {reason.description}
                  </p>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center border border-black/10 text-brown transition-all duration-300 group-hover:border-brown group-hover:bg-brown group-hover:text-white sm:flex">
                  <Icon
                    icon="solar:arrow-right-up-linear"
                    width="18"
                    height="18"
                  />
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}