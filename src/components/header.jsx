const Header = () => {
  return (
    <header class="bg-white py-1 md:py-4 flex justify-between items-center">
      <a
        href="#"
        className="font-bold text-center text-xl text-indigo-600 px-2 basis-1/5"
      >
        FWR
      </a>
      <nav className="flex justify-between items-center basis-2/5">
        <a href="#" className="p-1 text-white rounded bg-indigo-600">
          Home
        </a>
        <a
          href="#"
          className="p-1 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="p-1 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        >
          Features
        </a>
        <a
          href="#"
          className="p-1 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        >
          Pricing
        </a>
        <a
          href="#"
          className="p-1 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
        >
          Contact
        </a>
      </nav>
      <div className="basis-1/5">
        <a
          href="#"
          className="p-1 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
        >
          Login
        </a>
        <a
          href="#"
          className="p-1 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
        >
          Signup
        </a>
      </div>
    </header>
  );
};
export default Header;
