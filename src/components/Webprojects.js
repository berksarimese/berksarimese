import React from 'react'
import appleclone from '../media/appleclone.jpg'
import netflixclone from '../media/netflixclone.jpg'
import projectweather from '../media/projectweather.jpg'
import cardmemory from '../media/cardmemory.jpg'
import chatbox from '../media/chatbox.jpg'
import pomodoro from '../media/pomodoro.jpg'
import sidebar from '../media/sidebar.png'
import emptyproject from '../media/emptyproject.jpg'

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
                  <div className="d-inline project-title px-2">NETFLIX CLONE</div>
                  <div className="d-flex h-100 py-1">
                    <a rel="noopener noreferrer" href="https://netflixclone-berk.vercel.app/" target="_blank" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                    <img src={netflixclone} alt='' className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                    <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
                  </div>
                  <div className="project-text">Netflix Clone is a <span className='purple'>responsive clone of Netflix web app.</span> Made with <span className='purple'>React.js, Redux, Typescript, Axios, React Router, Minimum Bootstrap, TMDB API, HTML, CSS.</span> Incase you can't find your way, you can use these paths: <span className='purple'> /signin, /browse/home, /browse/tvshows, /browse/movies</span></div>
                </div>
              </div>

              <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderRight: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
                <div className="d-inline-block flex-column py-2">
                  <div className="d-inline project-title px-2">PROJECT POMODORO</div>
                  <div className="d-flex h-100 py-1">
                  <a rel="noopener noreferrer" href="https://projectpomodoro.vercel.app/" target="_blank" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                    <img src={pomodoro} alt='' className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                    <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
                  </div>
                  <div className="project-text" style={{paddingBottom:'35px'}}>Project Pomodoro is a <span className='purple'>app for The Pomodoro time management method.</span> Made with <span className='purple'>React.js and Redux</span> to test Redux</div>
                </div>
            
            </div>
            </div>
            <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
          {/* <div className="position-absolute border-style" style={{zIndex:'1', height:'120%', width:'10%', top:'-15px', left:'0%', backgroundColor:'rgba(0,0,0,0.4)'}}></div> */}
          </div>

          {/* SECOND COL */}
          <div className="col-12 d-flex flex-row w-100 h-100">
            <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
            <div className="col-10 d-md-flex flex-row">

              <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderLeft: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
                <div className="d-inline-block justify-content-center align-items-center flex-column py-2">
                  <div className="d-inline project-title px-2">PROJECT WEATHER</div>
                  <div className="d-flex h-100 py-1">
                    <a rel="noopener noreferrer" href="https://projectweather.vercel.app/" target="_blank" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                    <img src={projectweather} alt='' className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                    <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
                  </div>
                  <div className="project-text"> This responsive react project about <span className="purple">getting current and future weather information.</span> Used <span className="purple">React.js, Bootstrap, OpenWeather API, Axios and Framer Motion</span></div>
                </div>
              </div>

              <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderRight: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
              <div className="d-inline-block flex-column py-2">
                  <div className="d-inline project-title px-2">APPLE CLONE</div>
                  <div className="d-flex h-100 py-1">
                  <a rel="noopener noreferrer" href="https://apple-homepage-clone-eight.vercel.app/" target="_blank" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                    <img src={appleclone} alt='' className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                    <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
                  </div>
                  <div className="project-text">This is a full responsive <span className="purple">Apple Homepage Clone</span> project made with <span className="purple">HTML CSS, Jquery</span></div>
                </div>
              </div>
            </div>
            <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
          {/* <div className="position-absolute border-style" style={{zIndex:'1', height:'120%', width:'10%', top:'-15px', left:'0%', backgroundColor:'rgba(0,0,0,0.4)'}}></div> */}
          </div>

          

          {/* THIRD COL */}
          <div className="d-flex flex-row w-100 h-100">
            <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
            <div className="col-10 d-md-flex flex-row">

              <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderLeft: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
                <div className="d-inline-block flex-column py-2">
                  <div className="d-inline project-title px-2">CARD MEMORY GAME</div>
                  <div className="d-flex h-100 py-1">
                  <a rel="noopener noreferrer" href="https://jquery-card-memory-game.vercel.app/" target="_blank" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                    <img src={cardmemory} alt='' className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                    <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
                  </div>
                  <div className="project-text"> Card Memory game made with <span className="purple">HTML, CSS and Jquery.</span> I pulled images from <span className="purple">local JSON file</span> and list them. Game goal is opening same two images at the same time.</div>
                </div>
              </div>

              <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderRight: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
              <div className="d-inline-block flex-column py-2">
                  <div className="d-inline project-title px-2">P5 STYLE CHATBOX</div>
                  <div className="d-flex h-100 py-1">
                  <a rel="noopener noreferrer" href="https://jquery-p5style-chatbox-design.vercel.app/" target="_blank" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                    <img src={chatbox} alt='' className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                    <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
                  </div>
                  <div className="project-text" style={{paddingBottom:'35px'}}>I made Persona 5 style <span className="purple">chatbox design</span> with <span className="purple">HTML, CSS and Jquery.</span> There are random users, avatars and profile colors 
                    i pulled them from <span className="purple">local JSON file.</span> When we pressed new message random user sends random message, and we can answer with the textbox below.</div>
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