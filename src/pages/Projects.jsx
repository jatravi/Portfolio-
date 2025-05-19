import '../styles/Projects.css'
import '../styles/Home.css'
import Travelsarthi from '../assets/Travel-sarthi.png'
import Chatbot from '../assets/Chatbot.png'
import spotify_clone from '../assets/Spotify_clone.png'
import Doodler from '../assets/Doodler.png'
import Portfolio from '../assets/Portfolio.png'

function Project(){
    return(
        <div id="projects">
    <h1 className="project-title">My Projects</h1>

    <div className="project-card">
        <div className="project-img">
            <img src={Travelsarthi} alt="Travel Sarthi" />
        </div>
        <div className="project-info">
            <h1>Travel <span className="gradient">Solution</span> with Bot</h1>
            <p>
                Travel Pal is an AI-powered trip planner that creates personalized travel itineraries. 
                It provides route maps, must-visit destinations, historical facts, and accommodation suggestions — 
                all generated using generative AI for smart, real-time travel planning.
            </p>
            <button><i className='bx bx-link'></i> <a href="https://internalhackathon.netlify.app/" target='_blank'> Website</a></button>
        </div>
    </div>

    <div className="project-card">
        <div className="project-img">
            <img src={Chatbot} alt="Chatbot" />
        </div>
        <div className="project-info">
            <h1>AI <span className="gradient">Chatbot</span></h1>
            <p>
                An intelligent chatbot that combines OpenAI’s GPT capabilities with image recognition using 
                Google Gemini API. It responds to both text and image inputs, making it suitable for interactive 
                learning or smart customer support use cases.
            </p>
            <button><i className='bx bx-link'></i><a href="https://ravi-choudhary.netlify.app/" target="_blank" rel="noopener noreferrer"> Website</a></button>
        </div>
    </div>

    <div className="project-card">
        <div className="project-img">
            <img src={spotify_clone} alt="Spotify Clone" />
        </div>
        <div className="project-info">
            <h1>Clone <span className="gradient">Spotify</span></h1>
            <p>
                A Flutter-based replica of the Spotify mobile app with a clean and responsive UI. 
                It mimics real-world user experience with playlist views, album arts, and seamless navigation, 
                showcasing my expertise in Flutter and UI development.
            </p>
            <button><i className='bx bx-link'></i><a href="http://github.com/jatravi/SPOTIFY_FLUTTER" target="_blank" rel="noopener noreferrer"> Github</a></button>
        </div>
    </div>

    <div className="project-card">
        <div className="project-img">
            <img src={Doodler} alt="Doodler Jump Game" />
        </div>
        <div className="project-info">
            <h1>Game <span className="gradient">Doodler Jump</span></h1>
            <p>
                A browser-based jumping game built using HTML, CSS, and JavaScript. 
                Features include dynamic platform generation, smooth jump physics, and collision detection — 
                great for practicing logic and animation fundamentals.
            </p>
            <button><i className='bx bx-link'></i><a href="https://doodler-game.netlify.app/" target="_blank" rel="noopener noreferrer"> Website</a></button>
        </div>
    </div>

    <div className="project-card">
        <div className="project-img">
            <img src={Portfolio} alt="Portfolio Website" />
        </div>
        <div className="project-info">
            <h1>Portfolio <span className="gradient">Website</span></h1>
            <p>
                A personal portfolio website built to showcase my projects, skills, and achievements. 
                Designed with responsiveness, smooth animations, and a clean UI to provide a modern browsing experience.
            </p>
            <button><i className='bx bx-link'></i> Website</button>
        </div>
    </div>
</div>
    )
}
export default Project