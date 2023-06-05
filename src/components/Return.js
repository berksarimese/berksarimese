import React from 'react'
import { useState, useEffect } from 'react';
import '../styles/App.css'

 function Return(props) {

  //BUTTON OPACITY
  const [makeVisible, setMakeVisible] = useState(false);
  useEffect(() => {
    if(props.scrollY > 270) {
      setMakeVisible(true);
    } else { setMakeVisible(false); }
  }, [props.scrollY])

  return (
    <div className={`position-fixed d-flex justify-content-center w-100 ${makeVisible ? '' : 'd-none'}`}  style={{bottom:'5px'}}>
      <div className='container d-flex flex-direciton-row' style={{maxHeight:'40px'}}>
      <div className='col-3 p-3' style={{borderRight:'1px solid #EAFC88', borderLeft:'1px solid #EAFC88'}}></div>
      <div className='col-6 px-2' style={{}}>
      <a href='#' className='nav-title text-center' style={{borderBottom:'solid 1px #EAFC88'}}>{makeVisible}GO BACK TO START</a>
      </div>     
      <div className='col-3' style={{borderLeft:'1px solid #EAFC88',borderRight:'1px solid #EAFC88'}}></div>
      </div>
    </div>

  )
}

export default Return;