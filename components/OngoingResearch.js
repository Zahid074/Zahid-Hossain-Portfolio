export default function OngoingResearch({ ongoingResearch }) {
  if (!ongoingResearch?.items?.length) return null;

  return (
    <section className="px-6 pb-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-extrabold underline-accent">
          <span className="gradient-text">{ongoingResearch.heading}</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ongoingResearch.items.map((item) => (
            <div
              key={item.title}
              data-reveal
              className="group rounded-xl2 border-2 border-transparent bg-black/5 p-7 shadow-sm transition hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb))] hover:shadow-xl dark:bg-white/5"
            >
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                {item.status && (
                  <span className="rounded-full bg-[rgb(var(--accent2-rgb)/0.18)] px-3 py-1 text-xs font-semibold text-[rgb(var(--accent2-rgb))]">
                    {item.status}
                  </span>
                )}
                {item.tag && (
                  <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-soft">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="flex items-start gap-2 text-sm text-soft">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgb(var(--accent-rgb))]" />
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
