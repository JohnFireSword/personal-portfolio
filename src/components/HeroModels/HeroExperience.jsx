import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useMediaQuery } from "react-responsive";

import HeroLights from "./HeroLights";
import { GamingRoom } from "./Gaming_desktop_pc";

function GamingRoom() {
  const isTablet = useMediaQuery({ query: "max-width: 1024px" });
  const isMobile = useMediaQuery({ query: "max-width: 768px" });

  return (
    <Canvas camera={{ position: [150, 15, 15], fov: 50 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={25}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 3}
      />
      <HeroLights></HeroLights>
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}></group>
      <GamingRoom />
    </Canvas>
  );
}

export default GamingRoom;
