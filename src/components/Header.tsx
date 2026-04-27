"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

function scrollToSection(href: string) {
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.querySelector<HTMLElement>(href);
  if (!target) return;

  const headerOffset = 112;
  const top =
    target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top, behavior: "smooth" });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5F5F3]/92 backdrop-blur-sm border-b border-black/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="site-shell grid grid-cols-[1fr_auto_1fr] items-center py-6 md:py-9">
        <a
          href="#"
          onClick={(event) => handleAnchorClick(event, "#")}
          className="flex items-center gap-4 justify-self-start group"
        >
          <Image
            src="/logo.png"
            alt="Atlas Jo"
            width={40}
            height={40}
            unoptimized
            className="h-[38px] w-[38px] object-contain object-center transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-[16px] md:text-[18px] font-black tracking-[0.18em] uppercase text-fg leading-none">
            ATLAS{" "}
            <span className="text-primary font-bold">JO</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-16 justify-self-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleAnchorClick(event, item.href)}
              className="text-[11px] uppercase leading-none tracking-[0.24em] text-fg hover:text-primary transition-colors duration-300 font-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6 justify-self-end">
          <a
            href="#contact"
            onClick={(event) => handleAnchorClick(event, "#contact")}
            className="hidden md:block text-[11px] uppercase leading-none tracking-[0.24em] font-black text-fg hover:text-primary transition-colors duration-300"
          >
            LET&apos;S TALK!
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] w-6"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] bg-fg transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-fg transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-fg transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 pb-8 pt-2 bg-[#F5F5F3]/96 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleAnchorClick(event, item.href)}
              className="text-[12px] uppercase tracking-[0.2em] text-fg/60 hover:text-fg transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(event) => handleAnchorClick(event, "#contact")}
            className="text-[12px] uppercase tracking-[0.2em] font-bold text-primary"
          >
            LET&apos;S TALK!
          </a>
        </nav>
      </div>
    </header>
  );
}
