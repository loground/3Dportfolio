import { Float, MeshDistortMaterial, useGLTF, GradientTexture } from '@react-three/drei';

import { useThree } from '@react-three/fiber';

import React, { useRef, useState } from 'react';

export function InstaB(props) {
  const { nodes } = useGLTF('/3d/instG.glb');
  const { gl } = useThree();
  const ref = useRef();
  const [distortion, setDistortion] = useState(0.2);
  const [color, setColor] = useState('#ceef9a');

  const handleClick = () => {
    window.open('https://www.instagram.com/loground/', '_blank');
  };

  const handlePointerEnter = () => {
    gl.domElement.style.cursor = 'pointer';
    setDistortion(0.4);
    setColor('#36b725');
  };

  const handlePointerLeave = () => {
    gl.domElement.style.cursor = 'default';
    setDistortion(0.2);
    setColor('#ceef9a');
  };

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={0.5} floatingRange={[0, 0.7]}>
      <group
        ref={ref}
        {...props}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}>
        <mesh geometry={nodes.mesh_0.geometry}>
          <MeshDistortMaterial distort={distortion} speed={10}>
            <GradientTexture stops={[0, 0.8, 1]} colors={[color, '#20a80e', '#000000']} size={1} />
          </MeshDistortMaterial>
        </mesh>
        <mesh geometry={nodes.mesh_1.geometry}>
          <MeshDistortMaterial distort={distortion} speed={10}>
            <GradientTexture stops={[0, 0.8, 1]} colors={[color, '#ffffff', color]} size={1} />
          </MeshDistortMaterial>
        </mesh>
      </group>
    </Float>
  );
}

useGLTF.preload('/3d/instG.glb');
