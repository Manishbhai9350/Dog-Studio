import React, { useRef, useState } from "react";
import { splitIntoThreeLines } from "../lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Project = ({ headline = "", title = "", description = "" }) => {
  const [hovered, setHovered] = useState(false);
  const container = useRef(null);

  const lines = splitIntoThreeLines(description);

  useGSAP(() => {
    const DescLines = container.current.querySelectorAll('.desktop-description-line')

    if(!DescLines || !DescLines?.length) return;

    if(hovered) {
        gsap.fromTo(DescLines,{
            y:30,
            opacity:0,
        },{
            delay:.3,
            y:0,
            stagger:.06,
            opacity:1
        })
    } else {
        gsap.to(DescLines,{
            y:-30,
            opacity:0,
            stagger:.06,
        })
    }

  },[hovered])

  return (
    <div className="project w-full !my-14">
      <div className="mobile lg:hidden w-full  flex gap-6 flex-col justify-center items-start">
        <div className="headline">
          <p className="text-xs uppercase sectra-light tracking-[.16rem] text-amber-500">
            {headline}
          </p>
        </div>
        <div className="heading">
          <h1 className="sectra-light text-4xl">{title}</h1>
        </div>
        <div className="description w-full">
          <p className="text-xl whitespace-normal w-full h-full heebo-light">
            {description}
          </p>
        </div>
      </div>
      <div className="desktop max-lg:hidden w-full cursor-pointer group">
        <h1 onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="text-7xl heebo-v font-[100] opacity-40 group-hover:opacity-100 !transition-opacity !duration-200">
          {title}
        </h1>
        <div
          ref={container}
          className="description fixed bottom-12 right-12 w-[300px]"
        >
          <p className="desktop-description-line relative text-right w-full text-xs !mb-4 sectra-light uppercase tracking-[.2em] text-amber-600">
            {headline}
          </p>

          {lines.map((line, i) => (
            <p key={i} className="desktop-description-line relative text-xl heebo-light w-full text-right">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
