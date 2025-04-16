import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

// Компонент SimpleTrail рисует "шлейф" за движущимся объектом (например, курсором)

const SimpleTrail = ({
  target = null, // объект, за которым тянется след
  color = '#ffffff', // цвет следа
  intensity = 5, // яркость свечения
  numPoints = 20, // количество сегментов шлейфа
  height = 0.42, // высота "ленты"
  minDistance = 0.1, // минимальное расстояние между точками, чтобы добавить новую
  opacity = 0.5, // прозрачность
  duration = 20, // интервал обновления, если курсор почти не двигается (в мс)
}) => {
  const mesh = useRef();
  // создаём массив точек, которые будут определять форму шлейфа
  const positions = useRef(new Array(numPoints).fill(new THREE.Vector3(0, 0, 0)));
  // хранит время последнего добавления точки
  const lastUnshift = useRef(Date.now());

  // обновляем геометрию шлейфа каждый кадр
  useFrame(() => {
    if (!mesh.current || !target?.current) return;

    const curPoint = target.current.position; // текущая позиция цели
    const lastPoint = positions.current[0]; // последняя сохранённая точка

    const distanceToLastPoint = lastPoint.distanceTo(curPoint);

    // если цель почти не двигается, обновляем редко (по таймеру)
    if (distanceToLastPoint < minDistance) {
      if (Date.now() - lastUnshift.current > duration) {
        positions.current.unshift(lastPoint); // дублируем последнюю точку
        positions.current.pop(); // удаляем самую старую
        lastUnshift.current = Date.now();
      }
    }

    // если цель двигается — добавляем новую точку сразу
    if (distanceToLastPoint > minDistance) {
      positions.current.unshift(curPoint.clone());
      positions.current.pop();
    }

    // обновляем позицию вершин в геометрии
    const geometry = mesh.current.geometry;
    const positionAttribute = geometry.getAttribute('position');

    for (let i = 0; i < numPoints; i++) {
      const point = positions.current[positions.current.length - 1 - i];
      positionAttribute.setXYZ(i * 2, point.x, point.y - height / 2, point.z);
      positionAttribute.setXYZ(i * 2 + 1, point.x, point.y + height / 2, point.z);
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <>
      <group>
        <mesh ref={mesh}>
          <planeGeometry args={[1, 1, 1, numPoints - 1]} />
          <trailMaterial
            color={color}
            side={THREE.DoubleSide}
            transparent
            opacity={opacity}
            depthWrite={false}
            intensity={intensity}
          />
        </mesh>
      </group>
    </>
  );
};

export default SimpleTrail;

const TrailMaterial = shaderMaterial(
  {
    color: new THREE.Color('white'),
    opacity: 1,
    intensity: 1,
  },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  uniform vec3 color;
  uniform float opacity;
  uniform float intensity;
  varying vec2 vUv;
  
  void main() {
    float alpha = smoothstep(1.0, 0.1, vUv.y) * smoothstep(1.0, 0.5, vUv.x) ;
    gl_FragColor = vec4(color * intensity, alpha * opacity);
  }
  `,
);

extend({ TrailMaterial });
