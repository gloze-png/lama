import type { Metadata } from "next";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

import InsightsHero from "@/app/components/Insights/InsightsHero";
import InsightsList from "@/app/components/Insights/InsightsList";
import InsightsStatement from "@/app/components/Insights/InsightsStatement";

import ContactCTA from "@/app/components/layout/home/ContactCTA";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Explore legal perspectives and practical insights from Zanan Legal Practitioners on law, business and emerging legal issues.",
};

export default function InsightsPage() {
  return (
    <>
      <Header />

      <main>
        <InsightsHero />
        <InsightsList />
        <InsightsStatement />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}