import { webProjects, gameProjects, involvedProjects } from '../../utils/ProjectData'

const Projects = ({propsList}) => {

    const {
        showWeb,
        showGame,
        showInvolved,
        typeTitle,
        handleProjects
    } = propsList;

  return (
    <div id='projects' className='section-wrapper'>
     <div className="projects-wrapper">
        <div className="project-type-container">
            <div onClick={ e => handleProjects('web')} className="button" style={showWeb === 'block' ? {backgroundColor:'black', color:'white'} : {}}>
                <div>Web Projects</div>
                <div className='right-arrow'>→</div>
            </div>
            <div onClick={ e => handleProjects('game')} className="button" style={showGame === 'block' ? {backgroundColor:'black', color:'white'} : {}}>
                <div>Game Projects</div>
                <div className='right-arrow'>→</div>
            </div>
            <div onClick={ e => handleProjects('involved')} className="button" style={showInvolved === 'block' ? {backgroundColor:'black', color:'white', borderBottom:'none'} : {borderBottom:'none'}}>
                <div>Projects I'm Involved</div>
                <div className='right-arrow'>→</div>
            </div>
        </div>
        <div className="projects-container">
            <div className="project-menu-title">{typeTitle}</div>
            <div style={{display:showWeb}}>
                {webProjects.map((web,index) => {
                    return(
                        <div key={web.id} className="projects-item">
                            <div className='image-container'>
                                <img style={{width:'100%'}} src={web.img} alt="" />
                            </div>
                            <div className="project-desc">{web.description}</div>
                            <a href={web.url} target="_blank" style={{width:'100%'}}>
                                <button>
                                    <span style={{fontSize:'17px', fontWeight:'900'}}>
                                        {web.projectName}
                                    </span>
                                    <span style={{fontSize:'20px'}}>
                                        →
                                    </span>
                                </button>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div style={{display:showGame}}>
                {gameProjects.map((game,index) => {
                    return(
                        <div key={game.id} className="projects-item">
                            <div className='image-container'>
                                <img style={{width:'100%'}} src={game.img} alt="" />
                            </div>
                            <div className="project-desc">{game.description}</div>
                            <a href={game.url} target="_blank" style={{width:'100%'}}>
                                <button>
                                    <span style={{fontSize:'17px', fontWeight:'900'}}>
                                        {game.projectName}
                                    </span>
                                    <span style={{fontSize:'20px'}}>
                                        →
                                    </span>
                                </button>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div style={{display:showInvolved}}>
                {involvedProjects.map((involve,index) => {
                    return(
                        <a href={involve.url} target="_blank" key={involve.id} className="projects-item-involved">
                            <span style={{fontWeight:'500'}}>{involve.projectName}</span>
                            <div>
                                <span>{involve.description}</span>
                                {involve.url ?
                                    <span style={{fontSize:'20px', paddingLeft:'15px'}}>→</span>
                                    :
                                    <span style={{fontSize:'15px', paddingLeft:'25px'}}>x</span>
                                }
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
        <div className="sliding-down" style={{fontSize:'15px', right:'50px'}}>
            Keep Sliding to see more <span style={{paddingLeft:'10px', fontSize:'15px'}}> → </span>
        </div>
     </div>
    </div>
  )
}

export default Projects