"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ navigation, brandShort, brandRest }) {
  const [open, setOpen] = useState(false);
  if (!navigation?.length) return null;

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "var(--navbar-bg)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <span className="text-white">
            <span className="text-white">{brandShort}</span>
            <span className="gradient-text">{brandRest}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="text-white/90 transition hover:text-white md:hidden"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 px-6 pb-4 md:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
