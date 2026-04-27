"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processSteps = [
  {
    number: "01",
    title: "DISCOVERY & ARCHITECTURE",
    description: "We dive deep into your business logic, identifying bottlenecks and mapping out a robust system architecture tailored to your goals.",
  },
  {
    number: "02",
    title: "INTERFACE DIRECTION",
    description: "Crafting pixel-perfect, user-centered designs. We balance striking aesthetics with functional precision for an intuitive experience.",
  },
  {
    number: "03",
    title: "ENGINEERING & AI",
    description: "Building the scalable core. We write clean code and integrate intelligent AI flows to bring the architecture to life securely.",
  },
  {
    number: "04",
    title: "TESTING & DEPLOYMENT",
    description: "Rigorous performance testing and QA. We ensure the system is lightning-fast, bug-free, and seamlessly deployed to production.",
  },
  {
    number: "05",
    title: "SCALE & AUTOMATION",
    description: "Launch is just the beginning. We automate your workflows and scale the infrastructure dynamically as your user base grows.",
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
    <section ref={sectionRef} id="services" className="relative w-full h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
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
                
                {/* Huge Number */}
                <div 
                   className="step-number absolute top-1/2 left-0 -translate-y-1/2 text-[clamp(8rem,18vw,18rem)] font-black text-transparent opacity-10 pointer-events-none select-none" 
                   style={{ WebkitTextStroke: "2px #fff" }}
                >
                   {step.number}
                </div>

                {/* Node dot */}
                <div className="step-dot absolute top-1/2 left-10 w-5 h-5 bg-[#050505] border-[3px] border-primary rounded-full -translate-y-1/2 z-30 shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>

                {/* Connecting line */}
                <div className={`step-line absolute left-[49px] w-px bg-primary/40 z-20 ${index % 2 === 0 ? "bottom-[50%] h-12" : "top-[50%] h-12"}`}></div>
                
                {/* Content above/below line */}
                <div className={`step-content absolute left-10 flex flex-col gap-4 w-full pr-10 z-30 ${index % 2 === 0 ? "bottom-[50%] mb-12" : "top-[50%] mt-12"}`}>
                   <h4 className="text-[clamp(1.5rem,2.2vw,2.5rem)] font-black uppercase tracking-tight leading-[1.05] max-w-sm text-white">
                     {step.title}
                   </h4>
                   <p className="text-white/60 text-[15px] md:text-[17px] max-w-[280px] md:max-w-[340px] leading-relaxed font-medium">
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
