import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { useBrainScene } from '../Context';

export function PlayingTable(props) {
  const { nodes, materials } = useGLTF('/3d/compField.glb');
  const { selectedCard } = useBrainScene();

  console.log(selectedCard);

  const { rotation, scale } = useSpring({
    rotation: selectedCard !== null ? [1.2, 0, 0] : [0.7, 0, 0],
    scale: selectedCard !== null ? 40 : 26,
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

    // if (videoTexture) {
    //   videoTexture.repeat.set(0.8, 1.2);
    //   videoTexture.offset.set(0.1, 0.2);
    //   videoTexture.flipY = true;
    //   videoTexture.needsUpdate = true;
    // }
  }, [videoTexture]);

  return (
    <a.group position={[0, 0, -12]} rotation={rotation} scale={scale}>
      <group {...props} dispose={null}>
        <group position={[0, -0.494, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -0.338]} rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
            <group
              position={[-13.566, 40.659, 7.737]}
              rotation={[-0.469, 0.565, -0.367]}
              scale={0.142}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crystal_010_Crystal_0.geometry}
                material={materials.Crystal}
                position={[10.715, -4.951, 16.934]}
                rotation={[1.083, 0.799, -0.22]}
                scale={[5.63, 5.63, 7.565]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crystal_011_Crystal_0.geometry}
                material={materials.Crystal}
                position={[3.87, -4.052, 1.466]}
                rotation={[-0.684, 0.114, 0.73]}
                scale={[5.63, 5.63, 7.565]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crystal_09_Crystal_0.geometry}
                material={materials.Crystal}
                position={[26.724, -1.347, 24.966]}
                rotation={[-2.94, 0.344, 2.835]}
                scale={[4.721, 3.281, 4.721]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crystal009_Crystal_0.geometry}
                material={materials.Crystal}
                position={[14.049, 0.501, 8.865]}
                rotation={[-0.426, -0.716, -0.574]}
                scale={6.82}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crystal010_Crystal_0.geometry}
                material={materials.Crystal}
                position={[1.956, -5.232, 14.099]}
                rotation={[0.312, 0.474, 0.226]}
                scale={[5.63, 5.63, 7.565]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crystal08_Crystal_0.geometry}
                material={materials.Crystal}
                position={[8.645, 1.508, 12.363]}
                rotation={[0.291, -0.673, -0.034]}
                scale={9.988}
              />
            </group>
            <group
              position={[-9.03, 39.687, -3.792]}
              rotation={[0, -1.245, 0.018]}
              scale={[0.002, 0.005, 0.002]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Flower_small_Flower_small_0.geometry}
                material={materials.Flower_small}
                position={[0, 0, 0.001]}
              />
            </group>
            <group
              position={[-9.677, 39.687, -3.584]}
              rotation={[3.108, -1.241, 3.124]}
              scale={[0.003, 0.006, 0.003]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Flower_small_Flower_small_0001.geometry}
                material={materials.Flower_small}
                position={[0, 0, 0.001]}
              />
            </group>
            <group
              position={[10.69, 39.619, -3.302]}
              rotation={[3.111, -0.742, 3.123]}
              scale={[0.003, 0.006, 0.003]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Flower_small_Flower_small_0002.geometry}
                material={materials.Flower_small}
                position={[-0.001, 0, 0.001]}
              />
            </group>
            <group
              position={[9.674, 41.709, -5.613]}
              rotation={[3.111, -0.742, 3.123]}
              scale={[0.003, 0.006, 0.003]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Flower_small_Flower_small_0003.geometry}
                material={materials.Flower_small}
                position={[0, -0.001, 0]}
              />
            </group>
            <group
              position={[8.871, 41.709, -4.877]}
              rotation={[3.123, -0.191, 3.136]}
              scale={[0.003, 0.006, 0.003]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Flower_small_Flower_small_0004.geometry}
                material={materials.Flower_small}
                position={[0, 0, -0.001]}
              />
            </group>
            <group position={[-8.944, 39.65, -5.595]} rotation={[0, 0.778, 0]} scale={0.022}>
              <group position={[1.605, 0, -1.548]} rotation={[0, 0.098, 0]}>
                <group position={[0, 130.444, 0]} scale={0.316}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Book__3_Book_3_0.geometry}
                    material={materials.Book_3_0}
                    position={[1646.566, -83.4, 2014.386]}
                    rotation={[-3.085, 0.672, 1.55]}
                    scale={[2.943, 2.229, 2.943]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_3_Book_3_0.geometry}
                    material={materials.Book_3}
                    position={[0.746, -256.369, 221.095]}
                    rotation={[-0.045, -0.999, -1.57]}
                    scale={[2.562, 1.941, 2.562]}
                  />
                </group>
                <group position={[0, 92.376, -20.798]} rotation={[0, 0.019, 0]} scale={0.286}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Book_0.geometry}
                    material={materials.Book}
                    position={[0, 11.751, 82.468]}
                    rotation={[-0.034, 0.014, -1.571]}
                    scale={[7.146, 3.998, 5.282]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_Book_0.geometry}
                    material={materials.Book_0}
                    position={[0, 11.751, 82.468]}
                    rotation={[-0.034, 0.014, -1.571]}
                    scale={[7.146, 3.998, 5.282]}
                  />
                </group>
                <group
                  position={[38.078, 124.227, -7.699]}
                  rotation={[-Math.PI, 0.028, -Math.PI]}
                  scale={0.12}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.FX_FX_book_bug_0.geometry}
                    material={materials.FX_book_bug}
                    position={[0, 0, 0]}
                  />
                </group>
                <group
                  position={[-31.101, 120.226, 0.079]}
                  rotation={[0.062, -0.026, 0.27]}
                  scale={0.767}>
                  <group
                    position={[0, -0.668, 8.618]}
                    rotation={[-1.584, -0.079, -0.167]}
                    scale={0.12}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Loop_AssetWarcraft_Galss_0.geometry}
                      material={materials.Galss}
                      position={[0, 0, 0.001]}
                    />
                  </group>
                </group>
                <group position={[0, 0, 97.947]} scale={0.15}>
                  <group
                    position={[2986.519, -0.005, 3232.625]}
                    rotation={[-Math.PI / 2, 0, -0.862]}
                    scale={0.1}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Stool__4_Stool__0.geometry}
                      material={materials.Stool}
                      position={[0.004, 0.001, 0]}
                    />
                  </group>
                </group>
                <group position={[506.639, 0, 626.949]} scale={1.901}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plateau_Table_Table_0.geometry}
                    material={materials.Table}
                    position={[0.001, 0.001, 0]}
                    rotation={[-Math.PI / 2, 0, 0.087]}
                  />
                </group>
                <group position={[-82.159, 102.452, 49.034]} scale={0.303}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6_Weapon_0.geometry}
                    material={materials.Weapon}
                    position={[2156.283, -219.144, 2456.354]}
                    rotation={[-0.336, -0.107, -0.162]}
                    scale={[0.976, 1.024, 0.891]}
                  />
                </group>
                <group
                  position={[592.004, 2.215, 800.645]}
                  rotation={[1.571, 0, 0.871]}
                  scale={[0.169, 0.169, 0.111]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Grass_Grass_small_0.geometry}
                    material={materials.Grass_small}
                    position={[0.001, 0, 0]}
                  />
                </group>
              </group>
              <group
                position={[4.519, 150.323, 61.071]}
                rotation={[-0.002, -0.206, 0.001]}
                scale={0.628}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Hair_Default_0.geometry}
                  material={materials.Default}
                  position={[1.342, -0.525, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={2.305}
                />
              </group>
            </group>
            <group position={[12.179, 39.603, -5.301]} rotation={[-1.571, 0, -0.695]} scale={0.002}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Lantern_Lantern_0.geometry}
                material={materials.Lantern}
                position={[-0.001, 0, 0]}
              />
            </group>
            <group position={[0, 34.277, 1.879]} scale={0.394}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_037_smallcrystal_0.geometry}
                material={materials.smallcrystal}
                position={[24.911, 13.355, 23.466]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_039_PLateau_0.geometry}
                material={materials.PLateau}
                position={[-22.962, 13.355, -23.45]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object032_BaseW1_0.geometry}
                material={materials.BaseW1}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object034_PLateau_Game_1_0.geometry}
                material={materials.PLateau_Game_1}
                rotation={[-Math.PI / 2, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object035_PLateau_Game_2_0.geometry}
                material={materials.PLateau_Game_2}
                rotation={[-Math.PI / 2, 0, 0]}
              />

              {/* //center */}

              {selectedCard !== null ? (
                <React.Suspense fallback={<meshBasicMaterial wireframe />}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plateau_center_PLateau_center_0.geometry}
                    rotation={[-Math.PI / 2, 0, Math.PI]}>
                    <meshStandardMaterial
                      map={videoTexture}
                      toneMapped={false}
                      side={THREE.DoubleSide}
                    />
                  </mesh>
                </React.Suspense>
              ) : (
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plateau_center_PLateau_center_0.geometry}
                  material={materials.PLateau_center}
                  rotation={[-Math.PI / 2, 0, Math.PI]}
                />
              )}
            </group>

            <group
              position={[9.608, 39.556, 8.62]}
              rotation={[Math.PI, -0.38, Math.PI]}
              scale={0.007}>
              <group
                position={[-11.089, 229.328, -37.192]}
                rotation={[-Math.PI / 2, -0.687, 0]}
                scale={0.1}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.AnneauGate_Gate_0.geometry}
                  material={materials.Gate_0}
                  position={[0.002, -0.003, -0.003]}
                />
              </group>
              <group
                position={[-10.405, 256.028, -22.717]}
                rotation={[0, 0, -1.515]}
                scale={[5.736, 5.736, 0.003]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder_002_FX_Gate_5_0.geometry}
                  material={materials.FX_Gate_5}
                  position={[0, 0, 0.187]}
                />
              </group>
              <group
                position={[-44.467, 390.17, -106.608]}
                rotation={[1.57, 0, -0.029]}
                scale={[1.037, 1.091, 0.878]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Floor_2_FX_Gate_0.geometry}
                  material={materials.FX_Gate}
                  position={[0, 0.001, 0]}
                />
              </group>
              <group position={[0, 0.002, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Gate_Gate_0.geometry}
                  material={materials.Gate}
                  position={[0, 0, -0.001]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_003_FX_Gate_3_0.geometry}
                material={materials.FX_Gate_3}
                position={[-10.403, 256.029, -51.634]}
                rotation={[0, 0, 1.297]}
                scale={[8.503, 8.503, 0.095]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_FX_Gate_4_0.geometry}
                material={materials.FX_Gate_4}
                position={[-8.086, 258.947, -33.575]}
                rotation={[0, 0, 0.28]}
                scale={[15.616, 15.616, 0.199]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Floor_3_FX_Gate_2_0.geometry}
                material={materials.FX_Gate_2}
                position={[-38.6, 390.198, -28.484]}
                rotation={[1.57, 0, -0.029]}
                scale={[1.284, 1.351, 1.087]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ST_6_Stone2_0.geometry}
                material={materials.Stone2_1}
                position={[267.227, 81.523, 121.441]}
                rotation={[-1.624, 0.031, 2.966]}
                scale={[8.721, 8.721, 8.366]}
              />
            </group>
            <group
              position={[-11.665, 39.105, 5.899]}
              rotation={[-1.975, 0.4, 2.512]}
              scale={0.037}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BladeTrim_FantasySword_NewMat01__1__0.geometry}
                material={materials.NewMat01__1}
                position={[-1.524, 35.005, 11.975]}
                rotation={[-1.58, 0.02, 2.217]}
                scale={[34.623, 34.622, 34.623]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crossguard_NewMat01__1__0.geometry}
                material={materials.NewMat01__1__0}
                position={[-1.524, 35.005, 11.975]}
                rotation={[-1.58, 0.02, 2.217]}
                scale={[34.623, 34.622, 34.623]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FantasySword_Blade_NewMat01__1__0.geometry}
                material={materials.NewMat01__1__3}
                position={[-1.524, 35.005, 11.975]}
                rotation={[-1.58, 0.02, 2.217]}
                scale={[34.623, 34.622, 34.623]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FantasySword_Gem1_NewMat01__1__0.geometry}
                material={materials.NewMat01__1__2}
                position={[-1.524, 35.005, 11.975]}
                rotation={[-1.58, 0.02, 2.217]}
                scale={[34.623, 34.622, 34.623]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FantasySword_Gem2_NewMat01__1__0.geometry}
                material={materials.NewMat01__1__4}
                position={[-1.524, 35.005, 11.975]}
                rotation={[-1.58, 0.02, 2.217]}
                scale={[34.623, 34.622, 34.623]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FantasySword_GemCase_NewMat01__1__0.geometry}
                material={materials.NewMat01__1__1}
                position={[-1.524, 35.005, 11.975]}
                rotation={[-1.58, 0.02, 2.217]}
                scale={[34.623, 34.622, 34.623]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FantasySword_Hilt_NewMat01__1__0.geometry}
                material={materials.NewMat01__1__5}
                position={[-1.524, 35.005, 11.975]}
                rotation={[-1.58, 0.02, 2.217]}
                scale={[34.623, 34.622, 34.623]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor_1_Fxgate4_0.geometry}
                material={materials.Fxgate4}
                position={[5.945, 42.558, 22.39]}
                rotation={[0.005, 0.646, -0.025]}
                scale={[0.157, 0.219, 0.229]}
              />
            </group>

            <group
              position={[-6.37, 39.713, 4.337]}
              rotation={[-Math.PI, 0.71, -Math.PI]}
              scale={0.031}>
              <group
                position={[104.786, -10.103, -57.674]}
                rotation={[Math.PI / 2, -0.148, -1.604]}
                scale={[0.189, 0.189, 0.099]}></group>
              <group position={[0, 0, 176.824]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Line001_Stone_0.geometry}
                  material={materials.Stone}
                  position={[-3.309, 22.601, -357.892]}
                  rotation={[-1.208, -0.547, -0.732]}
                  scale={[1.605, 1.514, 1.828]}
                />
              </group>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Flower_small_Flower_small_0005.geometry}
              material={materials.Flower_small}
              position={[-7.909, 41.709, -5.045]}
              rotation={[3.123, -0.191, 3.136]}
              scale={[0.003, 0.006, 0.003]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Letter_Letter_0.geometry}
              material={materials.Letter_1}
              position={[-8.592, 41.687, -4.833]}
              rotation={[-1.546, -0.021, 2.503]}
              scale={[0.054, 0.045, 0.011]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Letter_1_Letter_0.geometry}
              material={materials.Letter_0}
              position={[8.863, 41.677, -4.949]}
              rotation={[-1.58, 0.031, -1.229]}
              scale={[0.054, 0.045, 0.011]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Letter_1_Letter_0_1.geometry}
              material={materials.Letter}
              position={[-7.591, 40.751, -4.375]}
              rotation={[-1.549, -0.018, 0.3]}
              scale={[0.054, 0.045, 0.011]}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Outil_2_Outiul_0.geometry}
              material={materials.Outiul}
              position={[-8.548, 39.935, 8.551]}
              rotation={[3.021, -0.906, -0.189]}
              scale={0.151}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Outils_Outiul_0.geometry}
              material={materials.Outiul_0}
              position={[-9.659, 40.107, 7.468]}
              rotation={[2.942, 1.399, -0.042]}
              scale={0.064}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ST_10_Stone2_0.geometry}
              material={materials.Stone2_0}
              position={[-9.268, 39.701, 8.619]}
              rotation={[-1.366, 0.004, -0.67]}
              scale={[0.064, 0.064, 0.061]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ST_11_Stone2_0.geometry}
              material={materials.Stone2}
              position={[-10.129, 39.557, 7.964]}
              rotation={[-2.192, 0.004, -0.67]}
              scale={[0.121, 0.121, 0.116]}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Wood_Wood_(1)_0'].geometry}
              material={materials.Wood_1_0}
              position={[0.211, 38.914, 10.855]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.394}
            />
          </group>
        </group>
      </group>
    </a.group>
  );
}

useGLTF.preload('/3d/compField.glb');
