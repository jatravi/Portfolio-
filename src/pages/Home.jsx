import '../styles/Home.css'
import thinkingBubble from '../assets/thinking-bubble.png';
import 'boxicons/css/boxicons.min.css';

function Home(){
    return(
        <div id="home">
            <div className="info">
               <div className="info-title">
                 <i className='bx bxl-sketch'></i> 
                Front-end Developer Portfolio
               </div>
               <h1>Providing <span className="gradient">the best</span> Project <span className="gradient">Experience</span></h1>
               <p>I'm a Front-end developer with Experience in website, Mobile and Software Development. Check out my skills and projects. </p>
               <button><i className='bx bxs-send'>Contact Me</i></button>
            </div>
            <div className="info-box">
                <img src={thinkingBubble} alt="Thinking Bubble" />
            </div>
            <div className="scroll-down">

            </div>
        </div>
    )
};

export default Home;