"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const solutions = [
  {
    number: "01",
    title: "Lead Generation Systems",
    description: "Automated funnels that capture, qualify, and convert leads into paying clients.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    )
  },
  {
    number: "02",
    title: "Business Automation",
    description: "We automate repetitive workflows so you can save hours every week.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
        <path d="M16 21v-5h5"/>
      </svg>
    )
  },
  {
    number: "03",
    title: "Custom Web Platforms",
    description: "Scalable web applications built for performance and long-term growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <rect width="18" height="18" x="3" y="3"/>
        <line x1="3" x2="21" y1="9" y2="9"/>
        <line x1="9" x2="9" y1="21" y2="9"/>
      </svg>
    )
  },
  {
    number: "04",
    title: "MVP Development",
    description: "Turn your idea into a working product fast with production-ready systems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    )
  },
  {
    number: "05",
    title: "AI-Powered Workflows",
    description: "Integrate AI into your processes for smarter decisions and efficiency.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
      </svg>
    )
  },
  {
    number: "06",
    title: "Dashboards & Internal Tools",
    description: "Custom systems that give you full control and real-time visibility.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <rect width="18" height="18" x="3" y="3"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    )
  }
];

export default function SolutionsWeBuild() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Header Text Animation
      gsap.from(".sol-header", {
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // Grid Items Animation
      gsap.from(".sol-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sol-grid",
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="py-24 md:py-40 bg-[#F5F5F3] text-[#0B0B0B]">
      <div className="site-shell">
        
        {/* Header Section */}
        <div className="mb-20 max-w-4xl">
          <span className="sol-header micro-type font-black text-[#0B0B0B]/40 tracking-[0.2em] mb-4 block uppercase">
            OUR EXPERTISE
          </span>
          <h2 className="sol-header display-type text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[1] mb-6">
            SOLUTIONS WE <span className="text-[#2563EB]">BUILD</span>
          </h2>
          <p className="sol-header text-[#0B0B0B]/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            We design and build systems tailored to real business problems — focused on automation, scalability, and growth.
          </p>
        </div>

        {/* 
          Hairline Grid (Premium Tech Agency Style)
          Uses gap-px and a dark background to create perfectly sharp 1px borders between all cards. 
        */}
        <div className="sol-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#0B0B0B]/10 gap-px border border-[#0B0B0B]/10 overflow-hidden">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="sol-card group relative bg-[#F5F5F3] hover:bg-white transition-colors duration-700 p-8 md:p-12 min-h-[340px] flex flex-col justify-between"
            >
              {/* Hover Accent Top Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2563EB] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10"></div>
              
              {/* Top Row: Icon & Number */}
              <div className="flex justify-between items-start mb-16">
                <div className="text-[#0B0B0B]/40 group-hover:text-[#2563EB] group-hover:-translate-y-1 transition-all duration-500">
                  {solution.icon}
                </div>
                <span className="micro-type text-[#0B0B0B]/30 group-hover:text-[#2563EB]/50 transition-colors duration-500">
                  {solution.number}
                </span>
              </div>

              {/* Bottom Row: Content */}
              <div className="mt-auto">
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#0B0B0B] mb-4 group-hover:text-[#2563EB] transition-colors duration-500">
                  {solution.title}
                </h3>
                <p className="text-[#0B0B0B]/60 font-medium leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
