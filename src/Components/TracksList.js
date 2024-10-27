import React from "react";
import TrackTitle from "./TrackTitle";

const TracksList = (props) => {
  const trackList = props.tracks.map((track) => {
    return (
      <TrackTitle
        key={track.number}
        track={track}
        onClick={() => props.onSelect(track)}
        isSelected={props.selectedTrack && props.selectedTrack.number === track.number}
      />
    );
  });

  return <div className="tracks-list">{trackList}</div>;
};

export default TracksList;
