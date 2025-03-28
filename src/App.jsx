import "./App.css";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaBlog } from "react-icons/fa";

function App() {

  return (
    <>
      <div className="container">
        <div className="about-section">
          <div className="profile">
            <div className="profile-pic">
              <img src="../src/assets/profile-pic.jpg" alt="Profile picture" />
            </div>
            <div className="name">Chris Le</div>
            <div className="job-title">Frontend Developer | JavaScript Developer | Project Engineer</div>
          </div>
          <div className="info">
            <div className="location">
              <CiLocationOn size={24}/>
              <span>Dallas, TX</span>
            </div>
            <div className="email">
              <CiMail size={24}/>
              <a href="mailto:ChristopherAnhDLe@gmail.com">ChristopherAnhDLe@gmail.com</a>
            </div>
            <div className="phone">
              <CiPhone size={24}/>
              <a href="tel:972-804-2797">(972) 804-2797</a>
            </div>
            <div className="social-icons">
              <a href="http://www.linkedin.com/in/christopherle2"><FaLinkedin size={24} />
              </a>
              <a href="http://www.linkedin.com/in/christopherle2"><FaGithub size={24} />
              </a>
              <a href="https://cdlephotos.com/"><FaBlog size={24}/></a>
            </div>
          </div>
          <div className="skills">Tech Stack</div>
          <div className="education">Education</div>
        </div>
        <div className="projects-section">
          <div className="projects">
            <div className="project-one"></div>
            <div className="project-two"></div>
            <div className="project-three"></div>
          </div>
          <div className="experience">Experience History</div>
        </div>
      </div>
    </>
  );
}

export default App;
