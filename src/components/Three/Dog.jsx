import { Center, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import Cases from "../../constants/projects.json";
import { MeshMatcapMaterial, ReinhardToneMapping, SRGBColorSpace } from "three";
import { useThree } from "@react-three/fiber";
import useDogScrollAnimations from "../../hooks/dog_scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Dog = ({ HoveredCase }) => {

  const DogShader = useRef(null)
  const BranchShader = useRef(null)
  const DogRef = useRef(null);
  const DogConRef = useRef(null);
  const uniforms = useRef({
    currentMat: { value: null },
    nextMat: { value: null },
    progress: { value: 0 },
  });

  useDogScrollAnimations({ dogConRef: DogConRef });

  useThree(({ gl, camera }) => {
    camera.fov = 20;
    gl.toneMapping = ReinhardToneMapping;
    gl.outputColorSpace = SRGBColorSpace;
  });

  // Default Matcap

  const defaultMatcap = useTexture('/matcap/mat-1.png')

  // Matcaps
  const matcaps = useTexture(Cases.map((c) => c.matcap)).map((t) => {
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
    uniforms.current.currentMat.value = defaultMatcap;
    uniforms.current.nextMat.value = matcaps[0];

    return () => {};
  }, [matcaps]);

  useEffect(() => {
    actions["Take 001"].play();

    return () => {};
  }, [actions]);

  const { dogMaterial, branchMat } = useMemo(() => {
    const dogMaterial = new MeshMatcapMaterial({
      normalMap: dog_normals,
      matcap: defaultMatcap,
    });
    const branchMat = new MeshMatcapMaterial({
      normalMap: branches_normals,
      matcap: matcaps[0],
    });
    return {
      dogMaterial,
      branchMat,
    };
  }, [dog_normals, branches_normals, matcaps]);

  useGSAP(() => {

    console.log(HoveredCase)

    if(!DogShader.current) return;
    DogShader.current.uniforms.progress.value = 0
    if(!HoveredCase) {
      DogShader.current.uniforms.currentMat.value = defaultMatcap
    } else {
      DogShader.current.uniforms.currentMat.value = matcaps[HoveredCase - 1]
    }
    
    gsap.to(DogShader.current.uniforms.progress,{
      value:1,
      onComplete(){
        DogShader.current.uniforms.nextMat.value = DogShader.current.uniforms.currentMat.value
        DogShader.current.uniforms.progress.value = 1
      }
    })

  },[dogMaterial,matcaps,HoveredCase])

  useEffect(() => {
    scene.traverse((node) => {
      if (node.name.includes("DOGSTUDIO") && node.isMesh) {
        node.material = dogMaterial;
      }
      if (node.name.includes("BRANCHS") && node.isMesh) {
        node.material = branchMat;
      }
    });

    return () => {};
  }, [scene, dogMaterial, branchMat]);

  useEffect(() => {
    const onBeforeCompile = (model = '') => {
      return (shader) => {


      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        `
        varying vec3 vViewPos;
        #include <common>
        `
      );
      shader.vertexShader = shader.vertexShader.replace(
        "#include <fog_vertex>",
        `
        #include <fog_vertex>
        vViewPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "uniform sampler2D matcap;",
        `
        uniform sampler2D matcap;
        uniform sampler2D currentMat;
        uniform sampler2D nextMat;
        uniform float progress;
        varying vec3 vViewPos;
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "vec4 matcapColor = texture2D( matcap, uv );",
        `
        float prog = smoothstep(0.0,progress, (vViewPosition.x + vViewPosition.y) + 9.0 - 25.0 * (1.0 - progress));

        vec4 matcapColor = mix(texture2D(currentMat,uv),texture2D(nextMat,uv),prog);
        
        `
      );


      Object.assign(shader.uniforms, uniforms.current);

      if(model == 'dog') {
        DogShader.current = shader;
      }
      if(model == 'branch') {
        BranchShader.current = shader;
      }
    };
    }

    dogMaterial.onBeforeCompile = onBeforeCompile('dog');
    branchMat.onBeforeCompile = onBeforeCompile('branch');
    return () => {};
  }, [dogMaterial, branchMat]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />
      <group
        ref={DogConRef}
        position={[-2, 0, 0.5]}
        rotation={[0, Math.PI / 5, 0]}
      >
        <group position={[4, -8, 0]}>
          <primitive scale={12} ref={DogRef} object={scene} />
        </group>
      </group>
    </>
  );
};

export default Dog;
