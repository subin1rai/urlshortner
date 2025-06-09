import { Outlet } from "@tanstack/react-router";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default App;
