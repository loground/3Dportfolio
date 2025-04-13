import React, { useRef } from 'react';
import { useGLTF, Float, MeshDistortMaterial, GradientTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useState } from 'react';

export function GithubLogo(props) {
  const { nodes, materials } = useGLTF('/3d/icon/github.glb');
  const { gl } = useThree();
  const ref = useRef();
  const [color, setColor] = useState('#ffffff');
  const [distortion, setDistortion] = useState(0.1);
  const [gradientColors, setGradientColors] = useState([
    '#ffffff',
    '#fc45ff',
    '#ff0000',
    '#ffcc00',
    '#6aff00',
    '#00ffbb',
    '#006aff',
    '#8800ff',
    '#ff0037',
  ]);

  const handleClick = () => {
    window.open('https://x.com/nickvrnn', '_blank');
  };

  const handlePointerEnter = () => {
    gl.domElement.style.cursor = 'pointer';
    setColor('#ffffff');
    setDistortion(0.3);
  };

  const handlePointerLeave = () => {
    gl.domElement.style.cursor = 'default';
    setColor('#ffffff');
    setDistortion(0.2);
  };

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[0, 1]}>
      <group
        {...props}
        position={[1.5, 1.5, 0]}
        dispose={null}
        scale={0.025}
        rotation={[0, -1.1, 0]}>
        <group>
          <group
            onClick={handleClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            rotation={[0, Math.PI / 4, 0]}
            scale={[2, -2, 2]}>
            <mesh geometry={nodes.mesh_0.geometry}>
              <MeshDistortMaterial distort={distortion} speed={10}>
                <GradientTexture
                  stops={[0, 0.8, 1]}
                  colors={[color, '#09efff', '#ffffff']}
                  size={1}
                />
              </MeshDistortMaterial>
            </mesh>
          </group>
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload('/3d/icon/github.glb');
