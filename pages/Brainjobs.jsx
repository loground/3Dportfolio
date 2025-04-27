import React, { useState } from 'react';

import { useRouter } from 'next/router';
import Navbar from '@/components/Widgets/Navbar';
import Head from 'next/head';
import TerminalContact from '../components/Features/Brains/Terminal';
import Waves from '../components/Features/Brains/Scenes/DefaultScene';

const Brainjobs = () => {
  const router = useRouter();
  const [topic, setTopic] = useState('default');

  const backToMainPage = () => {
    router.push('/');
  };

  console.log(topic);
  const moveToNextPage = () => {
    router.push('/Facejobs');
  };

  const renderScene = () => {
    switch (topic) {
      case 'coding':
        return <></>;
      case 'web3':
        return <></>;
      case 'marketing':
        return <></>;
      default:
        return (
          <Waves
            lineColor="#fff"
            backgroundColor="rgb(2 6 23 / 0.9)"
            waveSpeedX={0.1}
            waveSpeedY={0.01}
            waveAmpX={60}
            waveAmpY={20}
            friction={1}
            tension={0.01}
            maxCursorMove={30}
            xGap={22}
            yGap={36}
          />
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[100svh]">
      <Head>
        <title>Handsground</title>
        <meta name="Brainjobs" content="BrainsPage" />
      </Head>
      <div className="flex flex-row text-white text-lg gap-5 md:gap-10 md:pt-4 align-items-center pt-4 z-20 justify-center">
        <button className="hover:text-xl" onClick={backToMainPage}>
          back
        </button>{' '}
        <button className="hover:text-xl" onClick={moveToNextPage}>
          next
        </button>
      </div>
      <div className="z-0">{renderScene()}</div>

      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="absolute top-20 left-[32%]">
        <TerminalContact onTopicSelect={setTopic} />
      </div>
    </div>
  );
};

export default Brainjobs;
