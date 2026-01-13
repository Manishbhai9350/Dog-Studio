import { MdArrowBackIos } from "react-icons/md";
import LogoSvg from "./Logo";
import ShowreelButton from "./showreel-button";

const Navbar = () => {
  return (
    <nav className="w-[calc(100vw-90px)] z-10 flex justify-between items-center fixed top-2 h-14 md:h-28 px-10 !mx-10">
      <div className="left-nav w-[55vw] md:w-[47vw] h-full flex items-center justify-between">
        <LogoSvg />
        <div className="cases-showreel cursor-pointer">
          <div className="cases md:hidden">
            <div className="showreel group showreel flex justify-start items-center gap-2">
              <div className="arrow group-hover:-translate-x-1 transition-transform duration-200">
                <MdArrowBackIos size={12} className="heebo-light" />
              </div>
              <p className="text-sm heebo-md">All our cases</p>
            </div>
          </div>
          <div className="showreel max-md:hidden">
            <ShowreelButton />
          </div>
        </div>
      </div>
      <div className="hamburger group w-6 h-fit flex flex-col justify-between gap-[5px] cursor-pointer">
        <span className="block h-[2px] w-full bg-white"></span>

        <span
          className="
            block h-[2px] w-full bg-white
            origin-right
            transform
            scale-x-80
            transition-transform
            duration-200
            ease-out
            group-hover:scale-x-100
          "
        ></span>

        <span className="block h-[2px] w-full bg-white"></span>
      </div>
    </nav>
  );
};

export default Navbar;
