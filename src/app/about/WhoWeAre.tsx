import Reveal from "@/app/components/common/Reavel";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          {/* LEFT */}
          <Reveal direction="right">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brown" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                  01 — Who We Are
                </span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <div>

            <Reveal delay={100}>
              <h2 className="max-w-225 text-[36px] font-medium leading-[1.18] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[58px]">
                Understanding the law is only the beginning.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-2">

              <Reveal delay={180}>
                <p className="text-[15px] leading-7 text-black/60">
                  Zanan Legal Practitioners provides legal counsel designed
                  around the needs and objectives of our clients. We approach
                  each matter by first understanding the circumstances,
                  identifying the legal and commercial issues involved and
                  determining a clear path forward.
                </p>
              </Reveal>

              <Reveal delay={280}>
                <p className="text-[15px] leading-7 text-black/60">
                  Whether advising individuals, businesses or institutions, our
                  focus is on delivering advice that is understandable,
                  strategic and relevant to the decisions our clients need to
                  make.
                </p>
              </Reveal>

            </div>

          </div>
        </div>

        {/* Statement */}
        <Reveal delay={150}>
          <div className="mt-20 border-y border-black/10 py-12 sm:py-16 lg:mt-28">
            <p className="max-w-275 text-[29px] font-medium leading-[1.35] tracking-tight text-black sm:text-[38px] lg:text-[46px]">
              We believe strong legal counsel should provide more than answers.
              It should provide
              <span className="text-brown"> direction, confidence and clarity.</span>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}