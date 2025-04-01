import "./About.css";
import Card from "../Card";
import Tag from "../Tag";
import Timeline from "../Timeline";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";

function About() {
  return (
    <div className="about-section">
      <div className="profile">
        <div className="profile-pic">
          <img
            src="https://i.postimg.cc/q7RhChZh/DSC02019.jpg"
            alt="Profile picture"
          />
        </div>
        <div className="name">Chris Le</div>
        <div className="job-title">
          Frontend Developer | JavaScript Developer | Project Engineer
        </div>
        <a
          className="resume-button"
          href="../src/assets/ChrisLeResume.pdf"
          download
        >
          <FaDownload /> Download Resume
        </a>
      </div>
      <div className="info">
        <div className="location">
          <span>
            <CiLocationOn size={16} /> <p>Location</p>
          </span>
          <p>Dallas, TX</p>
        </div>
        <div className="email">
          <span>
            <CiMail size={16} />
            <p>Email</p>
          </span>
          <a href="mailto:ChristopherAnhDLe@gmail.com">
            <p>ChristopherAnhDLe@gmail.com</p>
          </a>
        </div>
        <div className="phone">
          <span>
            <CiPhone size={16} />
            <p>Phone Number</p>
          </span>
          <a href="tel:972-804-2797">
            <p>(972) 804-2797</p>
          </a>
        </div>
      </div>
      <Card header="Tech Stack">
        <div className="tag-container">
          <Tag name="JavaScript" />
          <Tag name="TypeScript" />
          <Tag name="HTML" />
          <Tag name="CSS" />
          <Tag name="Angular" />
          <Tag name="React" />
          <Tag name="LitElement" />
          <Tag name="Node.js" />
          <Tag name="Git" />
        </div>
      </Card>
      <Card header="Experience History">
        <Timeline
          title="Nov 2022 - Present"
          subTitle="Associate Software Developer"
          content="American Airlines"
        ></Timeline>
        <Timeline
          title="May 2022 - Nov 2022"
          subTitle="JavaScript Developer"
          content="Brooksource - Contracter @American Airlines"
        ></Timeline>
        <Timeline
          title="Jan 2021 - Dec 2021"
          subTitle="Project Engineer"
          content="Wipro"
        ></Timeline>
      </Card>
      <Card header="Education">
        <Timeline
          title="2016 - 2020"
          subTitle="BS in Information Systems"
          content="University of Texas at Arlington"
        ></Timeline>
      </Card>
    </div>
  );
}

export default About;
