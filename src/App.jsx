import { FaFacebook } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import ShowreelButton from "./components/showreel-button";
import Cases from "./constants/projects.json";
import {
  CgDribbble,
  CgFacebook,
  CgInstagram,
  CgMail,
  CgTwitter,
} from "react-icons/cg";
import { FaLetterboxd } from "react-icons/fa6";
import { BiMessage } from "react-icons/bi";

const App = () => {
  return (
    <main className="w-screen overflow-x-hidden text-white bg-[#131419] h-auto md:!pt-50 max-md:!pt-28">
      {/* Navigation Bar - Animation On Scroll Pending */}
      <Navbar />

      {/* Backgroud  */}
      <picture className="h-full w-full absolute lg:fixed top-0 left-0 z-0">
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

      {/* Hero Section  */}
      <section className="hero relative z-10 flex flex-col justify-center items-start gap-10 w-screen h-auto">
        <div className="heading z-10 !px-10 md:w-[47vw] md:leading-28 flex-1 flex flex-col justify-center items-start text-7xl sectra-md lg:items-end md:text-9xl">
          <h1>We</h1>
          <h1>Make</h1>
          <h1>Good</h1>
          <h1>Shit</h1>
        </div>
        <div className="cursor-pointer z-10 md:hidden !mx-10">
          <ShowreelButton />
        </div>
        <div className="description-container z-10 !mb-8 w-full h-fit flex justify-start items-start md:justify-end">
          <div className="description-width w-full !px-10 !pr-12 md:w-[50vw] lg:w-[35vw]  max-sm:flex-1">
            <div className="description w-full md:!w-[350px] flex flex-col justify-start items-start gap-6">
              <p className="text-2xl sm:text-[1.4rem] heebo-light  tracking-[0.02rem]">
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

      {/* Case Studies */}
      <section className="cases-container z-10 relative !mt-20 w-screen h-auto min-h-20 !px-10 !pr-12">
        <h1 className="text-xs text-secondary sectra-light uppercase tracking-[.26rem]">
          Featured Projects
        </h1>

        <div className="cases !mt-14 w-full min-h-5">
          {Cases.map((Case, i) => {
            return <Project key={i} {...Case} />;
          })}
          {/* <Project {...Cases[0]} /> */}
        </div>
      </section>

      {/* Process Section */}
      <section className="how-we-di-it relative z-30 bg-gradient w-full flex gap-12 flex-col justify-end items-start !py-16 !px-10 !pr-12 lg:!px-28 lg:!pr-28">
        <p className="text-secondary heebo-md text-[.6rem] uppercase tracking-[.2em]">
          This is how we do it
        </p>

        <h1 className="w-full z-10 sectra-light text-[3.3rem] leading-[3rem] max-w-[45vw]">
          We're crafting emotional experiences aimed at improving results
        </h1>

        <div className="about relative z-30 w-full !mt-2 flex md:flex-row md:justify-start flex-col justify-end items-start gap-8 z-30 text-secondary heebo-v font-[400] leading-[1.4rem] text-[.9rem]">
          <div className="empty-placer hidden h-full w-[45vw] lg:inline"></div>
          <div className="flex-1 flex flex-col justify-between items-start gap-8">
            <div className="w-full flex max-md:flex-col flex-row justify-start items-start gap-[50px]">
              <p className="max-lg:flex-1 lg:!w-[220px]">
                Dogstudio is a design & technology firm working globally from
                our offices based in Belgium and Chicago. Our strong focus on
                producing high quality & emotional brandings, digital products
                and experiences became a signature.
              </p>
              <p className="max-lg:flex-1 lg:!w-[220px]">
                We're passionate about moving people and solving problems for
                the likes of Microsoft, The Museum of Science And Industry Of
                Chicago, The Kennedy Center of Washington, Dragone, Quanta
                Magazine, and many more.
              </p>
            </div>
            <div className="values z-30 group text-white cursor-pointer w-fit">
              <h3 className="text-sm heebo-md !mb-2">Discover our values</h3>
              <div className="w-full h-[2px] bg-rose-700 origin-right md:scale-x-110 group-hover:scale-x-100 duration-200 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full z-30 relative flex flex-col justify-start items-start gap-8 !py-16 !px-10 !pr-12 lg:!px-28 lg:!pr-28">
        <div className="footer-top w-full flex sm:flex-row flex-col justify-start items-start sm:items-end gap-8">
          <div className="locations text-xl heedo-light flex sm:flex-row flex-col justify-center sm:items-center items-start gap-6 sm:gap-7">
            <h2 className="relative">
              Chicago
              <span className="absolute bottom-[20%] left-[120%] bg-rose-700 w-[2px] h-[2px]"></span>
            </h2>
            <h2 className="relative">
              Amsterdam
              <span className="absolute bottom-[20%] left-[120%] bg-rose-700 w-[2px] h-[2px]"></span>
            </h2>
            <h2 className="relative">
              Paris
              <span className="absolute bottom-[20%] left-[120%] bg-rose-700 w-[2px] h-[2px]"></span>
            </h2>
          </div>

          <div className="socials-title w-full h-fit flex sm:flex-col-reverse justify-between sm:items-end items-center">
            <div className="socials-mobile sm:hidden flex justify-start items-center gap-2 text-secondary">
              <div className="facebook cursor-pointer border-2 h-8 w-8 flex justify-center items-center rounded-full border-secondary">
                <CgFacebook />
              </div>
              <div className="instagram cursor-pointer border-2 h-8 w-8 flex justify-center items-center rounded-full border-secondary">
                <CgInstagram />
              </div>
              <div className="dribble cursor-pointer border-2 h-8 w-8 flex justify-center items-center rounded-full border-secondary">
                <CgDribbble />
              </div>
              <div className="twitter cursor-pointer border-2 h-8 w-8 flex justify-center items-center rounded-full border-secondary">
                <CgTwitter />
              </div>
            </div>
            <div className="socials-desktop !mt-4 max-sm:hidden">
              <div className="handles flex justify-start items-center gap-4 text-secondary text-[.7rem]">
                <a href="#" className="hover:text-white hover:opacity-100">
                  Fb
                </a>
                <span>/</span>
                <a href="#" className="hover:text-white hover:opacity-100">
                  Ins
                </a>
                <span>/</span>
                <a href="#" className="hover:text-white hover:opacity-100">
                  Dr
                </a>
                <span>/</span>
                <a href="#" className="hover:text-white hover:opacity-100">
                  Twi
                </a>
              </div>
            </div>
            <div className="title sectra-light text-xl leading-[1.4rem] text-right">
              <h1>We</h1>
              <h1>Make</h1>
              <h1>Good</h1>
              <h1>Shit</h1>
            </div>
          </div>
        </div>

        <div className="line !pt-5 gap-5 flex flex-col sm:flex-row sm:justify-between justify-start items-center w-full border-t border-three">
          <div className="hear flex justify-center items-center gap-4 sm:text-sm text-[.6rem]">
            <p className="heebo-md text-secondary">
              We'd love to hear from you{" "}
            </p>
            <div className="line w-15 h-[1px] bg-three"></div>
            <a href="mailto:biz@dogstudio.be">biz@dogstudio.be</a>
          </div>
          <div className="newsletter flex justify-center items-center gap-4">
            <CgMail size={20} className="text-three" />
            <p className="text-xs heebo-md text-secondary">
              Subscribe to our newsletter
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
