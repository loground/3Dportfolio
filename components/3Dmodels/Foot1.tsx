import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';

type GLTFResult = GLTF & {
  nodes: {
    mesh: THREE.Mesh;
  };
  materials: {
    main: THREE.MeshStandardMaterial;
  };
};

export function Foot1(props: JSX.IntrinsicElements['group']) {
  const ref: any = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.elapsedTime) * 0.7;
    }
  });

  const { nodes, materials } = useGLTF('/3d/legjob2.glb') as GLTFResult;
  return (
    <>
      <Text3D
        font="/font/Wilker.json"
        material={new THREE.MeshStandardMaterial()}
        size={1.5}
        height={0.1}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.03}
        bevelSize={0.02}
        bevelOffset={0}
        position={[-2.8, 3, -2]}>
        Legs
      </Text3D>
      <group {...props} dispose={null} ref={ref}>
        <mesh castShadow receiveShadow geometry={nodes.mesh.geometry} material={materials.main} />
      </group>
    </>
  );
}

useGLTF.preload('/3d/legjob2.glb');
