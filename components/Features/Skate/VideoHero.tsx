import React from 'react';
import { Suspense } from 'react';

const VideoHero = () => {
  return (
    <div className="relative mt-10">
      <div className="absolute left-0 w-full h-full bg-black bg-opacity-40"></div>
      <Suspense fallback={<div>Loading...</div>}>
        <video className="object-cover" src="/footjob/surfskateweb.mp4" autoPlay loop muted />
      </Suspense>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"></div>
    </div>
  );
};

export default VideoHero;
