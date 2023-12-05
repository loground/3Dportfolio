import React, { Suspense, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Model } from '../../3Dmodels/Model';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Hero = () => {
  return (
    <div className="relative h-screen items-center">
      <Suspense
        fallback={
          <div
            className="flex items-center justify-center text-white text-xl"
            style={{ height: '85%' }}>
            Get Ready!
          </div>
        }>
        <p className="absolute z-20 top-20 left-[45%] md:left-[47%] select-none bg-pink-400 rounded-xl p-1 text-white">
          {' '}
          spin me
        </p>
        <Canvas gl={{ antialias: false }} className="bg-white opacity-80" style={{ height: '85%' }}>
          <directionalLight />
          <pointLight position={[0, 0, 4]} power={30.0} />
          <Model position={[0, -2, 3]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            target={[0, -1, 3]}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
      <h1 className="absolute w-[100vw] h-[30vh] text-white font-xl p-5 text-4xl mt-[-25%] md:mt-[-6%] lg:mt-[-7%] rounded-2xl bg-black md:text-5xl md:w-[100%]">
        Nikita, 26, Junior 🖖 Frontend {'=>'}{' '}
        <a
          href="mailto:nickvoroninwork@gmail.com"
          className="bg-white hover:bg-black text-black text-3xl hover:text-white p-1 rounded-xl">
          Email Me
        </a>
      </h1>
    </div>
  );
};

export default Hero;
