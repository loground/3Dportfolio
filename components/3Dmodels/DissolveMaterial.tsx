import * as THREE from 'three';
import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import CSM from 'three-custom-shader-material';
import { patchShaders } from 'gl-noise';

interface Props {
  baseMaterial: THREE.Material;
  isHovered: boolean;
  thickness?: number;
  feather?: number;
  color?: string;
  intensity?: number;
}

export function DissolveMaterial({
  baseMaterial,
  isHovered,
  thickness = 0.1,
  feather = 2,
  color = '#f86dff',
  intensity = 20,
}: Props) {
  const obj = useMemo(() => {
    const o = new THREE.Object3D();
    o.scale.setScalar(0.5);
    return o;
  }, []);

  const dissolve = useRef(0);

  const uniforms = useMemo(
    () => ({
      uMatrix: { value: obj.matrixWorld },
      uFeather: { value: feather },
      uThickness: { value: thickness },
      uColor: { value: new THREE.Color(color).multiplyScalar(intensity) },
      uProgress: { value: 0 },
    }),
    [],
  );

  const vertexShader = useMemo(
    () => /* glsl */ `
    varying vec3 custom_vPosition;
    void main() {
      custom_vPosition = position;
    }
  `,
    [],
  );

  const fragmentShader = useMemo(
    () =>
      patchShaders(/* glsl */ `
    varying vec3 custom_vPosition;
    uniform mat4 uMatrix;
    uniform float uFeather;
    uniform float uThickness;
    uniform vec3 uColor;
    uniform float uProgress;

    float sdfBox(vec3 p, vec3 b) {
      vec3 q = abs(p) - b;
      return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
    }

    vec3 transform(vec3 p) {
      return (inverse(uMatrix) * vec4(p, 1.0)).xyz;
    }

    void main() {
      gln_tFBMOpts opts = gln_tFBMOpts(1.0, 0.3, 2.0, 5.0, 1.0, 5, false, false);
      float noise = gln_sfbm(custom_vPosition, opts);
      noise = gln_normalize(noise);

      vec3 p = transform(custom_vPosition);
      float d = smoothstep(0.0, uFeather, sdfBox(p, vec3(0.75)));

      float alpha = step(1.0 - uProgress, noise);
      float border = step((1.0 - uProgress) - uThickness, noise) - alpha;

      csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, uColor, border);
      csm_DiffuseColor.a = alpha + border;
    }
  `),
    [],
  );

  useFrame(() => {
    dissolve.current = THREE.MathUtils.lerp(dissolve.current, isHovered ? 0 : 1, 0.1);
    uniforms.uProgress.value = dissolve.current;
    obj.updateMatrixWorld();
    uniforms.uMatrix.value = obj.matrixWorld;
  });

  const cloned = useMemo(() => baseMaterial.clone(), [baseMaterial]);

  return (
    <CSM
      baseMaterial={cloned}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      toneMapped={false}
      transparent
    />
  );
}
