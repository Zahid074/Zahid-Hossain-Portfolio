"use client";

import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { imageSrc } from "@/lib/sanity";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const img = imageSrc(project.image);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 py-10 sm:p-8">
      <div className="section-card relative w-full max-w-3xl overflow-y-auto rounded-xl2 shadow-2xl" style={{ maxHeight: "calc(100vh - 5rem)" }}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
        >
          <FaTimes />
        </button>

        {img && (
          <div className="w-full overflow-hidden rounded-t-xl2" style={{ aspectRatio: project.aspectRatio || "16 / 9" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={project.title} className="h-full w-full object-cover" />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-extrabold">{project.title}</h3>
            {project.badge && (
              <span className="rounded-full bg-[rgb(var(--accent2-rgb)/0.15)] px-3 py-1 text-xs font-semibold text-[rgb(var(--accent2-rgb))]">
                {project.badge}
              </span>
            )}
            {project.status && (
              <span className="rounded-full bg-[rgb(var(--accent-rgb)/0.12)] px-3 py-1 text-xs font-semibold text-[rgb(var(--accent-rgb))]">
                {project.status}
              </span>
            )}
          </div>

          {project.tags?.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-soft">
                  {t}
                </span>
              ))}
            </div>
          )}

          {project.bullets?.length > 0 && (
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-soft">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold"
              >
                <FaGithub /> Repository
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold"
              >
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
