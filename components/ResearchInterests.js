import { getIcon } from "@/lib/iconMap";

export default function ResearchInterests({ researchInterests }) {
  if (!researchInterests?.items?.length) return null;

  return (
    <section className="px-6 pb-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-extrabold underline-accent">
          <span className="gradient-text">{researchInterests.heading}</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.title}
                className="group section-card rounded-xl2 border-2 border-transparent p-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb))] hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[rgb(var(--accent-rgb)/0.1)] text-2xl text-[rgb(var(--accent-rgb))] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[rgb(var(--accent-rgb))] group-hover:to-[rgb(var(--accent2-rgb))] group-hover:text-white">
                  <Icon />
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-soft">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
