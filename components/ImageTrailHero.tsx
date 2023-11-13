import { useAnimate } from 'framer-motion';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface WatermarkProps {
  reverse?: boolean;
  text: string;
}

interface MouseImageTrailProps {
  children: React.ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}

interface TranslateWrapperProps {
  children: React.ReactNode;
  reverse?: boolean;
}

export const ImageTrailHero = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        '/modeling/1.PNG',
        '/modeling/2.PNG',
        '/modeling/3.PNG',
        '/modeling/4.JPG',
        '/modeling/5.JPG',
        '/modeling/6.jpg',
        '/modeling/7.jpg',
        '/modeling/8.jpg',
        '/modeling/9.jpg',
        '/modeling/10.jpg',
        '/modeling/11.jpg',
        '/modeling/12.jpg',
        '/modeling/13.jpg',
        '/modeling/14.jpeg',
        '/modeling/15.jpg',
      ]}>
      <section className="h-screen bg-slate-200">
        <NavBar />
        <Copy />
        <WatermarkWrapper />
      </section>
    </MouseImageTrail>
  );
};

const NavBar = () => {
  const router = useRouter();
  const backToMain = () => {
    router.push('/');
  };
  return (
    <nav className="absolute left-0 right-0 top-0 z-[99999999]">
      <div className="bg-white text-center">
        <p className="flex items-center justify-center gap-1 py-0.5 text-sm font-medium uppercase text-slate-100">
          <span>Shootings</span>
        </p>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-6">
        <motion.button
          onClick={backToMain}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995, rotate: '3.5deg' }}
          className="flex items-center gap-2 rounded-md bg-black px-4 py-2 font-medium text-slate-50 transition-colors hover:bg-indigo-600">
          <span>Back to main page</span>
        </motion.button>
      </div>
    </nav>
  );
};

const Copy = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[999999]">
      <div className="mx-auto flex max-w-7xl items-end justify-between p-4 md:p-8">
        <div>
          <h1 className="mb-6 max-w-4xl text-6xl font-black leading-[1.1] text-slate-900 md:text-8xl">
            My shooting <span className="text-white">Experience</span>
          </h1>
          <p className="max-w-xl text-slate-700 md:text-lg">Different countries, projects, ads</p>
        </div>
      </div>
    </div>
  );
};

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="Magamaev" />
      <Watermark text="Vision" reverse />
      <Watermark text="S7" />
      <Watermark text="Creepy" reverse />
      <Watermark text="Pretty Poison" />
      <Watermark text="Merry Co" reverse />
      <Watermark text="Casual" />
      <Watermark text="Sandpiper" reverse />
    </>
  );
};

const Watermark: React.FC<WatermarkProps> = ({ reverse, text }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[10vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[10vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper: React.FC<TranslateWrapperProps> = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
      className="flex">
      {children}
    </motion.div>
  );
};

const MouseImageTrail: React.FC<MouseImageTrailProps> = ({
  children,

  images,

  renderImageBuffer,

  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y,
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement | null;

    if (el) {
      const containerRect = scope.current.getBoundingClientRect();

      el.style.top = `${lastRenderPosition.current.y - containerRect.top}px`;
      el.style.left = `${lastRenderPosition.current.x - containerRect.left}px`;
    }
    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: 'spring', damping: 15, stiffness: 200 },
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: 'linear', duration: 0.5, delay: 1 },
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div ref={scope} className="relative overflow-hidden" onMouseMove={handleMouseMove}>
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-36 w-auto rounded-xl border-2 border-slate-900 bg-slate-800 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
