function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="flex flex-col lg:flex-row justify-center h-full pt-20 lg:pt-28 gap-20">
        <img
          src="/src/assets/niklas.jpg"
          alt="Niklas"
          className="w-64 h-64 lg:w-96 lg:h-96 object-cover bg-neutral-300 rounded-full drop-shadow-2xl object-center self-center"
        />
        <div className="max-w-md m-auto lg:m-0">
          <h1 className="text-7xl mb-14 drop-shadow-2xl text-center lg:text-left">
            Niklas Ferling
          </h1>
          <ul className="text-lg flex text-center justify-around">
            <li className="bg-white/10 border border-neutral-700 rounded-xl p-3 backdrop-blur-sm">
              <i className="fa-brands fa-react text-blue-400 text-5xl mb-2"></i>
              <p>React Developer</p>
            </li>
            <li className="bg-white/10 border border-neutral-700 rounded-xl p-3 backdrop-blur-sm">
              <i className="fa-solid fa-pen-nib text-5xl mb-2"></i>
              <p>UX/UI Designer</p>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-4xl text-center mt-28">
        Some of my development projects
      </h2>
      <div className="flex flex-col lg:flex-row justify-around py-20">
        <span>
          <h3 className="text-3xl">Project Exam</h3>
        </span>
        <img
          src="/src/assets/Holidaze.JPG"
          alt="Screenshot of Project exam page"
          className="w-fit h-96 object-cover border-none rounded-lg drop-shadow-glow1 hover:scale-95 transition-transform"
        />
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-around py-20">
        <span>
          <h3 className="text-3xl">JS Frameworks - Course Assignment</h3>
        </span>
        <img
          src="/src/assets/React-ca.JPG"
          alt="Screenshot of Project exam page"
          className="w-fit h-96 object-cover border-none rounded-lg drop-shadow-glow1 hover:scale-95 transition-transform"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-around py-20">
        <span>
          <h3 className="text-3xl">Semester Project</h3>
        </span>
        <img
          src="/src/assets/Devpedia.JPG"
          alt="Screenshot of Project exam page"
          className="w-fit h-96 object-cover border-none rounded-lg drop-shadow-glow1 hover:scale-95 transition-transform"
        />
      </div>
    </div>
  );
}

export default Home;
