export default function About({ about }) {
  if (!about?.paragraphs?.length) return null;

  return (
    <section id="about" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-extrabold underline-accent">
          <span className="gradient-text">{about.heading}</span>
        </h2>

        <div data-reveal className="section-card mt-12 rounded-xl2 border-l-4 border-[rgb(var(--accent-rgb))] p-8 shadow-sm transition-all duration-300 hover:border-l-8 hover:shadow-xl sm:p-10">
          {about.paragraphs.map((p, idx) => (
            <p key={idx} className="mb-4 text-soft leading-relaxed last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}