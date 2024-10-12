import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="flex flex-col lg:flex-row justify-center h-full pt-20 lg:pt-40 gap-20">
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
            <li className="bg-white/10 border border-neutral-700 rounded-xl p-3 backdrop-blur-sm drop-shadow-2xl">
              <i className="fa-brands fa-react text-blue-400 text-5xl mb-2"></i>
              <p>React Developer</p>
            </li>
            <li className="bg-white/10 border border-neutral-700 rounded-xl p-3 backdrop-blur-sm drop-shadow-2xl">
              <i className="fa-solid fa-pen-nib text-5xl mb-2"></i>
              <p>UX/UI Designer</p>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-4xl text-center mt-16 lg:mt-40">
        Some of my development projects
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-20 py-20">
        <span className="flex flex-col gap-5 max-w-md m-auto lg:m-0">
          <h3 className="text-3xl">Project Exam</h3>
          <p>
            This project is a web application that allows users to create and
            manage holiday venues. It also allows users to search for venues and
            book them. The application is built using React and the Noroff API.
          </p>
          <ul className="list-disc list-inside">
            <p className="font-bold mb-2">Functionality:</p>
            <li>User registration and login</li>
            <li>Venue creation and management</li>
            <li>Booking management</li>
            <li>Search for venues</li>
          </ul>
          <Link
            to="https://github.com/NiklasFerling/Project-Exam_2"
            className="underline"
            target="_blank"
          >
            <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>
            GitHub Repo
          </Link>
        </span>
        <Link
          to="https://frolicking-mermaid-66b253.netlify.app"
          target="_blank"
          className="self-center"
        >
          <img
            src="/src/assets/Holidaze.JPG"
            alt="Screenshot of Project exam page"
            className="w-fit h-80 object-cover border-none rounded-lg drop-shadow-glow2 hover:scale-95 transition-transform"
          />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row-reverse justify-center gap-20 py-20">
        <span className="flex flex-col gap-5 max-w-md m-auto lg:m-0">
          <h3 className="text-3xl">JS Frameworks - Course Assignment</h3>
          <p>
            My first project built using react js. It is a fairly simple website
            utilizing Noroffs API endpoints.
          </p>
          <ul className="list-disc list-inside">
            <p className="font-bold mb-2">Functionality:</p>
            <li>View all available products with full and discounted prices</li>
            <li>Search for specific products with auto completion</li>
            <li>Add/remove items to cart</li>
            <li>Checkout</li>
          </ul>
          <Link
            to="https://github.com/NiklasFerling/React-CA"
            className="underline"
            target="_blank"
          >
            <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>
            GitHub Repo
          </Link>
        </span>
        <Link
          to="https://courageous-cheesecake-47a410.netlify.app"
          target="_blank"
          className="self-center"
        >
          <img
            src="/src/assets/React-ca.JPG"
            alt="Screenshot of Project exam page"
            className="w-fit h-80 object-cover border-none rounded-lg drop-shadow-glow2 hover:scale-95 transition-transform"
          />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-20 py-20">
        <span className="flex flex-col gap-5 max-w-md m-auto lg:m-0">
          <h3 className="text-3xl">Semester Project</h3>
          <p>
            The site is meant to be a place to store information on different
            topics. Anyone can read articles, but to create, edit or delete, you
            need the correct login details.
          </p>
          <Link
            to="https://github.com/NiklasFerling/Semester-project-2"
            className="underline"
            target="_blank"
          >
            <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>
            GitHub Repo
          </Link>
        </span>
        <Link
          to="https://cheerful-flan-04c52a.netlify.app/"
          target="_blank"
          className="self-center"
        >
          <img
            src="/src/assets/Devpedia.JPG"
            alt="Screenshot of Project exam page"
            className="w-fit h-80 object-cover border-none rounded-lg drop-shadow-glow2 hover:scale-95 transition-transform"
          />
        </Link>
      </div>
      <footer className="px-10 py-5">
        <p className="mb-2 font-bold">Contact me at:</p>
        <p>
          <i className="fa-solid fa-envelope mr-2"></i> niklas.ferling@gmail.com
        </p>
        <Link
          to="https://www.linkedin.com/in/niklas-ferling-197189198/"
          target="_blank"
          className="underline"
        >
          <i className="fa-brands fa-linkedin mr-3 text-white"></i>
          Niklasferling
        </Link>
        <p className="py-2">Made by Niklas Ferling</p>
      </footer>
    </div>
  );
}

export default Home;
