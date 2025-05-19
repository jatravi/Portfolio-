import "../styles/TechStack.css";
import "../styles/Home.css";
import brain from "../assets/brain.png";

function TechStack() {
  return (
    <div id="TechStack">
      <h1 className="skill-title">My Tech Stack 💪</h1>

      <div className="skills-box">
        <img src={brain} alt="Brain" />

        <div className="designer">
          <h1 className="gradient">
            Designer <i class="bx bx-laptop"></i>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quos odit ipsam eligendi autem dignissimos, voluptatibus quam
            delectus sit natus quidem atque sunt omnis reiciendis?
          </p>
        </div>

        <div className="coder">
          <h1 className="gradient">
            Coder <i class="bx bx-code-alt"></i>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quos odit ipsam eligendi autem dignissimos, voluptatibus quam
            delectus sit natus quidem atque sunt omnis reiciendis?
          </p>
        </div>

        <div
          className="slider"
          data-reverse="true"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": 9,
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <i className="bx bxl-html5"></i>
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <i className="bx bxl-nodejs"></i>
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <i className="bx bx-data"></i>
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <i className="bx bxl-javascript"></i>
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <i className="bx bxl-css3"></i>
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <i className="bx bxl-flutter"></i>
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <i className="bx bxl-python"></i>
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <i className="bx bx-terminal"></i>
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <i className="bx bxl-react"></i>
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <i className="bx bxl-c-plus-plus"></i>
            </div>
            <div className="item" style={{ "--position": 11 }}>
              <i className="bx bxl-visual-studio"></i>
            </div>
            <div className="item" style={{ "--position": 13 }}>
              <i className="bx bxl-git"></i>
            </div>
            <div className="item" style={{ "--position": 15 }}>
              <i className="bx bxl-github"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
