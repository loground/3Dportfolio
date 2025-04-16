import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Wave } from '../../3Dmodels/Wave';
import { SurfMe } from '../../3Dmodels/Surf';
import SkyBehind from '../../3Dmodels/Skybox';
import { TrailMesh } from '../../3Dmodels/Trail';
import * as THREE from 'three';

const AmbientFade = () => {
  const lightRef = useRef();

  useFrame(() => {
    if (lightRef.current) {
      // Smoothly interpolate toward 0.1
      lightRef.current.intensity = THREE.MathUtils.lerp(
        lightRef.current.intensity,
        0.1,
        0.01, // lower = slower
      );
    }
  });

  return <ambientLight ref={lightRef} intensity={1.0} />;
};

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
          <directionalLight position={[1, 0.5, 1]} power={10} />

          <AmbientFade />
          <pointLight position={[0, -2, -4]} power={30.0} />

          <Wave position={[-2, isMobile ? -5 : -3.5, -3]} rotation={[0, 4.4, 0]} scale={0.7} />
          <SkyBehind />
          <SurfMe scale={1} />
          <TrailMesh isMobile={isMobile} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default SurfTrip;
