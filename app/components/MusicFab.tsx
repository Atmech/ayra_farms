"use client";

import { useState, useRef } from "react";

export default function MusicFab() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <audio ref={audioRef} loop preload="none">
        <source src="/audio/Village at Morning Music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={togglePlay}
        className="relative flex items-center justify-center w-16 h-16 bg-terracotta text-white hand-drawn-circle shadow-xl hover:scale-110 active:scale-95 group-hover:bg-ink group-hover:text-white hover:border-transparent transition-all duration-300"
        aria-label={isPlaying ? "Pause nature sounds" : "Play nature sounds"}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-white/30 m-1" />
        <span
          className={`material-symbols-outlined text-3xl ${
            isPlaying ? "animate-spin-album" : ""
          }`}
        >
          album
        </span>
      </button>

      {/* Hover Tooltip */}
      <div className="absolute bottom-4 right-20 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none w-max">
        <div className="bg-paper-white text-ink p-4 shadow-floating rough-edge border border-ink/10 relative transform -rotate-2">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-terracotta text-2xl">
              graphic_eq
            </span>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-terracotta mb-0.5">
                Now Playing
              </p>
              <p className="font-hand text-lg whitespace-nowrap">
                Rain on Laterite
              </p>
            </div>
          </div>
          <p className="font-serif text-xs italic text-ink/60 mt-2 pt-2 border-t border-ink/10">
            Tune in to the soundtrack of Konkan
          </p>
          {/* Washi tape on tooltip */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-terracotta/20 rotate-3 backdrop-blur-sm" />
        </div>
      </div>
    </div>
  );
}
