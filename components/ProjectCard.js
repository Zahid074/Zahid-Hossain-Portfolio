"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { imageSrc } from "@/lib/sanity";

export default function ProjectCard({ project, onOpen }) {
  const img = imageSrc(project.image);

  return (
    <div className="section-card group flex flex-col overflow-hidden rounded-xl2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {img && (
        <button
          onClick={() => onOpen(project)}
          className="block w-full overflow-hidden bg-white"
          style={{ aspectRatio: "16 / 10" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            alt={project.title}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='250'><rect width='100%' height='100%' fill='%23dbe3f0'/></svg>";
            }}
          />
        </button>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-start justify-between gap-2">
          <button onClick={() => onOpen(project)} className="text-left">
            <h3 className="text-lg font-bold leading-snug hover:underline">
              {project.title}
              {project.badge && (
                <span className="ml-2 inline-block rounded-full bg-[rgb(var(--accent2-rgb)/0.15)] px-2.5 py-0.5 align-middle text-xs font-semibold text-[rgb(var(--accent2-rgb))]">
                  {project.badge}
                </span>
              )}
            </h3>
          </button>
          <div className="flex flex-shrink-0 gap-3 pt-1 text-soft">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="hover:text-[rgb(var(--accent-rgb))]">
                <FaGithub />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo" className="hover:text-[rgb(var(--accent-rgb))]">
                <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>

        {project.status && (
          <span className="mb-3 inline-block w-fit rounded-full bg-[rgb(var(--accent-rgb)/0.12)] px-3 py-1 text-xs font-semibold text-[rgb(var(--accent-rgb))]">
            {project.status}
          </span>
        )}

        {project.tags?.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-soft">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}

        {project.bullets?.length > 0 && (
          <ul className="list-disc space-y-2 pl-4 text-sm text-soft">
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
