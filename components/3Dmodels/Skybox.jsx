import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const SkyBehind = () => {
  const meshRef = useRef();
  const [iTime, setITime] = useState(0);

  useFrame((_, delta) => {
    setITime((prev) => prev + delta);
    if (meshRef.current) {
      meshRef.current.material.uniforms.iTime.value = iTime;
      meshRef.current.material.uniforms.iResolution.value.set(
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
      iResolution: {
        value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1),
      },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;
      uniform float iTime;
      uniform vec3 iResolution;

      float quintic(float x) {
        return x*x*x*(6.0*x*x - 15.0*x + 10.0);
      }

      float noise(in vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        float fac = 43758.5453123;
        vec2 m = vec2(100.0, 1.0);
        vec2 o = vec2(1.0, 0.0);

        float n00 = fract(fac * sin(dot((i + o.yy), m)));
        float n01 = fract(fac * sin(dot((i + o.xy), m)));
        float n10 = fract(fac * sin(dot((i + o.yx), m)));
        float n11 = fract(fac * sin(dot((i + o.xx), m)));

        float fx = quintic(f.x);
        float px0 = mix(n00, n01, fx);
        float px1 = mix(n10, n11, fx);

        return mix(px0, px1, quintic(f.y));
      }

      mat2 rotate = mat2(0.8, -0.6, 0.6, 0.8);

      float ocean(vec2 p) {
        float f = 0.0;
        float speed = 0.15;

        vec2 v01 = vec2(2.0, 0.0) * iTime * speed;
        vec2 v03 = vec2(5.0, 5.0) * iTime * speed;
        vec2 v04 = vec2(6.0, 3.0) * iTime * speed;
        vec2 v05 = vec2(8.0, 5.0) * iTime * speed;
        vec2 v06 = vec2(16.0, 16.0) * iTime * speed;

        f += 0.50000 * noise(p * 1.0  + v01); p *= rotate;
        f += 0.25000 * noise(p * 2.01 + v03); p *= rotate;
        f += 0.06250 * noise(p * 8.09 + v04); p *= rotate;
        f += 0.03215 * noise(p * 15.98 + v05); p *= rotate;
        f += 0.01608 * noise(p * 32.93 + v06); p *= rotate;

        return f;
      }

      float map(in vec3 p) {
        float o = ocean(p.xz * 0.1) * 1.5;
        return p.y + 0.5 + o;
      }

      vec3 calcNormal(in vec3 p) {
        vec2 e = vec2(0.01, 0.0);
        return normalize(vec3(
          map(p + e.xyy) - map(p - e.xyy),
          map(p + e.yxy) - map(p - e.yxy),
          map(p + e.yyx) - map(p - e.yyx)
        ));
      }

      const vec3 SUN_DIR = normalize(vec3(-0.2, 0.15, -0.8));
      const vec3 SUN_COL = vec3(0.9, 0.4, 0.2);

      vec3 sky(in vec3 rd, vec3 sunDir, float fac) {
        rd.y = max(0.0, rd.y);
        vec3 blue = vec3(0.2, 0.6, 0.9) - rd.y * 0.85;
        vec3 sunset = mix(blue, SUN_COL * 0.9, exp(-rd.y * 8.0));
        vec3 sun = 5.0 * pow(dot(sunDir, rd), 120.0) * SUN_COL;
        return sunset * fac + sun;
      }

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 p = (fragCoord - iResolution.xy) / iResolution.y * 5.0;

        vec3 ro = vec3(0.0, 0.0, 0.0);
        vec3 ta = vec3(0.0, 0.0, 1000.0);

        vec3 up = vec3(0.0, 1.0, 0.0);
        vec3 ww = normalize(ta - ro);
        vec3 uu = normalize(cross(ww, up));
        vec3 vv = normalize(cross(uu, ww));

        vec3 rd = normalize(p.x * uu + p.y * vv - 3.0 * ww);

        float m = -1.0;
        float t = 0.0;
        float tmax = 300.0;

        for(int i = 0; i < 512; i++) {
          float h = map(ro + rd * t);
          if (h < 0.01) {
            m = 1.0;
            break;
          }
          if (t > tmax) break;
          t += h;
        }

        float sunsetFac = 0.6 * sin(iTime * 0.1 - 1.0);
        vec3 sunDir = normalize(SUN_DIR + vec3(0.0, -sunsetFac * 0.5, 0.0));
        vec3 skyCol = sky(rd, sunDir, 1.0 - sunsetFac);
        vec3 col = vec3(0.0);

        if (m > 0.0) {
          vec3 pos = ro + rd * t;
          vec3 nor = calcNormal(pos);
          vec3 ref = reflect(rd, nor);
          vec3 refCol = sky(ref, sunDir, 1.0 - sunsetFac);

          float d = dot(sunDir, nor);
          vec3 refractedRay = normalize(rd + (-cos(1.33 * acos(-d)) - d) * nor);
          vec3 refractedCol = sky(refractedRay, sunDir, 1.0 - sunsetFac);

          vec3 dif = refCol * clamp(d, 0.0, 1.0);
          vec3 amb = vec3(0.01, 0.03, 0.08);
          vec3 spec = refCol * pow(clamp(d + 0.59, 0.0, 1.0), 1000.0);

          col = amb + mix(dif, spec, 0.4);
          col = mix(col, refractedCol, 0.35);
        }

        col = mix(col, skyCol, min(t, tmax) / tmax);
        col = pow(col, vec3(0.4545));
        fragColor = vec4(col, 1.0);
      }

      void main() {
        vec4 fragColor;
        mainImage(fragColor, gl_FragCoord.xy);
        gl_FragColor = fragColor;
      }
    `,
    transparent: true,
  });

  return (
    <mesh
      ref={meshRef}
      scale={1}
      position={[-30, 10, -20]}
      rotation={[0, 2.3, 0]}
      material={shaderMaterial}>
      <boxGeometry args={[10, 100, 100]} />
    </mesh>
  );
};

export default SkyBehind;
