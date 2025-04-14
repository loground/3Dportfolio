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

  const [isHovered, setIsHovered] = React.useState(false);

  const { nodes, materials } = useGLTF('/3d/self2.glb') as GLTFResult;

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.elapsedTime) * 0.2;
    }
  });

  console.log(isHovered);
  return (
    <group
      {...props}
      onPointerEnter={(e) => {
        setIsHovered(true);
        props.onPointerEnter?.(e);
      }}
      onPointerLeave={(e) => {
        setIsHovered(false);
        props.onPointerLeave?.(e);
      }}
      dispose={null}
      ref={ref}>
      <mesh castShadow receiveShadow geometry={nodes.mesh.geometry}>
        <DissolveMaterial baseMaterial={materials.main} isHovered={isHovered} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/3d/self2.glb');
