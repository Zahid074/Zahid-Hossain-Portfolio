import { FaUserCircle } from "react-icons/fa";

export default function References({ references }) {
  if (!references?.items?.length) return null;

  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-extrabold underline-accent">
          <span className="gradient-text">{references.heading}</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {references.items.map((ref, idx) => (
            <div key={idx} data-reveal className="section-card rounded-xl2 border-l-4 border-[rgb(var(--accent-rgb))] p-7 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <FaUserCircle className="text-soft" /> {ref.name}
              </h3>
              <p className="text-sm text-soft">{ref.title}</p>
              <p className="text-sm text-soft">{ref.department}</p>
              <p className="text-sm text-soft">{ref.institution}</p>
              {ref.email && (
                <a
                  href={`mailto:${ref.email}`}
                  className="mt-3 inline-block text-sm font-semibold text-[rgb(var(--accent-rgb))] hover:underline"
                >
                  {ref.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
