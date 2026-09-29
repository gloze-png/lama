import Reveal from "@/app/components/common/Reavel";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the circumstances surrounding your matter, your priorities and the outcome you want to achieve.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "We identify the relevant legal considerations, evaluate available options and consider the practical implications.",
  },
  {
    number: "03",
    title: "Strategise",
    description:
      "We develop an approach suited to your objectives, circumstances and the legal issues involved.",
  },
  {
    number: "04",
    title: "Act",
    description:
      "We work with you to implement the agreed strategy while keeping communication clear throughout the process.",
  },
];

export default function PracticeApproach() {
  return (
    <section className="relative overflow-hidden bg-off-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                02 — How We Work
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <h2 className="max-w-212.5 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[60px]">
                A clear process from
                <span className="text-brown"> question to action.</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-155 text-[15px] leading-7 text-black/55">
                Our approach is designed to make complex legal matters easier
                to understand while keeping our advice focused on practical
                outcomes.
              </p>
            </Reveal>
          </div>

        </div>

        {/* Steps */}
        <div className="mt-16 lg:ml-[33%] lg:mt-24">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 80}
            >
              <div className="group grid gap-5 border-t border-black/10 py-8 last:border-b sm:grid-cols-[80px_220px_1fr] sm:items-start lg:py-10">

                <span className="text-[10px] font-semibold text-brown">
                  {step.number}
                </span>

                <h3 className="text-[25px] font-medium tracking-tight text-black transition-all duration-300 group-hover:translate-x-2 group-hover:text-brown">
                  {step.title}
                </h3>

                <p className="max-w-137.5 text-[14px] leading-7 text-black/50">
                  {step.description}
                </p>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}