import { useState } from "react";
import Search from "../components/Search";
import Countries from "./../components/Countries";
import styled from "styled-components";
import Region from "../components/Region";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  return (
    <StyledHome>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Region />
      <Countries searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  background-color: hsl(0, 0%, 98%);
  padding: 0 60px;
`;
export default Home;
