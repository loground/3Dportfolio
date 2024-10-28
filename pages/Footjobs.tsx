import DottedButton from '@/components/Shared/DottedButton';
import VideoHero from '@/components/Features/Skate/VideoHero';
import React from 'react';

import { useRouter } from 'next/router';
import SkateSchool from '@/components/Features/Skate/SkateSchool';
import Navbar from '@/components/Widgets/Navbar';
import Head from 'next/head';

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
      <Head>
        <title>Legsground</title>
        <meta name="Skate and surf" content="Skate and surf" />
      </Head>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="flex flex-row gap-5 md:gap-20 pt-10 justify-center">
        <DottedButton text="Main" action={backToMainPage} />
        <DottedButton text="Back" action={backToHandjob} />
        <DottedButton text="Web 3.0" action={moveToNextPage} />
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
