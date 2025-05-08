import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, useVideoTexture, Environment } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { useBrainScene } from '../Context';

export function CoolPlayingTable(props) {
  const { nodes, materials } = useGLTF('/3d/scene-v1/scene.gltf');

  const { selectedCard } = useBrainScene();

  const { rotation, scale } = useSpring({
    rotation: selectedCard !== null ? [1, 0, 0] : [0.7, -0.3, 0.3],
    scale: selectedCard !== null ? 40 : 18,
    config: { mass: 0.1, tension: 10, friction: 14 },
  });

  const videoTexture0 = useVideoTexture('/videos/web3.mp4', {
    loop: true,
    muted: true,
    start: true,
    autoplay: true,
    crossOrigin: 'anonymous',
  });
  const videoTexture1 = useVideoTexture('/videos/1.mov', {
    loop: true,
    muted: true,
    start: true,
    autoplay: true,
    crossOrigin: 'anonymous',
  });
  const videoTexture2 = useVideoTexture('/videos/codePLEASE.mp4', {
    loop: true,
    muted: true,
    start: true,
    autoplay: true,
    crossOrigin: 'anonymous',
  });

  const videoTextures = [videoTexture0, videoTexture1, videoTexture2];
  const videoTexture = selectedCard !== null ? videoTextures[selectedCard] : null;

  useEffect(() => {
    if (!videoTexture) return;

    if (selectedCard === 0) {
      videoTexture.repeat.set(2, 2);
      videoTexture.offset.set(-0.5, 0.1);
    } else if (selectedCard === 1) {
      videoTexture.repeat.set(1, 1);
      videoTexture.offset.set(0.2, 0.1);
    } else if (selectedCard === 2) {
      videoTexture.repeat.set(0.5, 1.5);
      videoTexture.offset.set(0.25, 0.12);
    }
  }, [videoTexture]);

  return (
    <a.group position={[0, 0, -12]} rotation={rotation} scale={scale}>
      <Environment preset="forest" />
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crystal_010_Crystal_0.geometry}
          material={materials.Crystal}
          position={[-0.287, 0.189, 0.242]}
          rotation={[1.059, 0.587, -1.051]}
          scale={[0.02, 0.02, 0.027]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Flower_small_Flower_small_0.geometry}
          material={materials.Flower_small}
          position={[-0.229, 0.176, -0.096]}
          rotation={[0, -1.245, 0.018]}
          scale={0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grassfloor__2_Coweb_0.geometry}
          material={materials.Coweb}
          position={[0.571, 0.259, 0.046]}
          rotation={[-2.953, 0.155, 2.211]}
          scale={[0.001, 0.002, 0.002]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Book_0.geometry}
          material={materials.Book}
          position={[-0.226, 0.228, -0.143]}
          rotation={[-0.055, 0.908, -1.528]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Book_0.geometry}
          material={materials.Book}
          position={[0.226, 0.228, -0.143]}
          rotation={[0.055, -0.908, -1.528]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FX_FX_book_bug_0.geometry}
          material={materials.FX_book_bug}
          position={[-0.217, 0.244, -0.162]}
          rotation={[-Math.PI, -0.848, -Math.PI]}
          scale={0}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plateau_Table_Table_0.geometry}
          material={materials.Table}
          position={[0.221, 0.175, -0.137]}
          rotation={[-Math.PI / 2, 0, 0.963]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6_Weapon_0.geometry}
          material={materials.Weapon}
          position={[0.314, 0.195, -0.105]}
          rotation={[-0.447, 0.712, 0.179]}
          scale={0}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object037_Sand_Plateau_game_0.geometry}
          material={materials.Sand_Plateau_game}
          position={[0.245, 0.175, 0.193]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.01, 0.011, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Outil_2_Outiul_0.geometry}
          material={materials.Outiul}
          position={[-0.217, 0.182, 0.217]}
          rotation={[3.021, -0.906, -0.189]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Parchemin_1_Parchemin_0.geometry}
          material={materials.Parchemin}
          position={[0.202, 0.233, -0.145]}
          rotation={[-1.708, -0.427, 2.113]}
          scale={0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object030_BaseW2_0.geometry}
          material={materials.BaseW2}
          position={[0.466, 0.194, 0.048]}
          rotation={[Math.PI / 2, 0.968, 3.142]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object030_BaseW3_0.geometry}
          material={materials.BaseW3}
          position={[0.466, 0.194, 0.048]}
          rotation={[Math.PI / 2, 0.968, 3.142]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object030_CHarne_0.geometry}
          material={materials.CHarne}
          position={[0.466, 0.194, 0.048]}
          rotation={[Math.PI / 2, 0.968, 3.142]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object030_Ornement_0.geometry}
          material={materials.Ornement}
          position={[0.466, 0.194, 0.048]}
          rotation={[Math.PI / 2, 0.968, 3.142]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object032_BaseW1_0.geometry}
          material={materials.BaseW1}
          position={[0, 0.038, 0.048]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object034_PLateau_Game_1_0.geometry}
          material={materials.PLateau_Game_1}
          position={[0, 0.038, 0.048]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object035_PLateau_Game_2_0.geometry}
          material={materials.PLateau_Game_2}
          position={[0, 0.038, 0.048]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        />

        {selectedCard !== null && selectedCard !== 1 ? (
          <React.Suspense fallback={<meshBasicMaterial wireframe />}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plateau_center_PLateau_center_0.geometry}
              material={materials.PLateau_center}
              position={[0, 0.038, 0.048]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={0.01}>
              <meshStandardMaterial map={videoTexture} toneMapped={false} side={THREE.DoubleSide} />
            </mesh>
          </React.Suspense>
        ) : (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plateau_center_PLateau_center_0.geometry}
            material={materials.PLateau_center}
            position={[0, 0.038, 0.048]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={0.01}
          />
        )}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Sand_13_floorgate_(1)_0'].geometry}
          material={materials.floorgate_1}
          position={[0.004, 0.16, 0.28]}
          rotation={[-1.67, -0.002, -1.826]}
          scale={[0.001, 0.002, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sand_17_Sand_0.geometry}
          material={materials.Sand_0}
          position={[0.141, 0.163, 0.207]}
          rotation={[-1.559, -0.045, -0.187]}
          scale={0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ST_7_Stone_Gate_0.geometry}
          material={materials.Stone_Gate}
          position={[-0.312, 0.18, 0.182]}
          rotation={[-1.621, 0.035, -0.085]}
          scale={0.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stone_Stone_wood_bar_0.geometry}
          material={materials.Stone_wood_bar}
          position={[-0.306, 0.174, -0.132]}
          rotation={[-1.571, 0, 0.876]}
          scale={0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AnneauGate_Gate_0.geometry}
          material={materials.Gate_0}
          position={[0.249, 0.216, 0.225]}
          rotation={[-1.866, 0.63, -2.665]}
          scale={0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_002_FX_Gate_5_0.geometry}
          material={materials.FX_Gate_5}
          position={[0.247, 0.221, 0.222]}
          rotation={[-3.124, -0.359, 1.633]}
          scale={[0.001, 0.001, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_FX_Gate_4_0.geometry}
          material={materials.FX_Gate_4}
          position={[0.248, 0.222, 0.224]}
          rotation={[-Math.PI, -0.38, -2.861]}
          scale={[0.003, 0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor_2_FX_Gate_0.geometry}
          material={materials.FX_Gate}
          position={[0.259, 0.246, 0.235]}
          rotation={[1.571, -0.001, 2.733]}
          scale={0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor_3_FX_Gate_2_0.geometry}
          material={materials.FX_Gate_2}
          position={[0.253, 0.246, 0.221]}
          rotation={[1.572, -0.001, 2.733]}
          scale={0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Wood_Wood_(1)_0'].geometry}
          material={materials.Wood_1_0}
          position={[0.005, 0.156, 0.276]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WoodBar_Wood_Bar_0.geometry}
          material={materials.Wood_Bar}
          position={[0.309, 0.174, -0.135]}
          rotation={[-1.571, 0, -0.695]}
          scale={0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line001_Stone_0.geometry}
          material={materials.Stone}
          position={[-0.254, 0.195, 0.221]}
          rotation={[-1.435, 0.634, 1.553]}
          scale={0.001}
        />
      </group>
    </a.group>
  );
}

useGLTF.preload('/3d/scene-v1/scene.gltf');
