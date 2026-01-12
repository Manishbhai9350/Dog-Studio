import "./App.css";

const App = () => {
  return (
    <main className="w-screen h-auto px-6 pt-12">
      <section className="hero flex flex-col justify-center items-start w-screen h-screen bg-black text-white">
        <div className="heading w-full flex-1">
          <h1 className="text-6xl sectra-light">
          We <br />
          Make <br />
          Good <br />
          Shit
        </h1>
        </div>
        <div className="description w-full flex-1"></div>
      </section>
    </main>
  );
};

export default App;
