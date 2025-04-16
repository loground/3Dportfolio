import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

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

export function SimpleTrail({
  target = null,
  color = '#20e3fd',
  intensity = 6,
  numPoints = 15,
  height = 0.1,
  minDistance = 0.25,
  opacity = 0.3,
}) {
  const mesh = useRef();
  const positions = useRef([]);
  const initialized = useRef(false);

  // 🧹 Reinitialize trail points cleanly on remount
  useEffect(() => {
    if (target?.current) {
      const p = target.current.position.clone();
      positions.current = Array.from({ length: numPoints }, () => p.clone());

      const geometry = mesh.current.geometry;
      const positionAttribute = geometry.getAttribute('position');

      for (let i = 0; i < numPoints; i++) {
        positionAttribute.setXYZ(i * 2, p.x, p.y - height / 2, p.z);
        positionAttribute.setXYZ(i * 2 + 1, p.x, p.y + height / 2, p.z);
      }

      positionAttribute.needsUpdate = true;
      initialized.current = true;
    }
  }, [target, numPoints]);

  useFrame(() => {
    if (!mesh.current || !target?.current || !initialized.current) return;

    const curPoint = target.current.position.clone();
    const lastPoint = positions.current[0];
    const dist = lastPoint.distanceTo(curPoint);

    if (dist > minDistance) {
      positions.current.unshift(curPoint);
      positions.current.pop();
    }

    const geometry = mesh.current.geometry;
    const posAttr = geometry.getAttribute('position');

    for (let i = 0; i < numPoints; i++) {
      const pt = positions.current[positions.current.length - 1 - i];
      posAttr.setXYZ(i * 2, pt.x, pt.y - height / 2, pt.z);
      posAttr.setXYZ(i * 2 + 1, pt.x, pt.y + height / 2, pt.z);
    }

    posAttr.needsUpdate = true;
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[1, 1, 1, numPoints - 2]} />
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
  );
}
