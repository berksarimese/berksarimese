import './styles/main.css'
import { webProjects, gameProjects } from './utils/ProjectData'
import VideoBackground from './components/VideoBackground/VideoBackground'
import Hero from './components/Hero/Hero'
import GlassOverlay from './components/GlassOverlay/GlassOverlay'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App() {
    const [showWeb, setShowWeb] = useState('block');
    const [showGame, setShowGame] = useState('none');
    const [showInvolved, setShowInvolved] = useState('none');
    const [typeTitle, setTypeTitle] = useState('Web Projects');

    const handleProjects = (type) => {
        if(type === 'web') {
            setShowGame('none');
            setShowInvolved('none');
            setShowWeb('block');
            setTypeTitle('Web Projects');
        } else if(type ==='game') {
            setShowWeb('none');
            setShowInvolved('none');
            setShowGame('block');
            setTypeTitle('Game Projects');
        } else {
            setShowWeb('none');
            setShowGame('none');
            setShowInvolved('block');
            setTypeTitle("Projects I'm Involved In");
        }
    }

    const propsList = {
      showWeb,
      setShowWeb,
      showGame,
      setShowGame,
      showInvolved,
      setShowInvolved,
      typeTitle,
      setTypeTitle,
      handleProjects
    }

  return (
    <div className='main-wrapper'>
      <Navbar propsList={propsList}/>
      <Hero/>
      <AboutMe/>
      <Projects propsList={propsList}/>
      <Contact/>
      <Footer/>
      <VideoBackground/>
      <GlassOverlay/>
    </div>
  )
}

export default App
