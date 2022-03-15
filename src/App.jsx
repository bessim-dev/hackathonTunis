import Header from "./components/header";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center bg-gray-100 h-screen">
        <h1 className="font-bold text-2xl text-blue-900">
          React and Tailwind with Vitejs!
        </h1>
      </main>
    </>
  );
};

export default App;
