import "./Tag.css";

function Tag({ name }) {
  return (
    <>
      <div className="tag">
        <span>
          <p>{name}</p>
        </span>
      </div>
    </>
  );
}

export default Tag;
