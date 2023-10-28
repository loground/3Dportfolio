import React, { useEffect, useRef } from 'react';
import styles from '@/styles/FloatingText.module.css';
import { useAnimate } from 'framer-motion';

const FloatingText: React.FC = () => {
  const textRefs = useRef<HTMLSpanElement[]>([]);
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    await animate('#target', { opacity: 0 });
    animate('#target2', { opacity: 1 });
  };

  useEffect(() => {
    const allText = textRefs.current;

    allText.forEach((el, idx) => {
      let delay = 0.3 * idx;
      el.style.animationDelay = `${delay}s`;
      el.style.zIndex = `${allText.length - idx}`;
      el.classList.add(styles.baseAnim);
    });
  }, []);

  return (
    <div className={styles.wrapper} id="wrapper" ref={scope}>
      <span
        id="target"
        className={`text text-white text-[10rem] font-bold select-none uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-[-50px] rotate-[-15deg] ${styles.baseAnim} ${styles.text_stroke2}`}>
        {`WEB 3.0`}
      </span>
      {[...Array(10)].map((_, idx) => (
        <span
          key={idx}
          id="target"
          ref={(el) => el && textRefs.current.push(el)}
          className={`text text-white text-[10rem] font-bold select-none uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-[-50px] rotate-[-15deg] ${styles.baseAnim} ${styles.text_stroke}`}>
          {`WEB 3.0`}
        </span>
      ))}
      <button
        onClick={() => {
          handleAnimate();
        }}
        className="relative h-20 w-32 py-0 rounded-full bg-gradient-to-r from-white via-gray-500 to-black text-white font-semibold shadow-lg focus:outline-none hover:shadow-xl transform transition duration-300 ease-in-out hover:cursor-pointer">
        know more about it
      </button>
      <p id="target2" className="absolute text-white text-3xl opacity-0 pt-[45vh]">
        best thing ever happened to me is a bitcoin
      </p>
    </div>
  );
};

export default FloatingText;
