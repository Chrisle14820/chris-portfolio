import Tag from "../Tag";
import "./RowCard.css";

function RowCard({ children }) {
  return (
    <>
      <div className="row-card-container">
        {children}
      </div>
    </>
  );
}

export default RowCard;
