import Header from "@/app/components/layout/Header";
import Hero from "./components/layout/home/Hero";
import About from "./components/layout/home/AboutPreview";
import PracticeAreas from "./components/layout/home/PracticeAreas";
import WhyZanan from "./components/layout/home/WhyChooseUs";
import Insights from "./components/layout/home/Insights";
import ContactCTA from "./components/layout/home/ContactCTA";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className=" bg-white" />
        <Hero/>
        <About/>
        <PracticeAreas/>
        <WhyZanan/>
        <Insights/>
        <ContactCTA/>
      </main>
      <Footer/>
    </>
  );
}