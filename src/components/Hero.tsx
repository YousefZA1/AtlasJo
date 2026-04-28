"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  // Typewriter Effect State
  const words = ["THAT SCALE", "THAT CONVERT", "THAT PERFORM"];
  const [i, setI] = useState(0); 
  const [j, setJ] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    // GSAP Entrance Animations
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

      // Blinking Cursor Animation
      gsap.to(".blinking-cursor", {
        opacity: 0,
        duration: 0.5,
        ease: "steps(1)",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Typewriter Logic
  useEffect(() => {
    // Add a small initial delay so it doesn't start typing while the GSAP entrance animation is playing
    const initialDelay = setTimeout(() => {
      const currentWord = words[i];

      const typeTimeout = setTimeout(() => {
        if (isDeleting) {
          setText(currentWord.substring(0, j - 1));
          setJ(j - 1);

          if (j === 1) { // When almost fully deleted
            setIsDeleting(false);
            setI((prev) => (prev + 1) % words.length);
          }
        } else {
          setText(currentWord.substring(0, j + 1));
          setJ(j + 1);

          if (j === currentWord.length) {
            // Pause at the end of the word before starting to delete
            setIsDeleting(true);
          }
        }
      }, isDeleting ? 60 : 120); // Faster deleting, slower typing

      return () => clearTimeout(typeTimeout);
    }, j === 0 && !isDeleting ? 800 : j === words[i].length ? 2500 : 0);

    return () => clearTimeout(initialDelay);
  }, [j, i, isDeleting, words]);

  return (
    <section
      ref={sectionRef}
      className="min-h-[88vh] md:min-h-screen flex flex-col items-center justify-center px-5 pt-28 pb-16"
    >
      <div className="text-center w-full">
        <div className="overflow-hidden py-[0.09em]">
          <h1 className="hero-line display-type text-[clamp(4.1rem,9.7vw,9.6rem)] leading-[1.01] uppercase">
            WE BUILD
          </h1>
        </div>
        <div className="overflow-hidden py-[0.09em]">
          <h1 className="hero-line display-type text-[clamp(4.1rem,9.7vw,9.6rem)] leading-[1.01] uppercase">
            DIGITAL SYSTEMS
          </h1>
        </div>
        <div className="overflow-hidden py-[0.09em] flex justify-center items-center">
          <h1
            className="hero-line display-type text-[clamp(4.1rem,9.7vw,9.6rem)] leading-[1.01] uppercase text-primary flex items-end justify-center min-h-[1.1em]"
            aria-label="THAT SCALE"
          >
            {text}
            <span
              className="blinking-cursor ml-[0.02em] inline-block h-[0.82em] w-[0.06em] translate-y-[0.06em] bg-primary"
              aria-hidden="true"
            />
          </h1>
        </div>
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
