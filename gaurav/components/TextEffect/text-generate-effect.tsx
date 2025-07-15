"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { WavyBackground } from "../ui/wavy-background";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export function TextGenerateEffectDemo() {
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <TextGenerateEffect words={words}></TextGenerateEffect>
      </WavyBackground>
    </>
  );
}
