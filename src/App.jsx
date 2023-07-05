import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes } from "react-router-dom";


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">

      <Routes></Routes>
    </div>
  );
}

export default App;
