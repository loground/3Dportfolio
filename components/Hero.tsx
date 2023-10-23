import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Model } from './3Dmodels/Model';

const Hero = () => {
  return (
    <div className="relative h-screen items-center">
      <Canvas className="bg-white opacity-60" style={{ height: '85%' }}>
        <directionalLight />
        <pointLight position={[0, 0, 5]} power={12.0} />
        <Model position={[0, -0.2, 4.5]} />
      </Canvas>
      <h1 className="text-white font-xl text-4xl ml-5 mt-2 md:ml-0 lg:ml-0">
        Gimme a well-paid job {'=>'}
      </h1>
    </div>
  );
};

export default Hero;
