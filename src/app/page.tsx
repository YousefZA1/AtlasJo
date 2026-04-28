import ClientShell from "@/components/ClientShell";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import Statement from "@/components/Statement";
import SolutionsWeBuild from "@/components/SolutionsWeBuild";
import ServicesInteractive from "@/components/ServicesInteractive";
import TechMarquee from "@/components/TechMarquee";
import Stats from "@/components/Stats";
import CTAFooter from "@/components/CTAFooter";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <ClientShell />
      <Header />

      <main>
        <Hero />
        <Showreel />
        <Statement />
        <SolutionsWeBuild />
        <ServicesInteractive />
        <TechMarquee />
        <Stats />
        <CTAFooter />
      </main>

      <ChatWidget />
    </>
  );
}
