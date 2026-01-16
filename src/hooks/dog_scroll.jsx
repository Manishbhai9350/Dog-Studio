import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useDogScrollAnimations = ({ dogConRef }) => {

    useGSAP(() => {

        ScrollTrigger.create({
            trigger:'.main-wrapper',
            start:'top top',
            end:`+=${ 1.5 * innerHeight }`,
            onUpdate({ progress }){
                gsap.to(dogConRef.current.position,{
                    z:.5 + -2 * progress
                })
            }
        })
        
        ScrollTrigger.create({
            trigger:'.main-wrapper',
            start:'top -70vh',
            end:`+=${ .5 * innerHeight }`,
            onUpdate({ progress }){
                gsap.to(dogConRef.current.rotation,{
                    y:Math.PI / 5 + .2 * progress
                })
            }
        })

        ScrollTrigger.create({
            trigger:'.process',
            start:'top bottom',
            end:`bottom bottom`,
            onUpdate({ progress }){
                gsap.to(dogConRef.current.position,{
                    z:-1.5 - 2 * progress,
                    y:.5 * progress
                })
                gsap.set(dogConRef.current.rotation,{
                    y:Math.PI / 5 + .2 - Math.PI * 1 * progress
                })
            }
        })

        return () => {

        }


    },[])

  return null;
}

export default useDogScrollAnimations