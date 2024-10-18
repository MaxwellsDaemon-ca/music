import React from "react";
import styles from "../Styles/OneAlbum.module.css";

const OneAlbum = (props) => {
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
              <div className={styles.listGroup}>
                <li>Show the album's tracks here</li>
              </div>
              <a href="/#" className={"btn btn-primary " + styles.btnPrimary}>
                Edit
              </a>
            </div>
          </div>
        </div>
        <div className={styles.colsm9}>
          <div className={styles.card}>
            <p>Show the lyrics of the selected track here</p>
          </div>
          <div className={styles.card}>
            <p>Show the YouTube video of the selected track here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneAlbum;
