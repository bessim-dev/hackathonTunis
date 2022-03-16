import { Route, Routes } from "react-router";
import Header from "./components/header";
import PrivateRoute from "./components/PrivateRoute";
import Forum from "./routes/Forum";
import Home from "./routes/Home";
import Login from "./routes/login";
import SignUp from "./routes/sign-up";

const App = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main style={{ height: "calc(100% - 64px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route
            path="Forum"
            element={
              <PrivateRoute>
                <Forum />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
