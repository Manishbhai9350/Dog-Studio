import { Center, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import {
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  SRGBColorSpace,
} from "three";

const Dog = () => {
  const DogRef = useRef(null);


  // Colors 
  const [branches_diffuse,dog_diffuse] = useTexture(["/textures/branches_diffuse.jpg","/textures/dog_diffuse.jpg"]).map((t) => {
      t.colorSpace = SRGBColorSpace;
      return t;
    });

  const [branches_normals, dog_specular, dog_normals] =
    useTexture([
      "/textures/branches_normals.jpg",
      "/textures/dog_specular.jpg",
      "/textures/dog_normals.jpg",
    ]).map(t => {
        t.flipY = false
        return t;
    })

 
  const { scene, animations,  } = useGLTF("/models/dog.drc.glb");

  const { actions } = useAnimations(animations,scene)


  useEffect(() => {

    console.log(actions['Take 001'])
    actions['Take 001'].play()
  
    return () => {
      
    }
  }, [actions])
  

  const dogMaterial = useMemo(() => {
    const mat = new MeshStandardMaterial({
      map: dog_diffuse,
      normalMap: dog_normals,
      // specularMap: dog_specular
    });
    return mat;
  }, [dog_diffuse, dog_specular,dog_normals]);

  useEffect(() => {
    scene.traverse((node) => {
      // console.log(node.name)
      if (node.name.includes("DOGSTUDIO") && node.isMesh) {
        node.material = dogMaterial;
      }
    });

    return () => {};
  }, [scene, dogMaterial]);

  return (
    <>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <group  scale={6} rotation={[0, (Math.PI / 6), 0]}>
        <Center >
            <primitive ref={DogRef} object={scene} />
        </Center>
        </group>
    </>
  );
};

export default Dog;
