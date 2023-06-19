import React from 'react'
import hero from '../media/hero.jpg'
import bgone from '../media/bgone.jpg'
import berksarimesecv from '../media/berksarimesecv.pdf'

const Hero = () => {
  return (
    <div>
        <div className="d-flex justify-content-center align-items-center box-height" style={{backgroundImage:`url(${hero})`,backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                <div className="col-8 text-center hero-title">HI, I'M BERK SARIMEŞE</div>
            </div>
            <div className="position-relative d-flex flex-column justify-content-center align-items-center box-height" style={{backgroundImage:`url(${bgone})`, backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                <div className="d-flex flex-column h-100 about-shadow" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                <div className="text-center line-title">ABOUT-ME</div>
                <div className="d-flex justify-content-center about-padding" style={{overflow:'hidden'}}>
                    <div className="position-relative col-11 t-style-1 px-3 py-3" style={{borderRight:'1px solid #EAFC88', borderLeft:'1px solid #EAFC88', zIndex:'2', backgroundColor:'rgba(0,0,0,0)'}}>
                    I'm a former <span className="yellow">Game Developer</span> switched to <span className="green">Frontend Developer</span> and i have been trying to improve myself in the web field for almost one year. 
                    Until now, I did an internship and I have done some projects related to this field as much as I can and added them to my github account. 
                    I generally worked with <span className="green">Html, Css, Javascript, Jquery, React.js, Bootstrap, Liquid, Shopify, Wordpress, Wix, Webflow.</span> Other technologies i use
                    instead of web development are <span className="yellow">Gamemaker Studio, Vegas Pro, Photoshop, Lightroom, Aseprite.</span>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-center gap-3 py-3 px-5'>
                      <a href={berksarimesecv} download className='about-button'>CLEAN RESUME</a>
                      <a rel="noopener noreferrer" href='https://github.com/berksarimese' target="_blank" className=' about-button'>GITHUB</a>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default Hero