import type { Metadata } from "next";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

import ContactHero from "@/app/content/ContactHero";
import ContactSection from "@/app/content/ContactSection";
import ContactClosing from "@/app/content/ContactClosing";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Zanan Legal Practitioners to discuss your legal needs and learn how our team may be able to assist.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <ContactHero />
        <ContactSection />
        <ContactClosing />
      </main>

      <Footer />
    </>
  );
}