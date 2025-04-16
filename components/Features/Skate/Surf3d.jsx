import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Wave } from '../../3Dmodels/Wave';
import { SurfMe } from '../../3Dmodels/Surf';
import SkyBehind from '../../3Dmodels/Skybox';

const SurfTrip = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      oceanAudio.pause();
      oceanAudio.currentTime = 0;
      oceanAudio.src = '';
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cameraPosition = isMobile ? [7, 2.5, 8] : [5.6, 1.3, 6];

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
            position: cameraPosition,
            fov: isMobile ? 55 : 50,
            near: 0.1,
            far: 1000,
          }}>
          <directionalLight />
          <pointLight position={[0, -2, -4]} power={30.0} />
          <ambientLight intensity={0.5} />
          <Wave position={[-2, isMobile ? -5 : -3.5, -3]} rotation={[0, 4.4, 0]} scale={0.7} />
          <SkyBehind />
          <SurfMe scale={1} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default SurfTrip;
