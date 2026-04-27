"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStack } from "@/lib/services";

export default function TechMarquee() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 12,
        filter: "blur(6px)",
        duration: 0.62,
        ease: "power2.out",
        clearProps: "filter",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const items = [...techStack, ...techStack];

  return (
    <section
      id="insights"
      ref={sectionRef}
      className="my-20 border-y border-fg/18 py-8 md:my-32 md:py-11"
    >
      <div className="relative overflow-hidden group">
        <div className="marquee-track flex items-center gap-10 md:gap-16 w-max py-2 group-hover:[animation-play-state:paused]">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-[16px] md:text-[22px] font-extrabold text-fg whitespace-nowrap uppercase flex items-center gap-6"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
