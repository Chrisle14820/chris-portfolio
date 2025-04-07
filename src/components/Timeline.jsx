import "./Timeline.css";
import { FaCircleDot } from "react-icons/fa6";

function Timeline({ title, subTitle, content }) {
  return (
    <>
      <div className="timeline-container">
        <FaCircleDot size={16} className="timeline-icon" />
        <div className="timeline-content">
          <div className="timeline-header">
            <p>{title}</p>
          </div>
          <div className="timeline-body">
            <h4>{subTitle}</h4>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
