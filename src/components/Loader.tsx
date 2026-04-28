"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoaderProps {
  onReveal: () => void;
  onComplete: () => void;
}

export default function Loader({ onReveal, onComplete }: LoaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const timeout = window.setTimeout(() => {
        onReveal();
        onComplete();
      }, 500);
      return () => {
        window.clearTimeout(timeout);
        document.body.style.overflow = previousOverflow;
      };
    }

    const progress = { value: 0 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete,
      });

      tl.set(rootRef.current, { autoAlpha: 1 })
        .fromTo(
          logoRef.current,
          { autoAlpha: 0, scale: 0.92, y: 8, filter: "blur(10px)" },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power2.out",
            clearProps: "filter",
          }
        )
        .fromTo(
          ".loader-letter",
          { yPercent: 42, autoAlpha: 0, filter: "blur(6px)" },
          {
            yPercent: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.5,
            stagger: 0.03,
            ease: "power2.out",
            clearProps: "filter",
          },
          "-=0.28"
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.05, ease: "power2.inOut" },
          "-=0.22"
        )
        .to(
          progress,
          {
            value: 100,
            duration: 1.05,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.textContent = `${Math.round(progress.value)
                  .toString()
                  .padStart(2, "0")}`;
              }
            },
          },
          "<"
        )
        .to([logoRef.current, textRef.current], {
          y: -10,
          autoAlpha: 0,
          duration: 0.42,
          stagger: 0.03,
          ease: "power2.inOut",
        })
        .call(onReveal)
        .to(
          rootRef.current,
          {
            yPercent: -100,
            duration: 0.72,
            ease: "power3.inOut",
          },
          "-=0.18"
        );
    }, rootRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete, onReveal]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden bg-[#F5F5F3] opacity-0"
      aria-label="Loading Atlas Jo"
      role="status"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-fg/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-fg/10" />

      <div className="flex w-[min(100%-2rem,560px)] flex-col items-center">
        <div ref={logoRef} className="mb-9 md:mb-10">
          <Image
            src="/logo.png"
            alt="Atlas Jo"
            width={116}
            height={116}
            priority
            className="h-[88px] w-[88px] object-contain md:h-[116px] md:w-[116px]"
          />
        </div>

        <div ref={textRef} className="w-full">
          <div className="mb-6 flex justify-center overflow-hidden">
            {"ATLAS JO".split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="loader-letter inline-block text-[18px] font-black uppercase leading-none tracking-[0.24em] text-fg md:text-[22px]"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <span className="micro-type min-w-8 font-black text-fg/70">
              <span ref={counterRef}>00</span>
            </span>
            <div className="h-px flex-1 overflow-hidden bg-fg/14">
              <div ref={lineRef} className="h-full w-full bg-primary" />
            </div>
            <span className="micro-type font-black text-fg/70">SYSTEMS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
