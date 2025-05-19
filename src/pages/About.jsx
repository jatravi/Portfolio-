import '../styles/About.css';
import babyboy from '../assets/baby-boy.png';
import hacker from '../assets/hacker.png';
import geography from '../assets/geography.png';
import passion from '../assets/passion.png';
function About(){
    return (
        <div id="About">
            <h1 className="about-title">Hi, There 👋</h1>
            <div className="about-card">
                <div className="card">
                    <h1>Hi there, I'm Ravi Choudhary</h1>
                    <p>With 2 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.</p>
                    <img src={babyboy} alt="img" />
                </div>
                <div className="card">
                    <h1>Tech Stacks</h1>
                    <p>I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications,</p>
                    <img src={hacker} alt="img" />
                </div>
                <div className="card">
                    <h1>I'm very flexible with time zone communication & locations</h1>
                    <p>With 2 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.</p>
                    <img src={geography} alt="img" />
                    <button>< i class='bx  bx-paper-plane'  >Contact ME</i></button>
                </div>
                <div className="card">
                    <h1>My Passion for Coding</h1>
                    <p>With 2 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.</p>
                    <img src={passion} alt="img" />
                </div>
            </div>
        </div>
    )
};
export default About;