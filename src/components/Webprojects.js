import React from 'react'
import appleclone from '../media/appleclone.jpg'
import projectweather from '../media/projectweather.jpg'
import cardmemory from '../media/cardmemory.jpg'
import chatbox from '../media/chatbox.jpg'
import sidebar from '../media/sidebar.png'

const Webprojects = () => {
  return (
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
                  <div className="project-text" style={{paddingBottom:'35px'}}>i made persona 5 style <span className="purple">chatbox design</span> with <span className="purple">html, css and jquery.</span> there are random users, avatars and profile colors 
                    i pulled them from <span className="purple">local json file.</span> when we pressed new message random user sends random message. and we can answer with the textbox below.</div>
                </div>
                
              </div>

            </div>
            
            <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
          </div>

          

          
        </div>
      </div>
   
  )
}

export default Webprojects