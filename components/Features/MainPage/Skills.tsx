import { Canvas } from '@react-three/fiber';
import { Hand1 } from '@/components/3Dmodels/Hand1';
import { Foot1 } from '@/components/3Dmodels/Foot1';
import { Brain } from '@/components/3Dmodels/Brain';
import { Face } from '@/components/3Dmodels/Face';
import React, { Suspense } from 'react';

import { useRouter } from 'next/router';

const Skills = () => {
  const [isHoveredHand, setIsHoveredHand] = React.useState(false);
  const [isHoveredLegs, setIsHoveredLegs] = React.useState(false);
  const [isHoveredBrain, setIsHoveredBrain] = React.useState(false);
  const [isHoveredFace, setIsHoveredFace] = React.useState(false);

  const router = useRouter();
  const handleHandClick = () => {
    router.push('/Handjobs');
  };

  const handleFootClick = () => {
    router.push('/Footjobs');
  };

  const handleBrainClick = () => {
    router.push('/Brainjobs');
  };

  const handleFaceClick = () => {
    router.push('/Facejobs');
  };

  return (
    <div className="relative h-screen items-center flex flex-wrap justify-center">
      <Suspense
        fallback={
          <div
            className="flex items-center justify-center text-white text-xl"
            style={{ height: '50%', width: '50%' }}>
            Loading hand
          </div>
        }>
        <div onClick={handleHandClick} className="w-[48%] m-0.5 h-[48%] hover:cursor-pointer">
          <Canvas
            onPointerEnter={() => setIsHoveredHand(true)}
            onPointerLeave={() => setIsHoveredHand(false)}
            gl={{ antialias: false }}
            className="bg-white rounded-xl"
            style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 1, 4.6]} power={30.0} />
            <Hand1 isHovered={isHoveredHand} position={[0, -0.2, 4.3]} />
          </Canvas>
        </div>
      </Suspense>
      <Suspense
        fallback={
          <div
            className="flex items-center justify-center text-white text-xl"
            style={{ height: '50%', width: '50%' }}>
            Loading legs
          </div>
        }>
        <div onClick={handleFootClick} className="w-[48%] m-0.5 h-[48%] hover:cursor-pointer">
          <Canvas
            onPointerEnter={() => setIsHoveredLegs(true)}
            onPointerLeave={() => setIsHoveredLegs(false)}
            gl={{ antialias: false }}
            className="bg-white  rounded-xl"
            style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 0, 4]} power={40.0} />
            <Foot1 isHovered={isHoveredLegs} position={[0, -0.5, 3.3]} />
          </Canvas>
        </div>
      </Suspense>
      <Suspense
        fallback={
          <div
            className="flex items-center justify-center text-white text-xl"
            style={{ height: '50%', width: '50%' }}>
            Loading room
          </div>
        }>
        <div className="w-[48%] h-[48%] m-0.5 hover:cursor-pointer" onClick={handleBrainClick}>
          <Canvas
            onPointerEnter={() => setIsHoveredBrain(true)}
            onPointerLeave={() => setIsHoveredBrain(false)}
            gl={{ antialias: false }}
            className="bg-white rounded-xl"
            style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 0.3, 2.3]} power={40.0} />
            <Brain isHovered={isHoveredBrain} position={[0, -1.2, 1.8]} />
          </Canvas>
        </div>
      </Suspense>
      <Suspense
        fallback={
          <div
            className="flex items-center justify-center text-white text-xl rounded-xl"
            style={{ height: '50%', width: '50%' }}>
            Loading face
          </div>
        }>
        <div className="w-[48%] m-0.5 h-[48%]  hover:cursor-pointer" onClick={handleFaceClick}>
          <Canvas
            onPointerEnter={() => setIsHoveredFace(true)}
            onPointerLeave={() => setIsHoveredFace(false)}
            gl={{ antialias: false }}
            className="bg-white rounded-xl"
            style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 0.5, 5]} power={30.0} />
            <Face isHovered={isHoveredFace} position={[0, -0.4, 4.3]} />
          </Canvas>
        </div>
      </Suspense>
    </div>
  );
};

export default Skills;
