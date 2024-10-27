import React from "react";
import styles from "../Styles/TrackVideo.module.css";

const TrackVideo = (props) => {
  if (!props.video) {
    return (
      <p className={styles.placeholder}>
        Select a track to view its video.
        <br />
        If a track is selected, there may be no applicable video link.
      </p>
    );
  }

  return (
    <div className={styles.videoContainer}>
      <iframe
        className={styles.videoFrame}
        src={props.video}
        title="Youtube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrackVideo;
