import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { Model } from '../../3Dmodels/Model';
import { OrbitControls } from '@react-three/drei';
import ScrambleIn from './AnimatedTooltip';
import RightWall from '../../3Dmodels/Background';
import { TwitterLogo } from '../../3Dmodels/icons/Twitter';
import { InstagramLogo } from '../../3Dmodels/icons/Instagram';
import { LinkedLogo } from '../../3Dmodels/icons/LinkedIn';
import { GithubLogo } from '../../3Dmodels/icons/Github';
import { CustomLoader } from '@/components/Important/Loader';

const Hero = () => {
  const [hovered, setIsHovered] = React.useState(false);

  console.log(hovered);

  return (
    <div className="relative h-screen items-center">
      <CustomLoader />
      <Suspense
        fallback={
          <div
            className="flex items-center justify-center text-white text-xl"
            style={{ height: '85%' }}>
            Get Ready!
          </div>
        }>
        <ScrambleIn isHovered={hovered} />

        <Canvas
          key="hero-canvas"
          gl={{ antialias: false }}
          className="bg-white opacity-80"
          style={{ height: '85%' }}>
          <directionalLight />
          <pointLight position={[0, 0, 4]} power={30.0} />
          <pointLight position={[1, 0, 1]} power={20.0} />
          <pointLight position={[-1, 0, 1]} power={20.0} />

          <RightWall />

          <ambientLight intensity={0.4} />

          <TwitterLogo />
          <InstagramLogo />
          <LinkedLogo />
          <GithubLogo />

          <Model
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            position={[0, -1, 2.6]}
          />

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </Suspense>
      <h1 className="absolute w-[100vw] h-[30vh] text-white font-xl p-5 text-4xl mt-[-25%] md:mt-[-6%] lg:mt-[-7%] rounded-2xl bg-black md:text-5xl md:w-[100%]">
        Nikita, 28, Frontend {'=>'}{' '}
        <a
          href="mailto:nickvoroninwork@gmail.com"
          className="bg-white hover:bg-black text-black text-3xl hover:text-white p-1 rounded-xl">
          Email Me
        </a>
      </h1>
    </div>
  );
};

export default Hero;
