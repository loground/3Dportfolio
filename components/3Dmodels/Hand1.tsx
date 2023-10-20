import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import {useFrame} from '@react-three/fiber'


type GLTFResult = GLTF & {
  nodes: {
    mesh: THREE.Mesh;
  };
  materials: {
    main: THREE.MeshStandardMaterial;
  };
};

export function Hand1(props: JSX.IntrinsicElements["group"]) {
    const ref: any = useRef();

    useFrame(({ clock }) => {
        if (ref.current) {
          ref.current.rotation.y = clock.getElapsedTime() * 0.5;
        }
      });


  const { nodes, materials } = useGLTF(
    "/Scaniverse 2023-10-17 180748.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh.geometry}
        material={materials.main}
      />
    </group>
  );
}

useGLTF.preload("/Scaniverse 2023-10-17 180748.glb");
