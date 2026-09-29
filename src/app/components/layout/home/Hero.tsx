import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-[90px]">
      <div className="zanan-container">
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-0">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            {/* Small heading */}
            <div className="animate-fade-up mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                Zanan Legal Practitioners
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-[720px] text-[46px] font-medium leading-[1.05] tracking-[-0.04em] text-black sm:text-[60px] lg:text-[72px] xl:text-[82px]">
              <span className="animate-fade-up block">
                Strategic
              </span>

              <span className="animate-fade-up block [animation-delay:150ms]">
                Legal Counsel.
              </span>

              <span className="animate-fade-up block text-brown [animation-delay:300ms]">
                Lasting Solutions.
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-up mt-7 max-w-[550px] text-[15px] leading-7 text-black/60 [animation-delay:400ms] sm:text-base">
              We provide thoughtful, practical and dependable legal solutions
              to individuals, businesses and institutions navigating complex
              legal and commercial matters.
            </p>

            {/* Buttons */}
            <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4 [animation-delay:500ms]">

              <Link
                href="/practice-areas"
                className="group flex items-center gap-4 bg-brown px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.13em] text-white transition-colors duration-300 hover:bg-dark-brown"
              >
                Explore Our Expertise

                <Icon
                  icon="solar:arrow-right-up-linear"
                  width="18"
                  height="18"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/about"
                className="group flex items-center gap-3 px-3 py-4 text-[11px] font-semibold uppercase tracking-[0.13em] text-black"
              >
                About The Firm

                <Icon
                  icon="solar:arrow-right-linear"
                  width="18"
                  height="18"
                  className="text-brown transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* Bottom information */}
            <div className="mt-14 flex flex-wrap gap-8 border-t border-black/10 pt-7 sm:gap-12">

              <div>
                <span className="block text-[10px] uppercase tracking-[0.16em] text-black/40">
                  Approach
                </span>

                <span className="mt-2 block text-sm font-medium text-black">
                  Strategic
                </span>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-[0.16em] text-black/40">
                  Focus
                </span>

                <span className="mt-2 block text-sm font-medium text-black">
                  Client Driven
                </span>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-[0.16em] text-black/40">
                  Standard
                </span>

                <span className="mt-2 block text-sm font-medium text-black">
                  Excellence
                </span>
              </div>

            </div>
          </div>


          {/* RIGHT IMAGE */}
          <div className="relative lg:h-[calc(100vh-140px)] lg:min-h-[600px]">

            <div className="relative h-[500px] overflow-hidden bg-off-white sm:h-[600px] lg:h-full">

              <Image
                src="/assets/images/hero-lawyer.jpg"
                alt="Zanan Legal Practitioners"
                fill
                priority
                className="object-cover transition-transform duration-[1500ms] hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Brown decorative box */}
              <div className="absolute bottom-0 left-0 bg-brown px-6 py-5 text-white sm:px-8">

                <span className="block text-[9px] uppercase tracking-[0.2em] text-white/70">
                  Our Commitment
                </span>

                <span className="mt-1 block text-sm font-medium">
                  Counsel you can rely on.
                </span>

              </div>

            </div>

            {/* Decorative number */}
            <span className="absolute -right-2 -top-7 hidden text-[90px] font-semibold leading-none text-brown/10 xl:block">
              01
            </span>

          </div>

        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-black/10" />
    </section>
  );
}