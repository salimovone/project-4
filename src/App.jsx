import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes></Routes>
    </div>
  );
}

export default App;
