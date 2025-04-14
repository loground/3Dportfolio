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
        <div onClick={handleHandClick} className="w-[50%] h-[50%] hover:cursor-pointer">
          <Canvas
            gl={{ antialias: false }}
            className="bg-white rounded-xl"
            style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 1, 4.6]} power={8.0} />
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
        <div
          onClick={handleFootClick}
          className="w-[50%] h-[50%] hover:cursor-pointer"
          onMouseEnter={() => setShowHoverDivFoot(true)}
          onMouseLeave={() => setShowHoverDivFoot(false)}>
          {showHoverDivFoot ? (
            <div className="flex flex-col rounded-xl bg-zinc-900 h-[100%] justify-center items-center">
              <h1 className="text-white text-2xl text-center">Skateboarding and surfing</h1>
              <p className="text-white text-center p-5">are biggest parts of my life.</p>
              <button className="btn-neutral rounded-xl flex justify-center text-white text-md mt-2 p-2">
                Learn more
              </button>
            </div>
          ) : (
            <Canvas
              gl={{ antialias: false }}
              className="bg-black  rounded-xl"
              style={{ width: '100%', height: '100%' }}>
              <directionalLight />
              <pointLight position={[0, 0, 5]} power={10.0} />
              <Foot1 position={[0, -0.5, 4]} />
            </Canvas>
          )}
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
        <div
          className="w-[50%] h-[50%] hover:cursor-pointer"
          onClick={handleBrainClick}
          onMouseEnter={() => setShowHoverDivBrain(true)}
          onMouseLeave={() => setShowHoverDivBrain(false)}>
          {showHoverDivBrain ? (
            <div className="flex flex-col rounded-xl bg-zinc-900 h-[100%] justify-center items-center">
              <h1 className="text-white text-2xl text-center">Brains</h1>
              <p className="text-white text-center p-5">that work pretty well</p>

              <button className="btn-neutral rounded-xl flex justify-center text-white text-md mt-2 p-2">
                See the proofs
              </button>
            </div>
          ) : (
            <Canvas
              gl={{ antialias: false }}
              className="bg-black rounded-xl"
              style={{ width: '100%', height: '100%' }}>
              <directionalLight />
              <pointLight position={[0, 0.5, 2.5]} power={40.0} />
              <Brain position={[0, -1, 2]} />
            </Canvas>
          )}
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
        <div
          className="w-[50%] h-[50%]  hover:cursor-pointer"
          onClick={handleFaceClick}
          onMouseEnter={() => setShowHoverDivFace(true)}
          onMouseLeave={() => setShowHoverDivFace(false)}>
          {showHoverDivFace ? (
            <div className="flex flex-col rounded-xl bg-zinc-900 h-[100%] justify-center items-center">
              <h1 className="text-white text-2xl">Modeling</h1>
              <p className="text-white text-center p-5">Not very fashionable, but still</p>
              <button className="btn-neutral rounded-xl flex justify-center text-white text-md mt-2 p-2">
                Find out
              </button>
            </div>
          ) : (
            <Canvas
              gl={{ antialias: false }}
              className="bg-white rounded-xl"
              style={{ width: '100%', height: '100%' }}>
              <directionalLight />
              <pointLight position={[0, 0, 5]} power={12.0} />
              <Face position={[0, -0.3, 4.5]} />
            </Canvas>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Skills;
