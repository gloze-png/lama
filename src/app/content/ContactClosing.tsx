import { Icon } from "@iconify/react";

import Reveal from "@/app/components/common/Reavel";

const points = [
  {
    icon: "solar:chat-round-line-linear",
    title: "Start with a conversation",
    description:
      "Tell us about your matter and the assistance you are looking for.",
  },
  {
    icon: "solar:document-text-linear",
    title: "We review your enquiry",
    description:
      "The information you provide helps us understand the nature of your request.",
  },
  {
    icon: "solar:arrow-right-up-linear",
    title: "Determine the next step",
    description:
      "Where appropriate, the firm can discuss the next steps with you.",
  },
];

export default function ContactClosing() {
  return (
    <section className="relative overflow-hidden bg-off-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                02 — What Happens Next
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="max-w-212.5 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[60px]">
              A straightforward way to
              <span className="text-brown">
                {" "}begin.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid border-l border-t border-black/10 md:grid-cols-3 lg:mt-24">
          {points.map((point, index) => (
            <Reveal
              key={point.title}
              delay={index * 120}
              className="h-full"
            >
              <div className="group h-full min-h-80 border-b border-r border-black/10 p-7 transition-colors duration-500 hover:bg-black sm:p-8">

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium text-brown">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-black/10 text-brown transition-all duration-500 group-hover:border-brown group-hover:bg-brown group-hover:text-white">
                    <Icon
                      icon={point.icon}
                      width="20"
                      height="20"
                    />
                  </div>
                </div>

                <div className="mt-20">
                  <span className="mb-6 block h-px w-8 bg-brown transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-[21px] font-medium tracking-[-0.02em] text-black transition-colors duration-500 group-hover:text-white">
                    {point.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-black/50 transition-colors duration-500 group-hover:text-white/55">
                    {point.description}
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