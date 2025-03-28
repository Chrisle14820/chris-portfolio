import "./ProjectCard.css";
import { VscRepo } from "react-icons/vsc";
import { FaCircle } from "react-icons/fa";

function ProjectCard() {
  return (
    <>
      <div className="project-card-container">
        <div className="project-body">
          <div className="project-title">
            <VscRepo />
            <a href="">chris-portfolio</a>
          </div>
          <p>Personal Portfolio built in React</p>
        </div>
        <div className="project-footer">
          <div className="project-lang">
            <FaCircle color="yellow" /> <p>JavaScript</p>
          </div>
          <div>
            <p>Analytics Coming Soon....</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
