"use client";

import { Play } from "lucide-react";
import { useState } from "react";

/**
 * A short silent clip that loads only on click: until then the page contains just the poster
 * image (same aspect ratio as the video, so nothing shifts) and a button. No autoplay.
 */
export default function ClipPlayer({
  src,
  poster,
  width,
  height,
  label,
  buttonText,
  children,
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
  buttonText: string;
  /** The poster image, rendered by the server component. */
  children: React.ReactNode;
}) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative" style={{ aspectRatio: `${width} / ${height}` }}>
      {on ? (
        <video
          className="absolute inset-0 h-full w-full rounded-md bg-black"
          src={src}
          poster={poster}
          width={width}
          height={height}
          muted
          playsInline
          controls
          autoPlay
          preload="auto"
          aria-label={label}
        />
      ) : (
        <>
          <div className="absolute inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover">{children}</div>
          <button
            type="button"
            onClick={() => setOn(true)}
            aria-label={`${buttonText}: ${label}`}
            className="absolute bottom-2 left-2 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[var(--accent)] px-3 text-[15px] font-semibold text-[var(--on-accent)] shadow-md hover:bg-[var(--accent-hover)] sm:bottom-3 sm:left-3"
          >
            <Play size={16} aria-hidden fill="currentColor" /> {buttonText}
          </button>
        </>
      )}
    </div>
  );
}
