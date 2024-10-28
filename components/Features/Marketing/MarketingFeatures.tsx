import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface BounceCardProps {
  className?: string;
  children?: React.ReactNode;
}

interface CardTitleProps {
  children: React.ReactNode;
}

export const MarketingFeatures: React.FC<BounceCardProps> = () => {
  const router = useRouter();

  const MoveToProgramming = () => {
    router.push('/Brainjobs/Programming');
  };

  const BackToMain = () => {
    router.push('/');
  };
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-white">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          My skills
          <span className="text-gray-600"> aquired from this experience </span>
        </h2>
        <motion.button
          onClick={BackToMain}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-indigo-100 px-4 py-2 font-medium text-black shadow-xl transition-colors hover:bg-slate-700 hover:text-white">
          Get back
        </motion.button>
        <motion.button
          onClick={MoveToProgramming}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-white px-4 py-2 font-medium text-black shadow-xl transition-colors hover:bg-slate-700 hover:text-white">
          Move on
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4" image="/SMM/SMM4.PNG">
          <div className="absolute bottom-0 left-4 right-4 top-36 translate-y-8 rounded-2xl bg-slate-700 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <CardTitle>Project Types</CardTitle>
            <span className="block text-center font-semibold text-white mt-0">
              Food, Travel-blogging, Clothing brand, Hotel, Printing products.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8" image="/SMM/SMM1.PNG">
          <div className="absolute bottom-0 left-4 right-4 top-28 translate-y-8 rounded-t-2xl bg-slate-700 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <CardTitle>Skills</CardTitle>
            <span className="block text-center font-semibold text-white mt-0">
              Market-analysis, content-planning, community-management, copywriting,
              project-management, targeting tools, photo/video-editing.
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8" image="/SMM/SMM6.PNG">
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-slate-700 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <CardTitle>Projects</CardTitle>
            <span className="block text-center font-semibold text-white mt-3">
              Rombomoto, Ладоград, Dikmans deli, Presswall24, NM4, Bak3MeUp, City Roof Guesthouse.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4" image="/SMM/SMM2.PNG">
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-slate-700 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <CardTitle>And what?</CardTitle>
            <span className="block text-center font-semibold text-white mt-0">
              I still apply those skills on regular basis using twitter and other social media.
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard: React.FC<BounceCardProps & { image: string }> = ({
  className,
  children,
  image,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: '-1deg' }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-no-repeat bg-top p-8 ${className}`}
      style={{ backgroundImage: `url(${image})`, backgroundSize: '80%' }}>
      {children}
    </motion.div>
  );
};

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h3 className="mx-auto text-center text-indigo-100 text-2xl font-bold">{children}</h3>;
};
