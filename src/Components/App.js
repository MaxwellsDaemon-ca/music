import React, { useEffect, useState } from "react";
import "../Styles/App.css";
// import albums from "../Data/albums.json";
import dataSource from "../Data/dataSource";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchAlbum from "./SearchAlbum";
import NavBar from "./NavBar";
import EditAlbum from "./EditAlbum";
import OneAlbum from "./OneAlbum";

const App = (props) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [albumList, setAlbumList] = useState([]);
  const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(0);

  let refresh = false;

  const updateSearchResults = (phrase) => {
    console.log("phrase is: " + phrase);
    setSearchPhrase(phrase);
  };

  useEffect(() => {
    loadAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  const loadAlbums = async () => {
    const response = await dataSource.get("/albums");
    const shuffledAlbums = shuffleArray(response.data);
    setAlbumList(shuffledAlbums);
  };

  const updateSingleAlbum = (id, navigate, uri) => {
    console.log("update single album =", id);
    console.log("update single album =", navigate);
    var indexNumber = 0;
    for (var i = 0; i < albumList.length; ++i) {
      if (albumList[i].albumId === id) indexNumber = i;
    }
    setCurrentlySelectedAlbumId(indexNumber);
    let path = uri + indexNumber;
    console.log("path", path);
    navigate(path);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const renderedList = albumList.filter((album) => {
    if (
      album.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      album.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      searchPhrase === ""
    ) {
      return true;
    }
    return false;
  });

  const onEditAlbum = (navigate) => {
    loadAlbums();
    navigate("/");
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SearchAlbum
              updateSearchResults={updateSearchResults}
              albumList={renderedList}
              updateSingleAlbum={updateSingleAlbum}
            />
          }
        />
        <Route
          exact
          path="/new"
          element={<EditAlbum onEditAlbum={onEditAlbum} />}
        />
        <Route
          exact
          path="/edit/:albumId"
          element={
            <EditAlbum
              onEditAlbum={onEditAlbum}
              album={albumList[currentlySelectedAlbumId]}
            />
          }
        />
        <Route
          exact
          path="/show/:albumId"
          element={<OneAlbum album={albumList[currentlySelectedAlbumId]} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
