"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// @ts-expect-error: maath module has no types
import * as random from "maath/random/dist/maath-random.esm";

type StarBackgroundProps = React.JSX.IntrinsicElements["points"] & {
  count?: number;
  radius?: number;
};

const StarBackground = ({
  count = 1500,
  radius = 1.2,
  ...props
}: StarBackgroundProps) => {
  const ref = useRef<THREE.Points>(null!); // ✅ Correctly typed

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(count * 3), { radius })
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        // @ts-expect-error drei Points ref mismatch
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
