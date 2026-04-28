"use client";

import React, { useState } from 'react';

const allProjects = [
  {
    number: "01",
    title: "Real Estate CRM Platform",
    category: "WEB APPS",
    description: "A comprehensive CRM solution tailored for real estate agencies to manage leads and properties.",
  },
  {
    number: "02",
    title: "E-commerce Website",
    category: "WEBSITES",
    description: "A high-performance online store with seamless checkout and inventory management.",
  },
  {
    number: "03",
    title: "Business Analytics Dashboard",
    category: "WEB APPS",
    description: "Real-time analytics platform providing actionable insights for enterprise businesses.",
  },
  {
    number: "04",
    title: "Lead Automation Workflow",
    category: "AUTOMATION",
    description: "Automated pipeline that captures, nurtures, and qualifies leads 24/7.",
  },
  {
    number: "05",
    title: "Fitness Mobile App",
    category: "MOBILE APPS",
    description: "A mobile application for personalized workout plans and progress tracking.",
  }
];

const categories = ["ALL PROJECTS", "WEBSITES", "WEB APPS", "AUTOMATION", "MOBILE APPS"];

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState("ALL PROJECTS");

  const filteredProjects = activeFilter === "ALL PROJECTS" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 md:py-32 bg-[#F9FAFB] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* 1. HEADER (2 columns) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <div className="lg:w-2/3">
            <span className="text-sm font-bold tracking-[0.2em] text-[#111111]/40 uppercase mb-4 block">
              OUR WORK
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] mb-6">
              SYSTEMS WE BUILD.<br/>
              <span className="text-[#2563EB]">RESULTS WE DELIVER.</span>
            </h2>
            <p className="text-[#111111]/60 text-lg md:text-xl font-medium">
              A selection of our most impactful projects.
            </p>
          </div>
          
          <div className="lg:w-1/3 flex flex-col items-start lg:items-end text-left lg:text-right gap-4">
            <a href="#" className="font-bold text-[#111111] hover:text-[#2563EB] transition-colors inline-flex items-center gap-2 uppercase tracking-wide text-sm">
              VIEW ALL PROJECTS 
              <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>

        {/* 2. FILTER TABS (HORIZONTAL ROW) */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-colors ${
                activeFilter === cat 
                  ? "bg-[#111111] text-white" 
                  : "bg-transparent hover:bg-[#111111]/5 text-[#111111]/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. PROJECT HORIZONTAL SCROLL (Side by Side Slider) */}
        {/* Added CSS classes to hide scrollbar while keeping functionality */}
        <div 
          className="flex overflow-x-auto gap-6 lg:gap-8 pb-12 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24"
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={project.number} 
              className="bg-white rounded-[24px] border border-[#111111]/5 overflow-hidden flex flex-col shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow min-w-[85vw] md:min-w-[400px] lg:min-w-[420px] snap-center shrink-0"
            >
              
              {/* TOP/MAIN: Large image preview with Number */}
              <div className="relative w-full h-[240px] bg-[#F3F4F6] p-6 border-b border-[#111111]/5 flex flex-col">
                <span className="text-[#111111]/40 font-mono font-bold text-sm mb-4">
                  {project.number}
                </span>
                {/* Image Placeholder */}
                <div className="w-full flex-1 bg-[#E5E7EB] rounded-xl border border-[#111111]/10 hover:bg-[#E5E7EB]/80 transition-colors cursor-pointer"></div>
              </div>

              {/* BOTTOM CONTENT */}
              <div className="p-8 flex flex-col flex-1 relative">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#111111]/60 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#111111] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#111111]/60 text-sm font-medium line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* BOTTOM RIGHT: Circular button */}
                <div className="absolute bottom-8 right-8">
                  <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#111111] hover:bg-[#2563EB] hover:text-white transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          ))}

          {/* Empty state when filtering yields no results */}
          {filteredProjects.length === 0 && (
            <div className="w-full flex justify-center py-12 text-[#111111]/40 font-medium">
              No projects found in this category.
            </div>
          )}
        </div>

        {/* BOTTOM CENTERED CTA BUTTON */}
        <div className="flex justify-center mt-4">
          <button className="px-8 py-4 bg-[#2563EB] text-white rounded-full font-bold uppercase tracking-wide hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/20">
            START YOUR PROJECT
          </button>
        </div>

      </div>
    </section>
  );
}
