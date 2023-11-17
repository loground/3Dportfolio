import DottedButton from '@/components/Shared/DottedButton';
import VideoHero from '@/components/Features/Skate/VideoHero';
import React from 'react';

import { useRouter } from 'next/router';
import SkateSchool from '@/components/Features/Skate/SkateSchool';
import Navbar from '@/components/Widgets/Navbar';

const Footjobs = () => {
  const router = useRouter();

  const backToMainPage = () => {
    router.push('/');
  };

  const backToHandjob = () => {
    router.push('/Handjobs');
  };

  const moveToNextPage = () => {
    router.push('/Brainjobs/Web3');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="flex flex-row gap-5 md:gap-20 pt-10 justify-center">
        <DottedButton text="Main" action={backToMainPage} />
        <DottedButton text="Hands" action={backToHandjob} />
        <DottedButton text="See what's next" action={moveToNextPage} />
      </div>
      <div className="flex justify-center align-items-center mt-5"></div>
      <div>
        <VideoHero />
      </div>
      <div>
        <SkateSchool />
      </div>
    </div>
  );
};

export default Footjobs;
