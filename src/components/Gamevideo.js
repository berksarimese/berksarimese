import React from 'react'
import gvideo from '../media/gvideo.mp4'

const Gamevideo = () => {
  return (
    <div className="position-relative d-flex w-100 bg-dark" style={{height:'50vw', overflow:'hidden'}}>
        <video className="video-section" autoPlay loop muted playsInline>
          <source src={gvideo} type='video/mp4'></source>
        </video>
      </div>
  )
}

export default Gamevideo