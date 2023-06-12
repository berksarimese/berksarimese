import React from 'react'
import Textslider from "../components/Textslider";
import Hero from "../components/Hero";
import Webprojects from "../components/Webprojects";
import Gamevideo from "../components/Gamevideo";
import Gameprojects from "../components/Gameprojects";
import Return from "../components/Return";
import { useState, useEffect } from 'react';
import Contact from './Contact';





const Mainsection = () => {

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
    <div>
      <anchor id="aboutsec" className="position-absolute d-hidden"/>
      <Hero />
      <anchor id="websec" className="position-absolute d-hidden"/>
      <Textslider text = 'WEB' text2 = 'PROJECTS' color = 'bg-green' />
      <Webprojects />
      <anchor id="gamesec" className="position-absolute d-hidden"/>
      <Gamevideo />
      <Textslider text = 'GAME' text2 = 'PROJECTS' color = 'bg-green' />
      <Gameprojects />
      <anchor id="contactsec" className="position-absolute d-hidden"/>
      <Contact />
      <Return scrollY = {scrollY} /> 
    </div>
  )
}

export default Mainsection