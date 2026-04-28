"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { id: "clients", value: 25, label: "HAPPY CLIENTS", suffix: "+" },
  { id: "projects", value: 20, label: "PROJECTS DELIVERED", suffix: "+" },
  { id: "experience", value: 3, label: "YEARS EXPERIENCE", suffix: "+" },
  { id: "team", value: 4, label: "EXPERTS ON TEAM", suffix: "+" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in items
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });

      // Animate numbers
      numbersRef.current.forEach((el, index) => {
        if (!el) return;
        const targetValue = stats[index].value;
        const counter = { val: 0 };

        gsap.to(counter, {
          val: targetValue,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          onUpdate: () => {
            el.innerText = Math.floor(counter.val).toString();
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#F9FAFB] text-[#111111] relative overflow-hidden">
      {/* Subtle Blue Glow Background (Adjusted for light theme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#2563EB]/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="site-shell relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 md:divide-x divide-[#111111]/10">
          {stats.map((stat, i) => (
            <div key={stat.id} className="stat-item flex flex-col items-center justify-center text-center px-4">
              <div className="flex items-baseline gap-1 mb-2">
                <span 
                  ref={(el) => { numbersRef.current[i] = el; }}
                  className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-[#111111] leading-none"
                >
                  0
                </span>
                <span className="text-4xl md:text-5xl font-black text-[#2563EB]">
                  {stat.suffix}
                </span>
              </div>
              <span className="micro-type text-[#111111]/50 tracking-[0.2em] uppercase mt-4 text-xs md:text-sm font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
