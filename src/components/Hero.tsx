"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        delay: 0.16,
      });

      tl.from(".hero-line", {
        y: 28,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.95,
        stagger: 0.08,
        clearProps: "filter",
      })
        .from(
          subtitleRef.current,
          {
            y: 12,
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.7,
            clearProps: "filter",
          },
          "-=0.28"
        )
        .from(
          arrowRef.current,
          { y: 8, opacity: 0, duration: 0.55 },
          "-=0.18"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[88vh] md:min-h-screen flex flex-col items-center justify-center px-5 pt-28 pb-16"
    >
      <div className="text-center w-full">
        <h1 className="display-type text-[clamp(4.1rem,9.7vw,9.6rem)] leading-[1.01] uppercase">
          <span className="block overflow-hidden py-[0.09em]">
            <span className="hero-line block">WE BUILD</span>
          </span>
          <span className="block overflow-hidden py-[0.09em]">
            <span className="hero-line block">DIGITAL SYSTEMS</span>
          </span>
          <span className="block overflow-hidden py-[0.09em] text-primary">
            <span className="hero-line block" aria-label="THAT SCALE.">
              THAT SCALE
              <span
                className="ml-[0.04em] inline-block h-[0.13em] w-[0.13em] translate-y-[0.03em] rounded-full bg-primary"
                aria-hidden="true"
              />
            </span>
          </span>
        </h1>
      </div>

      <p
        ref={subtitleRef}
        className="mt-8 md:mt-10 micro-type text-fg font-black text-center"
      >
        WEBSITES <span className="text-primary px-5">&bull;</span> SAAS{" "}
        <span className="text-primary px-5">&bull;</span> AUTOMATION
      </p>

      <div ref={arrowRef} className="mt-12">
        <svg
          width="12"
          height="28"
          viewBox="0 0 12 28"
          fill="none"
          className="text-fg/30"
        >
          <line x1="6" y1="0" x2="6" y2="24" stroke="currentColor" strokeWidth="1" />
          <polyline points="2,20 6,26 10,20" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
