import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import RiskGame from "./projects/Risk";
import ChessGame from "./projects/Chess";
import Album from "./projects/Album";
import Car_Showroom from "./projects/Car_Showroom";
import Website from "./projects/3D_Portfolio";
import Payapp from "./projects/Payapp";
import { useTheme } from "./components/ThemeContext";

function App() {
  const { darkMode} = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500 text-black"}`}>
      <Router>
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/Risk" element={<RiskGame />} />
            <Route path="/projects/Chess" element={<ChessGame />} />
            <Route path="/projects/Album" element={<Album />} />
            <Route path="/projects/Car_Showroom" element={<Car_Showroom />} />
            <Route path="/projects/Payapp" element={<Payapp />} />
            <Route path="/projects/3D_Portfolio" element={<Website />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
