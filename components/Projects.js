"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects({ projects, previousProjects }) {
  const [openProject, setOpenProject] = useState(null);

  const hasRecent = projects?.items?.length > 0;
  const hasPrevious = previousProjects?.items?.length > 0;

  if (!hasRecent && !hasPrevious) return null;

  return (
    <section id="projects" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {hasRecent && (
          <>
            <h2 className="text-center text-4xl font-extrabold underline-accent">
              <span className="gradient-text">{projects.heading}</span>
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.items.map((project) => (
                <ProjectCard key={project.title} project={project} onOpen={setOpenProject} />
              ))}
            </div>
          </>
        )}

        {hasPrevious && (
          <>
            <h2 className={`text-center text-4xl font-extrabold underline-accent ${hasRecent ? "mt-20" : ""}`}>
              <span className="gradient-text">{previousProjects.heading}</span>
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {previousProjects.items.map((project) => (
                <ProjectCard key={project.title} project={project} onOpen={setOpenProject} />
              ))}
            </div>
          </>
        )}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
