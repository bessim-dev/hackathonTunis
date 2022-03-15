import Header from "./components/header";
import Home from "./routes/Home";

const App = () => {
  return (
    <div className=" bg-gray-100 h-screen">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
