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
            <a href="">template-title</a>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="project-footer">
          <div className="project-lang">
            <FaCircle color="yellow" /> <p>templateTag</p>
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
