function Home() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center h-full pt-20 lg:pt-48 gap-20">
        <img
          src="/src/assets/niklas.jpg"
          alt="Niklas"
          className="w-64 h-64 lg:w-96 lg:h-96 object-cover bg-neutral-300 rounded-full drop-shadow-2xl object-center self-center"
        />
        <div className="text-white max-w-md m-auto lg:m-0">
          <h1 className="text-7xl mb-14 drop-shadow-2xl text-center lg:text-left">
            Niklas Ferling
          </h1>
          <ul className="text-lg flex text-center justify-around">
            <li>
              <i className="fa-brands fa-react text-blue-400 text-5xl mb-2"></i>
              <p>React Developer</p>
            </li>
            <li>
              <i className="fa-solid fa-pen-nib text-5xl mb-2"></i>
              <p>UX/UI Designer</p>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-4xl text-white text-center mt-28">Some of my work</h2>
      <div>
        <h3>Project Exam</h3>
      </div>
    </div>
  );
}

export default Home;
