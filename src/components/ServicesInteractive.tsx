"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processSteps = [
  {
    number: "01",
    title: "BUSINESS & WORKFLOW ANALYSIS",
    description: "We analyze your business workflows, identify bottlenecks, and define where automation and systems can create real impact.",
  },
  {
    number: "02",
    title: "SYSTEM DESIGN",
    description: "We design a complete system architecture — from data flow to user experience — built for clarity and scalability.",
  },
  {
    number: "03",
    title: "DEVELOPMENT & INTEGRATION",
    description: "We build your platform and integrate all tools, APIs, and automation flows into one seamless system.",
  },
  {
    number: "04",
    title: "TESTING & OPTIMIZATION",
    description: "We rigorously test performance, fix bottlenecks, and optimize your system for speed, reliability, and stability.",
  },
  {
    number: "05",
    title: "LAUNCH & AUTOMATION",
    description: "We launch your system and activate automation workflows to reduce manual work and improve efficiency from day one.",
  },
  {
    number: "06",
    title: "SCALING & GROWTH",
    description: "As your business grows, we continuously improve and scale your systems to handle more users, data, and operations.",
  },
];

export default function ServicesInteractive() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const scrollContainer = scrollContainerRef.current;
      const section = sectionRef.current;
      if (!scrollContainer || !section) return;

      const items = gsap.utils.toArray<HTMLElement>(".process-step");
      
      // Calculate how far to move left
      const getScrollAmount = () => -(scrollContainer.scrollWidth - window.innerWidth);

      // Horizontal Scroll Tween
      const tween = gsap.to(scrollContainer, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1, // smooth scrubbing
          end: () => `+=${scrollContainer.scrollWidth}`, 
          invalidateOnRefresh: true, // recalculate on resize
        }
      });

      // Progress line animation
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollContainer.scrollWidth}`,
            invalidateOnRefresh: true,
          }
        });
      }

      // Staggered reveal for elements inside the steps
      items.forEach((item) => {
         const content = item.querySelector(".step-content");
         const number = item.querySelector(".step-number");
         const dot = item.querySelector(".step-dot");
         const line = item.querySelector(".step-line");
         
         gsap.from(content, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
               trigger: item,
               containerAnimation: tween,
               start: "left 80%",
               toggleActions: "play none none reverse",
            }
         });

         gsap.from([dot, line], {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
               trigger: item,
               containerAnimation: tween,
               start: "left 85%",
               toggleActions: "play none none reverse",
            }
         });

         gsap.from(number, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
               trigger: item,
               containerAnimation: tween,
               start: "left 85%",
               toggleActions: "play none none reverse",
            }
         });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative w-full h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
      {/* Header stays fixed during pin */}
      <div className="absolute top-16 md:top-24 left-6 md:left-12 lg:left-24 z-20 pointer-events-none">
        <h2 className="micro-type font-black text-white/50 tracking-[0.2em] mb-3">OUR PROCESS</h2>
        <h3 className="display-type text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[1] text-white">
           HOW WE <span className="text-primary">BUILD</span>
        </h3>
      </div>

      {/* The main horizontal scrolling container */}
      <div className="flex-1 flex items-center mt-10 md:mt-20">
        <div ref={scrollContainerRef} className="relative flex flex-nowrap w-max h-[70vh] items-center px-[10vw] md:px-[20vw] lg:px-[15vw]">
           
           {/* Background tracking line */}
           <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
           
           {/* Active tracking line */}
           <div 
             ref={progressBarRef} 
             className="absolute top-1/2 left-0 right-0 h-[2px] bg-primary origin-left scale-x-0 -translate-y-1/2 z-10 shadow-[0_0_10px_rgba(var(--primary),0.5)]"
           ></div>

           {processSteps.map((step, index) => (
              <div key={index} className="process-step relative z-20 flex flex-col justify-center w-[85vw] md:w-[45vw] lg:w-[32vw] h-full shrink-0">
                 
                 {/* Huge Number — always centered behind content */}
                 <div 
                    className="step-number absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,18vw,16rem)] font-black text-transparent opacity-[0.07] pointer-events-none select-none leading-none" 
                    style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.4)" }}
                 >
                    {step.number}
                 </div>

                 {/* Node dot — always on the timeline */}
                 <div className="step-dot absolute top-1/2 left-10 w-4 h-4 bg-[#050505] border-2 border-primary rounded-full -translate-y-1/2 z-30 shadow-[0_0_12px_rgba(37,99,235,0.5)]"></div>

                 {/* Small indicator dot — decorative */}
                 <div className="step-dot absolute top-[30%] right-[20%] w-2 h-2 bg-primary rounded-full z-20"></div>

                 {/* Connecting line — always goes up from the dot */}
                 <div className="step-line absolute left-[47px] bottom-[50%] w-px h-16 bg-primary/30 z-20"></div>
                 
                 {/* Content — always above the timeline */}
                 <div className="step-content absolute left-10 bottom-[50%] mb-20 flex flex-col gap-3 w-full pr-10 z-30">
                    <h4 className="text-[clamp(1.4rem,2vw,2.2rem)] font-black uppercase tracking-tight leading-[1.1] max-w-sm text-white">
                      {step.title}
                    </h4>
                    <p className="text-white/55 text-[14px] md:text-[16px] max-w-[280px] md:max-w-[320px] leading-relaxed font-medium">
                      {step.description}
                    </p>
                 </div>

              </div>
            ))}
           
           {/* Extra spacing at the end so the last item scrolls fully into view */}
           <div className="w-[10vw] md:w-[20vw] shrink-0"></div>
        </div>
      </div>
    </section>
  );
}
