import { Canvas } from '@react-three/fiber';
import { Model } from './3Dmodels/Model';
import { Hand1 } from '@/components/3Dmodels/Hand1';
import { Foot1 } from '@/components/3Dmodels/Foot1';
import { Arm1 } from '@/components/3Dmodels/Arm1';
import React from 'react';

import { useRouter } from 'next/router';

import CustomTooltip from './CustomTooltip';

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
      setTooltipPositionFoot({ top: 5, left: 260 });
    }
    if (window.innerWidth >= 768) {
      setTooltipPositionFoot({ top: 5, left: 390 });
    }
    if (window.innerWidth >= 1024) {
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
    if (window.innerWidth >= 768) {
      setTooltipPositionArm({ top: 460, left: 5 });
    }
    if (window.innerWidth >= 1024) {
      setTooltipPositionArm({ top: 375, left: 5 });
    }
  };

  const handleMouseEnterFace = () => {
    setTooltipPositionFace({ top: 455, left: 215 });
    setTooltipTextFace('facejobs');
    if (window.innerWidth >= 500) {
      setTooltipPositionFace({ top: 375, left: 260 });
    }
    if (window.innerWidth >= 768) {
      setTooltipPositionFace({ top: 460, left: 390 });
    }
    if (window.innerWidth >= 1024) {
      setTooltipPositionFace({ top: 375, left: 455 });
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
      <div
        onClick={handleHandClick}
        className="w-[50%] h-[50%] hover:cursor-pointer"
        onMouseMove={handleMouseEnterHand}
        onMouseLeave={handleMouseLeave}>
        <Canvas className="bg-white" style={{ width: '100%', height: '100%' }}>
          <directionalLight />
          <pointLight position={[0, 0, 4.6]} power={12.0} />
          <Hand1 position={[0, -0.25, 4.4]} />
        </Canvas>
        {tooltipTextHand && (
          <CustomTooltip tooltipTextToDisplay={tooltipTextHand} position={tooltipPositionHand} />
        )}
      </div>
      <div
        onClick={handleFootClick}
        className="w-[50%] h-[50%] hover:cursor-pointer"
        onMouseMove={handleMouseEnterFoot}
        onMouseLeave={handleMouseLeave}>
        <Canvas className="bg-black" style={{ width: '100%', height: '100%' }}>
          <directionalLight />
          <pointLight position={[0, 0, 5]} power={12.0} />
          <Foot1 position={[0, -0.2, 4.5]} />
        </Canvas>
        {tooltipTextFoot && (
          <CustomTooltip tooltipTextToDisplay={tooltipTextFoot} position={tooltipPositionFoot} />
        )}
      </div>
      <div
        className="w-[50%] h-[50%] hover:cursor-pointer"
        onClick={handleBrainClick}
        onMouseMove={handleMouseEnterArm}
        onMouseLeave={handleMouseLeave}>
        <Canvas className="bg-black" style={{ width: '100%', height: '100%' }}>
          <directionalLight />
          <pointLight position={[0, 0, 5]} power={12.0} />
          <Arm1 position={[0, -0.1, 4.5]} />
        </Canvas>
        {tooltipTextArm && (
          <CustomTooltip tooltipTextToDisplay={tooltipTextArm} position={tooltipPositionArm} />
        )}
      </div>
      <div
        className="w-[50%] h-[50%]  hover:cursor-pointer"
        onClick={handleFaceClick}
        onMouseMove={handleMouseEnterFace}
        onMouseLeave={handleMouseLeave}>
        <Canvas className="bg-white " style={{ width: '100%', height: '100%' }}>
          <directionalLight />
          <pointLight position={[0, 0, 5]} power={12.0} />
          <Model position={[0, -0.2, 4.5]} />
        </Canvas>
        {tooltipTextFace && (
          <CustomTooltip tooltipTextToDisplay={tooltipTextFace} position={tooltipPositionFace} />
        )}
      </div>
    </div>
  );
};

export default Skills;
