import { resolvePlatform } from "@/lib/iconDetect";

export default function Footer({ footer, siteMeta }) {
  return (
    <footer style={{ backgroundColor: "var(--navbar-bg)" }} className="px-6 py-10 text-white/80 lg:px-10">
      {footer?.socialLinks?.length > 0 && (
        <div className="mb-6 flex justify-center gap-6 text-lg">
          {footer.socialLinks.map((link) => {
            const { icon: Icon, label } = resolvePlatform(link.url);
            return (
              <a
                key={link.url}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label || label}
                className="transition hover:text-white"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      )}
      <p className="text-center text-xs text-white/50">
        &copy; {siteMeta?.copyrightYear} {siteMeta?.copyrightName}. All rights reserved.
      </p>
    </footer>
  );
}
