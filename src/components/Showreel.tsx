"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ShowreelProps {
  videoUrl?: string;
  posterUrl?: string;
}

export default function Showreel({ videoUrl, posterUrl }: ShowreelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="work" className="pb-32 pt-4 md:pb-48 md:pt-8">
      <div className="site-shell">
        <div
        ref={containerRef}
        className="relative w-full aspect-[16/9] rounded-[8px] overflow-hidden cursor-pointer group"
        onClick={handlePlay}
        style={{ backgroundColor: "#060606" }}
      >
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            loop
            preload="metadata"
          />
        ) : (
          <div className="absolute inset-0">
            <svg
              className="absolute inset-0 h-full w-full opacity-80"
              viewBox="0 0 1440 810"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <rect width="1440" height="810" fill="#050505" />
              {Array.from({ length: 22 }).map((_, i) => (
                <path
                  key={i}
                  d={`M-40 ${520 + i * 8} C 220 ${350 + i * 5}, 395 ${610 - i * 7}, 660 ${
                    448 + i * 2
                  } S 1100 ${315 + i * 8}, 1480 ${470 + i * 4}`}
                  fill="none"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="1"
                  strokeDasharray="1 16"
                  strokeLinecap="round"
                />
              ))}
              {Array.from({ length: 16 }).map((_, i) => (
                <path
                  key={`b-${i}`}
                  d={`M-30 ${650 + i * 7} C 260 ${485 + i * 3}, 515 ${735 - i * 9}, 780 ${
                    590 - i * 3
                  } S 1160 ${450 + i * 7}, 1480 ${555 + i * 5}`}
                  fill="none"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="1"
                  strokeDasharray="1 18"
                  strokeLinecap="round"
                />
              ))}
            </svg>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div
            className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
              isPlaying
                ? "bg-white/20 scale-90"
                : "bg-white/90 group-hover:scale-110 group-hover:bg-white"
            }`}
          >
            {isPlaying ? (
              <div className="flex gap-1.5">
                <div className="w-[3px] h-5 bg-white rounded-full" />
                <div className="w-[3px] h-5 bg-white rounded-full" />
              </div>
            ) : (
              <svg
                width="16"
                height="20"
                viewBox="0 0 18 22"
                fill="none"
                className="ml-1"
              >
                <path d="M18 11L0 22V0L18 11Z" fill="#0B0B0B" />
              </svg>
            )}
          </div>
        </div>

        <span className="absolute top-7 left-7 micro-type text-white z-10 font-bold">
          WHO WE ARE
        </span>
        <span className="absolute bottom-7 left-7 micro-type text-white z-10 font-bold">
          PLAY VIDEO
        </span>
      </div>
      </div>
    </section>
  );
}
