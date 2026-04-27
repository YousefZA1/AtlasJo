"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/services";

function BentoVisual({ id }: { id: string }) {
  if (id === "web-development") {
    return (
      <div className="w-full h-full relative p-8 flex flex-col gap-3 justify-center opacity-80">
         <div className="w-3/4 h-2 bg-primary/40 rounded-full transition-all duration-500 group-hover:w-full"></div>
         <div className="w-1/2 h-2 bg-fg/10 rounded-full transition-all duration-700 group-hover:w-3/4"></div>
         <div className="w-5/6 h-2 bg-fg/5 rounded-full transition-all duration-300 group-hover:w-1/2"></div>
         <div className="w-2/3 h-2 bg-fg/10 rounded-full transition-all duration-500 group-hover:w-5/6"></div>
      </div>
    );
  }
  if (id === "saas-solutions") {
    return (
      <div className="w-full h-full flex items-end gap-3 justify-center pb-4 opacity-80">
         <div className="w-[15%] bg-fg/5 rounded-t-md h-[40%] origin-bottom transition-all duration-1000 group-hover:h-[60%]"></div>
         <div className="w-[15%] bg-primary/50 rounded-t-md shadow-[0_0_15px_rgba(37,99,235,0.3)] h-[80%] origin-bottom transition-all duration-1000 group-hover:h-[95%]"></div>
         <div className="w-[15%] bg-fg/10 rounded-t-md h-[50%] origin-bottom transition-all duration-1000 group-hover:h-[70%]"></div>
      </div>
    );
  }
  if (id === "automation") {
    return (
      <div className="w-full h-full relative transition-transform duration-1000 ease-in-out group-hover:rotate-180">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-fg/20 rounded-full"></div>
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-fg/20 rounded-full"></div>
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-fg/20 rounded-full"></div>
         <div className="absolute inset-2 border border-fg/10 rounded-full"></div>
      </div>
    );
  }
  if (id === "ui-ux-design") {
    return (
      <div className="w-full h-full relative opacity-60">
         <div className="absolute bottom-0 right-0 w-[80%] h-[80%] border-t border-l border-fg/10 rounded-tl-xl bg-gradient-to-br from-fg/5 to-transparent transition-all duration-500 group-hover:w-[90%] group-hover:h-[90%]"></div>
         <div className="absolute bottom-[-10px] right-[-10px] w-[60%] h-[60%] border-t border-l border-primary/40 rounded-tl-xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:w-[70%] group-hover:h-[70%] group-hover:bottom-0 group-hover:right-0"></div>
      </div>
    );
  }
  if (id === "ai-integration") {
    return (
      <div className="w-full h-full relative">
         <svg className="w-full h-full" viewBox="0 0 100 100">
            <line x1="20" y1="50" x2="50" y2="20" stroke="rgba(11,11,11,0.05)" strokeWidth="1" className="transition-all duration-500 group-hover:stroke-[rgba(37,99,235,0.4)]" />
            <line x1="20" y1="50" x2="50" y2="80" stroke="rgba(11,11,11,0.05)" strokeWidth="1" className="transition-all duration-500 group-hover:stroke-[rgba(37,99,235,0.4)]" />
            <line x1="50" y1="20" x2="80" y2="50" stroke="rgba(37,99,235,0.4)" strokeWidth="1" className="transition-all duration-500 group-hover:stroke-[rgba(11,11,11,0.2)]" />
            <line x1="50" y1="80" x2="80" y2="50" stroke="rgba(37,99,235,0.4)" strokeWidth="1" className="transition-all duration-500 group-hover:stroke-[rgba(11,11,11,0.2)]" />
            
            <circle cx="20" cy="50" r="3" fill="rgba(11,11,11,0.1)" />
            <circle cx="50" cy="20" r="4" fill="rgba(11,11,11,0.15)" className="transition-all duration-500 group-hover:r-[6]" />
            <circle cx="50" cy="80" r="4" fill="rgba(11,11,11,0.15)" className="transition-all duration-500 group-hover:r-[6]" />
            <circle cx="80" cy="50" r="5" fill="#2563EB" className="animate-pulse transition-all duration-500 group-hover:r-[8]" />
         </svg>
      </div>
    );
  }
  // System Architecture
  return (
    <div className="w-full h-full flex flex-col justify-center gap-3 px-8 opacity-80">
       <div className="w-full h-px bg-primary/40 transition-all duration-500 group-hover:translate-x-2"></div>
       <div className="w-full h-px bg-primary/20 transition-all duration-500 group-hover:-translate-x-2"></div>
       <div className="w-full h-px bg-primary/60 transition-all duration-500 group-hover:translate-x-4"></div>
       <div className="w-full h-px bg-primary/20 transition-all duration-500 group-hover:-translate-x-2"></div>
       <div className="w-full h-px bg-primary/40 transition-all duration-500 group-hover:translate-x-2"></div>
    </div>
  );
}

export default function OurServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".bento-header", {
        y: 40,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      gsap.from(".bento-item", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="pt-24 pb-12 md:pt-40 md:pb-20 bg-bg text-fg">
      <div className="site-shell">
        <h2 className="bento-header micro-type font-black text-fg/50 tracking-[0.2em] mb-4">OUR EXPERTISE</h2>
        <h3 className="bento-header display-type text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[1] mb-16 md:mb-24">
           WHAT WE <span className="text-primary">DO</span>
        </h3>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
           
           {/* 1. Web Development (col-span-2) */}
           <div className="bento-item group relative col-span-1 md:col-span-2 row-span-1 rounded-[24px] bg-white border border-fg/10 overflow-hidden hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                 <div>
                    <span className="micro-type text-fg/40 mb-3 block">{services[0].number}</span>
                    <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-fg">{services[0].title}</h4>
                 </div>
                 <p className="text-fg/60 max-w-md font-medium">{services[0].description}</p>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <BentoVisual id={services[0].id} />
              </div>
           </div>

           {/* 2. SaaS (row-span-2) */}
           <div className="bento-item group relative col-span-1 row-span-1 md:row-span-2 rounded-[24px] bg-white border border-fg/10 overflow-hidden hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                 <div>
                    <span className="micro-type text-fg/40 mb-3 block">{services[1].number}</span>
                    <h4 className="text-3xl font-black uppercase tracking-tight text-fg">{services[1].title}</h4>
                 </div>
                 <div className="flex-1 my-6 relative">
                    <BentoVisual id={services[1].id} />
                 </div>
                 <p className="text-fg/60 font-medium text-sm leading-relaxed">{services[1].description}</p>
              </div>
           </div>

           {/* 3. Automation (col-span-1) */}
           <div className="bento-item group relative col-span-1 row-span-1 rounded-[24px] bg-white border border-fg/10 overflow-hidden hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <div>
                       <span className="micro-type text-fg/40 mb-3 block">{services[2].number}</span>
                       <h4 className="text-2xl font-black uppercase tracking-tight max-w-[150px] leading-none text-fg">{services[2].title}</h4>
                    </div>
                    <div className="w-12 h-12 shrink-0">
                       <BentoVisual id={services[2].id} />
                    </div>
                 </div>
                 <p className="text-fg/60 font-medium text-sm mt-4 leading-relaxed">{services[2].description}</p>
              </div>
           </div>

           {/* 4. UI/UX Design (col-span-1) */}
           <div className="bento-item group relative col-span-1 row-span-1 rounded-[24px] bg-white border border-fg/10 overflow-hidden hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <div>
                       <span className="micro-type text-fg/40 mb-3 block">{services[3].number}</span>
                       <h4 className="text-2xl font-black uppercase tracking-tight max-w-[150px] leading-none text-fg">{services[3].title}</h4>
                    </div>
                 </div>
                 <p className="text-fg/60 font-medium text-sm mt-4 leading-relaxed relative z-10">{services[3].description}</p>
                 <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
                    <BentoVisual id={services[3].id} />
                 </div>
              </div>
           </div>

           {/* 5. AI Integration (col-span-2) */}
           <div className="bento-item group relative col-span-1 md:col-span-2 row-span-1 rounded-[24px] bg-white border border-fg/10 overflow-hidden hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                 <div>
                    <span className="micro-type text-fg/40 mb-3 block">{services[4].number}</span>
                    <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-fg">{services[4].title}</h4>
                 </div>
                 <p className="text-fg/60 max-w-md font-medium leading-relaxed">{services[4].description}</p>
              </div>
              <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <BentoVisual id={services[4].id} />
              </div>
           </div>

           {/* 6. System Architecture (col-span-1) */}
           <div className="bento-item group relative col-span-1 row-span-1 rounded-[24px] bg-primary/5 border border-primary/20 overflow-hidden hover:bg-primary/10 transition-colors duration-500 cursor-pointer shadow-sm">
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                 <div>
                    <span className="micro-type text-primary/80 mb-3 block">{services[5].number}</span>
                    <h4 className="text-2xl font-black uppercase tracking-tight text-primary leading-none">{services[5].title}</h4>
                 </div>
                 <p className="text-fg/80 font-medium text-sm mt-4 leading-relaxed">{services[5].description}</p>
              </div>
              <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply">
                 <BentoVisual id={services[5].id} />
              </div>
           </div>
           
        </div>
      </div>
    </section>
  );
}
