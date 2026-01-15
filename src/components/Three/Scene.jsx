import { Canvas } from "@react-three/fiber"
import Dog from "./Dog"


const Scene = () => {
  return (
    <div className="dog-scene pointer-events-none z-20 w-screen h-screen fixed top-0 left-0">
      <Canvas className="pointer-events-none">
        <Dog />
      </Canvas>
    </div>
  )
}

export default Scene