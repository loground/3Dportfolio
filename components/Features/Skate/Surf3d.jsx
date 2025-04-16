import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Wave } from '../../3Dmodels/Wave';
import { SurfMe } from '../../3Dmodels/Surf';
import SkyBehind from '../../3Dmodels/Skybox';

const SurfTrip = () => {
  useEffect(() => {
    const oceanAudio = new Audio('/sounds/ocean.mp3');
    oceanAudio.loop = true;
    oceanAudio.volume = 1.0;

    const tryPlay = () => {
      oceanAudio.play().catch((e) => console.warn('Playback blocked:', e));
      window.removeEventListener('click', tryPlay);
    };

    oceanAudio.play().catch(() => {
      window.addEventListener('click', tryPlay);
    });

    return () => {
      // Make sure we fully kill the sound on unmount
      oceanAudio.pause();
      oceanAudio.currentTime = 0;
      oceanAudio.src = ''; // ✅ Clear source
    };
  }, []);

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
        <Canvas
          key="surf-canvas"
          gl={{ antialias: false }}
          className="bg-white opacity-80"
          style={{ height: '80%' }}
          camera={{
            position: [5.6, 1.3, 6],
            fov: 50,
            near: 0.1,
            far: 1000,
          }}>
          <directionalLight />
          <pointLight position={[0, -2, -4]} power={30.0} />
          <ambientLight intensity={0.5} />

          <Wave position={[-2, -3.5, -3]} rotation={[0, 4.4, 0]} scale={0.8} />
          <SkyBehind />
          <SurfMe scale={1.5} />

          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default SurfTrip;
