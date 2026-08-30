import { getIcon } from "@/lib/iconMap";

function AchievementColumn({ heading, items, icon: HeadingIcon }) {
  return (
    <div data-reveal className="section-card rounded-xl2 p-7 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3 border-b border-black/5 pb-4">
        <HeadingIcon className="text-xl text-[rgb(var(--accent-rgb))]" />
        <h3 className="text-xl font-bold">{heading}</h3>
      </div>
      <div className="space-y-6">
        {items.map((item, idx) => {
          const Icon = getIcon(item.icon);
          return (
            <div key={idx} className="flex gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent-rgb)/0.1)] text-[rgb(var(--accent-rgb))]">
                <Icon />
              </div>
              <div>
                <h4 className="font-bold">{item.title}</h4>
                {item.meta && (
                  <p className="text-sm font-semibold text-[rgb(var(--accent2-rgb))]">{item.meta}</p>
                )}
                <p className="mt-1 text-sm text-soft">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Achievements({ achievements }) {
  const hasAwards = achievements?.awards?.items?.length > 0;
  const hasExtra = achievements?.extracurricular?.items?.length > 0;
  if (!hasAwards && !hasExtra) return null;

  const TrophyIcon = getIcon("award");
  const StarIcon = getIcon("medal");

  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold underline-accent">
          <span className="gradient-text">{achievements.heading}</span>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {hasAwards && (
            <AchievementColumn
              heading={achievements.awards.heading}
              items={achievements.awards.items}
              icon={TrophyIcon}
            />
          )}
          {hasExtra && (
            <AchievementColumn
              heading={achievements.extracurricular.heading}
              items={achievements.extracurricular.items}
              icon={StarIcon}
            />
          )}
        </div>
      </div>
    </section>
  );
}
