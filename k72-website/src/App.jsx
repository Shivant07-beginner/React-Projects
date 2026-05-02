import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projects from "./Pages/Projects";
import Navigation from "./Componets/Navigation/Navigation";
 

const App = () => {
     
     

  return (
    <div className=" ">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
