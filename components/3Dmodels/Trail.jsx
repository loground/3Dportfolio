import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useRef, useState, useEffect } from 'react';
import { SimpleTrail } from './FollowingTrail';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

const GradientTrailMaterial = shaderMaterial(
  {
    color: new THREE.Color('#ff0000'),
    opacity: 1,
    intensity: 1,
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform vec3 color;
    uniform float opacity;
    uniform float intensity;
    varying vec2 vUv;

    void main() {
      float fade = smoothstep(1.0, 0.0, vUv.y); // gradient alpha bottom ➝ top
      gl_FragColor = vec4(color * intensity, fade * opacity);
    }
  `,
);

extend({ GradientTrailMaterial });

export default GradientTrailMaterial;

export const TrailMesh = ({ isMobile }) => {
  const { color, intensity, opacity, size } = useControls('Trail', {
    size: { value: 0.05, min: 0.002, max: 5, step: 0.001 },
    color: '#6099f4',
    intensity: { value: 4.6, min: 1, max: 10, step: 0.1 },
    opacity: { value: 1, min: 0, max: 1, step: 0.01 },
  });

  const target = useRef();
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [trailKey, setTrailKey] = useState(0);

  const sequence = [
    {
      position: new THREE.Vector3(-0.4, isMobile ? -0.3 : 0.6, -11),
      rotationY: 3.8,
      rotationZ: -0.25,
    },
    { position: new THREE.Vector3(0, isMobile ? -0.3 : -0.2, -7), rotationY: 4, rotationZ: 0.2 },
    { position: new THREE.Vector3(1, isMobile ? -0.7 : 0.2, -2), rotationY: 3, rotationZ: 0.8 },
    { position: new THREE.Vector3(1, isMobile ? -0.55 : 0, 1), rotationY: 0, rotationZ: 0.1 },
    { position: new THREE.Vector3(3, isMobile ? -0.7 : 0, 3), rotationY: -2, rotationZ: 0 },
    { position: new THREE.Vector3(3, 0, 9), rotationY: -2.6, rotationZ: 0 },
  ];

  useFrame((_, delta) => {
    if (!target.current) return;

    const isLastStep = step === sequence.length - 1;
    const current = sequence[step];
    const next = !isLastStep ? sequence[step + 1] : null;

    if (!isLastStep && next) {
      target.current.position.lerpVectors(current.position, next.position, progress);

      const startQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(0, current.rotationY, current.rotationZ || 0),
      );
      const endQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(0, next.rotationY, next.rotationZ || 0),
      );
      target.current.quaternion.slerpQuaternions(startQuat, endQuat, progress);
    }

    const speed = 1.8;
    const nextProgress = progress + delta * speed;

    if (nextProgress >= 1) {
      if (isLastStep) {
        target.current.position.copy(sequence[0].position);
        target.current.rotation.set(0, sequence[0].rotationY, sequence[0].rotationZ || 0);
        setStep(0);
        setProgress(0);
        setTrailKey((prev) => prev + 1); // 🔁 force trail to re-render
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
      <group ref={target}>
        <mesh>
          <sphereGeometry args={[size / 12, 32, 32]} />
          <gradientTrailMaterial
            color={new THREE.Color(color)}
            opacity={opacity}
            intensity={intensity}
            transparent
            depthWrite={false}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending} // 💥 glow!
          />
        </mesh>
      </group>

      <SimpleTrail
        key={trailKey}
        target={target}
        color={color}
        intensity={intensity}
        opacity={opacity}
        height={0.2}
      />
    </>
  );
};
