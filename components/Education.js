export default function Education({ education }) {
  if (!education?.items?.length) return null;

  return (
    <section id="education" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-4xl font-extrabold underline-accent">
          <span className="gradient-text">{education.heading}</span>
        </h2>

        <div className="relative mt-14 space-y-8 border-l-2 border-[rgb(var(--accent-rgb)/0.35)] pl-8">
          {education.items.map((ed, idx) => (
            <div key={idx} data-reveal className="relative">
              <span className="timeline-dot absolute -left-[38px] top-2 h-4 w-4 rounded-full ring-4 ring-[var(--bg)]" />
              <div className="section-card rounded-xl2 p-6 shadow-sm sm:p-8">
                <p className="mb-2 text-sm font-semibold text-[rgb(var(--accent2-rgb))]">{ed.period}</p>
                <h3 className="text-xl font-bold">{ed.degree}</h3>
                <p className="mt-1 font-semibold text-soft">{ed.institution}</p>
                {ed.details && <p className="mt-1 text-sm text-soft">{ed.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
