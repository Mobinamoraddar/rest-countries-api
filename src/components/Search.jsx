import { useState, useEffect } from "react";
import { GrSearch } from "react-icons/gr";
import styled from "styled-components";

const Search = ({ searchTerm, setRegion, setSearchTerm }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <div>
        <GrSearch />
        <StyledInput
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
        />
      </div>
      <StyledSelect onChange={(e) => setRegion(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </StyledSelect>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  outline: none;
  &:focus {
    outline: none;
  }
  div {
    color: ${(props) => props.theme.textColor};
  }
`;
const StyledSelect = styled.select`
  -webkit-box-shadow: ${(props) => props.theme.boxShadowColor};
  -moz-box-shadow: ${(props) => props.theme.boxShadowColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};
  font-size: 12px;
  padding: 10px;
  background-color: ${(props) => props.theme.elementsColor};
  color: ${(props) => props.theme.textColor};
  border: none;
  border-radius: 5px;
  width: 160px;
  height: 40px;
  &:focus {
    outline: none;
  }
  & * {
    /* color: violet; */
  }
`;
const StyledInput = styled.input`
  border-radius: 5px;
  /* position: relative; */
  width: 400px;
  height: 40px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.elementsColor};
  -webkit-box-shadow: ${(props) => props.theme.boxShadowColor};
  -moz-box-shadow: ${(props) => props.theme.boxShadowColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &::placeholder {
    color: ${(props) => props.theme.textColor};
  }
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.inputColor};
  }
`;
export default Search;
