import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const ShowreelButton = () => {
  return (
    <div className="showreel group duration-200 showreel flex justify-start items-center gap-3">
      <div className="arrow group-hover:translate-x-1 transition-transform text-rose-800">
        <MdArrowForwardIos size={15} className="font-semibold" />
      </div>
      <p className="text-md heebo-md">Our Showreel</p>
    </div>
  );
};

export default ShowreelButton;
