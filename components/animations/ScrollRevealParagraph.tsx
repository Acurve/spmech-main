"use client"

import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ClipChar = ({ char, progress, range }: { char: string, progress: any, range: number[] }) => {
  // Map the specific character's scroll range to a background position sweep
  // 100% means the gradient shows the right side (gray), 0% shows the left side (black)
  const bgPositionX = useTransform(progress, range, [100, 0]);
  const bgPosition = useMotionTemplate`${bgPositionX}% 0%`;

  return (
    <motion.span
      style={{
        backgroundImage: "linear-gradient(to right, #000 50%, #d1d5db 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: bgPosition,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent"
      }}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

const ScrollRevealParagraph = ({ text }: { text: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Trigger animation when the paragraph is roughly in the center of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center"]
  });

  const words = text.split(" ");
  let charCount = 0;
  const totalChars = text.length;

  return (
    <div
      ref={ref}
      className="flex flex-wrap gap-y-2 mb-16 text-2xl md:text-3xl lg:text-4xl min-[1600px]:text-5xl font-medium leading-[1.4] tracking-tight"
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        return (
          <span key={wordIdx} className="flex whitespace-pre">
            {wordChars.map((char, charIdx) => {
              const start = charCount / totalChars;
              const end = (charCount + 1) / totalChars;
              charCount++;
              return (
                <ClipChar
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {/* Render space character properly to maintain exact index alignment */}
            {wordIdx < words.length - 1 && (() => {
              const start = charCount / totalChars;
              const end = (charCount + 1) / totalChars;
              charCount++;
              return (
                <ClipChar
                  key={`space-${wordIdx}`}
                  char=" "
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })()}
          </span>
        );
      })}
    </div>
  );
};

export default ScrollRevealParagraph;