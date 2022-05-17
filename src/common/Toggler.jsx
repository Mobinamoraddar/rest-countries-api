import React from "react";
import styled from "styled-components";
import { BsMoon } from "react-icons/bs";

const Toggler = () => {
  return (
    <div>
      <BsMoon />
      <StyledButton>Dark Mode</StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  margin-left: 8px;
  ${"" /* color: hsl(200, 15%, 8%); */}
  ${"" /* vertical-align: top; */}
  background: none;
  ${"" /* color: inherit; */}
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export default Toggler;
