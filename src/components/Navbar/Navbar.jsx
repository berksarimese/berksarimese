import React, { useState } from 'react'

const Navbar = ({propsList}) => {

    const [onSocial, setOnSocial] = useState('none');
    const [onProjects, setOnProjects] = useState('none');
    const [burgerVisibility, setBurgerVisibility] = useState(false);

    const {
      showWeb,
      setShowWeb,
      showGame,
      setShowGame,
      showInvolved,
      setShowInvolved,
      typeTitle,
      setTypeTitle,
      handleProjects
  } = propsList;

  const burgerMenu = () => {
    setBurgerVisibility(burgerVisibility === true ? false : true);
    console.log(burgerVisibility);
  }

  return (
    <>
      <nav className='navbar'>
          <div className='nav-section'>
            <a href='#start' className="nav-title">Berk</a>
            <a href='#about' className="nav-item">About</a>
            <div onMouseEnter={e => setOnProjects('block')} onMouseLeave={e => setOnProjects('none')} className="nav-item">
              <div style={{display:'flex', alignItems:'center'}}>Projects <span style={{fontSize:'10px', paddingLeft:'5px'}}>▼</span></div>
              <div onMouseEnter={e => setOnProjects('block')} onMouseLeave={e => setOnProjects('none')} className='social-list' style={{display:`${onProjects}`}}>
                <a href='#projects' onClick={ e => handleProjects('web')} className='social-item'>Web Projects</a>
                <a href='#projects' onClick={ e => handleProjects('game')} className='social-item' style={{borderBottom:'none'}}>Game Projects</a>
              </div>
            </div>
            <div onMouseEnter={e => setOnSocial('block')} onMouseLeave={e => setOnSocial('none')} className="nav-item">
              <div style={{display:'flex', alignItems:'center'}}>Socials <span style={{fontSize:'10px', paddingLeft:'5px'}}>▼</span></div>
              <div onMouseEnter={e => setOnSocial('block')} onMouseLeave={e => setOnSocial('none')} className='social-list' style={{display:`${onSocial}`}}>
                <a className='social-item' href="https://www.linkedin.com/in/berk-sar%C4%B1me%C5%9Fe-8b4a9a234/" target="_blank">LinkedIn</a>
                <a className='social-item' href="https://github.com/berksarimese" target="_blank">Github</a>
                <a className='social-item' href='https://www.instagram.com/berksarimese/' style={{borderBottom:'none'}} target="_blank">Instagram</a>
              </div>
            </div>
          </div>
          <div className="nav-section">
            <a href='#contact'><button>Contact</button></a>
          </div>
        </nav>
        <nav className='navbar-burger'>
          <div className='nav-section'>
            <a href='#start' className="nav-title" style={{border:'none'}}>BERK</a>
          </div>
          <div className="nav-section">
            <button onClick={burgerMenu} style={{borderRadius:'0'}}>MENU</button>
          </div>
        </nav>
        <div className={`burger-menu ${burgerVisibility ? 'burger-open' : ''}`}>
          <div className="burger-items">
            <a href='#about' className="burger-item">About</a>
            <a href='#projects' onClick={ e => handleProjects('web')} className="burger-item">Web Projects</a>
            <a href='#projects' onClick={ e => handleProjects('game')} className="burger-item">Game Projects</a>
            <a href="https://www.linkedin.com/in/berk-sar%C4%B1me%C5%9Fe-8b4a9a234/" target="_blank" className="burger-item">Linkedin</a>
            <a href="https://github.com/berksarimese" target="_blank" className="burger-item">Github</a>
            <a href='https://www.instagram.com/berksarimese/' target="blank" className="burger-item">Instagram</a>
            <a href='#contact' className="burger-item">Contact</a>
            <div onClick={burgerMenu} className='burger-close'>x</div>
          </div>
        </div>
    </>
  )
}

export default Navbar