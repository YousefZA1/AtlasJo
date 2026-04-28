"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Loader from "@/components/Loader";

export default function ClientShell() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const latestPosition = useRef({ x: 0, y: 0 });
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    cursor.style.display = "block";

    const renderCursor = () => {
      frameRef.current = null;
      cursor.style.transform = `translate3d(${latestPosition.current.x}px, ${latestPosition.current.y}px, 0) translate(-50%, -50%)`;
    };

    const moveCursor = (event: MouseEvent) => {
      latestPosition.current = { x: event.clientX, y: event.clientY };

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(renderCursor);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-dot hidden" />

      {showLoader && (
        <Loader onReveal={() => undefined} onComplete={handleLoaderComplete} />
      )}
    </>
  );
}
