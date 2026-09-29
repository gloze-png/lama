"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { navigation } from "@/app/data/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
          scrolled
            ? "border-black/10 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-black/10 bg-white"
        }`}
      >
        <div className="zanan-container">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-18" : "h-22.5"
            }`}
          >
            {/* LOGO */}
            <Link
              href="/"
              className="relative z-50 flex flex-col"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-[23px] font-bold tracking-[0.2em] text-black">
                ZANAN
              </span>

              <span className="mt-1 text-[8px] font-semibold tracking-[0.3em] text-brown">
                LEGAL PRACTITIONERS
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden items-center gap-7 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group relative py-3 text-[13px] font-medium text-black transition-colors duration-300 hover:text-brown"
                >
                  {item.label}

                  <span className="absolute bottom-1 left-0 h-0.5 w-0 bg-brown transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* DESKTOP BUTTON */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-brown px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-white"
              >
                Consult With Us

                <Icon
                  icon="solar:arrow-right-up-linear"
                  width="17"
                  height="17"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="relative z-50 flex h-11 w-11 items-center justify-center border border-black/20 text-black transition-colors hover:border-brown hover:text-brown lg:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              <Icon
                icon={
                  menuOpen
                    ? "solar:close-circle-linear"
                    : "solar:hamburger-menu-linear"
                }
                width="25"
                height="25"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0"
        }`}
      >
        <div className="zanan-container flex min-h-screen flex-col justify-center pt-[100px]">
          <span className="mb-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-brown">
            Navigation
          </span>

          <nav className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-black/10 py-5"
              >
                <div className="flex items-center gap-5">
                  <span className="text-[10px] font-medium text-brown">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-2xl font-medium text-black transition-colors duration-300 group-hover:text-brown">
                    {item.label}
                  </span>
                </div>

                <Icon
                  icon="solar:arrow-right-up-linear"
                  width="20"
                  height="20"
                  className="text-black/40 transition-all duration-300 group-hover:text-brown"
                />
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-10 flex items-center justify-center gap-3 bg-brown px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-dark-brown"
          >
            Consult With Us

            <Icon
              icon="solar:arrow-right-up-linear"
              width="18"
              height="18"
            />
          </Link>
        </div>
      </div>
    </>
  );
}