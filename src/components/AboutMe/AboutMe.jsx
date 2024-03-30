import React from 'react'
import MeImage from '../Me-Image/MeImage'

const AboutMe = () => {
  return (
    <div id='about' className='section-wrapper'>
      <div className="about-wrapper">
        <div className="webdev-section">
          <div className='title'>About Me</div>
          <div className="desc">
          I am pursuing my career as a <a className='link-in-text' href='#projects'>Front-End Developer</a>. Throughout my work experience, I have been involved in numerous innovative 
          projects where I can continuously improve myself, and I continue to seek such opportunities. In this dynamic and ever-evolving industry, 
          I enjoy learning new technologies and creating engaging content.
          </div>
          <div className='title-mini'>Pet Project: Game Development</div>
          <div className="desc-mini">
          I took my first steps into the software industry through <a className='link-in-text' href='#projects'>Game Development</a>. During this journey, as a team we have completed several mini 
          projects and are currently working on a large-scale project --currently i left coding to my teammate, i'm working on art and animation position--. 
          While I continue my career as a Front-End Developer, I pursue my dream of game development in my spare time.
          </div>
        </div>
        <div className="gamedev-section">
          <div className="tech-container">
            <div className="technologies">
                <div className="title">Web Tech</div>
                <div className="tech-item">HTML/CSS/Javascript</div>
                <div className="tech-item">React.js</div>
                <div className="tech-item">TypeScript</div>
                <div className="tech-item">Redux</div>
                <div className="tech-item">React Router Dom</div>
                <div className="tech-item">Axios</div>
                <div className="tech-item">Ant Design</div>
                <div className="tech-item">Bootstrap</div>
                <div className="tech-item">Shopify</div>
                <div className="tech-item">Liquid</div>
                <div className="tech-item">Wordpress</div>
                <div className="tech-item">Wix</div>
                <div className="tech-item">Webflow</div>
              </div>
              <div className="technologies">
                <div className="title">Other Tech</div>
                <div className="tech-item">GitHub</div>
                <div className="tech-item">Gamemaker Studio/GML</div>
                <div className="tech-item">Vegas Pro</div>
                <div className="tech-item">Photoshop</div>
                <div className="tech-item">Lightroom</div>
                <div className="tech-item">Aseprite</div>
              </div>
          </div> 
          <MeImage/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe