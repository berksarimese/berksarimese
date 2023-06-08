import React from 'react'
import gvideo from '../media/gvideo.mp4'

const Gamevideo = () => {
  return (
    <div className="position-relative d-flex w-100 bg-dark video-size" style={{overflow:'hidden'}}>
        <video className="video-section" autoPlay loop muted playsInline>
          <source src={gvideo} type='video/mp4'></source>
        </video>
        <div className='position-absolute video-title'>game teaser <span className='green'>///</span></div>

        <div className="position-absolute bg-light" style={{zIndex:'1', height:'1%', width:'25%', top:'0px', left:'0%'}}></div>
        <div className="position-absolute bg-light" style={{zIndex:'1', height:'3%', width:'25%', top:'0px', left:'25%'}}></div>
        <div className="position-absolute bg-light" style={{zIndex:'1', height:'2%', width:'25%', top:'0px', left:'50%'}}></div>
        <div className="position-absolute bg-light" style={{zIndex:'1', height:'4%', width:'25%', top:'0px', left:'75%'}}></div>

        <div className="position-absolute bg-green" style={{zIndex:'1', height:'4%', width:'25%', bottom:'0px', left:'0%'}}></div>
        <div className="position-absolute bg-green" style={{zIndex:'1', height:'2%', width:'25%', bottom:'0px', left:'25%'}}></div>
        <div className="position-absolute bg-green" style={{zIndex:'1', height:'3%', width:'25%', bottom:'0px', left:'50%'}}></div>
        <div className="position-absolute bg-green" style={{zIndex:'1', height:'5%', width:'25%', bottom:'0px', left:'75%'}}></div>
      </div>
  )
}

export default Gamevideo