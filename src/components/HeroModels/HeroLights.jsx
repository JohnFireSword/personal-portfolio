import React from "react";
import * as THREE from "three";

function HeroLights() {
  return (
    <>
      <spotLight
        position={[1, 4, 15]}
        angle={0.550}
        penumbra={0.2}
        color="#4cc9f0"
        intensity={80}
      />
      <spotLight
        position={[-3, 5, 5]}
        angle={0.2}
        penumbra={1}
        color="#9d4edd"
        intensity={50}
      />
      <primitive
        object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
        position={[0, 15, 0]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      <pointLight position={[0, 1, 0]} intensity={5} color="#7209b7" />
        <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
}

export default HeroLights;
