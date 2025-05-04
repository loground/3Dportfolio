import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { HScard } from '../Cards/HsCardModel';

const cards = [
  {
    textureUrl: '/test.png',
    position: [-3.5, -2.4, 0],
    rotation: [0, Math.PI, -0.2],
  },
  {
    textureUrl: '/test.png',
    position: [3.5, -2.4, 0],
    rotation: [0, Math.PI, 0.15],
  },
  {
    textureUrl: '/test.png',
    position: [1.2, -2.2, 0],
    rotation: [0, Math.PI, 0.05],
  },
  {
    textureUrl: '/test.png',
    position: [-1.2, -2.2, 0],
    rotation: [0, Math.PI, -0.05],
  },
];

const CanvasBrains = () => {
  return (
    <div className="relative h-screen items-center">
      <Canvas className="" style={{ height: '85svh', width: '100%', background: 'white' }}>
        <OrbitControls />

        {cards.map((card, index) => (
          <HScard key={index} {...card} />
        ))}

        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default CanvasBrains;
