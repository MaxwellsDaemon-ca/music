import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const AlbumList = (props) => {
  console.log("props albumList", props);
  const navigator = useNavigate();

  const handleSelectionOne = (albumId, uri) => {
    console.log("Selected ID is ", albumId);
    props.onClick(albumId, navigator, uri);
  };

  const albums = props.albumList.map((album) => {
    return (
      <Card
        key={album.albumId}
        albumId={album.albumId}
        albumTitle={album.title}
        albumDescription={album.description}
        buttonText="OK"
        imgURL={album.image}
        onClick={handleSelectionOne}
      />
    );
  });
  return <div className="card-container">{albums}</div>;
};

export default AlbumList;
