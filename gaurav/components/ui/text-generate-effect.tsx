"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.7,
  repeatDelay = 3000,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  repeatDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    let isMounted = true;

    const runLoop = async () => {
      while (isMounted) {
        // STEP 1: Reset animation
        // The duration is set to a minimal value to ensure the async function's
        // promise resolves, allowing the loop to continue.
        await animate(
          "span",
          {
            opacity: 0,
            filter: filter ? "blur(10px)" : "none",
          },
          { duration: 0.001 } // Changed from 0 to a very small number
        );

        // STEP 2: Animate text in
        await animate(
          "span",
          {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
          },
          {
            duration: duration,
            delay: stagger(0.1),
          }
        );

        // STEP 3: Wait for the specified delay before repeating
        await new Promise((resolve) => setTimeout(resolve, repeatDelay));
      }
    };

    runLoop();

    // Cleanup function to stop the loop when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [filter, duration, repeatDelay]); // Removed 'animate' from dependencies as it's a stable function

  return (
    <div className={cn("w-full flex justify-center", className)}>
      <div className="my-20 mx-22 text-center">
        <div className="text-center text-black dark:text-white text-2xl font-normal leading-normal tracking-normal font-[Times_New_Roman,serif]">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="opacity-0" // Initial state
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
