import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Wave(props) {
  const { nodes, materials } = useGLTF('/3d/waveFixed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.M_Eye01}
        position={[0.034, -0.004, 0.069]}
        rotation={[0, 0.032, 0]}
        scale={0.741}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.M_Eye02}
        position={[0.034, -0.004, 0.069]}
        rotation={[0, 0.032, 0]}
        scale={0.741}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.M_Eye03}
        position={[0.034, -0.004, 0.069]}
        rotation={[0, 0.032, 0]}
        scale={0.741}
      />
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
        position={[-18.305, 3.812, 4.051]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_29.geometry}
        material={materials.Hair}
        position={[4.499, 6.287, -4.393]}
      />
    </group>
  );
}

useGLTF.preload('/3d/waveFixed.glb');
