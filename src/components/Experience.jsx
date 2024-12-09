import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import * as THREE from 'three'
import { Fish } from "./Fish";
import { Cactoro } from "./Cactoro";
import { Dragon_Evolved } from "./Dragon_Evolved";

export const Experience = () => {



  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />

      <MonsterStage texture={'./textures/M3_Photoreal_equirectangular-png_Mid_surface_view_looking_796725697_12612724.png'} >

        <Fish scale={0.6} position-y={-1}/>
      </MonsterStage>
     

      <MonsterStage texture={'./textures/M3_Anime_equirectangular-png_mysterious_forest_scene_with_311752495_12612630.png'} position-x={-2.5} rotation-y={Math.PI/8} >

        <Cactoro scale={0.3} position-y={-1}/>
      </MonsterStage>
     

      <MonsterStage texture={'./textures/M3_Cinematic_Realism_equirectangular-png_stone_beach_in_the_658115739_12614691.png'} position-x={2.5} rotation-y={Math.PI/-8}>

        <Dragon_Evolved scale={0.4} position-y={-1}/>
      </MonsterStage>
     


    </>
  );
};


const MonsterStage=({children,texture,...props})=>{

  const map=useTexture(texture)
  return(
    <>
    <group {...props}>


    <RoundedBox args={[2,3,0.1]}>
        <planeGeometry args={[2, 3]} />
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <Environment preset="sunset" />

          <ambientLight intensity={0.5} />
          {children}

          <mesh>
            <sphereGeometry args={[5, 32, 32]} />
             <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
    
    </>
  )
}


