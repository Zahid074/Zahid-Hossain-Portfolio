"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    function onMove(e) {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }
    }
    window.addEventListener("mousemove", onMove);

    const interactables = document.querySelectorAll("a, button, [data-reveal]");
    function grow() {
      ringRef.current?.classList.add("h-10", "w-10");
      ringRef.current?.classList.remove("h-6", "w-6");
    }
    function shrink() {
      ringRef.current?.classList.remove("h-10", "w-10");
      ringRef.current?.classList.add("h-6", "w-6");
    }
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-2 w-2 rounded-full bg-[rgb(var(--accent-rgb))] sm:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[998] hidden h-6 w-6 rounded-full border-2 border-[rgb(var(--accent-rgb))] transition-all duration-150 ease-out sm:block"
      />
    </>
  );
}
