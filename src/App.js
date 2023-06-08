import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Return from "./components/Return";
import './styles/App.css'
import Textslider from "./components/Textslider";
import Hero from "./components/Hero";
import Webprojects from "./components/Webprojects";
import Gamevideo from "./components/Gamevideo";
import Gameprojects from "./components/Gameprojects";



function App() {

  //SCROLL
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    
  return (
    <div className="container-fluid p-0 m-0 bg-dark" style={{overflow:'hidden'}}>
      <Navbar />
      <a id="aboutsec" className="position-absolute d-hidden"/>
      <Hero />
      <a id="websec" className="position-absolute d-hidden"/>
      <Textslider text = 'WEB' text2 = 'PROJECTS' color = 'bg-green' />
      <Webprojects />
      <a id="gamesec" className="position-absolute d-hidden"/>
      <Gamevideo />
      <Textslider text = 'GAME' text2 = 'PROJECTS' color = 'bg-green' />
      <Gameprojects />
      <Return scrollY = {scrollY} /> 
    </div>
  );
}

export default App;
