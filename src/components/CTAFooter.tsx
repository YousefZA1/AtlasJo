"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const contact = [
  {
    label: "EMAIL",
    value: "atlasjo.505@gmail.com",
    href: "mailto:atlasjo.505@gmail.com",
    icon: (
      <path d="M3 5h18v14H3zM3 5l9 8 9-8" />
    ),
  },
  {
    label: "PHONE",
    value: "+962 795 719 957",
    href: "tel:+962795719957",
    icon: (
      <path d="M7 4h3l2 5-2 1.5c1.2 2.4 3.1 4.3 5.5 5.5L17 14l5 2v3c0 1.1-.9 2-2 2C10.6 21 3 13.4 3 4c0-1.1.9-2 2-2" />
    ),
  },
  {
    label: "LOCATION",
    value: "Aqaba, Jordan",
    href: "https://maps.google.com/?q=Aqaba%2C%20Jordan",
    icon: (
      <>
        <path d="M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ),
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/its.atlasjo/",
    path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.2-.9a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6z",
  },
  {
    name: "X",
    href: "https://x.com/its_atlasjo",
    path: "M18.2 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.2L5.7 21H2.6l7.3-8.4L2.2 3h6.5l4.4 5.7L18.2 3zm-1.1 16.2h1.7L7.8 4.7H6L17.1 19.2z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@its.atlasjo",
    path: "M22 8.2s-.2-1.6-.8-2.3c-.8-.8-1.7-.8-2.1-.9C16.2 4.8 12 4.8 12 4.8s-4.2 0-7.1.2c-.4.1-1.3.1-2.1.9C2.2 6.6 2 8.2 2 8.2S1.8 10 1.8 11.9v.2C1.8 14 2 15.8 2 15.8s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.7.2 6.8.2 6.8.2s4.2 0 7.1-.2c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.3.8-2.3s.2-1.8.2-3.7v-.2c0-1.9-.2-3.7-.2-3.7zM10 15.2V8.8l5.6 3.2L10 15.2z",
  },
];

export default function CTAFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".cta-line", {
        y: 20,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.78,
        stagger: 0.06,
        ease: "power2.out",
        clearProps: "filter",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".cta-contact-item", {
        y: 14,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.58,
        stagger: 0.055,
        ease: "power2.out",
        clearProps: "filter",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 74%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden pt-24 md:pt-40 pb-10"
    >
      <div
        ref={ctaRef}
        className="site-shell relative z-10 grid grid-cols-1 gap-16 border-t border-fg/18 pt-16 md:grid-cols-[1fr_0.88fr] md:gap-28 md:pt-20"
      >
        <div>
          <div className="mb-10">
            <div className="overflow-hidden py-[0.07em]">
              <h2 className="cta-line display-type text-[clamp(2.7rem,5.1vw,5.85rem)] leading-[1] uppercase">
                LET&apos;S BUILD
              </h2>
            </div>
            <div className="overflow-hidden py-[0.07em]">
              <h2 className="cta-line display-type text-[clamp(2.7rem,5.1vw,5.85rem)] leading-[1] uppercase">
                SOMETHING GREAT
              </h2>
            </div>
            <div className="overflow-hidden py-[0.07em]">
              <h2 className="cta-line display-type text-[clamp(2.7rem,5.1vw,5.85rem)] leading-[1] uppercase">
                <span className="text-primary">TOGETHER.</span>
              </h2>
            </div>
          </div>

          <span className="cta-line block h-px w-24 bg-primary" />
        </div>

        <div className="flex flex-col justify-center gap-7">
          <div className="border-y border-fg/18">
            {contact.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="cta-contact-item group grid grid-cols-[2rem_1fr_1.25rem] items-center gap-4 border-b border-fg/12 py-5 text-fg transition-colors duration-300 last:border-b-0 hover:text-primary sm:grid-cols-[2rem_5.5rem_1fr_1.25rem]"
                target={item.label === "LOCATION" ? "_blank" : undefined}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                >
                  {item.icon}
                </svg>
                <span className="micro-type hidden font-black text-fg/45 transition-colors duration-300 group-hover:text-primary sm:block">
                  {item.label}
                </span>
                <span className="text-[15px] font-semibold leading-tight tracking-[-0.01em] break-all sm:break-normal">
                  {item.value}
                </span>
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  className="justify-self-end transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M0 5.5h16M11 1l5 4.5-5 4.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </a>
            ))}
          </div>

          <div className="cta-contact-item flex items-center justify-between border-b border-fg/18 pb-5">
            <span className="micro-type font-black text-fg/45">SOCIAL</span>
            <div className="flex items-center gap-7">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
                data-social={social.name.toLowerCase()}
                className="simple-social-link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="site-shell relative z-10 mt-16 flex flex-col items-center justify-between gap-5 border-t border-fg/18 pt-7 md:mt-20 md:flex-row">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Atlas Jo"
            width={32}
            height={32}
            unoptimized
            className="h-[30px] w-[30px] object-contain object-center"
          />
          <span className="text-[15px] font-black tracking-[0.18em] uppercase text-fg">
            ATLAS <span className="text-primary">JO</span>
          </span>
        </a>

        <div className="flex items-center gap-12 md:ml-auto">
          <a href="#" className="micro-type font-bold text-fg/70 hover:text-primary">
            Privacy
          </a>
          <a href="#" className="micro-type font-bold text-fg/70 hover:text-primary">
            Terms
          </a>
        </div>
      </footer>
    </section>
  );
}
