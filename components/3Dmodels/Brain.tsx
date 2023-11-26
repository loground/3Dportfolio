import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    mesh: THREE.Mesh;
  };
  materials: {
    main: THREE.MeshStandardMaterial;
  };
};

export function Brain(props: JSX.IntrinsicElements['group']) {
  const ref: any = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.elapsedTime) * 0.7;
    }
  });

  const { nodes, materials } = useGLTF('/3d/brainjob.glb') as GLTFResult;
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh castShadow receiveShadow geometry={nodes.mesh.geometry} material={materials.main} />
    </group>
  );
}

useGLTF.preload('/3d/brainjob.glb');
