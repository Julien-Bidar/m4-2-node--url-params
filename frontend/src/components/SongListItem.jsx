import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SongListItem = ({ songs }) => {
  //console.log(songs[0]);
  //return <p>test</p>;
  return (
    !!songs.length &&
    songs.map((song) => {
      return (
        <div>
          <li key={song.rank}>
            <Wrapper>
              <RankWrap>
                <Rank>{`#${song.rank}`}</Rank>
                <Streams>({song.streams} streams)</Streams>
              </RankWrap>
              <TitleWrap>
                <Title>{song.title}</Title>
                <Artist>by {song.artist}</Artist>
              </TitleWrap>
              <DateWrap>
                <p>publication date {song.publicationDate}</p>
              </DateWrap>
            </Wrapper>
          </li>
          <hr />
        </div>
      );
    })
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const RankWrap = styled.div`
  margin-left: 25px;
  margin-top: 15px;
`;

const Rank = styled.p`
  font-size: 45px;
  font-weight: bold;
`;

const Streams = styled.p`
  font-size: 12px;
  color: #5f5f5f;
`;

const TitleWrap = styled.div`
  margin-left: 25%;
  margin-top: 20px;
`;

const Title = styled.p`
  font-weight: 550;
  font-size: 25px;
`;

const Artist = styled.p`
  font-style: italic;
`;

const DateWrap = styled.div`
  position: absolute;
  right: 15px;
  bottom: 5px;
`;

export default SongListItem;
