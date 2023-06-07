import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Return from "./components/Return";
import './styles/App.css'
import hero from './media/hero.jpg'
import bgone from './media/bgone.jpg'
import appleclone from './media/appleclone.jpg'
import projectweather from './media/projectweather.jpg'
import cardmemory from './media/cardmemory.jpg'
import chatbox from './media/chatbox.jpg'
import sidebar from './media/sidebar.png'
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
      
      <Textslider text = 'WEB' text2 = 'PROJECTS' color = 'red' />

      <div className="d-flex flex-column">
        <div className="d-flex flex-column w-100 h-100" style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
          
          {/* FIRST COL */}
          <div className="col-12 d-flex flex-row w-100 h-100">
            <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
            <div className="col-10 d-md-flex flex-row">

              <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderLeft: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
                <div className="d-inline-block justify-content-center align-items-center flex-column py-2">
                  <div className="d-inline project-title px-2">PROJECT WEATHER</div>
                  <div className="d-flex h-100 py-1">
                    <a href="#" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                    <img src={projectweather} className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                    <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
                  </div>
                  <div className="project-text"> this responsive react project about getting current and future weather information. used <span className="purple">react.js, bootstrap, openWeather api, axios and framer motion</span></div>
                </div>
              </div>

              <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderRight: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
              <div className="d-inline-block flex-column py-2">
                  <div className="d-inline project-title px-2">APPLE CLONE</div>
                  <div className="d-flex h-100 py-1">
                  <a href="#" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                    <img src={appleclone} className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                    <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
                  </div>
                  <div className="project-text">this is a full responsive apple homepage clone project made with <span className="purple">html, css, jquery</span></div>
                </div>
              </div>
            </div>
            <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
          {/* <div className="position-absolute border-style" style={{zIndex:'1', height:'120%', width:'10%', top:'-15px', left:'0%', backgroundColor:'rgba(0,0,0,0.4)'}}></div> */}
          </div>

          {/* SECOND COL */}
          <div className="d-flex flex-row w-100 h-100">
            <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
            <div className="col-10 d-md-flex flex-row">

              <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderLeft: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
                <div className="d-inline-block flex-column py-2">
                  <div className="d-inline project-title px-2">CARD MEMORY GAME</div>
                  <div className="d-flex h-100 py-1">
                  <a href="#" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                    <img src={cardmemory} className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                    <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
                  </div>
                  <div className="project-text"> card memory game made with <span className="purple">html, css and jquery.</span> i pulled images from <span className="purple">local json file</span> and list them. game goal is opening same two images at the same time.</div>
                </div>
              </div>

              <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderRight: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
              <div className="d-inline-block flex-column py-2">
                  <div className="d-inline project-title px-2">P5 STYLE CHATBOX</div>
                  <div className="d-flex h-100 py-1">
                  <a href="#" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                    <img src={chatbox} className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                    <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
                  </div>
                  <div className="project-text" style={{paddingBottom:'25px'}}>i made persona 5 style <span className="purple">chatbox design</span> with <span className="purple">html, css and jquery.</span> there are random users, avatars and profile colors 
                    i pulled them from <span className="purple">local json file.</span> when we pressed new message random user sends random message. and we can answer with the textbox below.</div>
                </div>
                
              </div>

            </div>
            
            <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
          {/* <div className="position-absolute border-style" style={{zIndex:'1', height:'120%', width:'10%', top:'-15px', left:'0%', backgroundColor:'rgba(0,0,0,0.4)'}}></div> */}
          </div>

          <Textslider text = 'GAME' text2 = 'PROJECTS' color = 'red' />
        </div>
      </div>

    
      <Return scrollY = {scrollY} />
      
    </div>
  );
}

export default App;
