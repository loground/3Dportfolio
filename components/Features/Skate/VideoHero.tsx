import React, { useState } from 'react';

const VideoHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative mt-10">
      <div className="absolute left-0 w-full h-full bg-black bg-opacity-40"></div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          Loading
        </div>
      )}

      <video
        className="object-cover w-full h-full"
        src="/footjob/surfskateweb.mp4"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"></div>
    </div>
  );
};

export default VideoHero;
