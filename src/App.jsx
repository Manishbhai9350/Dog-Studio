import "./App.css";
import { MdArrowForwardIos } from "react-icons/md";

const App = () => {
  return (
    <main className="w-screen text-white bg-black h-auto !pt-28">
      <section className="hero flex flex-col justify-center items-start gap-10 lg:gap-36 w-screen h-auto">
        <div className="heading !mx-8 lg:w-[45vw] flex-1 flex flex-col justify-center items-start text-7xl sectra-light lg:items-end lg:text-9xl">
          <h1>We</h1>
          <h1>Make</h1>
          <h1>Good</h1>
          <h1>Shit</h1>
        </div>
        <div className="cursor-pointer lg:hidden hover:translate-x-1 transition-transform duration-200 showreel flex justify-start items-center gap-3 !mx-8">
          <div className="arrow text-rose-800">
            <MdArrowForwardIos size={15} className="font-semibold" />
          </div>
          <p className="text-md heebo-md">Our Showreel</p>
        </div>
        <div className="description-container w-full h-fit flex justify-start items-start lg:justify-end">
          <div className="description w-[45vw] flex flex-col justify-start items-start gap-6 !mx-8 flex-1">
            <p className="t-2 heebo-light text-wrap tracking-[0.02rem]">
              {" "}
              Dogstudio is a multidisciplinary creative studio at the
              intersection of art, design and technology.{" "}
            </p>
            <p className="text-secondary heebo-md text-sm">
              Our goal is to deliver amazing experiences that make people talk,
              and build strategic value for brands, tech, entertainment, arts &
              culture.
            </p>
            <div className="handles mt-4 flex justify-start items-center gap-4 text-white text-xs">
              <a href="#">Facebook</a>
              <span>/</span>
              <a href="#">Instagram</a>
              <span>/</span>
              <a href="#">Dribble</a>
              <span>/</span>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
