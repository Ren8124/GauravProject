"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let reverseRafId: number | null = null;

    const handleEnded = () => {
      setIsReversing(true);
    };

    const reverseFrame = () => {
      if (!video) return;

      if (video.currentTime > 0) {
        video.currentTime -= 0.03; // Adjust speed here
        reverseRafId = requestAnimationFrame(reverseFrame);
      } else {
        // Finished reversing, play forward again
        setIsReversing(false);
        video.play();
      }
    };

    video.addEventListener("ended", handleEnded);

    if (isReversing) {
      reverseFrame();
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (reverseRafId) cancelAnimationFrame(reverseRafId);
    };
  }, [isReversing]);

  return (
    <video
      ref={videoRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/herosection.mp4"
      autoPlay
      muted
      playsInline
      preload="auto"
    >
      Your browser does not support the video tag.
    </video>
  );
}
