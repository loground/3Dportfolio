import { Canvas } from '@react-three/fiber';
import { Hand1 } from '@/components/3Dmodels/Hand1';
import { Foot1 } from '@/components/3Dmodels/Foot1';
import { Brain } from '@/components/3Dmodels/Brain';
import { Face } from '@/components/3Dmodels/Face';
import React, { Suspense } from 'react';

import { useRouter } from 'next/router';

import CustomTooltip from '../../Shared/CustomTooltip';

const Skills = () => {
  const [tooltipPositionHand, setTooltipPositionHand] = React.useState({ top: 0, left: 0 });
  const [tooltipTextHand, setTooltipTextHand] = React.useState('');
  const [tooltipPositionFoot, setTooltipPositionFoot] = React.useState({ top: 0, left: 0 });
  const [tooltipTextFoot, setTooltipTextFoot] = React.useState('');
  const [tooltipPositionArm, setTooltipPositionArm] = React.useState({ top: 0, left: 0 });
  const [tooltipTextArm, setTooltipTextArm] = React.useState('');
  const [tooltipPositionFace, setTooltipPositionFace] = React.useState({ top: 0, left: 0 });
  const [tooltipTextFace, setTooltipTextFace] = React.useState('');

  const router = useRouter();

  const handleMouseEnterHand = () => {
    setTooltipPositionHand({ top: 5, left: 5 });
    setTooltipTextHand('handjobs');
  };

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

  const handleMouseEnterFoot = () => {
    setTooltipPositionFoot({ top: 5, left: 215 });
    if (window.innerWidth >= 500) {
      setTooltipPositionFoot({ top: 5, left: 280 });
    }
    if (window.innerWidth >= 560) {
      setTooltipPositionFoot({ top: 5, left: 300 });
    }
    if (window.innerWidth >= 600) {
      setTooltipPositionFoot({ top: 5, left: 360 });
    }
    if (window.innerWidth >= 720) {
      setTooltipPositionFoot({ top: 5, left: 450 });
    }
    if (window.innerWidth >= 950) {
      setTooltipPositionFoot({ top: 5, left: 455 });
    }
    setTooltipTextFoot('footjobs');
  };

  const handleMouseEnterArm = () => {
    setTooltipPositionArm({ top: 455, left: 5 });
    setTooltipTextArm('brainjobs');
    if (window.innerWidth >= 500) {
      setTooltipPositionArm({ top: 375, left: 5 });
    }
    if (window.innerWidth >= 720) {
      setTooltipPositionArm({ top: 375, left: 5 });
    }
    if (window.innerWidth >= 950) {
      setTooltipPositionArm({ top: 375, left: 5 });
    }
  };

  const handleMouseEnterFace = () => {
    setTooltipPositionFace({ top: 455, left: 215 });
    setTooltipTextFace('facejobs');
    if (window.innerWidth >= 500) {
      setTooltipPositionFace({ top: 375, left: 280 });
    }
    if (window.innerWidth >= 560) {
      setTooltipPositionFace({ top: 375, left: 300 });
    }
    if (window.innerWidth >= 560) {
      setTooltipPositionFace({ top: 375, left: 360 });
    }
    if (window.innerWidth >= 720) {
      setTooltipPositionFace({ top: 375, left: 450 });
    }
    if (window.innerWidth >= 950) {
      setTooltipPositionFace({ top: 375, left: 450 });
    }
  };

  const handleMouseLeave = () => {
    setTooltipTextHand('');
    setTooltipTextFoot('');
    setTooltipTextArm('');
    setTooltipTextFace('');
  };

  return (
    <div className="relative h-screen items-center flex flex-wrap justify-center">
      <Suspense
        fallback={
          <div className="text-white" style={{ height: '100%' }}>
            Loading 3D Model...
          </div>
        }>
        <div
          onClick={handleHandClick}
          className="w-[50%] h-[50%] hover:cursor-pointer"
          onMouseMove={handleMouseEnterHand}
          onMouseLeave={handleMouseLeave}>
          <Canvas className="bg-white" style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 1, 4.6]} power={12.0} />
            <Hand1 position={[0, -0.2, 4.4]} />
          </Canvas>

          {tooltipTextHand && (
            <CustomTooltip tooltipTextToDisplay={tooltipTextHand} position={tooltipPositionHand} />
          )}
        </div>
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white" style={{ height: '100%' }}>
            Loading 3D Model...
          </div>
        }>
        <div
          onClick={handleFootClick}
          className="w-[50%] h-[50%] hover:cursor-pointer"
          onMouseMove={handleMouseEnterFoot}
          onMouseLeave={handleMouseLeave}>
          <Canvas className="bg-black" style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 0, 5]} power={30.0} />
            <Foot1 position={[0, -0.5, 4]} />
          </Canvas>

          {tooltipTextFoot && (
            <CustomTooltip tooltipTextToDisplay={tooltipTextFoot} position={tooltipPositionFoot} />
          )}
        </div>
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white" style={{ height: '100%' }}>
            Loading 3D Model...
          </div>
        }>
        <div
          className="w-[50%] h-[50%] hover:cursor-pointer"
          onClick={handleBrainClick}
          onMouseMove={handleMouseEnterArm}
          onMouseLeave={handleMouseLeave}>
          <Canvas className="bg-black" style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 0, 2.5]} power={90.0} />
            <pointLight position={[-1, 0, 4]} power={60.0} />
            <Brain position={[0, -1, 2]} />
          </Canvas>

          {tooltipTextArm && (
            <CustomTooltip tooltipTextToDisplay={tooltipTextArm} position={tooltipPositionArm} />
          )}
        </div>
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white" style={{ height: '100%' }}>
            Loading 3D Model...
          </div>
        }>
        <div
          className="w-[50%] h-[50%]  hover:cursor-pointer"
          onClick={handleFaceClick}
          onMouseMove={handleMouseEnterFace}
          onMouseLeave={handleMouseLeave}>
          <Canvas className="bg-white " style={{ width: '100%', height: '100%' }}>
            <directionalLight />
            <pointLight position={[0, 0, 5]} power={12.0} />
            <Face position={[0, -0.3, 4.5]} />
          </Canvas>

          {tooltipTextFace && (
            <CustomTooltip tooltipTextToDisplay={tooltipTextFace} position={tooltipPositionFace} />
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Skills;
