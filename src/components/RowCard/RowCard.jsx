import Tag from "../Tag";
import "./RowCard.css";

function RowCard({ children }) {
  return (
    <>
      <div className="row-card-container">
        <div className="right-container">{children}</div>
      </div>
    </>
  );
}

export default RowCard;
