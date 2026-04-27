"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".stmt-line", {
        y: 18,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.85,
        stagger: 0.055,
        ease: "power2.out",
        clearProps: "filter",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      if (scrollLabelRef.current) {
        gsap.from(scrollLabelRef.current, {
          y: 10,
          opacity: 0,
          filter: "blur(5px)",
          duration: 0.55,
          delay: 0.28,
          ease: "power2.out",
          clearProps: "filter",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 md:py-44">
      <div className="site-shell text-center">
        <div className="mb-7 md:mb-9">
          <p className="stmt-line display-type text-[clamp(1.8rem,3.2vw,3.35rem)] leading-[1.12] uppercase">
            IT&apos;S NEVER &ldquo;JUST SOFTWARE.&rdquo;
          </p>
          <p className="stmt-line display-type text-[clamp(1.8rem,3.2vw,3.35rem)] leading-[1.12] uppercase">
            EVERY{" "}
            <span className="underline decoration-[3px] underline-offset-[7px] decoration-fg">
              DETAIL
            </span>{" "}
            MATTERS.
          </p>
        </div>

        <div className="h-8 md:h-12" />

        <div>
          <p className="stmt-line display-type text-[clamp(1.55rem,2.75vw,2.85rem)] leading-[1.16] uppercase">
            WE CRAFT DIGITAL EXPERIENCES.
          </p>
          <p className="stmt-line display-type text-[clamp(1.55rem,2.75vw,2.85rem)] leading-[1.16] uppercase">
            YOUR DESIGN. OUR OBSESSION.
          </p>
          <p className="stmt-line display-type text-[clamp(1.55rem,2.75vw,2.85rem)] leading-[1.16] uppercase">
            YOUR BRAND. OUR{" "}
            <span className="text-primary underline decoration-[3px] underline-offset-[7px] decoration-primary">
              PLAYGROUND
            </span>
            .
          </p>
        </div>

        <div
          ref={scrollLabelRef}
          className="mt-16 md:mt-20 flex flex-col items-center gap-4"
        >
          <span className="micro-type text-fg/60 font-bold">
            SCROLL TO EXPLORE
          </span>
          <svg
            width="12"
            height="18"
            viewBox="0 0 12 18"
            fill="none"
            className="text-fg/25 animate-[bounce_2.5s_ease-in-out_infinite]"
          >
            <path
              d="M6 0v15M1 11l5 5.5L11 11"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
