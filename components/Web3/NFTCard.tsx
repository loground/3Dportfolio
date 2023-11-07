import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface NFTCardProps {
  name: string;
  link: string;
  img: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ name, link, img }) => {
  return <TiltCard name={name} link={link} img={img} />;
};

const TiltCard: React.FC<NFTCardProps> = ({ name, link, img }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className="relative h-[240px] w-[190px] md:h-80 md:w-60 xl:h-[400px] xl:w-[300px] rounded-xl bg-gradient-to-br from-white to-black">
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
        <img
          src={img}
          style={{
            transform: 'translateZ(75px)',
          }}
          onClick={() => window.open(`${link}`, '_blank')}
          className="p-7 mt-5 md:p-8 lg:p-8 xl:p-8 text-4xl cursor-pointer"></img>
        <p
          style={{
            transform: 'translateZ(50px)',
          }}
          className="pb-10 text-center text-xl font-bold">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default NFTCard;
