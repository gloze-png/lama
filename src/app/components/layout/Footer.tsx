import Link from "next/link";
import { Icon } from "@iconify/react";

import { contactDetails } from "@/app/data/contact";
import { practiceAreas } from "@/app/data/practiceAreas";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="zanan-container">

        {/* Main footer */}
        <div className="grid gap-14 border-b border-white/10 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr] lg:gap-12 lg:py-24">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex flex-col">
              <span className="text-[28px] font-semibold tracking-[0.22em] text-white">
                ZANAN
              </span>

              <span className="mt-1 text-[8px] font-semibold tracking-[0.32em] text-light-brown">
                LEGAL PRACTITIONERS
              </span>
            </Link>

            <p className="mt-7 max-w-82.5 text-[14px] leading-7 text-white/50">
              Providing thoughtful, strategic and practical legal
              solutions for individuals, businesses and
              institutions.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {contactDetails.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="group flex h-11 w-11 items-center justify-center border border-white/15 text-white/60 transition-all duration-300 hover:border-brown hover:bg-brown hover:text-white"
                >
                  <Icon
                    icon={social.icon}
                    width="18"
                    height="18"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-light-brown">
              Navigation
            </p>

            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-[13px] text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-brown transition-all duration-300 group-hover:w-4" />

                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Practice areas */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-light-brown">
              Practice Areas
            </p>

            <div className="flex flex-col gap-4">
              {practiceAreas.map((area) => (
                <Link
                  key={area.id}
                  href={`/practice-areas/${area.slug}`}
                  className="text-[13px] leading-5 text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {area.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-light-brown">
              Get In Touch
            </p>

            <div className="space-y-7">

              <div>
                <span className="mb-2 block text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Office
                </span>

                <p className="max-w-57.5 text-[13px] leading-6 text-white/60">
                  {contactDetails.office.name}
                  <br />
                  {contactDetails.office.address}
                </p>
              </div>

              <div>
                <span className="mb-2 block text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Email
                </span>

                <a
                  href={`mailto:${contactDetails.email}`}
                  className="break-all text-[13px] text-white/60 transition-colors duration-300 hover:text-light-brown"
                >
                  {contactDetails.email}
                </a>
              </div>

              <div>
                <span className="mb-2 block text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Telephone
                </span>

                <a
                  href={`tel:${contactDetails.phoneHref}`}
                  className="text-[13px] text-white/60 transition-colors duration-300 hover:text-light-brown"
                >
                  {contactDetails.phone}
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] tracking-[0.04em] text-white/35">
            © {currentYear} Zanan Legal Practitioners.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">

            <Link
              href="/privacy"
              className="text-[10px] text-white/35 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <Link
              href="/terms"
              className="text-[10px] text-white/35 transition-colors duration-300 hover:text-white"
            >
              Terms of Use
            </Link>

          </div>

        </div>

      </div>

      <div
        className="pointer-events-none absolute -bottom-11.25 right-0 hidden select-none text-[180px] font-semibold leading-none tracking-[-0.07em] text-white/[0.018] xl:block"
        aria-hidden="true"
      >
        ZANAN
      </div>
    </footer>
  );
}