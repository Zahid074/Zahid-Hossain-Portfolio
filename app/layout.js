import "./globals.css";
import { getContent } from "@/lib/data";
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateMetadata() {
  const content = await getContent();
  const profile = content?.profile || {};
  return {
    title: profile.name ? `${profile.name} | Portfolio` : "Portfolio",
    description: profile.titles?.join(" | ") || "Personal portfolio",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Loaded at runtime in the browser (not at build time), so the
            build never depends on internet access. Falls back cleanly
            to system fonts if unreachable. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        <ParticleBackground />
        <CursorGlow />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
