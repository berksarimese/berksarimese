import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Return from "./components/Return";
import './styles/App.css'
import hero from './media/hero.jpg'
import bgone from './media/bgone.jpg'
import Textslider from "./components/Textslider";



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
      <div className="d-flex justify-content-center align-items-center box-height" style={{backgroundImage:`url(${hero})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        <div className="col-8 text-center hero-title">HI, I'M BERK SARIMEŞE</div>
      </div>

      
      <div className="position-relative d-flex flex-column justify-content-center align-items-center box-height" style={{backgroundImage:`url(${bgone})`, backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'70vh'}}>
        <div className="d-flex flex-column h-100" style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
          <div className="text-center line-title">ABOUT-ME</div>
          <div className="d-flex justify-content-center " style={{paddingTop:'80px'}}>
            
              <div className="position-relative col-11 t-style-1 px-3 py-2" style={{borderRight:'1px solid #EAFC88', borderLeft:'1px solid #EAFC88', zIndex:'2', backgroundColor:'rgba(0,0,0,0)'}}>
              I'm a former <span className="yellow">Game Developer</span> switched to <span className="green">Frontend Developer</span> and i have been trying to improve myself in the web field for almost one year. 
              Until now, I did an internship and I have done some projects related to this field as much as I can and added them to my github account. 
              I generally worked with <span className="green">Html, Css, Javascript, Jquery, React.js, Bootstrap, Liquid, Shopify, Wordpress, Wix, Webflow.</span> Other technologies i use
              instead of web development are <span className="yellow">Gamemaker Studio, Vegas Pro, Photoshop, Lightroom, Aseprite.</span>
              
              
              {/* <div className="position-absolute border-style" style={{zIndex:'-1', height:'120%', width:'10%', top:'-15px', left:'0%', backgroundColor:'rgba(0,0,0,0.4)'}}></div> */}
              
              </div>
    
          </div>
        </div>
      </div>
      
      <Return scrollY = {scrollY} />
      <Textslider text = 'WEB' text2 = 'PROJECTS' />
    </div>
  );
}

export default App;
