import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

interface Square {
  id: number;
  src: string;
}

const SkateSchool = () => {
  const router = useRouter();

  const handleMoveToBrains = () => {
    router.push('/Brainjobs/Web3');
  };

  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-white font-medium">
          Free skate classes
        </span>
        <h3 className="text-4xl md:text-6xl text-white font-semibold">
          Non-commercial skate-project
        </h3>
        <p className="text-base md:text-lg text-white my-4 md:my-6">
          Ran a little skate-school in my hometown where me and my friends gaveaway free skateboards
          to local kids and explained them basics about skateboarding.
        </p>
        <button
          onClick={handleMoveToBrains}
          className="bg-white text-black font-medium py-2 px-4 rounded transition-all hover:bg-black hover:text-white active:scale-5">
          See some more important things
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: Square[]): Square[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: '/school/1.PNG',
  },
  {
    id: 2,
    src: '/school/2.PNG',
  },
  {
    id: 3,
    src: '/school/3.PNG',
  },
  {
    id: 4,
    src: '/school/4.PNG',
  },
  {
    id: 5,
    src: '/school/5.PNG',
  },
  {
    id: 6,
    src: '/school/6.PNG',
  },
  {
    id: 7,
    src: '/school/7.PNG',
  },
  {
    id: 8,
    src: '/school/18.PNG',
  },
  {
    id: 9,
    src: '/school/9.PNG',
  },
  {
    id: 10,
    src: '/school/17.PNG',
  },
  {
    id: 11,
    src: '/school/11.PNG',
  },
  {
    id: 12,
    src: '/school/12.PNG',
  },
  {
    id: 13,
    src: '/school/13.PNG',
  },
  {
    id: 14,
    src: '/school/14.PNG',
  },
  {
    id: 15,
    src: '/school/15.PNG',
  },
  {
    id: 16,
    src: '/school/16.PNG',
  },
];

const generateSquares = (): JSX.Element[] => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover',
      }}></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">{squares.map((sq) => sq)}</div>
  );
};

export default SkateSchool;
