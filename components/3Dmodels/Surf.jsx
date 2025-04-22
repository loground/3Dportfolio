import React, { useRef, useEffect, useState } from 'react';
import { Float, useGLTF, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { Text3D } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

export function SurfMe(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/3d/Surf.glb');
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sequence = [
    {
      position: new THREE.Vector3(-0.4, isMobile ? -0.3 : 1.3, -11),
      rotationY: 3.8,
      rotationZ: -0.25,
    },
    { position: new THREE.Vector3(0, isMobile ? -0.3 : 0.3, -7), rotationY: 4, rotationZ: 0.2 },
    { position: new THREE.Vector3(1, isMobile ? -0.7 : 0.7, -2), rotationY: 3, rotationZ: 0.8 },
    { position: new THREE.Vector3(1, isMobile ? -0.55 : 0.5, 1), rotationY: 0, rotationZ: 0.1 },
    { position: new THREE.Vector3(3, isMobile ? -0.7 : 0.3, 3), rotationY: -2, rotationZ: 0 },
    { position: new THREE.Vector3(3, 0, 9), rotationY: -2.6, rotationZ: 0 },
  ];

  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useFrame((state, delta) => {
    if (!group.current) return;

    const isLastStep = step === sequence.length - 1;
    const current = sequence[step];
    const next = !isLastStep ? sequence[step + 1] : null;

    if (!isLastStep && next) {
      group.current.position.lerpVectors(current.position, next.position, progress);

      const startQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(current.rotationX || 0, current.rotationY || 0, current.rotationZ || 0),
      );
      const endQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(0, next.rotationY, next.rotationZ || 0),
      );
      group.current.quaternion.slerpQuaternions(startQuat, endQuat, progress);
    }

    const speed = 1.8;
    const nextProgress = progress + delta * speed;

    if (nextProgress >= 1) {
      if (isLastStep) {
        group.current.position.copy(sequence[0].position);
        group.current.rotation.set(0, sequence[0].rotationY, sequence[0].rotationZ || 0);
        setStep(0);
        setProgress(0);
      } else {
        setStep((prev) => prev + 1);
        setProgress(0);
      }
    } else {
      setProgress(nextProgress);
    }
  });

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0.geometry}
          material={materials.Material_0}
        />
      </group>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text3D
          ref={textRef}
          castShadow
          position={[-10, 3.8, -1]}
          rotation={[0, 1, 0]}
          size={1}
          font="/font/Mighty.json"
          lineHeight={0.8}
          letterSpacing={0.4}
          bevelEnabled
          bevelThickness={0.0006}
          bevelSize={0.01}
          material={
            new MeshStandardMaterial({
              color: '#EB47AE',
              metalness: 1,
              roughness: 0,
              emissive: '#161345',
              envMapIntensity: 2,
            })
          }>
          I love finless surfing
        </Text3D>
      </Float>
      <Environment preset="forest" />
    </>
  );
}

useGLTF.preload('/3d/Surf.glb');
