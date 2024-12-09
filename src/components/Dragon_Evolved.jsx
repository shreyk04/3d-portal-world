/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Dragon_Evolved.gltf -o src/components/Dragon_Evolved.jsx -r public -k 
*/

import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Dragon_Evolved(props) {


  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/Dragon_Evolved.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)


  // useEffect(()=>{
  //   actions['Idle'].reset().fadeIn(0.5).play();
  //   return()=>actions['Idle'].fadeOut(0.5)
  // },[])


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Dragon">
            <skinnedMesh name="Cube221" geometry={nodes.Cube221.geometry} material={materials.Dragon_Main} skeleton={nodes.Cube221.skeleton} />
            <skinnedMesh name="Cube221_1" geometry={nodes.Cube221_1.geometry} material={materials.Dragon_Secondary} skeleton={nodes.Cube221_1.skeleton} />
            <skinnedMesh name="Cube221_2" geometry={nodes.Cube221_2.geometry} material={materials.Dragon_Horn} skeleton={nodes.Cube221_2.skeleton} />
            <skinnedMesh name="Cube221_3" geometry={nodes.Cube221_3.geometry} material={materials.Eye_Black} skeleton={nodes.Cube221_3.skeleton} />
            <skinnedMesh name="Cube221_4" geometry={nodes.Cube221_4.geometry} material={materials.Eye_White} skeleton={nodes.Cube221_4.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Dragon_Evolved.gltf')