import React, { useEffect, useState } from "react";
import SongListItem from "./SongListItem";

const SongList = ({ songs }) => {
  return (
    <ul>
      <SongListItem songs={songs} />
    </ul>
  );
};

export default SongList;
