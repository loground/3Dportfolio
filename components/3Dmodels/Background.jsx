import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const RightWall = () => {
  const meshRef = useRef();
  const [iTime, setITime] = useState(0);

  useFrame((state, delta) => {
    setITime((prev) => prev + delta);
    if (meshRef.current) {
      meshRef.current.material.uniforms.iTime.value = iTime;
      meshRef.current.material.uniforms.iResolution.value = new THREE.Vector3(
        window.innerWidth,
        window.innerHeight,
        1,
      );
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (meshRef.current) {
        meshRef.current.material.uniforms.iResolution.value.set(
          window.innerWidth,
          window.innerHeight,
          1,
        );
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float iTime;
      uniform vec3 iResolution;

      float ltime;

      float noise(vec2 p) {
        return sin(p.x*10.0) * sin(p.y*(3.0 + sin(ltime/11.0))) + 0.2;
      }

      mat2 rotate(float angle) {
        return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      }

      float fbm(vec2 p) {
        p *= 1.1;
        float f = 0.0;
        float amp = 0.5;
        for (int i = 0; i < 3; i++) {
          mat2 modify = rotate(ltime/50.0 * float(i*i));
          f += amp * noise(p);
          p = modify * p;
          p *= 2.0;
          amp /= 2.2;
        }
        return f;
      }

      float pattern(vec2 p, out vec2 q, out vec2 r) {
        q = vec2(
          fbm(p + vec2(1.0)),
          fbm(rotate(0.1*ltime) * p + vec2(3.0))
        );
        r = vec2(
          fbm(rotate(0.2) * q + vec2(0.0)),
          fbm(q + vec2(0.0))
        );
        return fbm(p + 1.0 * r);
      }

      vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 p = fragCoord.xy / iResolution.xy;
        ltime = iTime;
        float ctime = iTime + fbm(p/8.0) * 40.0;
        float ftime = fract(ctime/6.0);
        ltime = floor(ctime/6.0) + (1.0 - cos(ftime * 3.1415) / 2.0);
        ltime = ltime * 6.0;

        vec2 q;
        vec2 r;
        float f = pattern(p, q, r);
        vec3 col = hsv2rgb(vec3(q.x/10.0 + ltime/100.0 + 0.4, abs(r.y)*3.0 + 0.1, r.x + f));
        float vig = 1.0 - pow(4.0 * (p.x - 0.5) * (p.x - 0.5), 10.0);
        vig *= 1.0 - pow(4.0 * (p.y - 0.5) * (p.y - 0.5), 10.0);
        fragColor = vec4(col * vig, 1.0);
      }

      void main() {
        vec4 fragColor = vec4(0.0);
        mainImage(fragColor, gl_FragCoord.xy);
        gl_FragColor = fragColor;
      }
    `,
    transparent: true,
  });

  return (
    <>
      <mesh
        position={[0, 3, -22]}
        rotation={[0, 1.5, Math.PI / 2]}
        receiveShadow
        ref={meshRef}
        material={shaderMaterial}>
        <boxGeometry args={[55, 0.1, 70]} />
      </mesh>
    </>
  );
};

export default RightWall;
