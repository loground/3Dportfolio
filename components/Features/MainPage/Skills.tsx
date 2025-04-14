import { Canvas } from '@react-three/fiber';
import { Hand1 } from '@/components/3Dmodels/Hand1';
import { Foot1 } from '@/components/3Dmodels/Foot1';
import { Brain } from '@/components/3Dmodels/Brain';
import { Face } from '@/components/3Dmodels/Face';
import React, { Suspense } from 'react';

import { useRouter } from 'next/router';

const Skills = () => {
  const [showHoverDivHand, setShowHoverDivHand] = React.useState(false);
  const [showHoverDivFoot, setShowHoverDivFoot] = React.useState(false);
  const [showHoverDivBrain, setShowHoverDivBrain] = React.useState(false);
  const [showHoverDivFace, setShowHoverDivFace] = React.useState(false);

  const router = useRouter();
  const handleHandClick = () => {
    router.push('/Handjobs');
  };

  const handleFootClick = () => {
    router.push('/Footjobs');
  };

  const handleBrainClick = () => {
    router.push('/Brainjobs/Web3');
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
        <div onClick={handleHandClick} className="w-[48%] m-1 h-[48%] hover:cursor-pointer">
          <Canvas
            gl={{ antialias: false }}
            className="bg-white rounded-xl"
            style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 1, 4.6]} power={30.0} />
            <Hand1 position={[0, -0.2, 4.3]} />
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
        <div onClick={handleFootClick} className="w-[48%] m-1 h-[48%] hover:cursor-pointer">
          <Canvas
            gl={{ antialias: false }}
            className="bg-white  rounded-xl"
            style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 0, 4]} power={40.0} />
            <Foot1 position={[0, -0.5, 3.3]} />
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
        <div className="w-[48%] h-[48%] m-1 hover:cursor-pointer" onClick={handleBrainClick}>
          <Canvas
            gl={{ antialias: false }}
            className="bg-white rounded-xl"
            style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 0.3, 2.3]} power={40.0} />
            <Brain position={[0, -1.2, 1.8]} />
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
        <div className="w-[48%] m-1 h-[48%]  hover:cursor-pointer" onClick={handleFaceClick}>
          <Canvas
            gl={{ antialias: false }}
            className="bg-white rounded-xl"
            style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 0.5, 5]} power={30.0} />
            <Face position={[0, -0.4, 4.3]} />
          </Canvas>
        </div>
      </Suspense>
    </div>
  );
};

export default Skills;
