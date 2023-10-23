import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface CardProps {
  url: string;
  title: string;
  id: number;
}

interface HorizontalScrollCarouselProps {
  card: CardProps[];
}

const BuildingCompanyPics: React.FC<HorizontalScrollCarouselProps> = ({ card }) => {
  return (
    <div className="bg-black">
      <div className="flex h-[10vh] items-center justify-center">
        <span className="justify-center pt-10 font-semibold uppercase text-neutral-500">
          Scroll down to see more
        </span>
      </div>
      <HorizontalScrollCarousel card={card} />
    </div>
  );
};

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({ card }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-80%']);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 flex h-[70vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {card.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<{ card: CardProps }> = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[420px] overflow-hidden bg-neutral-100">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0 transition-transform duration-200 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default BuildingCompanyPics;
