import React, { useState } from 'react'

const Navbar = ({propsList}) => {

    const [onSocial, setOnSocial] = useState('none');
    const [onProjects, setOnProjects] = useState('none');

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

  return (
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
  )
}

export default Navbar