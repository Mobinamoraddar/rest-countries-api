import React from "react";
import Toggler from "../common/Toggler";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>Where in the world?</h1>
      <Toggler />
    </StyledNav>
  );
};

const StyledNav = styled.div`
  background-color: white;
  padding: 0 60px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 1px 4px 5px -1px rgba(153, 153, 153, 0.3);
  -moz-box-shadow: 1px 4px 5px -1px rgba(153, 153, 153, 0.3);
  box-shadow: 1px 4px 5px -1px rgba(153, 153, 153, 0.3);
`;
export default Nav;
