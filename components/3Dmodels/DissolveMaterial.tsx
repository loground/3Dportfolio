import * as THREE from 'three';
import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import CSM from 'three-custom-shader-material';
import { patchShaders } from 'gl-noise';
import { PivotControls } from '@react-three/drei';

const vertexShader = /* glsl */ `
  varying vec2 custom_vUv;
  varying vec3 custom_vPosition;
  varying vec3 custom_vBoxUv;
  uniform vec3 uBoxMin;
  uniform vec3 uBoxMax;
  void main() {
    custom_vUv = uv;
    custom_vPosition = position;
    custom_vBoxUv = (position - uBoxMin) / (uBoxMax - uBoxMin);
  }`;

const fragmentShader = patchShaders(/* glsl */ `
  varying vec2 custom_vUv;
  varying vec3 custom_vPosition;
  varying vec3 custom_vBoxUv;
  uniform mat4 uMatrix;
  uniform float uFeather;
  uniform float uThickness;
  uniform sampler2D uRamp;
  uniform vec3 uColor;   
  float sdfBox(vec3 p, vec3 b) {
    vec3 q = abs(p) - b;
    return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
  }
  vec3 transform(vec3 p) {
    return (inverse(uMatrix) * vec4(p, 1.0)).xyz;
  }
  void main() {
    gln_tFBMOpts opts = gln_tFBMOpts(1.0, 0.3, 2.0, 5.0, 1.0, 5, false, false);
    float noise = gln_sfbm(custom_vPosition, opts);
    noise = gln_normalize(noise);
    vec3 transformed = transform(custom_vPosition);
    float distance = smoothstep(0.0, uFeather, sdfBox(transformed, vec3(0.75)));
    float progress = distance;
    float alpha = step(1.0 - progress, noise);
    float border = step((1.0 - progress) - uThickness, noise) - alpha;
    csm_DiffuseColor.a = alpha + border;
    csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, uColor, border);
  }`);

const o = new THREE.Object3D();
o.scale.setScalar(0.5);

const uniforms: Record<string, THREE.IUniform> = {
  uMatrix: { value: o.matrixWorld },
  uFeather: { value: 6 },
  uThickness: { value: 0.1 },
  uColor: { value: new THREE.Color('#ffc0cb').multiplyScalar(20) },
};

interface DissolveMaterialProps {
  baseMaterial: THREE.Material;
  mode?: string;
  thickness?: number;
  feather?: number;
  color?: string;
  intensity?: number;
  isHovered?: boolean;
}

export function DissolveMaterial({
  baseMaterial,
  mode,
  isHovered,
  thickness = 20,
  feather = 8,
  color = '#fb95ff',
  intensity = 5,
}: DissolveMaterialProps) {
  const targetPosition = React.useRef(new THREE.Vector3());
  const lerpSpeed = 0.03; // Adjust this value to change animation speed

  React.useLayoutEffect(() => {
    uniforms.uFeather.value = feather;
    uniforms.uThickness.value = thickness;
    uniforms.uColor.value.set(color).multiplyScalar(intensity);
  }, [feather, thickness, color, intensity]);

  React.useEffect(() => {
    // Set the target position based on hover state
    targetPosition.current.set(isHovered ? 0 : -8, isHovered ? 1 : 1, 0);
  }, [isHovered]);

  useFrame(() => {
    // Gradually interpolate the position toward the target
    o.position.lerp(targetPosition.current, lerpSpeed);
    o.updateMatrixWorld();
    uniforms.uMatrix.value = o.matrixWorld; // Update the uniform with the new matrix
  });

  return (
    <>
      <CSM
        baseMaterial={baseMaterial}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        toneMapped={false}
        transparent
      />
    </>
  );
}
