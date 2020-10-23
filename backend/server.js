"use strict";

// import the needed node_modules.
const { top50 } = require("./data/top50");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(bodyParser.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇

  //get the top50 data
  .get("/top50", (req, res) => {
    const data = top50;
    res.status(200).json({ status: 200, data });
  })

  //get song based in their position in top 50
  .get("/top50/song/:id", (req, res) => {
    const id = req.params.id;
    const data = top50[id - 1];
    if (id <= 0 || id > 50) {
      res.status(404).json({ status: 404, message: "song not found." });
    } else {
      res.status(200).json({ status: 200, data });
    }
  })

  //getting songs by artist name
  .get("/top50/artist/:id", (req, res) => {
    const name = req.params.id;
    const dataB = top50;
    //console.log(name);
    const data = dataB.filter((track) => {
      const match = track.artist === name;
      return match;
    });
    if (data.length <= 0) {
      res.status(404).json({ status: 404, message: "artist not found." });
    } else {
      res.status(200).json({ status: 200, data });
    }
  })

  //getting the most popular artist
  .get("/top50/popular-artist", (req, res) => {
    const dataB = top50;
    let artistAr = [];
    top50.forEach((track) => {
      artistAr.push(track.artist);
    });
    let count = {};
    for (let i = 0; i < artistAr.length; i++) {
      let artist = artistAr[i];
      count[artist] = count[artist] ? count[artist] + 1 : 1;
    }
    let sortedArtist = Object.keys(count).sort((keya, keyb) => {
      return count[keyb] - count[keya];
    });
    let numberOne = sortedArtist[0];
    const data = dataB.filter((track) => {
      const match = track.artist === numberOne;
      return match;
    });
    res.status(200).json({ status: 200, data });
  })

  //artist list without duplicates:
  .get("/top50/artist", (req, res) => {
    const dataB = top50;
    let artistAr = [];
    dataB.forEach((track) => {
      artistAr.push(track.artist);
    });
    const data = [...new Set(artistAr)];
    res.status(200).json({ status: 200, data });
  })

  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
