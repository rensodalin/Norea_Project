/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const LaserFlowMesh = ({ 
  horizontalBeamOffset = 0.0, 
  verticalBeamOffset = 0.0, 
  color = "#FF79C6" 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(viewport.width, viewport.height) },
    uHorizontalBeamOffset: { value: horizontalBeamOffset },
    uVerticalBeamOffset: { value: verticalBeamOffset },
    uColor: { value: new THREE.Color(color) }
  }), [viewport.width, viewport.height, horizontalBeamOffset, verticalBeamOffset, color]);

  useFrame((state) => {
    if (meshRef.current) {
      (meshRef.current.material as any).uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uHorizontalBeamOffset;
    uniform float uVerticalBeamOffset;
    uniform vec3 uColor;
    varying vec2 vUv;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      vec2 uv = vUv;
      vec2 center = vec2(0.5 + uHorizontalBeamOffset, 0.5 + uVerticalBeamOffset);
      
      float dist = distance(uv, center);
      
      // Create laser beam effect
      float beam = 0.0;
      
      // Horizontal beam
      float horizontalBeam = smoothstep(0.0, 0.02, abs(uv.y - center.y)) * 
                           smoothstep(0.0, 0.1, abs(uv.x - center.x));
      
      // Vertical beam
      float verticalBeam = smoothstep(0.0, 0.02, abs(uv.x - center.x)) * 
                         smoothstep(0.0, 0.1, abs(uv.y - center.y));
      
      beam = max(horizontalBeam, verticalBeam);
      
      // Add noise for laser effect
      float noiseValue = noise(uv * 10.0 + uTime * 2.0) * 0.1;
      beam += noiseValue;
      
      // Add pulsing effect
      float pulse = sin(uTime * 3.0) * 0.1 + 0.9;
      beam *= pulse;
      
      // Create glow effect
      float glow = 1.0 - smoothstep(0.0, 0.3, dist);
      beam += glow * 0.3;
      
      vec3 finalColor = uColor * beam;
      
      gl_FragColor = vec4(finalColor, beam);
    }
  `;

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

interface LaserFlowProps {
  horizontalBeamOffset?: number;
  verticalBeamOffset?: number;
  color?: string;
}

const LaserFlow = ({ 
  horizontalBeamOffset = 0.0, 
  verticalBeamOffset = 0.0, 
  color = "#FF79C6" 
}: LaserFlowProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 75 }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
    >
      <LaserFlowMesh 
        horizontalBeamOffset={horizontalBeamOffset}
        verticalBeamOffset={verticalBeamOffset}
        color={color}
      />
    </Canvas>
  );
};

export default LaserFlow;




