"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/Loader";
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
  const cursorRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderReveal = useCallback(() => {
    setShowContent(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /* Custom blue cursor dot */
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    /* Only show on desktop */
    const mq = window.matchMedia("(pointer: fine)");
    if (mq.matches) {
      cursor.style.display = "block";
      window.addEventListener("mousemove", moveCursor, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Blue cursor dot — desktop only */}
      <div ref={cursorRef} className="cursor-dot hidden" />

      {showLoader && (
        <Loader
          onReveal={handleLoaderReveal}
          onComplete={handleLoaderComplete}
        />
      )}

      {showContent && (
        <>
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
      )}
    </>
  );
}
