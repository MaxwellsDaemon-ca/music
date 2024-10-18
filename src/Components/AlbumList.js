import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const AlbumList = (props) => {
  console.log("props albumList", props);
  const navigator = useNavigate();
  
  const handleSelectionOne = (albumID) => {
    console.log("Selected ID is ", albumID);
    props.onClick(albumID, navigator);
  };

  const albums = props.albumList.map((album) => {
    return (
      <Card
        key={album.albumId}
        albumID={album.albumId}
        albumTitle={album.title}
        albumDescription={album.description}
        buttonText="OK"
        imgURL={album.image}
        onClick={() => handleSelectionOne(album.albumId)}
      />
    );
  });
  return <div className="card-container">{albums}</div>;
};

export default AlbumList;
