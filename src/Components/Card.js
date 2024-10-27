import React from "react";

const Card = (props) => {
  const handleButtonClick = (uri) => {
    console.log("ID clicked is " + props.albumId + ", URI is: " + uri);
    props.onClick(props.albumId, uri);
  };

  return (
    <div className="card">
      <img
        src={props.imgURL}
        className="card-img-top"
        alt={"Album Art for " + props.albumTitle}
      />
      <div className="card-body">
        <h5 className="card-title">{props.albumTitle}</h5>
        <p className="card-text">{props.albumDescription}</p>
        <button
          onClick={() => handleButtonClick("/show/")}
          className="btn btn-primary"
        >
          {props.buttonText}
        </button>
        <button
          onClick={() => handleButtonClick("/edit/")}
          className="btn btn-secondary"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Card;
