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
                <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1Fp1gPSKlqLhQF5THRhsi3-YQMcRsop71/preview" target="_blank" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                <img src={projectz} alt='' className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
              </div>
              <div className="project-text"> Project - Z is a <span className="purple">2D, Platform and H&S based PC Game.</span> I designed the game and worked alone for a long time, but after a while a friend 
                joined to me and he started working on ui, database, light engine and optimization. all the other <span className="purple">Animations, coding, story, level 
                design etc was on me.</span> While working on it we founded <span className="purple">Krystal Arts</span> and still working on our big project. </div>
            </div>
          </div>

          <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderRight: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
          <div className="d-inline-block flex-column py-2">
              <div className="d-inline project-title px-2">OH SHEEP!</div>
              <div className="d-flex h-100 py-1">
              <a rel="noopener noreferrer" href="https://store.steampowered.com/app/2062190/Oh_Sheep/" target="_blank" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                <img src={ohsheep} alt='' className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
              </div>
              
              <div className="project-text"> Oh Sheep! is a <span className="purple">mini fast paced arcade game</span> where you gather and protect sheep from monstrous creatures for the highest score! 
                It's a GAME JAM product developed by two different team which is four people gathered in the Jam field. <span className="purple">My role was animation 
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
              <div className="d-inline project-title px-2">SORCEP</div>
              <div className="d-flex h-100 py-1">
              <a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=krystalarts.com.KrystalArts.SorCep&pli=1" target="_blank" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                <img src={sorcep} alt='' className='d-flex px-1 project-opacity' style={{width:'85%'}} />
                <div className="d-flex" style={{width:'0.3%', background:'black'}}></div>
              </div>
              <div className="project-text"> SorCep is a <span className="purple">question based mobile game</span> which contains different categories for different situations. Made with <span className="purple">GameMaker Engine and GML language.</span></div>
            </div>
          </div>

          <div className="col-md-6 bg-light px-1" style={{boxSizing: 'border-box', borderRight: 'solid 1px rgba(0, 0, 0, 0.4)', paddingTop:'50px'}}>
          <div className="d-inline-block flex-column py-2">
              <div className="d-inline project-title px-2">???</div>
              <div className="d-flex h-100 py-1">
              <a rel="noopener noreferrer" href="#gamesec" className="d-flex project-title justify-content-center align-items-center project-link">|- click -|</a>
                <img src={emptyproject} alt='' className='d-flex px-1 project-opacity' style={{width:'85%'}} />
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