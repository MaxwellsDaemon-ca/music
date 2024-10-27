import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "../Data/dataSource";
import TrackAddList from "./TrackAddList";
import TrackForm from "./TrackForm";
import styles from "../Styles/NewAlbum.module.css";

const EditAlbum = (props) => {
  let album = {
    title: "",
    artist: "",
    description: "",
    year: "",
    image: "",
    tracks: [],
  };
  let newAlbumCreation = true;

  if (props.album) {
    album = props.album;
    newAlbumCreation = false;
  }

  const [albumTitle, setAlbumTitle] = useState(album.title);
  const [artist, setArtist] = useState(album.artist);
  const [description, setDescription] = useState(album.description);
  const [year, setYear] = useState(album.year);
  const [image, setImage] = useState(album.image);
  const [tracks, setTracks] = useState(album.tracks);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const updateTitle = (event) => setAlbumTitle(event.target.value);
  const updateArtist = (event) => setArtist(event.target.value);
  const updateDescription = (event) => setDescription(event.target.value);
  const updateYear = (event) => setYear(event.target.value);
  const updateImage = (event) => setImage(event.target.value);

  const handleAddTrack = (track) => {
    setTracks((prev) => [...prev, track]);
  };

  const handleDeleteTrack = (index) => {
    setTracks((prev) =>
      prev
        .filter((_, i) => i !== index)
        .map((track, i) => ({ ...track, number: i + 1 }))
    );
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!albumTitle || !artist || !description) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const editedAlbum = {
      albumId: album.albumId,
      title: albumTitle,
      artist: artist,
      description: description,
      year: year,
      image: image,
      tracks: tracks,
    };

    console.log(editedAlbum);

    try {
      const response = await saveAlbum(editedAlbum);
      if (response && response.status === 201) {
        setMessage("Album created successfully!");
        alert("Album created successfully!");
        navigate("/");
        props.onEditAlbum(response.data);
      }
    } catch (error) {
      setMessage("Error creating album. Please try again.");
      alert("Error creating album. Please try again.");
      console.error(error);
    }
  };

  const saveAlbum = async (album) => {
    let response;
    if (newAlbumCreation) response = await dataSource.post("/albums", album);
    else response = await dataSource.put("/albums", album);
    console.log(response);
    console.log(response.data);
    props.onEditAlbum(navigate);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className={styles.newAlbumContainer}>
      <div className={styles.albumForm}>
        <form onSubmit={handleFormSubmit}>
          <h3>{newAlbumCreation ? "Create New" : "Edit"} Album</h3>
          <div className={styles.formGroup}>
            <label htmlFor="albumTitle" className={styles.formGroupLabel}>
              Album Title
            </label>
            <input
              type="text"
              className={styles.formGroupInput}
              id="albumTitle"
              placeholder="Enter Album Title"
              onChange={updateTitle}
              required
            />
            <label htmlFor="albumArtist" className={styles.formGroupLabel}>
              Artist
            </label>
            <input
              type="text"
              className={styles.formGroupInput}
              id="albumArtist"
              placeholder="Enter Album Artist"
              onChange={updateArtist}
              required
            />
            <label htmlFor="albumDescription" className={styles.formGroupLabel}>
              Description
            </label>
            <textarea
              className={styles.formGroupTextarea}
              id="albumDescription"
              placeholder="Enter Album Description"
              onChange={updateDescription}
            />
            <label htmlFor="albumYear" className={styles.formGroupLabel}>
              Year
            </label>
            <input
              type="number"
              className={styles.formGroupInput}
              id="albumYear"
              placeholder="Enter Album Year"
              onChange={updateYear}
              required
            />
            <label htmlFor="albumImage" className={styles.formGroupLabel}>
              Image
            </label>
            <input
              type="text"
              className={styles.formGroupInput}
              id="albumImage"
              placeholder="Enter Album Image URL"
              onChange={updateImage}
            />
          </div>
        </form>
      </div>

      <div className={styles.trackFormContainer}>
        <TrackForm onAddTrack={handleAddTrack} trackCount={tracks.length} />
      </div>

      <div className={styles.trackListContainer}>
        <TrackAddList tracks={tracks} onDeleteTrack={handleDeleteTrack} />
      </div>

      {message && <p className={styles.feedbackMessage}>{message}</p>}

      <div className={styles.submitButtonContainer}>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className={styles.submitButton}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditAlbum;
