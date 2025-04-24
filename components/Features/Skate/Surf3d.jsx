import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { Wave } from '../../3Dmodels/Wave';
import { SurfMe } from '../../3Dmodels/Surf';
import SkyBehind from '../../3Dmodels/Skybox';
import { TrailMesh } from '../../3Dmodels/Trail';
import * as THREE from 'three';

const AmbientFade = () => {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    if (lightRef.current) {
      const t = clock.getElapsedTime();
      // ⏳ Animate intensity between 0.1 and 1.0
      const min = 0.1;
      const max = 1.3;
      const pulseSpeed = 0.12; // Lower = slower
      const pulse = (Math.sin(t * pulseSpeed) + 1) / 2; // 0 → 1
      lightRef.current.intensity = THREE.MathUtils.lerp(min, max, pulse);
    }
  });

  return <ambientLight ref={lightRef} intensity={1.0} />;
};

const SurfTrip = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Mute state
  const oceanAudioRef = useRef(null); // Ref for Audio object

  useEffect(() => {
    const oceanAudio = new Audio('/sounds/ocean.mp3');
    oceanAudio.loop = true;
    oceanAudio.volume = 1.0;
    oceanAudioRef.current = oceanAudio;

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

  // Mute/Unmute toggle effect
  useEffect(() => {
    if (oceanAudioRef.current) {
      oceanAudioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cameraPosition = isMobile ? [7, 1.2, 8] : [5.6, 1.3, 6];

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
          className="bg-white opacity-80 pointer-events-none"
          style={isMobile ? { height: '60vh', width: '100%' } : { height: '80vh', width: '100%' }}
          camera={{
            position: cameraPosition,
            fov: isMobile ? 55 : 50,
            near: 0.1,
            far: 1000,
          }}>
          <Html fullscreen className="top-5 left-5">
            <button
              onClick={() => setIsMuted((prev) => !prev)}
              className=" text-pink-600 px-4 font-bold  py-2 rounded ">
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
          </Html>
          <directionalLight position={[1, 0.5, 1]} power={10} />
          <AmbientFade />
          <pointLight position={[0, -2, -4]} power={30.0} />

          {/* Mute Button */}

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
