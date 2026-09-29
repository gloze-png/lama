"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/common/Reavel";

const practiceAreas = [
  {
    id: 1,
    number: "01",
    title: "Corporate & Commercial Law",
    description:
      "Providing practical legal guidance to businesses on commercial transactions, corporate structures, agreements and regulatory matters.",
  },
  {
    id: 2,
    number: "02",
    title: "Dispute Resolution",
    description:
      "Representing and advising clients in disputes while pursuing effective strategies through litigation, negotiation and alternative dispute resolution.",
  },
  {
    id: 3,
    number: "03",
    title: "Real Estate & Property",
    description:
      "Supporting clients across property transactions, documentation, development, ownership and other real estate matters.",
  },
  {
    id: 4,
    number: "04",
    title: "Banking & Finance",
    description:
      "Advising businesses, institutions and individuals on financing transactions, financial arrangements and related legal matters.",
  },
  {
    id: 5,
    number: "05",
    title: "Intellectual Property",
    description:
      "Helping clients protect, manage and commercialise valuable intellectual property and business assets.",
  },
];

export default function PracticeAreas() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-32">
      <div className="zanan-container">

        {/* HEADER */}
        <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:pb-16">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-light-brown">
                02 — Our Expertise
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal delay={120}>
              <h2 className="max-w-200 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-white sm:text-[48px] lg:text-[60px]">
                Legal expertise for
                <span className="text-light-brown"> complex matters.</span>
              </h2>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-150 text-[15px] leading-7 text-white/50">
                We provide focused legal guidance across key areas of practice,
                helping our clients understand their options and make informed
                decisions.
              </p>
            </Reveal>
          </div>

        </div>

        {/* PRACTICE AREAS */}
        <div className="pt-8">
          {practiceAreas.map((area, index) => {
            const active = activeId === area.id;

            return (
              <Reveal
                key={area.id}
                delay={index * 80}
                direction="up"
              >
                <div
                  onMouseEnter={() => setActiveId(area.id)}
                  className="group border-b border-white/15"
                >
                  <div className="grid cursor-pointer gap-5 py-7 transition-all duration-500 sm:py-8 lg:grid-cols-[80px_1fr_420px_50px] lg:items-center">

                    <span
                      className={`text-[11px] font-medium transition-colors duration-300 ${
                        active ? "text-light-brown" : "text-white/35"
                      }`}
                    >
                      {area.number}
                    </span>

                    <h3
                      className={`text-[25px] font-medium tracking-[-0.02em] transition-all duration-300 sm:text-[30px] lg:text-[34px] ${
                        active
                          ? "translate-x-2 text-light-brown"
                          : "text-white"
                      }`}
                    >
                      {area.title}
                    </h3>

                    <p
                      className={`max-w-100 text-[13px] leading-6 transition-all duration-500 ${
                        active
                          ? "translate-y-0 text-white/60 opacity-100"
                          : "translate-y-2 text-white/40 opacity-100 lg:opacity-0"
                      }`}
                    >
                      {area.description}
                    </p>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "rotate-45 border-brown bg-brown text-white"
                          : "border-white/20 text-white/50"
                      }`}
                    >
                      <Icon
                        icon="solar:arrow-right-linear"
                        width="18"
                        height="18"
                      />
                    </div>

                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-end">
            <Link
              href="/practice-areas"
              className="group inline-flex items-center gap-4 border-b border-white/40 pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-light-brown hover:text-light-brown"
            >
              View All Practice Areas

              <Icon
                icon="solar:arrow-right-up-linear"
                width="18"
                height="18"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </Reveal>

      </div>

      <div
        className="pointer-events-none absolute -bottom-20 -left-10 select-none text-[220px] font-semibold leading-none tracking-[-0.08em] text-white/2"
        aria-hidden="true"
      >
        LAW
      </div>
    </section>
  );
}