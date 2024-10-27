import React from "react";
import styles from "../Styles/TrackLyrics.module.css";

const TrackLyrics = (props) => {
  if (!props.lyrics) {
    return (
      <p className={styles.placeholder}>
        Select a track to view its lyrics.
        <br />
        Lyrics may not be available for this song if one is selected.
      </p>
    );
  }

  const formattedLyrics = props.lyrics.split("\\n\\n").map((paragraph, index) => (
    <p key={index}>
      {paragraph.split("\\n").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  ));

  return (
    <div className={styles.lyricsContainer}>
      <h3 className={styles.lyricsTitle}>Lyrics</h3>
      <pre className={styles.lyricsText}>{formattedLyrics}</pre>
    </div>
  );
};

export default TrackLyrics;
