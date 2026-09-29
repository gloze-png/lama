import type { Metadata } from "next";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

import AboutHero from "@/app/about/AboutHero";
import WhoWeAre from "@/app/about/WhoWeAre";
import OurApproach from "@/app/about/OurApproach";
import Purpose from "@/app/about/Purpose";
import WhyChooseUs from "@/app/about/WhyChooseUs";

import ContactCTA from "@/app/components/layout/home/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Zanan Legal Practitioners, our approach to legal practice and our commitment to providing strategic and practical legal solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <AboutHero />
        <WhoWeAre />
        <OurApproach />
        <Purpose />
        <WhyChooseUs />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}