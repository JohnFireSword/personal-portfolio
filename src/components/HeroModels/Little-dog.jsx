
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Dog(props) {
  const { nodes, materials } = useGLTF('/models/little-dog.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  )
}

useGLTF.preload('/models/little-dog.glb')
