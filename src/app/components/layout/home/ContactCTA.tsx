import Link from "next/link";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/common/Reavel";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-brown text-white">

      {/* DECORATION */}
      <div
        className="pointer-events-none absolute -right-30 -top-45 h-125 w-125 rounded-full border border-white/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-7.5 -top-20 h-75 w-75 rounded-full border border-white/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-42.5 -left-42.5 h-100 w-100 rounded-full border border-white/10"
        aria-hidden="true"
      />

      <div className="zanan-container relative z-10">

        <div className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-32">

          {/* LEFT */}
          <Reveal direction="right">
            <div className="flex h-full flex-col justify-between">

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-white/60" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Start A Conversation
                </span>
              </div>

              <div className="mt-12 hidden lg:block">
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                  Zanan Legal Practitioners
                </span>
              </div>

            </div>
          </Reveal>

          {/* RIGHT */}
          <div>

            <Reveal>
              <h2 className="max-w-225 text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-[55px] lg:text-[68px] xl:text-[76px]">
                Have a legal matter
                <br />

                <span className="text-white/55">
                  you&apos;d like to discuss?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-7 max-w-150 text-[15px] leading-7 text-white/70 sm:text-base">
                Speak with our team about your legal needs and discover how
                Zanan Legal Practitioners can provide clear, strategic and
                practical guidance.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-5">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-5 bg-black px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Contact Our Team

                  <Icon
                    icon="solar:arrow-right-up-linear"
                    width="18"
                    height="18"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="/practice-areas"
                  className="group inline-flex items-center gap-3 px-2 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
                >
                  Explore Our Expertise

                  <Icon
                    icon="solar:arrow-right-linear"
                    width="18"
                    height="18"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>
            </Reveal>

          </div>
        </div>

        {/* BOTTOM */}
        <Reveal delay={150}>
          <div className="flex flex-col gap-5 border-t border-white/20 py-7 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[11px] leading-5 text-white/50">
              Strategic legal counsel. Practical solutions.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white" />

              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/70">
                We&apos;re ready to listen
              </span>
            </div>

          </div>
        </Reveal>

      </div>

      <div
        className="pointer-events-none absolute -bottom-10 right-0 hidden select-none text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.035] xl:block"
        aria-hidden="true"
      >
        ZANAN
      </div>

    </section>
  );
}