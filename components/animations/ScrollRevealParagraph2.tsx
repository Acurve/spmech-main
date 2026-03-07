"use client";

import React, { useEffect, useRef, useState } from 'react';

interface LineProps {
  words: string[];
}

interface ScrollRevealParagraph2Props {
  text: string;
}

/**
 * ScrollRevealParagraph Component
 * * Logic:
 * 1. Initially renders words invisibly to measure their vertical offsets (line detection).
 * 2. Groups words into arrays representing actual lines rendered by the browser.
 * 3. Animates each line independently based on its scroll position in the viewport.
 */
const ScrollRevealParagraph2: React.FC<ScrollRevealParagraph2Props> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[][]>([]);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const words: string[] = text.split(' ');

  useEffect(() => {
    const calculateBreaks = (): void => {
      if (!containerRef.current) return;
      
      const wordSpans = containerRef.current.querySelectorAll<HTMLSpanElement>('.measure-span');
      const detectedLines: string[][] = [];
      let currentLineWords: string[] = [];
      let lastTop: number = -1;

      wordSpans.forEach((span, index) => {
        const top = span.offsetTop;

        // If the current word's vertical position is lower than the previous, a line break occurred
        if (lastTop !== -1 && top > lastTop) {
          detectedLines.push(currentLineWords);
          currentLineWords = [];
        }

        currentLineWords.push(words[index]);
        lastTop = top;
      });

      if (currentLineWords.length > 0) {
        detectedLines.push(currentLineWords);
      }

      setLines(detectedLines);
      setIsCalculated(true);
    };

    // Delay slightly to ensure layout and fonts are ready
    const timer = setTimeout(calculateBreaks, 100);
    window.addEventListener('resize', calculateBreaks);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateBreaks);
    };
  }, [text, words]);

  return (
    <div ref={containerRef} className="text-3xl md:text-6xl text-black font-bold leading-[1.4] tracking-tight relative">
      {/* Invisible layer used for line measurement */}
      {!isCalculated && (
        <div className="opacity-0 pointer-events-none absolute left-0 top-0 w-full">
          {words.map((word, i) => (
            <span key={i} className="measure-span inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </div>
      )}

      {/* Visible layer with animated lines */}
      {isCalculated && lines.map((lineWords, idx) => (
        <Line key={idx} words={lineWords} />
      ))}

      <style>{`
        .reveal-line-text {
          color: rgba(0, 0, 0, 0.1);
          background-clip: text;
          -webkit-background-clip: text;
          background-repeat: no-repeat;
          background-size: 0% 100%;
          background-image: linear-gradient(90deg, #000, #000);
          display: inline;
        }
      `}</style>
    </div>
  );
};

const Line: React.FC<LineProps> = ({ words }) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Define when animation starts and ends (90% to 40% of viewport height)
      const startTrigger = windowHeight * 0.9;
      const endTrigger = windowHeight * 0.4;
      
      let p = (startTrigger - rect.top) / (startTrigger - endTrigger);
      p = Math.max(0, Math.min(1, p));
      
      setProgress(p * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={lineRef} className="block overflow-hidden py-1">
      <span 
        className="reveal-line-text"
        style={{ backgroundSize: `${progress}% 100%` } as React.CSSProperties}
      >
        {words.join(' ')}
      </span>
    </div>
  );
};

export default ScrollRevealParagraph2