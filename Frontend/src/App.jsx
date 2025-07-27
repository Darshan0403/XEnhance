import React from "react";
import "./App.css"; // Keep your global styles
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import About from "./components/About";
import Suggestions from "./components/Suggestions";
import Enhance from './components/Enhance';

function App() {
  return (
    // This is the main container for your entire app.
    // No complex positioning needed here.
    <div className="bg-white">
      <NavBar />
      <Hero />
      <Demo />
      
      <Enhance />
      <About />
      <Suggestions />
    </div>
  );
}

export default App;
