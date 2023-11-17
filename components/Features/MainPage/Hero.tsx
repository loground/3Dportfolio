import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Model } from '../../3Dmodels/Model';

const Hero = () => {
  return (
    <div className="relative h-screen items-center">
      <Canvas className="bg-white opacity-60" style={{ height: '85%' }}>
        <directionalLight />
        <pointLight position={[0, 0, 5]} power={12.0} />
        <Model position={[0, -0.2, 4.5]} />
      </Canvas>
      <h1 className="text-white font-xl text-4xl ml-5 mt-2 md:ml-0 md:text-5xl md:mt-14 lg:ml-0 xl:mt-6">
        Nikita, 26, Junior Frontend {'=>'}{' '}
        <a
          href="mailto:nickvoroninwork@gmail.com"
          className="bg-white hover:bg-black text-black hover:text-white font-bold  rounded">
          Email Me
        </a>
      </h1>
    </div>
  );
};

export default Hero;
