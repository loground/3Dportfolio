import React, { useState } from 'react';

import { useRouter } from 'next/router';
import Navbar from '@/components/Widgets/Navbar';
import Head from 'next/head';
import CanvasBrains from '../components/Features/Brains/Scenes/HSCanvas';
import { Suspense } from 'react';
import { CustomLoader } from '@/components/Important/Loader';

const Brainjobs = () => {
  const router = useRouter();

  const backToMainPage = () => {
    router.push('/');
  };

  const moveToNextPage = () => {
    router.push('/faceworks');
  };

  return (
    <>
      <div className="max-w-4xl mx-auto h-[100svh]">
        <Head>
          <title>Brainsground</title>
          <meta name="Brainjobs" content="BrainsPage" />
        </Head>
        <CustomLoader />
        <div className="flex flex-row text-white text-lg gap-5 md:gap-10 md:pt-4 align-items-center pt-4 z-20 justify-center">
          <button className="hover:text-xl" onClick={backToMainPage}>
            back
          </button>{' '}
          <button className="hover:text-xl" onClick={moveToNextPage}>
            next
          </button>
        </div>
        <div className="mt-8">
          <Suspense
            fallback={
              <div
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                }}>
                <p>Scene is being loaded</p>
              </div>
            }>
            <CanvasBrains />
          </Suspense>
        </div>
        <div className="hidden lg:block">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Brainjobs;
