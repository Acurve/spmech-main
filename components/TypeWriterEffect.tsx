"use client"
import { cn } from '@/lib/utils';
import { useInView } from 'motion/react';
import React, { useState, useEffect, useRef, useMemo } from 'react';


/**
 * Typewriter Component
 * * Capabilities:
 * 1. Deep traversal: Handles nested HTML tags (p, span, div, etc.)
 * 2. Sequential typing: Finishes one element before moving to the next.
 * 3. Style preservation: Keeps all Tailwind/CSS classes of the children.
 * 4. Customization: Adjustable typing speed and cursor styles.
 */

interface TypewriterEffectProps {
    children: React.ReactNode;
    speed?: number; // ms per character
    delay?: number; // initial delay before starting
    className?: string;
    cursorClassName?: string;
    onComplete?: () => void;
    persistenceKey: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
    children,
    speed = 50,
    delay = 500,
    className = "",
    cursorClassName = "bg-primary/50 ml-4",
    persistenceKey,
    onComplete
}) => {
    const [displayedCharCount, setDisplayedCharCount] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const isFinishedOneTime = sessionStorage.getItem(persistenceKey);


    // ── Ref attached to the outer wrapper so useInView tracks the real element ──
    const containerRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(containerRef, { once: true });

    // ── Phase 1: Count total characters across the entire children tree ──────
    const totalLength = useMemo(() => {
        let count = 0;
        const traverse = (node: React.ReactNode) => {
            React.Children.forEach(node, (child) => {
                if (typeof child === 'string' || typeof child === 'number') {
                    count += String(child).length;
                } else if (React.isValidElement(child)) {
                    traverse((child.props as React.PropsWithChildren).children);
                }
            });
        };
        traverse(children);
        return count;
    }, [children]);

    // ── Effect 1: Start the delay timer only once the component enters view ──
    useEffect(() => {
        if (!isInView) return;

        const startTimeout = setTimeout(() => setIsStarted(true), delay);
        return () => clearTimeout(startTimeout);
    }, [isInView, delay]);

    // ── Effect 2: Tick one character at a time after typing has started ──────
    useEffect(() => {
        if (!isStarted || isFinished) return;

        if (displayedCharCount < totalLength) {
            const timer = setTimeout(() => {
                setDisplayedCharCount((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timer);
        } else {
            setIsFinished(true);
            onComplete?.();
            if (persistenceKey) {
                sessionStorage.setItem(persistenceKey, "true");
            }
        }
    }, [isStarted, displayedCharCount, totalLength, speed, isFinished, onComplete]);

    // ── Phase 2: Recursively render children, revealing chars up to count ────
    const cursorRef = useRef<HTMLSpanElement>(null);

    // charsProcessed is a mutable counter that resets on every render pass
    let charsProcessed = 0;

    const renderRecursive = (node: React.ReactNode): React.ReactNode => {
        return React.Children.map(node, (child) => {
            // ── Text node ──────────────────────────────────────────────────
            if (typeof child === 'string' || typeof child === 'number') {
                const text = String(child);
                const startIndex = charsProcessed;
                charsProcessed += text.length;

                const remaining = displayedCharCount - startIndex;
                if (remaining <= 0) return null;

                const visibleText = text.slice(0, remaining);
                const isCursorHere =
                    displayedCharCount > startIndex &&
                    displayedCharCount <= charsProcessed;

                return (
                    <span className="relative">
                        {visibleText}
                        {isCursorHere && (
                            <span
                                ref={cursorRef}
                                className={cn(
                                    "inline-block w-0.5 h-[1.2em] align-middle ml-0.5 animate-pulse",
                                    cursorClassName
                                )}
                            />
                        )}
                    </span>
                );
            }

            // ── Element node ───────────────────────────────────────────────
            if (React.isValidElement<React.PropsWithChildren<Record<string, unknown>>>(child)) {
                // Skip entire subtree if we haven't reached its characters yet
                if (displayedCharCount <= charsProcessed) return null;

                return React.cloneElement(child as React.ReactElement<React.PropsWithChildren>, {
                    ...child.props,
                    children: renderRecursive((child.props as React.PropsWithChildren).children),
                });
            }

            return child;
        });
    };

    if (isFinishedOneTime) {
        return (
            <>{children}</>
        )
    }
    return (
        // containerRef lives here — this is what useInView observes
        <span ref={containerRef} className={cn("inline", className)}>
            {renderRecursive(children)}
        </span>
    );
};

export default TypewriterEffect;