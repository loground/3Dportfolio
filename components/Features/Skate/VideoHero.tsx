import React from 'react';

const VideoHero = () => {
  return (
    <div className="relative mt-10">
      <div className="absolute left-0 w-full h-full bg-black bg-opacity-40"></div>
      <video className="object-cover" src="/footjob/surfskateweb.mp4" autoPlay loop muted />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl mb-4">I do skate</h1>
        <p className="text-3xl">I do surf</p>
        <p className="text-2xl mt-2">And I love it</p>
      </div>
    </div>
  );
};

export default VideoHero;
