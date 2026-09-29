import Header from "@/app/components/layout/Header";
import Hero from "./components/layout/home/Hero";
import About from "./components/layout/home/AboutPreview";
import PracticeAreas from "./components/layout/home/PracticeAreas";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className=" bg-white" />
        <Hero/>
        <About/>
        <PracticeAreas/>
      </main>
    </>
  );
}