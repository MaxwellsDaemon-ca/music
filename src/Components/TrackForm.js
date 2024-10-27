import React, { useState } from "react";
import styles from "../Styles/TrackForm.module.css";

const TrackForm = (props) => {
  const [track, setTrack] = useState({
    title: "",
    video: "",
    lyrics: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTrack((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTrack = () => {
    if (track.title) {
      const processedLyrics = track.lyrics.split("\n").join("\\n");
      const newTrack = {
        ...track,
        number: props.trackCount + 1,
        lyrics: processedLyrics,
      };
      props.onAddTrack(newTrack);
      setTrack({ title: "", video: "", lyrics: "" });
    } else {
      alert("Please provide at least a track title.");
    }
  };

  return (
    <div className={styles.trackForm}>
      <h3>Add New Track</h3>
      <input
        type="text"
        name="title"
        value={track.title}
        onChange={handleChange}
        placeholder="Track Name"
        required
      />
      <input
        type="text"
        name="video"
        value={track.video}
        onChange={handleChange}
        placeholder="YouTube Video Link (optional)"
      />
      <textarea
        name="lyrics"
        value={track.lyrics}
        onChange={handleChange}
        placeholder="Lyrics (optional)"
      ></textarea>
      <small>
        Note: Enter each line of lyrics separately. Use an extra blank line
        between verses.
      </small>
      <button onClick={handleAddTrack}>Add Track</button>
    </div>
  );
};

export default TrackForm;
