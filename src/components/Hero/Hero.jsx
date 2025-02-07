import React from 'react'

const Hero = () => {
  return (
    <div id='start' className='hero'>
        <div className="title-container">
            <div className="title">Berk</div>
            <div className="title">Sarımese</div>
            <div className="desc">Front-End Developer - <span className='highlight'>Pet Project:</span> Indie Game Development</div>
            <a href='#projects'><button className="button">View The Projects →</button></a>
        </div>
        <div className="sliding-down">
          Keep Sliding to see more <span style={{paddingLeft:'10px', fontSize:'30px'}}> → </span>
        </div>
    </div>
  )
}

export default Hero