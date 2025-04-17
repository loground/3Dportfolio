'use client';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';

type ScrambleInProps = {
  isHovered: boolean;
  text?: string;
  scrambleSpeed?: number;
  scrambledLetterCount?: number;
  characters?: string;
  className?: string;
  scrambledClassName?: string;
  autoStart?: boolean;
  onStart?: () => void;
  onComplete?: () => void;
};

const ScrambleIn = forwardRef<any, ScrambleInProps>(
  (
    {
      isHovered,
      text,
      scrambleSpeed = 20,
      scrambledLetterCount = 1,
      characters = '{b}[]/logrund',
      className = isHovered
        ? 'absolute z-20 text-center top-20 text-sm left-[39%] m-2 md:text-lg md:left-[42%] select-none bg-pink-400 rounded-xl p-1 px-2 text-white'
        : 'absolute z-20 text-center top-20 text-sm left-[0%] m-2 md:text-lg md:left-[1%] select-none bg-pink-400 rounded-xl p-1 px-2 text-white',
      scrambledClassName = 'absolute z-20 text-center text-sm top-20 left-[80%] md:left-[1%] select-none  rounded-xl p-1 px-2 text-white',
      autoStart = true,
      onStart,
      onComplete,
    },
    ref,
  ) => {
    const actualText =
      text ??
      (isHovered
        ? 'I have told you.'
        : 'Hello! Scroll down for all my works. My socials behind. Do not point your mouse on me, or I will disappear.');

    const [displayText, setDisplayText] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const [visibleLetterCount, setVisibleLetterCount] = useState(0);
    const [scrambleOffset, setScrambleOffset] = useState(0);

    const startAnimation = useCallback(() => {
      setIsAnimating(true);
      setVisibleLetterCount(0);
      setScrambleOffset(0);
      onStart?.();
    }, [onStart]);

    const reset = useCallback(() => {
      setIsAnimating(false);
      setVisibleLetterCount(0);
      setScrambleOffset(0);
      setDisplayText('');
    }, []);

    useImperativeHandle(ref, () => ({
      start: startAnimation,
      reset,
    }));

    useEffect(() => {
      reset();
      const t = setTimeout(() => {
        startAnimation();
      }, 1000);
    }, [isHovered, startAnimation, reset]);

    useEffect(() => {
      let interval: any;

      if (isAnimating) {
        interval = setInterval(() => {
          if (visibleLetterCount < actualText.length) {
            setVisibleLetterCount((prev) => prev + 1);
          } else if (scrambleOffset < scrambledLetterCount) {
            setScrambleOffset((prev) => prev + 1);
          } else {
            clearInterval(interval);
            setIsAnimating(false);
            onComplete?.();
          }

          const remainingSpace = Math.max(0, actualText.length - visibleLetterCount);
          const currentScrambleCount = Math.min(remainingSpace, scrambledLetterCount);

          const scrambledPart = Array(currentScrambleCount)
            .fill(0)
            .map(() => characters[Math.floor(Math.random() * characters.length)])
            .join('');

          setDisplayText(actualText.slice(0, visibleLetterCount) + scrambledPart);
        }, scrambleSpeed);
      }

      return () => {
        if (interval) clearInterval(interval);
      };
    }, [
      isAnimating,
      actualText,
      visibleLetterCount,
      scrambleOffset,
      scrambledLetterCount,
      characters,
      scrambleSpeed,
      onComplete,
    ]);

    const renderText = () => {
      const revealed = displayText.slice(0, visibleLetterCount);
      const scrambled = displayText.slice(visibleLetterCount);

      return (
        <>
          <span className={className}>{revealed}</span>
          <span className={scrambledClassName}>{scrambled}</span>
        </>
      );
    };

    return (
      <>
        <span className="sr-only">{actualText}</span>
        <span className="inline-block whitespace-pre-wrap" aria-hidden="true">
          {renderText()}
        </span>
      </>
    );
  },
);

ScrambleIn.displayName = 'ScrambleIn';
export default ScrambleIn;
