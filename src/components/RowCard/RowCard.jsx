import Tag from "../Tag";
import "./RowCard.css";

function RowCard({ children }) {
  return (
    <>
      <div className="row-card-container">
        <div className="left-container">
          <a href="aa.com">
            <img src="src/assets/AALogo.png" alt="company logo" />
          </a>
        </div>
        <div className="right-container">{children}</div>
      </div>
    </>
  );
}

export default RowCard;
