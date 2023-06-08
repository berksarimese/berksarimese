import React from 'react'
import sidebar from '../media/sidebar.png'
import projectz from '../media/projectz.jpg'
import sorcep from '../media/sorcep.jpg'
import ohsheep from '../media/ohsheep.jpg'
import emptyproject from '../media/emptyproject.jpg'

const Gameprojects = () => {
  return (
    <div className="d-flex flex-column">
    <div className="d-flex flex-column w-100 h-100" style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
      
      {/* FIRST COL */}
      <div className="col-12 d-flex flex-row w-100 h-100">
        <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
        <div className="col-10 d-md-flex flex-row">

          <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderLeft: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
            <div className="d-inline-block justify-content-center align-items-center flex-column py-2">
              <div className="d-inline project-title px-2">PROJECT - Z</div>
              <div className="d-flex h-100 py-1">
                <a href="#" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                <img src={projectz} className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
              </div>
              <div className="project-text"> project-z is a <span className="purple">2d, platform and h&s based pc game.</span> i designed the game and worked alone for a long time, but after a while a friend 
                joined to me and he started working on ui, database, light engine and optimization. all the other <span className="purple">Animations, coding, story, level 
                design etc was on me.</span> while working on it we founded krystal arts and still working on our big project. </div>
            </div>
          </div>

          <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderRight: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
          <div className="d-inline-block flex-column py-2">
              <div className="d-inline project-title px-2">OH SHEEP!</div>
              <div className="d-flex h-100 py-1">
              <a href="#" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                <img src={ohsheep} className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
              </div>
              
              <div className="project-text"> oh sheep! is a <span className="purple">mini fast paced arcade game</span> where you gather and protect sheep from monstrous creatures for the highest score! 
                it's a game jam product developed by two different team which is four people gathered in the Jam field. <span className="purple">My role was animation 
                and guidance.</span></div>
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
              <div className="d-inline project-title px-2">OH SHEEP!</div>
              <div className="d-flex h-100 py-1">
              <a href="#" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                <img src={sorcep} className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
              </div>
              <div className="project-text"> sorcep is a <span className="purple">question based mobile game</span> which contains different categories for different situations. made with <span className="purple">gml language.</span></div>
            </div>
          </div>

          <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderRight: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
          <div className="d-inline-block flex-column py-2">
              <div className="d-inline project-title px-2">???</div>
              <div className="d-flex h-100 py-1">
              <a href="#" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                <img src={emptyproject} className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
              </div>
              <div className="project-text" style={{paddingBottom:'35px'}}>???????????? ?????????????????? ??????????????? ?????? ??? ????????? ?????? ??????</div>
            </div>
            
          </div>

        </div>
        
        <div className="d-flex bg-light w-100" style={{backgroundImage:`url(${sidebar})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}}></div>
      </div>

      

      
    </div>
  </div>
  )
}

export default Gameprojects