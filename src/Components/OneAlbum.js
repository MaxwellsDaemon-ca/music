import React, { useState } from "react";
import styles from "../Styles/OneAlbum.module.css";
import TracksList from "./TracksList";
import TrackVideo from "./TrackVideo";
import TrackLyrics from "./TrackLyrics";

const OneAlbum = (props) => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleTrackSelect = (track) => {
    console.log("Selected Track: ", track);
    setSelectedTrack(track);
  };

  return (
    <div className={styles.container}>
      <h2>Album Details for {props.album.title}</h2>
      <div className={styles.cardContainer}>
        <div className={styles.col + "col-sm-3"}>
          <div className={styles.albumCard}>
            <img
              src={props.album.image}
              className={styles.cardImgTop}
              alt={"album art for " + props.album.title}
            />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{props.album.title}</h5>
              <p className={styles.cardText}>{props.album.description}</p>
              <TracksList
                tracks={props.album.tracks}
                onSelect={handleTrackSelect}
                selectedTrack={selectedTrack}
              />
              <a href="/#" className={"btn btn-primary " + styles.btnPrimary}>
                Edit
              </a>
            </div>
          </div>
        </div>
        <div className={styles.colsm9}>
          <div className={styles.card}>
            <TrackVideo video={selectedTrack ? selectedTrack.video : null} />
          </div>
          <div className={styles.card}>
            <TrackLyrics lyrics={selectedTrack ? selectedTrack.lyrics : null} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneAlbum;
