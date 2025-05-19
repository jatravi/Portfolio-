import '../styles/Projects.css'
import '../styles/Home.css'
import Travelsarthi from '../assets/Travel-sarthi.png'
import Chatbot from '../assets/Chatbot.png'

function Project(){
    return(
        <div id="projects">
            <h1 className="project-title">My Projects</h1>
            <div className="project-card">
                <div className="project-img">
                    <img src={Travelsarthi} alt="Travel Sarthi" />
                </div>
                <div className="project-info">
                    <h1>Travel <span className="gradient">Solution</span> with bot</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe, nihil aliquid maiores expedita sint sed aperiam 
                        nesciunt eius mollitia repudiandae error obcaecati pariatur
                         a reiciendis!
                    </p>
                    <button><i class='bx bx-link'></i> Website</button>
                </div>
            </div>

            <div className="project-card">
                <div className="project-img">
                    <img src={Chatbot} alt="Chatbot" />
                </div>
                <div className="project-info">
                    <h1>AI <span className="gradient">Chatbot</span></h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe, nihil aliquid maiores expedita sint sed aperiam 
                        nesciunt eius mollitia repudiandae error obcaecati pariatur
                         a reiciendis!
                    </p>
                    <button>< i className='bx  bx-link'  ></i> Website</button>
                </div>
            </div>

            <div className="project-card">
                <div className="project-img">
                    <img src={Chatbot} alt="Chatbot" />
                </div>
                <div className="project-info">
                    <h1>Clone <span className="gradient">Spotify</span></h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe, nihil aliquid maiores expedita sint sed aperiam 
                        nesciunt eius mollitia repudiandae error obcaecati pariatur
                         a reiciendis!
                    </p>
                    <button>< i className='bx  bx-link'  ></i> Website</button>
                </div>
            </div>

            <div className="project-card">
                <div className="project-img">
                    <img src={Chatbot} alt="Chatbot" />
                </div>
                <div className="project-info">
                    <h1>Game <span className="gradient">Doodler jump</span></h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Saepe, nihil aliquid maiores expedita sint sed aperiam 
                        nesciunt eius mollitia repudiandae error obcaecati pariatur
                         a reiciendis!
                    </p>
                    <button>< i class='bx  bx-link'  ></i> Website</button>
                </div>
            </div>
        </div>
    )
}
export default Project