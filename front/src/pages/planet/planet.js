import React, { Suspense, useRef }from "react";
import { Canvas,useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
//import { Physics, usePlane, useBox } from "@react-three/cannon";
import { Physics } from "@react-three/cannon";
import * as THREE from "three";



const makeUrl = file => `https://raw.githubusercontent.com/flowers1225/threejs-earth/master/src/img/${file}.jpg`

/*
import brickBump from "./textures/brick2.jpg";
function Box({position}) {
  const [ref, api] = useBox(() => ({ mass: 1, position: [position[0], position[1], position[2]] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[position[0], position[1], position[2]]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

function Sphere() {
  return (
    <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}*/

function Earth() {
    const ref = useRef()
    const [texture, bump, moon] = useLoader(THREE.TextureLoader, [
      makeUrl('earth4'),
      makeUrl('earth_bump'),
      'http://jaanga.github.io/moon/heightmaps/WAC_GLD100_E000N1800_004P-1024x512.png'
    ]);
    return (
      <group ref={ref}>
        <Stars />
        <rectAreaLight intensity={1} position={[10, 10, 10]} width={10} height={1000} onUpdate={self => self.lookAt(new THREE.Vector3(0, 0, 0))} />
        <rectAreaLight intensity={1} position={[-10, -10, -10]} width={1000} height={10} onUpdate={self => self.lookAt(new THREE.Vector3(0, 0, 0))} />
        <mesh>
          <sphereBufferGeometry attach="geometry" args={[2, 32, 32]} />
          <meshStandardMaterial attach="material" map={texture} bumpMap={bump} bumpScale={0.05} />
        </mesh>
        <mesh position={[5, 0, -10]}>
          <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
          <meshStandardMaterial attach="material" color="gray" map={moon} />
        </mesh>
      </group>
    )
  }



export default function App() {
  return (
    <Canvas className="fadeIn"
    camera={{ position: [0, 0, 5] }}
    >
        <OrbitControls autoRotate autoRotateSpeed={0.2} enableZoom={false}/>
       <Suspense fallback={null}>
      <Earth />
    </Suspense>
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        
       
      </Physics>
    </Canvas>
  );
}
//<Box position={[0, 2,0]}/>
//<OrbitControls />
// <Plane />