import React from "react";
import styles from "../Styles/TrackAddList.module.css";

const TrackAddList = (props) => {
  return (
    <div className={styles.trackList}>
      <h3>Tracks in Album</h3>
      <ul>
        {props.tracks.map((track, index) => (
          <li key={index} className={styles.trackItem}>
            <span>
              {track.number}. {track.title}
            </span>
            <button>Edit</button>
            <button onClick={() => props.onDeleteTrack(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackAddList;
