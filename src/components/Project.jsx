import React, { useRef, useState } from "react";
import { splitIntoThreeLines } from "../lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Project = ({
  headline = "",
  title = "",
  description = "",
  setHoveredCase = () => {},
  idx,
}) => {
  const [hovered, setHovered] = useState(false);
  const container = useRef(null);

  const lines = splitIntoThreeLines(description);

  useGSAP(() => {
    const DescLines = container.current.querySelectorAll(
      ".desktop-description-line"
    );

    if (!DescLines || !DescLines?.length) return;

    gsap.killTweensOf(DescLines);

    if (hovered) {
      DescLines.forEach((line, i) => {
        const rect = line.getBoundingClientRect();
        if (!rect) return;
        gsap.fromTo(
          line,
          {
            y: 30,
            opacity: 0,
          },
          {
            delay: 0.35 + (0.1 / 2) * (i + 1),
            duration: 0.3,
            y: 0,
            opacity: 1,
          }
        );
      });
    } else {
      DescLines.forEach((line, i) => {
        gsap.to(line, {
          delay: 0.2 + (0.1 / 2) * (DescLines.length - (i + 1)),
          y: -30,
          opacity: 0,
          stagger: 0.06,
        });
      });
    }
  }, [hovered]);

  return (
    <div className="project w-full max-lg:!my-14">
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
      <div className="desktop max-lg:hidden w-full cursor-pointer group"> {/* max-lg:hidden */}
        <h1
          onMouseEnter={() => {
            setHoveredCase(idx + 1);
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHoveredCase(null);
            setHovered(false);
          }}
          className="text-7xl heebo-v font-[100] opacity-40 group-hover:opacity-100 !transition-opacity !duration-200 lg:!py-7"
        >
          {title}
        </h1>
        <div
          ref={container}
          className="description pointer-events-none fixed bottom-12 right-12 w-full"
        >
          <p className="desktop-description-line opacity-0 relative text-right w-full text-xs !mb-4 sectra-light uppercase tracking-[.2em] text-amber-600">
            {headline}
          </p>

          {lines.map((line, i) => (
            <p
              key={i}
              className="desktop-description-line opacity-0 relative text-xl heebo-light w-full text-right"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
