import React from "react";
import Search from "../components/Search";
import Countries from "./../components/Countries";
import styled from "styled-components";
const Home = () => {
  return (
    <StyledHome>
      <Search />
      <Countries />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  background-color: hsl(0, 0%, 98%);
  padding: 0 60px;
`;
export default Home;
