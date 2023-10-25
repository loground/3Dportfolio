import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

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

  const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '120deg']);

  return (
    <div ref={targetRef} className="relative z-0 h-[800vh] bg-neutral-200">
      <div className="sticky top-0 h-screen bg-white">
        <Trippy rotate={rotate} />
      </div>
    </div>
  );
};

const NUM_SECTIONS = 10;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;
const password = 'dreamjob';

const generateSections = (count: any, color: any, rotate: any) => {
  if (count === NUM_SECTIONS) {
    return (
      <>
        <p className="text-s font-semibold rotate-90 lg:text-m md:rotate-90 md:justify-right md:py-32 md:s lg:rotate-0 flex md:py-0 lg:py-0 py-40">
          {' '}
          password: {password}
        </p>
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
