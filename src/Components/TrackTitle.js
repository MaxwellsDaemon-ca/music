import React from "react";
import styles from "../Styles/TrackTitle.module.css";

const TrackTitle = (props) => {
  const isSelected = props.isSelected;

  return (
    <button
      onClick={props.onClick}
      className={`${styles.trackButton} ${isSelected ? styles.selected : ""}`}
    >
      {props.track.number + ". " + props.track.title}
    </button>
  );
};

export default TrackTitle;
