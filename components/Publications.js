import { FaBookOpen } from "react-icons/fa";

export default function Publications({ publications }) {
  if (!publications?.items?.length) return null;

  return (
    <section className="px-6 pb-20 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-4xl font-extrabold underline-accent">
          <span className="gradient-text">{publications.heading}</span>
        </h2>

        <div className="mt-12 space-y-6">
          {publications.items.map((pub, idx) => (
            <div key={idx} data-reveal className="section-card flex gap-5 rounded-xl2 p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--accent2-rgb)/0.12)] text-xl text-[rgb(var(--accent2-rgb))]">
                <FaBookOpen />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-snug">{pub.title}</h3>
                <p className="mt-2 text-sm text-soft">
                  Published in: <span className="font-semibold">{pub.venue}</span>
                  {pub.venueFull ? ` - ${pub.venueFull}` : ""}
                </p>
                {pub.tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {pub.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
