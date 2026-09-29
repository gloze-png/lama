import Reveal from "@/app/components/common/Reavel";

export default function InsightsStatement() {
  return (
    <section className="relative overflow-hidden bg-off-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                02 — Our Perspective
              </span>
            </div>
          </Reveal>

          <div>

            <Reveal delay={100}>
              <p className="max-w-225 text-[30px] font-medium leading-[1.35] tracking-[-0.03em] text-black sm:text-[40px] lg:text-[50px]">
                Understanding the law should help you make
                <span className="text-brown"> better-informed decisions.</span>
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-2">

              <Reveal delay={180}>
                <p className="text-[14px] leading-7 text-black/55">
                  Our insights explore legal and commercial issues in a way
                  designed to make important developments easier to understand.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <p className="text-[14px] leading-7 text-black/55">
                  These materials provide general information and should not be
                  treated as legal advice for a particular matter or
                  circumstance.
                </p>
              </Reveal>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}