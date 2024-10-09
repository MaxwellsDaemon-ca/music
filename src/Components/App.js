import React from "react";
import Card from "./Card";
import "../Styles/App.css";

const App = () => {
  return (
    <div>
      <h1>Music I Like</h1>
      <div className="card-container">
        <Card
          albumTitle="Take Me Back To Eden"
          albumDescription="Soaring choruses and moody verses circle one another as the curtain rises on 'Take Me Back To Eden'. It's steady, marching, menacing, painting a prologue of Vessel admitting he feels truly helpless at the hand of his lover, a figure often represented through the lore of the band as an ancient deity known as Sleep."
          imgURL="https://upload.wikimedia.org/wikipedia/en/4/48/SleepTokenTMBTE.jpg"
          buttonText="OK"
        />
        <Card
          albumTitle="Weathered"
          albumDescription="Creed's Weathered album is described as a mix of the band's heaviest and most aggressive songs, experimental tracks, and popular ballads. The album's lyrics cover a range of topics, including Christianity, discrimination, depression, loneliness, and the band's own experiences with the pressures of fame."
          imgURL="https://upload.wikimedia.org/wikipedia/en/a/a2/Weathered_Main_Cover.jpg"
          buttonText="OK"
        />
        <Card
          albumTitle="Long Road out of Eden"
          albumDescription="Long Road out of Eden is the Eagles' seventh studio album. This double album blends the band's signature harmonies and rock sound with more contemporary themes, touching on politics, environmentalism, and reflections on modern society."
          imgURL="https://upload.wikimedia.org/wikipedia/en/4/46/EaglesLongRoadOutOfEden.jpg"
          buttonText="OK"
        />
      </div>
    </div>
  );
};

export default App;
