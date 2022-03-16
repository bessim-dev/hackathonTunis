const Login = () => {
  return (
    <div className="bg-grey-lighter flex flex-col items-center h-full">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full flex flex-col items-center">
          <h1 className="mb-8 text-3xl text-center">Login</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 shadow-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 shadow-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="shadow-md mt-10 px-10 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-3xl text-lg"
          >
            Connecter
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
