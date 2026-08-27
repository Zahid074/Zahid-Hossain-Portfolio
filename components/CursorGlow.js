"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    function onMove(e) {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-6 w-6 rounded-full border-2 border-[rgb(var(--accent-rgb))] transition-transform duration-75 ease-out sm:block"
    />
  );
}