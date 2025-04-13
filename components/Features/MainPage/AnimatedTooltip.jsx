'use client';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';

const ScrambleIn = forwardRef(
  (
    {
      text = 'Hi, I make frontend and some projects are behind me, have fun!',
      scrambleSpeed = 40,
      scrambledLetterCount = 1,
      characters = '{b}[]/logrund',
      className = 'absolute z-20 text-center top-20 text-sm left-[5%] md:text-lg md:left-[20%] select-none bg-pink-400 rounded-xl p-1 px-2 text-white',
      scrambledClassName = 'absolute z-20 text-center text-sm top-20 left-[80%] md:left-[20%] select-none  rounded-xl p-1 px-2 text-white',
      autoStart = true,
      onStart,
      onComplete,
    },
    ref,
  ) => {
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
      if (autoStart) {
        startAnimation();
      }
    }, [autoStart, startAnimation]);

    useEffect(() => {
      let interval;

      if (isAnimating) {
        interval = setInterval(() => {
          // Increase visible text length
          if (visibleLetterCount < text.length) {
            setVisibleLetterCount((prev) => prev + 1);
          }
          // Start sliding scrambled text out
          else if (scrambleOffset < scrambledLetterCount) {
            setScrambleOffset((prev) => prev + 1);
          }
          // Complete animation
          else {
            clearInterval(interval);
            setIsAnimating(false);
            onComplete?.();
          }

          // Calculate how many scrambled letters we can show
          const remainingSpace = Math.max(0, text.length - visibleLetterCount);
          const currentScrambleCount = Math.min(remainingSpace, scrambledLetterCount);

          // Generate scrambled text
          const scrambledPart = Array(currentScrambleCount)
            .fill(0)
            .map(() => characters[Math.floor(Math.random() * characters.length)])
            .join('');

          setDisplayText(text.slice(0, visibleLetterCount) + scrambledPart);
        }, scrambleSpeed);
      }

      return () => {
        if (interval) clearInterval(interval);
      };
    }, [
      isAnimating,
      text,
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
        <span className="sr-only">{text}</span>
        <span className="inline-block whitespace-pre-wrap" aria-hidden="true">
          {renderText()}
        </span>
      </>
    );
  },
);

ScrambleIn.displayName = 'ScrambleIn';
export default ScrambleIn;
