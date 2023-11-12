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
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Project Types</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-black to-white p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50 mt-5">
              Food, Travel-blogging, Clothing brand, Hotel, Printing products.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Skills</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-black to-white p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50 mt-5">
              Market-analysis, content-planning, generating, community-management, copywriting,
              project-management, targeting, parsing tools.
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Projects</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-black to-white p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50 mt-5">
              Rombomoto, Ладоград, Dikmans deli, Presswall24, NM4, Bak3MeUp, City Roof Guesthouse.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>And what?</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-black to-white p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50 mt-5">
              I still apply those skills on regular basis using twitter and other platforms.
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard: React.FC<BounceCardProps> = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: '-1deg' }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}>
      {children}
    </motion.div>
  );
};

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h3 className="mx-auto text-center text-black text-3xl font-semibold">{children}</h3>;
};
