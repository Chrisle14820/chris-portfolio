import "./About.css";
import Card from "../Card";
import Tag from "../Tag";
import Timeline from "../Timeline";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

function About() {
  return (
    <div className="about-section">
      <div className="profile">
        <div className="profile-pic">
          <img src="../src/assets/profile-pic.jpg" alt="Profile picture" />
        </div>
        <div className="name">Chris Le</div>
        <div className="job-title">
          Frontend Developer | JavaScript Developer | Project Engineer
        </div>
      </div>
      <div className="info">
        <div className="location">
          <CiLocationOn size={24} />
          <span>Dallas, TX</span>
        </div>
        <div className="email">
          <CiMail size={24} />
          <a href="mailto:ChristopherAnhDLe@gmail.com">
            ChristopherAnhDLe@gmail.com
          </a>
        </div>
        <div className="phone">
          <CiPhone size={24} />
          <a href="tel:972-804-2797">(972) 804-2797</a>
        </div>
      </div>
      <Card header="Tech Stack">
        <div className="tag-container">
          <Tag name="JavaScript" />
          <Tag name="JavaScript" />
          <Tag name="JavaScript" />
          <Tag name="JavaScript" />
          <Tag name="JavaScript" />
          <Tag name="JavaScript" />
          <Tag name="JavaScript" />
          <Tag name="JavaScript" />
          <Tag name="JavaScript" />
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
