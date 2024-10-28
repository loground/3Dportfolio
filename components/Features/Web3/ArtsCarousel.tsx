import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

export default function ArtsCarousel() {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(idx);

  const trend = idx > prevIdx ? 1 : -1;

  const imageIndex = Math.abs(idx % images.length);

  return (
    <div className="h-[50vw] min-h-[400px] max-h-[600px] bg-black relative overflow-hidden min-w-[100vw]">
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv - 1);
        }}
        className="bg-black/50 hover:bg-black/60 transition-colors text-white p-2 absolute z-10 left-0 top-0 bottom-0">
        <FiChevronLeft />
      </button>

      <div className="absolute inset-0 z-[5] backdrop-blur-xl">
        <AnimatePresence initial={false} custom={trend}>
          <motion.img
            variants={imgVariants}
            custom={trend}
            initial="initial"
            animate="animate"
            exit="exit"
            key={images[imageIndex].id}
            src={images[imageIndex].src}
            alt={images[imageIndex].title}
            style={{ y: '-50%', x: '-50%' }}
            className="aspect-square max-h-[90%] max-w-[100%] mx-auto bg-transparent object-contain shadow-2xl absolute left-1/2 top-1/2"
          />
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv + 1);
        }}
        className="bg-black/50 hover:bg-black/60 transition-colors text-white p-2 absolute z-10 right-0 top-0 bottom-0">
        <FiChevronRight />
      </button>

      <AnimatePresence initial={false} custom={trend}>
        <motion.span
          custom={trend}
          variants={titleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={images[imageIndex].id}
          className="text-white text-sm md:text-2xl p-2 rounded-lg bg-white/10 backdrop-blur-lg font-semibold shadow-lg absolute z-20 left-10 bottom-4">
          {images[imageIndex].title}
        </motion.span>
      </AnimatePresence>

      <AnimatePresence initial={false}>
        <motion.div
          key={images[imageIndex].id + images.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 object-cover z-0"
          style={{
            backgroundImage: `url(${images[imageIndex].src})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
      </AnimatePresence>
    </div>
  );
}

const imgVariants = {
  initial: (trend: 1 | 0) => ({
    x: trend === 1 ? '200%' : '-200%',
    opacity: 0,
  }),
  animate: { x: '-50%', opacity: 1 },
  exit: (trend: 1 | 0) => ({
    x: trend === 1 ? '-200%' : '200%',
    opacity: 0,
  }),
};

const titleVariants = {
  initial: (trend: 1 | 0) => ({
    y: trend === 1 ? 20 : -20,
    opacity: 0,
  }),
  animate: { y: 0, opacity: 1 },
  exit: (trend: 1 | 0) => ({
    y: trend === 1 ? -20 : 20,
    opacity: 0,
  }),
};

const images = [
  {
    src: '/arts/1.png',
    title: 'Tidal Wave for Jungle Bay',
    id: 1,
  },
  {
    src: '/arts/2.png',
    title: 'Pertawave for Fake-commons Bali',
    id: 2,
  },
  {
    src: '/arts/3.png',
    title: 'GM for $bobo and $stonks',
    id: 3,
  },
  {
    src: '/arts/4.png',
    title: 'Brainletopedia for $brainlet',
    id: 4,
  },
  {
    src: '/arts/5.png',
    title: 'Banana brain for Jungle Blets',
    id: 5,
  },
  {
    src: '/arts/6.png',
    title: 'Bully',
    id: 6,
  },
  {
    src: '/arts/7.png',
    title: 'Toweli',
    id: 7,
  },
  {
    src: '/arts/8.png',
    title: 'JB contest',
    id: 8,
  },
  {
    src: '/arts/9.png',
    title: 'Base summer',
    id: 9,
  },
  {
    src: '/arts/10.png',
    title: 'Mfers signs',
    id: 10,
  },
  {
    src: '/arts/11.png',
    title: 'Halloween preparation',
    id: 11,
  },
  {
    src: '/arts/12.png',
    title: 'Algo future',
    id: 12,
  },
  {
    src: '/arts/13.png',
    title: 'Surfing days',
    id: 13,
  },
  {
    src: '/arts/14.png',
    title: 'History of wojapepe',
    id: 14,
  },
  {
    src: '/arts/15.png',
    title: 'Coby evenings',
    id: 15,
  },
  {
    src: '/arts/16.png',
    title: 'Pond Fairytale',
    id: 16,
  },
];
