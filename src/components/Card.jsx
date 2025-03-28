import "./Card.css";

function Card({ header, children }) {
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <h3>{header}</h3>
        </div>
        <div className="card-content">{children}</div>
      </div>
    </>
  );
}

export default Card;
