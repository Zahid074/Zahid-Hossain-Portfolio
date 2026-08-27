"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faq?.items?.length) return null;

  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        {faq.eyebrow && <p className="mb-2 text-xs font-bold tracking-[0.2em] text-soft">{faq.eyebrow}</p>}
        <h2 className="text-4xl font-extrabold underline-accent">
          <span className="gradient-text">{faq.heading}</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faq.items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="section-card overflow-hidden rounded-xl2 shadow-sm">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <FaChevronDown
                  className={`flex-shrink-0 text-soft transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-soft">{item.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
