import "./Card.css";

function Card({ header, children, addButton = false }) {
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <h3>{header}</h3>
          {addButton ? (
            <a href="">
              <p>See All</p>
            </a>
          ) : null}
        </div>
        <div className="card-content">{children}</div>
      </div>
    </>
  );
}

export default Card;
