import React from 'react'
import '../styles/App.css'


 function Navbar() {


  return (
    <div className='position-absolute d-flex justify-content-center w-100' style={{zIndex:'999'}}>
      <div className='container d-flex flex-direciton-row' style={{maxHeight:'40px'}}>
      <div className='col-3 p-3' style={{borderRight:'1px solid #EAFC88', borderLeft:'1px solid #EAFC88'}}>
        <a href='#' className='nav-title'>BERK SARIMEŞE</a>
      </div>
      <div className='col-3' style={{borderRight:'1px solid #EAFC88'}}></div>

      <div className='col-3'>
        <div className='d-flex flex-column align-items-start p-3'>
          <a href='#' className='nav-item'>ABOUT ME</a>
          <a href='#' className='nav-item'>WEB PROJECTS</a>
          <a href='#' className='nav-item'>GAME PROJECTS</a>
        </div>
      </div>
      <div className='col-3' style={{borderLeft:'1px solid #EAFC88',borderRight:'1px solid #EAFC88'}}>
        <div className='d-flex flex-column align-items-start p-3'>
          <a href='#' className='nav-item'>LINKED-IN</a>
          <a href='#' className='nav-item'>GITHUB</a>
          <a href='#' className='nav-item'>SOCIAL</a>
          <a href='#' className='nav-item'>CONTACT</a>
        </div>
      </div>
      </div>
    </div>

  )
}

export default Navbar;