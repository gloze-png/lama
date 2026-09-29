import { Icon } from "@iconify/react";
import Reveal from "@/app/components/common/Reavel";

const strengths = [
  {
    number: "01",
    icon: "solar:target-linear",
    title: "Strategic Thinking",
    description:
      "We look beyond immediate legal questions to understand the wider commercial and personal objectives behind every matter.",
  },
  {
    number: "02",
    icon: "solar:users-group-rounded-linear",
    title: "Client Focused",
    description:
      "Every engagement begins with understanding our client's priorities, concerns and desired outcomes.",
  },
  {
    number: "03",
    icon: "solar:shield-check-linear",
    title: "Professional Integrity",
    description:
      "We approach our work with responsibility, discretion and a commitment to maintaining high professional standards.",
  },
  {
    number: "04",
    icon: "solar:lightbulb-linear",
    title: "Practical Solutions",
    description:
      "Our advice is designed to be clear, useful and responsive to the realities our clients face.",
  },
];

export default function WhyZanan() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                03 — Why Zanan
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal delay={120}>
              <h2 className="max-w-200 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[60px]">
                More than legal advice.
                <span className="text-brown">
                  {" "}A strategic partnership.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-7 max-w-150 text-[15px] leading-7 text-black/55">
                We believe effective legal representation begins with
                understanding our clients, their challenges and the outcomes
                that matter to them.
              </p>
            </Reveal>
          </div>

        </div>

        {/* CARDS */}
        <div className="mt-16 grid border-l border-t border-black/10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 120}
              className="h-full"
            >
              <div className="group relative h-full min-h-90 border-b border-r border-black/10 p-7 transition-all duration-500 hover:bg-black sm:p-8">

                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-black/35 transition-colors duration-500 group-hover:text-white/40">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-black/10 text-brown transition-all duration-500 group-hover:border-brown group-hover:bg-brown group-hover:text-white">
                    <Icon
                      icon={item.icon}
                      width="21"
                      height="21"
                    />
                  </div>
                </div>

                <div className="absolute bottom-8 left-7 right-7 sm:left-8 sm:right-8">
                  <span className="mb-6 block h-px w-8 bg-brown transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-[21px] font-medium tracking-[-0.02em] text-black transition-colors duration-500 group-hover:text-white">
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