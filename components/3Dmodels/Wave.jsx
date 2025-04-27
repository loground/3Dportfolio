import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Wave(props) {
  const { nodes, materials } = useGLTF('/3d/waveFixed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.M_water}
        position={[1.622, 5.811, -3.94]}
        rotation={[0.919, 0.28, -1.918]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials['M_Baked-Foam']}
        scale={1.4}
        position={[-18.305, 3.812, 4.051]}
      />
    </group>
  );
}

useGLTF.preload('/3d/waveFixed.glb');
