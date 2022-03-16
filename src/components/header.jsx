import { NavLink } from "react-router-dom";

const Header = () => {
  return (
<<<<<<< HEAD
    <header className="bg-gray-50 shadow-sm py-1 md:py-4 flex justify-between items-center h-16">
      <NavLink
        to="/"
=======
    <header class="bg-gray-50 shadow-sm py-1 md:py-4 flex justify-between items-center ">
      <a
        href="#"
>>>>>>> a998dac023fa29f9aab32addf7694f4b6d067f94
        className="font-bold text-center text-xl text-green-600 px-2 basis-1/5"
      >
        FTN
      </NavLink>
      <nav className="flex justify-between items-center basis-2/5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-1 px-4 mx-2 text-white rounded bg-green-600 hover:bg-green-100 hover:text-gray-700 transition-colors duration-300"
              : "p-1 px-4 mx-2 text-gray-600 rounded hover:bg-green-100 hover:text-gray-700 transition-colors duration-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "p-1 px-4 mx-2 text-white rounded bg-green-600 hover:bg-green-100 hover:text-gray-700 transition-colors duration-300"
              : "p-1 px-4 mx-2 text-gray-600 rounded hover:bg-green-100 hover:text-gray-700 transition-colors duration-300"
          }
        >
          About
        </NavLink>
        <a
          className={({ isActive }) =>
            isActive
              ? "p-1 px-4 mx-2 text-white rounded bg-green-600 hover:bg-green-100 hover:text-gray-700 transition-colors duration-300"
              : "p-1 px-4 mx-2 text-gray-600 rounded hover:bg-green-100 hover:text-gray-700 transition-colors duration-300"
          }
        >
          Features
        </a>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "p-1 px-4 mx-2 text-white rounded bg-green-600 hover:bg-green-100 hover:text-gray-700 transition-colors duration-300"
              : "p-1 px-4 mx-2 text-gray-600 rounded hover:bg-green-100 hover:text-gray-700 transition-colors duration-300"
          }
        >
          Contact
        </NavLink>
      </nav>
      <div className="basis-1/5">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "p-1 px-4 mx-2 text-white bg-green-600 text-center border border-transparent rounded hover:bg-green-100 hover:text-green-700 transition-colors duration-300"
              : "p-1 px-4 mx-2 text-green-600 text-center border border-transparent rounded hover:bg-green-100 hover:text-green-700 transition-colors duration-300"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/sign-up"
          className={({ isActive }) =>
            isActive
              ? "p-1 px-4 mx-2 text-white bg-green-600 text-center border border-solid border-green-600 rounded hover:bg-green-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              : "p-1 px-4 mx-2 text-green-600 text-center border border-solid border-green-600 rounded hover:bg-green-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
          }
        >
          Signup
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
