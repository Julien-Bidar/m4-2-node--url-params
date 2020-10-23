import React from "react";
import styled from "styled-components";

const Header = ({ pageTitle }) => {
  return (
    <Wrapper>
      <StyledH1>{pageTitle}</StyledH1>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #808080;
  padding: 50px 25px;
`;
const StyledH1 = styled.h1``;

export default Header;
