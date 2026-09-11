"use client";

import { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function SoundManager() {
  const bgMusicRef = useRef(null);
  const clickSoundRef = useRef(null);
  const [musicOn, setMusicOn] = useState(true);
  const startedRef = useRef(false);

  useEffect(() => {
    // saved preference (default: on)
    const saved = localStorage.getItem("sound-music-on");
    const initialOn = saved === null ? true : saved === "1";
    setMusicOn(initialOn);

    bgMusicRef.current = new Audio("/audio/background-music.mp3");
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = 0.25;

    clickSoundRef.current = new Audio("/audio/click.mp3");
    clickSoundRef.current.volume = 0.5;

    // Browser autoplay policy: প্রথম user interaction এ music শুরু হবে
    function unlockAndStart() {
      if (startedRef.current) return;
      startedRef.current = true;
      if (initialOn) {
        bgMusicRef.current.play().catch(() => {});
      }
    }

    // click sound: document-level delegation, প্রতিটা button/link এ আলাদা
    // listener বসাতে হবে না — কোনো button, a, বা [data-sound] click হলেই বাজবে
    function handleDocumentClick(e) {
      unlockAndStart();
      const target = e.target.closest("button, a, [data-sound]");
      if (target && !target.closest("[data-no-sound]")) {
        const sfx = clickSoundRef.current;
        sfx.currentTime = 0;
        sfx.play().catch(() => {});
      }
    }

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      bgMusicRef.current?.pause();
    };
  }, []);

  function toggleMusic() {
    const next = !musicOn;
    setMusicOn(next);
    localStorage.setItem("sound-music-on", next ? "1" : "0");
    if (bgMusicRef.current) {
      if (next) {
        bgMusicRef.current.play().catch(() => {});
      } else {
        bgMusicRef.current.pause();
      }
    }
  }

  return (
    <button
      onClick={toggleMusic}
      data-no-sound
      aria-label={musicOn ? "Mute background music" : "Unmute background music"}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur transition hover:bg-black/90"
    >
      {musicOn ? <FaVolumeUp size={16} /> : <FaVolumeMute size={16} />}
    </button>
  );
}
