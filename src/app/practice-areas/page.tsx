import type { Metadata } from "next";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

import PracticeAreasHero from "@/app/components/practice-areas/PracticeAreasHero";
import PracticeAreasGrid from "@/app/components/practice-areas/ PracticeAreasGrid";
import PracticeApproach from "@/app/components/practice-areas/PracticeApproach";

import ContactCTA from "@/app/components/layout/home/ContactCTA";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore the areas of legal practice offered by Zanan Legal Practitioners and learn how we provide strategic and practical legal guidance.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <Header />

      <main>
        <PracticeAreasHero />
        <PracticeAreasGrid />
        <PracticeApproach />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}