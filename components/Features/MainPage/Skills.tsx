import { Canvas } from '@react-three/fiber';
import { Hand1 } from '@/components/3Dmodels/Hand1';
import { Foot1 } from '@/components/3Dmodels/Foot1';
import { Brain } from '@/components/3Dmodels/Brain';
import { Face } from '@/components/3Dmodels/Face';
import React, { Suspense } from 'react';

import { useRouter } from 'next/router';

import CustomTooltip from '../../Shared/CustomTooltip';
import Image from 'next/image';

const Skills = () => {
  const [tooltipPositionHand, setTooltipPositionHand] = React.useState({ top: 5, left: 5 });
  const [tooltipPositionFoot, setTooltipPositionFoot] = React.useState({ top: 5, left: 215 });
  const [tooltipPositionArm, setTooltipPositionArm] = React.useState({ top: 455, left: 5 });
  const [tooltipPositionFace, setTooltipPositionFace] = React.useState({ top: 455, left: 215 });

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

  React.useEffect(() => {
    const updatePositions = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 950) {
        setTooltipPositionFoot({ top: 5, left: 455 });
      } else if (screenWidth >= 840) {
        setTooltipPositionFoot({ top: 5, left: 450 });
      } else if (screenWidth >= 720) {
        setTooltipPositionFoot({ top: 5, left: 420 });
      } else if (screenWidth >= 680) {
        setTooltipPositionFoot({ top: 5, left: 360 });
      } else if (screenWidth >= 640) {
        setTooltipPositionFoot({ top: 5, left: 340 });
      } else if (screenWidth >= 600) {
        setTooltipPositionFoot({ top: 5, left: 320 });
      } else if (screenWidth >= 560) {
        setTooltipPositionFoot({ top: 5, left: 300 });
      } else if (screenWidth >= 540) {
        setTooltipPositionFoot({ top: 5, left: 280 });
      } else if (screenWidth >= 520) {
        setTooltipPositionFoot({ top: 5, left: 270 });
      } else if (screenWidth >= 500) {
        setTooltipPositionFoot({ top: 5, left: 260 });
      } else {
        setTooltipPositionFoot({ top: 5, left: 215 });
      }

      if (screenWidth >= 950) {
        setTooltipPositionArm({ top: 375, left: 5 });
      } else if (screenWidth >= 720) {
        setTooltipPositionArm({ top: 375, left: 5 });
      } else if (screenWidth >= 500) {
        setTooltipPositionArm({ top: 375, left: 5 });
      } else {
        setTooltipPositionArm({ top: 455, left: 5 });
      }

      if (screenWidth >= 950) {
        setTooltipPositionFace({ top: 375, left: 455 });
      } else if (screenWidth >= 840) {
        setTooltipPositionFace({ top: 375, left: 450 });
      } else if (screenWidth >= 720) {
        setTooltipPositionFace({ top: 375, left: 420 });
      } else if (screenWidth >= 680) {
        setTooltipPositionFace({ top: 375, left: 360 });
      } else if (screenWidth >= 640) {
        setTooltipPositionFace({ top: 375, left: 340 });
      } else if (screenWidth >= 600) {
        setTooltipPositionFace({ top: 375, left: 320 });
      } else if (screenWidth >= 560) {
        setTooltipPositionFace({ top: 375, left: 300 });
      } else if (screenWidth >= 540) {
        setTooltipPositionFace({ top: 375, left: 280 });
      } else if (screenWidth >= 520) {
        setTooltipPositionFace({ top: 375, left: 270 });
      } else if (screenWidth >= 500) {
        setTooltipPositionFace({ top: 375, left: 260 });
      } else {
        setTooltipPositionFace({ top: 455, left: 215 });
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);

    return () => window.removeEventListener('resize', updatePositions);
  }, []);

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
        <div
          onClick={handleHandClick}
          className="w-[50%] h-[50%] hover:cursor-pointer"
          onMouseEnter={() => setShowHoverDivHand(true)}
          onMouseLeave={() => setShowHoverDivHand(false)}>
          {showHoverDivHand ? (
            <div className="flex flex-col rounded-xl bg-zinc-900 h-[100%] justify-center items-center">
              <Image
                src="/skateparks/BuildingBG.jpg"
                alt="skateboarding"
                width={300}
                height={300}
                className="rounded-xl opacity-80"
              />
              <button className="btn-neutral rounded-xl flex justify-center text-white text-md mt-2 p-2">
                See projects
              </button>
            </div>
          ) : (
            <Canvas
              gl={{ antialias: false }}
              className="bg-white rounded-xl"
              style={{ width: '100%', height: '100%' }}>
              <directionalLight />
              <pointLight position={[0, 1, 4.6]} power={8.0} />
              <Hand1 position={[0, -0.2, 4.3]} />
            </Canvas>
          )}
          <CustomTooltip tooltipTextToDisplay="Hands" position={tooltipPositionHand} />
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
              <Image
                src="/sk8.PNG"
                alt="skateboarding"
                width={400}
                height={400}
                className="rounded-xl opacity-80"
              />
              <button className="btn-neutral rounded-xl flex justify-center text-white text-md mt-2 p-2">
                Learn more
              </button>
            </div>
          ) : (
            <Canvas
              gl={{ antialias: false }}
              className="bg-black"
              style={{ width: '100%', height: '100%' }}>
              <directionalLight />
              <pointLight position={[0, 0, 5]} power={10.0} />
              <Foot1 position={[0, -0.5, 4]} />
            </Canvas>
          )}

          <CustomTooltip tooltipTextToDisplay="Feet" position={tooltipPositionFoot} />
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
              <Image
                src="/w1.jpg.webp"
                alt="brain"
                width={300}
                height={300}
                className="rounded-xl"
              />
              <button className="btn-neutral rounded-xl flex justify-center text-white text-md mt-2 p-2">
                Brains? What is that?
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

          <CustomTooltip tooltipTextToDisplay="Brains" position={tooltipPositionArm} />
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
              <Image
                src="/modeling/1.png"
                alt="face"
                width={400}
                height={400}
                className="rounded-xl opacity-70"
              />
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

          <CustomTooltip tooltipTextToDisplay="Face" position={tooltipPositionFace} />
        </div>
      </Suspense>
    </div>
  );
};

export default Skills;
