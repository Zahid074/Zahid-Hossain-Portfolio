"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ACCENTS = [
  { key: "blue", className: "accent-blue", swatch: "bg-blue-600" },
  { key: "purple", className: "accent-purple", swatch: "bg-purple-600" },
  { key: "green", className: "accent-green", swatch: "bg-green-600" },
];

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [accent, setAccent] = useState("blue");

  useEffect(() => {
    const savedDark = localStorage.getItem("theme-dark") === "1";
    const savedAccent = localStorage.getItem("theme-accent") || "blue";
    setDark(savedDark);
    setAccent(savedAccent);
    applyTheme(savedDark, savedAccent);
  }, []);

  function applyTheme(isDark, accentKey) {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    ACCENTS.forEach((a) => root.classList.remove(a.className));
    const found = ACCENTS.find((a) => a.key === accentKey) || ACCENTS[0];
    root.classList.add(found.className);
  }

  function toggleDark() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme-dark", next ? "1" : "0");
    applyTheme(next, accent);
  }

  function chooseAccent(key) {
    setAccent(key);
    localStorage.setItem("theme-accent", key);
    applyTheme(dark, key);
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        {ACCENTS.map((a) => (
          <button
            key={a.key}
            aria-label={`${a.key} accent theme`}
            onClick={() => chooseAccent(a.key)}
            className={`h-4 w-4 rounded-full ${a.swatch} ring-offset-2 transition ${
              accent === a.key ? "ring-2 ring-white/80" : "opacity-70 hover:opacity-100"
            }`}
          />
        ))}
      </div>
      <button
        onClick={toggleDark}
        aria-label="Toggle dark mode"
        className="text-white/90 hover:text-white transition"
      >
        {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
      </button>
    </div>
  );
}
