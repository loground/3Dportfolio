import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame, useThree } from '@react-three/fiber';
import { DissolveMaterial } from './DissolveMaterial';

type GLTFResult = GLTF & {
  nodes: {
    mesh: THREE.Mesh;
  };
  materials: {
    main: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements['group']) {
  const ref: any = useRef();
  const { camera } = useThree();
  const prevRotation = useRef(0);

  const [isHovered, setIsHovered] = React.useState(false);

  useFrame(() => {
    const deltaRotation = camera.rotation.y - prevRotation.current;
    if (deltaRotation > 0.01) {
      window.scrollBy(0, deltaRotation * 200);
      prevRotation.current = camera.rotation.y;
    }
  });

  const { nodes, materials } = useGLTF('/3d/self2.glb') as GLTFResult;

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.elapsedTime) * 0.2;
    }
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <group
      {...props}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
      dispose={null}
      ref={ref}>
      <mesh castShadow receiveShadow geometry={nodes.mesh.geometry} material={materials.main} />
      <DissolveMaterial baseMaterial={materials.main} isHovered={isHovered} />
    </group>
  );
}

useGLTF.preload('/3d/self2.glb');
