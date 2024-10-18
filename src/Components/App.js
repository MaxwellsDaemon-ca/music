import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchForm from "./SearchForm";
import "../Styles/App.css";
// import albums from "../Data/albums.json";
import dataSource from "../Data/dataSource";

const App = (props) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [albumList, setAlbumList] = useState([]);

  let refresh = false;

  const updateSearchResults = (phrase) => {
    console.log("phrase is: " + phrase);
    setSearchPhrase(phrase);
  };

  useEffect(() => {
    loadAlbums();
  }, [refresh]);

  const loadAlbums = async () => {
    const response = await dataSource.get("/albums");
    const shuffledAlbums = shuffleArray(response.data);
    setAlbumList(shuffledAlbums);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const renderedList = () => {
    return albumList.map((album) => {
      if (
        album.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
        album.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
        searchPhrase === ""
      ) {
        return (
          <Card
            key={album.albumId}
            albumTitle={album.title}
            albumDescription={album.description}
            buttonText="OK"
            imgURL={album.image}
          />
        );
      } else {
        console.log("Does not match " + searchPhrase);
        return null;
      }
    });
  };

  return (
    <div>
      <div className="container">
        <SearchForm onSubmit={updateSearchResults} />
      </div>
      <div className="card-container">{renderedList()}</div>
    </div>
  );
};

export default App;
