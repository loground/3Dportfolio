import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import { Float } from '@react-three/drei';

type GLTFResult = GLTF & {
  nodes: {
    mesh: THREE.Mesh;
  };
  materials: {
    main: THREE.MeshStandardMaterial;
  };
};

export function Foot1({ isHovered, ...props }: any) {
  const ref: any = useRef();

  useFrame(({ clock }) => {
    if (ref.current && isHovered) {
      ref.current.rotation.y = Math.sin(clock.elapsedTime) * 0.7;
    }
  });

  const { nodes, materials } = useGLTF('/3d/legjob2.glb') as GLTFResult;
  return (
    <>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 1]}>
        <Text3D
          font="/font/Jumpking.json"
          material={new THREE.MeshStandardMaterial()}
          size={1.5}
          height={0.1}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.1}
          bevelOffset={-0.08}
          position={[-2.5, 2.8, -2]}>
          Legs
        </Text3D>
      </Float>
      <group {...props} dispose={null} ref={ref}>
        <mesh castShadow receiveShadow geometry={nodes.mesh.geometry} material={materials.main} />
      </group>
    </>
  );
}

useGLTF.preload('/3d/legjob2.glb');
