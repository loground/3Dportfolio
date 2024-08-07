import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import React from 'react';

interface SectionProps {
  background: string;
  children: React.ReactNode;
  rotate: import('framer-motion').MotionValue<number>;
}

interface TrippyProps {
  rotate: import('framer-motion').MotionValue<string>;
}

const TrippyScroll: React.FC = () => {
  const targetRef: any = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef.current,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '90deg']);

  return (
    <div ref={targetRef} className="relative z-0 h-[200vh] bg-neutral-200">
      <div className="sticky top-0 h-screen bg-white">
        <Trippy rotate={rotate} />
      </div>
    </div>
  );
};

const NUM_SECTIONS = 8;
const PADDING = `${80 / NUM_SECTIONS / 2}vmin`;
const password = 'paymewell';

const generateSections = (count: any, color: any, rotate: any) => {
  if (count === NUM_SECTIONS) {
    return (
      <>
        <div className="flex items-center justify-center h-full">
          <p className="rotate-90 text-s text-black md:rotate-0 lg:text-xl lg:rotate-0 py-20 px-auto font-semibold lg:text-m">
            password: <span className="text-red-500">{password} </span>
          </p>
        </div>
      </>
    );
  }

  const nextColor = color === 'black' ? 'white' : 'black';

  return (
    <Section rotate={rotate} background={color}>
      {generateSections(count + 1, nextColor, rotate)}
    </Section>
  );
};

const Trippy: React.FC<TrippyProps> = ({ rotate }) => {
  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-black">
      {generateSections(0, 'black', rotate)}
    </motion.div>
  );
};

const Section: React.FC<SectionProps> = ({ background, children, rotate }) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        rotate,
        padding: PADDING,
      }}>
      {children}
    </motion.div>
  );
};

export default TrippyScroll;
