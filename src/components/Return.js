import React from 'react'
import { useState, useEffect } from 'react';
import '../styles/App.css'

 function Return(props) {

  //BUTTON OPACITY
  const [makeVisible, setMakeVisible] = useState(false);
  const [burger, setBurger] = useState(false);
  useEffect(() => {
    if(props.scrollY > 270) {
      setMakeVisible(true);
    } else { setMakeVisible(false); setBurger(false); }
  }, [props.scrollY])

  function burgerOpen() {
    if (burger === true) { setBurger(false )} else { setBurger(true) }
    console.log(burger);
  }

  return (
    <div className={`position-fixed d-flex justify-content-center w-100 ${makeVisible ? '' : 'd-none'}`}  style={{bottom:'5px'}}>
      <div className='container d-flex flex-direciton-row' style={{maxHeight:'40px'}}>
      <div className='col-3 p-3' style={{borderRight:'1px solid #EAFC88', borderLeft:'1px solid #EAFC88'}}></div>
      <div className='col-6 px-2' style={{}}>
      <a href='#' className='nav-title text-center' style={{borderBottom:'solid 1px #EAFC88'}}>{makeVisible}GO BACK TO START</a>
      </div>     
      <div className='col-3' style={{borderLeft:'1px solid #EAFC88',borderRight:'1px solid #EAFC88'}}></div>
      </div>
      <div className={`position-fixed px-1 py-2 noselect burger ${burger ? 'burger-open' : ''}`}>
        <a href='#' className='nav-item'>ABOUT ME</a>
        <a href='#' className='nav-item'>WEB PROJECTS</a>
        <a href='#' className='nav-item'>GAME PROJECTS</a>
        <a href='#' className='nav-item'>CONTACT</a>
        <div onClick={() => (burgerOpen())} className='position-absolute d-flex justify-content-center align-items-center t-style-1 burger-button' style={{fontSize:'18px'}}> |-//-| </div>
      </div>
    </div>

  )
}

export default Return;