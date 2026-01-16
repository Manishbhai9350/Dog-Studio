import { Center, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import Cases from '../../constants/projects.json'
import {
  MeshMatcapMaterial,
  ReinhardToneMapping,
  SRGBColorSpace,
} from "three";
import { useThree } from "@react-three/fiber";
import useDogScrollAnimations from "../../hooks/dog_scroll";

const Dog = ({ HoveredCase }) => {

  const DogRef = useRef(null);
  const DogConRef = useRef(null);

  useDogScrollAnimations({ dogConRef:DogConRef })

  useThree(({ gl, camera  }) => {
    camera.fov = 20
    gl.toneMapping = ReinhardToneMapping
    gl.outputColorSpace = SRGBColorSpace
  })

  // Matcaps
  const [mat1] = useTexture([Cases[0].matcap]).map((t) => {
    t.colorSpace = SRGBColorSpace;
    return t;
  });

  // Colors
  const [branches_diffuse, dog_diffuse] = useTexture([
    "/textures/branches_diffuse.jpg",
    "/textures/dog_diffuse.jpg",
  ]).map((t) => {
    t.colorSpace = SRGBColorSpace;
    return t;
  });

  const [branches_normals, dog_specular, dog_normals] = useTexture([
    "/textures/branches_normals.jpg",
    "/textures/dog_specular.jpg",
    "/textures/dog_normals.jpg",
  ]).map((t) => {
    t.colorSpace = SRGBColorSpace;
    t.flipY = false;
    return t;
  });

  const { scene, animations } = useGLTF("/models/dog.drc.glb");

  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    console.log(actions["Take 001"]);
    actions["Take 001"].play();

    return () => {};
  }, [actions]);

  const { dogMaterial, branchMat } = useMemo(() => {
    const dogMaterial = new MeshMatcapMaterial({
      normalMap: dog_normals,
      matcap:mat1,
    });
    const branchMat = new MeshMatcapMaterial({
      normalMap: branches_normals,
      matcap:mat1
    });
    return { 
      dogMaterial,
      branchMat
     };
  }, [dog_normals,branches_normals,mat1]);

  useEffect(() => {
    scene.traverse((node) => {
      console.log(node.name)
      if (node.name.includes("DOGSTUDIO") && node.isMesh) {
        node.material = dogMaterial;
      }
      if(node.name.includes('BRANCHS') && node.isMesh) {
        node.material = branchMat;
      }
    });

    return () => {};
  }, [scene, dogMaterial, branchMat]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />
      <group ref={DogConRef}  position={[-2,0,.5]} rotation={[0, Math.PI / 5, 0]}>
          <group position={[4,-8,0]}>
              <primitive scale={12} ref={DogRef} object={scene} />
          </group>
      </group>
    </>
  );
};

export default Dog;
