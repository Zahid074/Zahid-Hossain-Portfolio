import { getIcon } from "@/lib/iconMap";

export default function Skills({ skills }) {
  if (!skills?.categories?.length) return null;

  return (
    <section id="skills" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {skills.eyebrow && (
            <p className="mb-2 text-xs font-bold tracking-[0.2em] text-soft">{skills.eyebrow}</p>
          )}
          <h2 className="text-4xl font-extrabold underline-accent">
            <span className="gradient-text">{skills.heading}</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((cat) => {
            const Icon = getIcon(cat.icon);
            return (
              <div key={cat.title} className="group section-card rounded-xl2 border-2 border-transparent p-7 shadow-sm transition hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb))] hover:shadow-lg">
                <div className="mb-5 flex items-center gap-3 border-b border-black/5 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--accent-rgb)/0.1)] text-[rgb(var(--accent-rgb))] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[rgb(var(--accent-rgb))] group-hover:to-[rgb(var(--accent2-rgb))] group-hover:text-white">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="w-fit rounded-full px-3 py-1.5 text-sm text-soft transition-all duration-200 hover:scale-105 hover:bg-[rgb(var(--accent-rgb))] hover:text-white hover:shadow-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
