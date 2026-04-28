"use client";

import { useState } from "react";

const contactOptions = [
  {
    label: "Start a Project",
    subtext: "Send us an email",
    href: "mailto:atlasjo.505@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    )
  },
  {
    label: "Chat on WhatsApp",
    subtext: "Fastest response",
    href: "https://wa.me/962795719957",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    )
  },
  {
    label: "Book a Consultation",
    subtext: "Schedule a free 15-min call",
    href: "#contact", 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end">
      
      {/* Premium Minimal Panel */}
      <div 
        className={`mb-5 w-[calc(100vw-3rem)] max-w-[300px] bg-[#050505] text-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden origin-bottom-right transition-all duration-200 ease-out ${isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}`}
      >
        <div className="p-7">
          <h3 className="text-xl font-medium tracking-tight mb-1 text-white">Let&apos;s Connect</h3>
          <p className="text-xs text-white/50 mb-7 font-medium">Choose how you&apos;d like to reach us.</p>

          <div className="flex flex-col gap-3">
            {contactOptions.map((option, idx) => (
              <a 
                key={idx}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="contact-option group flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/70 group-hover:text-white group-hover:scale-110 transition-transform duration-200">
                  {option.icon}
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-white/90 tracking-wide group-hover:text-white transition-colors duration-200">{option.label}</h4>
                  <p className="text-[11px] text-white/40 mt-0.5 group-hover:text-white/60 transition-colors duration-200">{option.subtext}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Trigger FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all duration-200 ease-out z-50 overflow-hidden ${isOpen ? 'bg-[#111111] text-white scale-95' : 'bg-[#050505] text-white hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)]'}`}
        aria-label="Toggle Menu"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

        <svg 
          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
          className={`absolute transition-all duration-300 ease-out ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100 group-hover:-translate-y-0.5'}`}
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        <svg 
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
          className={`absolute transition-all duration-300 ease-out ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>

      </button>
    </div>
  );
}
