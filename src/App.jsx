import "./App.css";
import Navbar from "./components/Navbar";
import ShowreelButton from "./components/showreel-button";

const App = () => {
  return (
    <main className="w-screen overflow-x-hidden text-white bg-[#131419] h-auto md:!pt-50 max-md:!pt-28">
      <Navbar />
      <picture className="h-full w-full fixed top-0 left-0 z-0">
        <source
          media="(max-width: 450px)"
          srcSet="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/home/background-xxs.png"
          data-srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/home/background-xxs.png"
        />

        <source
          media="(max-width: 815px)"
          srcSet="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/home/background-m.png"
          data-srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/home/background-m.png"
        />

        <source
          media="(max-width: 1030px)"
          srcSet="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/home/background-l.png"
          data-srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/home/background-l.png"
        />

        <img
          className="js-lazy loaded"
          alt=""
          src="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/home/background-xl.png"
          data-src="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/home/background-xl.png"
          data-was-processed="true"
          style={{ opacity: 1 }}
        />
      </picture>
      <section className="hero relative z-10 flex flex-col justify-center items-start gap-10 w-screen h-auto">
        <div className="heading z-10 !mx-10 md:w-[47vw] md:leading-28 flex-1 flex flex-col justify-center items-start text-7xl sectra-md lg:items-end md:text-9xl">
          <h1>We</h1>
          <h1>Make</h1>
          <h1>Good</h1>
          <h1>Shit</h1>
        </div>
        <div className="cursor-pointer z-10 md:hidden  !mx-10">
          <ShowreelButton />
        </div>
        <div className="description-container z-10 !mb-8 w-full h-fit flex justify-start items-start md:justify-end">
          <div className="description-width w-full !mx-10 md:w-[50vw] lg:w-[35vw]  max-sm:flex-1">
            <div className="description w-full md:!w-[350px] flex flex-col justify-start items-start gap-6">
              <p className="text-2xl sm:text-[1.4rem] heebo-light text-wrap tracking-[0.02rem]">
                {" "}
                Dogstudio is a multidisciplinary creative studio at the
                intersection of art, design and technology.{" "}
              </p>
              <p className="text-secondary heebo-md text-sm">
                Our goal is to deliver amazing experiences that make people
                talk, and build strategic value for brands, tech, entertainment,
                arts & culture.
              </p>
              <div className="handles mt-4 md:!mt-12 flex justify-start items-center gap-4 text-white text-xs">
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
        </div>
      </section>
    </main>
  );
};

export default App;
