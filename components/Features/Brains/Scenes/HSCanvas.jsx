import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { HScard } from '../Cards/HsCardModel';

import { BrainSceneProvider } from '../Context';
import { CoolPlayingTable } from '../Cards/SceneFixed';

const cards = [
  {
    textureUrl: '/brains/web3.png',
    position: [-3.2, -2, -0.5],
    rotation: [0, Math.PI, -0.2],
  },
  {
    textureUrl: '/brains/marketing.png',
    position: [3.2, -2, -0.7],
    rotation: [0, Math.PI, 0.2],
  },
  {
    textureUrl: '/brains/coding.png',
    position: [0, -1.6, -0.3],
    rotation: [0, Math.PI, 0.01],
  },
];

const CanvasBrains = () => {
  return (
    <BrainSceneProvider>
      <div className="relative h-screen items-center">
        <Canvas className="" style={{ height: '85svh', width: '100%' }}>
          <OrbitControls />

          {cards.map((card, index) => (
            <HScard key={index} index={index} {...card} />
          ))}

          <CoolPlayingTable />
          <Environment preset="sunset" />

          <directionalLight position={[0, 0, 2]} intensity={1.2} />
        </Canvas>
      </div>
    </BrainSceneProvider>
  );
};

export default CanvasBrains;
