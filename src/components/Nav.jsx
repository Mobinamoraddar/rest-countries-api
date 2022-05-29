import React from "react";
import styled from "styled-components";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = ({ theme, changeTheme }) => {
  const icon = theme === "light" ? <BsMoon /> : <BsMoonFill />;
  return (
    <StyledNav>
      <StyledLink to={"/"}>
        <h1>Where in the world?</h1>
      </StyledLink>
      <StyledButton onClick={changeTheme}>
        {icon}
        Dark Mode
      </StyledButton>
    </StyledNav>
  );
};

const media = {
  mobile: "@media(max-width:480px)",
};
const StyledNav = styled.div`
  background-color: ${(props) => props.theme.elementsColor};
  padding: 0 60px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: ${(props) => props.theme.boxShadowColor};
  -moz-box-shadow: ${(props) => props.theme.boxShadowColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};
  ${media.mobile} {
    padding: 0 10px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  ${media.mobile} {
    font-size: 10px;
  }
`;
const StyledButton = styled.button`
  margin-left: 8px;
  ${"" /* color: hsl(200, 15%, 8%); */}
  ${"" /* vertical-align: top; */}
  background: none;
  color: ${(props) => props.theme.textColor};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
export default Nav;
