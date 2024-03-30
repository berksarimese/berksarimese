import React from 'react'
import bgVideo from '../../assets/bgvideo.mp4'

const VideoBackground = () => {
  return (
    <div className='fixed-video-container'>
    <video className="video-background" autoPlay loop muted playsInline>
        <source src={bgVideo} type='video/mp4'></source>
    </video>
  </div>
  )
}

export default VideoBackground