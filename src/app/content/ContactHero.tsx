import Link from "next/link";
import { Icon } from "@iconify/react";

import Reveal from "@/app/components/common/Reavel";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-black pb-16 pt-37.5 text-white sm:pb-20 sm:pt-42.5 lg:pb-24 lg:pt-47.5">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -right-45 top-7.5 h-130 w-130 rounded-full border border-white/6"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-10 top-45 h-70 w-70 rounded-full border border-brown/25"
        aria-hidden="true"
      />

      <div className="zanan-container relative z-10">
        {/* Breadcrumb */}
        <Reveal direction="right">
          <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em]">
            <Link
              href="/"
              className="text-white/40 transition-colors duration-300 hover:text-light-brown"
            >
              Home
            </Link>

            <Icon
              icon="solar:arrow-right-linear"
              width="14"
              height="14"
              className="text-white/25"
            />

            <span className="text-light-brown">
              Contact
            </span>
          </div>
        </Reveal>

        {/* Hero content */}
        <div className="grid gap-10 pb-16 pt-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pb-24 lg:pt-20">
          <Reveal direction="right" delay={100}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-light-brown">
              Contact Zanan
            </span>
          </Reveal>

          <div>
            <Reveal delay={150}>
              <h1 className="max-w-237.5 text-[48px] font-medium leading-[1.04] tracking-[-0.045em] text-white sm:text-[64px] lg:text-[78px] xl:text-[88px]">
                Let&apos;s start with
                <span className="text-light-brown">
                  {" "}a conversation.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-8 max-w-162.5 text-[15px] leading-7 text-white/55 sm:text-base">
                Tell us about your legal matter and how we may be able to
                assist. Our team will review your enquiry and respond through
                the appropriate channel.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Hero bottom */}
        <Reveal delay={320}>
          <div className="flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
              Zanan Legal Practitioners
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brown" />

              <span className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                We&apos;re ready to listen
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className="pointer-events-none absolute -bottom-12.5 left-0 hidden select-none text-[200px] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] xl:block"
        aria-hidden="true"
      >
        CONTACT
      </div>
    </section>
  );
}