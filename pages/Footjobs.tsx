import DottedButton from '@/components/DottedButton';
import VideoHero from '@/components/VideoHero';
import React from 'react';

import { useRouter } from 'next/router';
import SkateSchool from '@/components/SkateSchool';

const Footjobs = () => {
  const router = useRouter();

  const backToMainPage = () => {
    router.push('/');
  };

  const backToHandjob = () => {
    router.push('/Handjobs');
  };

  const moveToNextPage = () => {
    router.push('/Footjobs');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-row gap-5 align-items-center pt-10 justify-center">
        <DottedButton text="Main" action={backToMainPage} />
        <DottedButton text="Back to hands" action={backToHandjob} />
        <DottedButton text="See what's next" action={moveToNextPage} />
      </div>
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
