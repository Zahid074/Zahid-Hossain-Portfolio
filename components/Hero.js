"use client";

import { useEffect, useState } from "react";
import { FaFileDownload, FaCode, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { resolvePlatform } from "@/lib/iconDetect";
import { downloadCV } from "@/lib/cvGenerator";
import { urlFor } from "@/lib/sanity";

export default function Hero({ content }) {
  const profile = content?.profile || {};
  const photos = profile.photos?.length ? profile.photos : [];
  const [activePhoto, setActivePhoto] = useState(0);

    useEffect(() => {
    if (photos.length < 2) return;
    const rawInterval = profile.photoSlideIntervalMs;
    const safeInterval = rawInterval && rawInterval >= 500 ? rawInterval : 3000;
    const interval = setInterval(() => {
      setActivePhoto((i) => (i + 1) % photos.length);
    }, safeInterval);
    return () => clearInterval(interval);
  }, [photos.length, profile.photoSlideIntervalMs]);

  const getImageSrc = (photo) => {
    if (!photo) return "";
    if (typeof photo === "string") return photo;
    try {
      return urlFor(photo).url();
    } catch (e) {
      return "";
    }
  };

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-3xl font-bold sm:text-4xl">Hi, I&apos;m</p>
          <h1 className="gradient-text text-4xl font-extrabold leading-tight sm:text-6xl">
            {profile.name || "Your Name"}
          </h1>

          {profile.titles?.length > 0 && (
            <p className="mt-4 max-w-xl text-lg text-soft sm:text-xl">
              {profile.titles.join(" | ")}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-soft">
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:opacity-80">
                <FaEnvelope className="text-[rgb(var(--accent-rgb))]" /> {profile.email}
              </a>
            )}
            {profile.phone && (
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-[rgb(var(--accent-rgb))]" /> {profile.phone}
              </span>
            )}
            {profile.location && (
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[rgb(var(--accent-rgb))]" /> {profile.location}
              </span>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => downloadCV(content)}
              className="btn-primary flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition"
            >
              <FaFileDownload /> Get CV
            </button>
            <a
              href="#projects"
              className="btn-outline flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition"
            >
              <FaCode /> Projects
            </a>
            {profile.socialLinks?.map((link) => {
              const { icon: Icon, label } = resolvePlatform(link.url);
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition"
                >
                  <Icon /> {link.label || label}
                </a>
              );
            })}
          </div>
        </div>

        {photos.length > 0 && (
          <div className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72">
            <div className="hero-photo-glow absolute inset-0" />
            <div className="hero-photo-frame relative h-full w-full overflow-hidden">
              {photos.map((photo, idx) => {
                const src = getImageSrc(photo);
                if (!src) return null;
                return (
                  <img
                    key={idx}
                    src={src}
                    alt={`${profile.name || "Profile"} portrait ${idx + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      idx === activePhoto ? "opacity-100" : "opacity-0"
                    }`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}