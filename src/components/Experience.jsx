import { CameraControls, Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { Fish } from "./Fish";
import { Cactoro } from "./Cactoro";
import { Dragon_Evolved } from "./Dragon_Evolved";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";

export const Experience = () => {

  const [active, setActive] = useState()

  const [hovered, setHovered] = useState(false)

  const controlsRef = useRef()

  const scene = useThree((state) => state.scene)

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3()
      scene.getObjectByName(active).getWorldPosition(targetPosition)
      controlsRef.current.setLookAt(
        0, 0, 5, targetPosition.x, targetPosition.y, targetPosition.z, true
      )
    } else {
      controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true)
    }
  }, [active])


  return (
    <>
      <ambientLight intensity={0.5} />

      <Environment preset="sunset"/>
      <CameraControls ref={controlsRef} />

      <MonsterStage id='01' texture={'./textures/M3_Photoreal_equirectangular-png_Mid_surface_view_looking_796725697_12612724.png'} active={active} setActive={setActive} hovered={hovered} setHovered={setHovered} name='fish'>

        <Fish scale={0.6} position-y={-1} hovered={hovered === 'fish'} />
      </MonsterStage>


      <MonsterStage id='02' texture={'./textures/M3_Anime_equirectangular-png_mysterious_forest_scene_with_311752495_12612630.png'} position-x={-2.5} rotation-y={Math.PI / 8} active={active} setActive={setActive} hovered={hovered} setHovered={setHovered} name='cactoro'>

        <Cactoro scale={0.3} position-y={-1} hovered={hovered === 'cactoro'} />
      </MonsterStage>


      <MonsterStage id='03' texture={'./textures/M3_Cinematic_Realism_equirectangular-png_stone_beach_in_the_658115739_12614691.png'} position-x={2.5} rotation-y={Math.PI / -8} active={active} setActive={setActive} hovered={hovered} setHovered={setHovered} name='dragon'>

        <Dragon_Evolved scale={0.4} position-y={-1} hovered={hovered === 'dragon'} />
      </MonsterStage>


    </>
  );
};

const MonsterStage = ({
  id,
  children,
  texture,
  name,
  color,
  active,
  setActive,
  hovered,
  setHovered,
  ...props
}) => {
  const map = useTexture(texture);
  const portalMaterial = useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

  return (
    <group {...props}>

      <RoundedBox
        name={name}
        args={[2, 3, 0.1]}
        onDoubleClick={(e) =>{ setActive(active === name ? null : name)}}
        onPointerEnter={() => setHovered(name)}
        onPointerLeave={() => setHovered(null)}
      >
        <MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />

          {children}

          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>

        </MeshPortalMaterial>

      </RoundedBox>
    </group>
  );
};

