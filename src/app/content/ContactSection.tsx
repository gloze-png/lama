import { Icon } from "@iconify/react";

import Reveal from "@/app/components/common/Reavel";
import ContactForm from "@/app/content/ContactForm";
import { contactDetails } from "@/app/data/contact";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="zanan-container">

        {/* Heading */}
        <div className="grid gap-10 border-b border-black/10 pb-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pb-20">
          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-brown" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
                01 — Get In Touch
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <h2 className="max-w-212.5 text-[38px] font-medium leading-[1.1] tracking-[-0.035em] text-black sm:text-[48px] lg:text-[60px]">
                Tell us how we can
                <span className="text-brown">
                  {" "}assist you.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-155 text-[15px] leading-7 text-black/55">
                Complete the enquiry form or contact the firm
                directly using the details below.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Contact content */}
        <div className="grid gap-16 pt-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:pt-20">

          {/* LEFT */}
          <Reveal direction="right">
            <aside>
              <p className="max-w-82.5 text-[14px] leading-7 text-black/50">
                Whether you have a specific legal matter or simply
                need to understand your options, you can begin by
                getting in touch with our team.
              </p>

              <div className="mt-10 border-t border-black/10">

                {/* Email */}
                <div className="border-b border-black/10 py-6">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/35">
                    Email
                  </span>

                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="group mt-3 flex items-center justify-between gap-4"
                  >
                    <span className="break-all text-[14px] font-medium text-black transition-colors duration-300 group-hover:text-brown">
                      {contactDetails.email}
                    </span>

                    <Icon
                      icon="solar:arrow-right-up-linear"
                      width="17"
                      height="17"
                      className="shrink-0 text-brown transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>

                {/* Phone */}
                <div className="border-b border-black/10 py-6">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/35">
                    Telephone
                  </span>

                  <a
                    href={`tel:${contactDetails.phoneHref}`}
                    className="group mt-3 flex items-center justify-between gap-4"
                  >
                    <span className="text-[14px] font-medium text-black transition-colors duration-300 group-hover:text-brown">
                      {contactDetails.phone}
                    </span>

                    <Icon
                      icon="solar:phone-linear"
                      width="17"
                      height="17"
                      className="shrink-0 text-brown"
                    />
                  </a>
                </div>

                {/* Office */}
                <div className="border-b border-black/10 py-6">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/35">
                    Office
                  </span>

                  <div className="mt-3 flex items-start gap-3">
                    <Icon
                      icon="solar:map-point-linear"
                      width="18"
                      height="18"
                      className="mt-0.5 shrink-0 text-brown"
                    />

                    <div>
                      <p className="text-[14px] font-medium text-black">
                        {contactDetails.office.name}
                      </p>

                      <p className="mt-1 text-[13px] leading-6 text-black/45">
                        {contactDetails.office.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="border-b border-black/10 py-6">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/35">
                    Office Hours
                  </span>

                  <div className="mt-3 flex items-start gap-3">
                    <Icon
                      icon="solar:clock-circle-linear"
                      width="18"
                      height="18"
                      className="mt-0.5 shrink-0 text-brown"
                    />

                    <div>
                      <p className="text-[14px] font-medium text-black">
                        {contactDetails.hours.weekdays}
                      </p>

                      <p className="mt-1 text-[13px] text-black/45">
                        {contactDetails.hours.time}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Socials */}
              <div className="mt-8">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/35">
                  Connect With Us
                </span>

                <div className="mt-4 flex items-center gap-3">
                  {contactDetails.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="flex h-11 w-11 items-center justify-center border border-black/10 text-black/50 transition-all duration-300 hover:border-brown hover:bg-brown hover:text-white"
                    >
                      <Icon
                        icon={social.icon}
                        width="18"
                        height="18"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>

          {/* RIGHT / FORM */}
          <Reveal delay={120}>
            <div className="border border-black/10 p-6 sm:p-9 lg:p-12">

              <div className="mb-10">
                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-brown">
                  Send An Enquiry
                </span>

                <h3 className="mt-4 text-[28px] font-medium leading-[1.2] tracking-tight text-black sm:text-[34px]">
                  How can we help?
                </h3>

                <p className="mt-4 max-w-142.5 text-[13px] leading-6 text-black/45">
                  Provide some basic information about your enquiry
                  and we&apos;ll have what we need to understand the
                  nature of your request.
                </p>
              </div>

              <ContactForm />

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}