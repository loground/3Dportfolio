import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stage, useTexture } from '@react-three/drei';
import { HScard } from '../Cards/HsCardModel';
import * as THREE from 'three';

import { BrainSceneProvider } from '../Context';
import { CoolPlayingTable } from '../Cards/SceneFixed';


const cards = [
  {
    textureUrl: '/brains/web3.png',
    position: [-3.2, -1.6, -0.5],
    rotation: [0, Math.PI, -0.2],
  },
  {
    textureUrl: '/brains/marketing.png',
    position: [3.2, -1.6, -0.7],
    rotation: [0, Math.PI, 0.2],
  },
  {
    textureUrl: '/brains/coding.png',
    position: [0, -1.4, -0.3],
    rotation: [0, Math.PI, 0.01],
  },
];

export const Background = () => {
  const map = useTexture('/textures/Tavern_Brawl_-_promo.webp');

  return (
    <>
      <mesh scale={1}>
        <sphereGeometry args={[40, 40, 40]} />
        <meshBasicMaterial side={THREE.BackSide} map={map} toneMapped={false} />
      </mesh>
    </>
  );
};

const CanvasBrains = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  return (
    <BrainSceneProvider>
     
      <div className="relative h-screen items-center">
        <Canvas className="" style={{ height: '85svh', width: '100%', background: 'white' }}>
          <directionalLight position={[0, 0, 2]} intensity={1.5} />
          <OrbitControls
            rotateSpeed={0.3}
            maxAzimuthAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 4}
            maxDistance={isMobile ? 12 : 10}
            minDistance={isMobile ? 8 : 5}
          />

          <Background />
          {cards.map((card, index) => (
            <HScard key={index} index={index} {...card} />
          ))}

          <CoolPlayingTable />

          <directionalLight position={[0, 0, 2]} intensity={1.2} />
        </Canvas>
      </div>
    </BrainSceneProvider>
  );
};

export default CanvasBrains;
