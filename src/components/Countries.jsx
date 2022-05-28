import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import Pagination from "../common/Pagination";

const Countries = ({ theme }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const data = await fetch("https://restcountries.com/v2/all");
    const countriesData = await data.json();
    setCountries(countriesData);
    setFiltered(countriesData);
  };

  // const filteredRegions = region
  //   ? countries.filter((country) => country.region === region)
  //   : countries;

  // //Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = filteredRegions.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //search

  useEffect(() => {
    if (region) {
      const filteredByRegionsCountries = countries.filter(
        (country) => country.region === region
      );

      setFiltered(filteredByRegionsCountries);
    } else {
      setFiltered(countries);
    }
  }, [region]);

  useEffect(() => {
    if (searchTerm) {
      const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  }, [searchTerm]);

  return (
    <StyledPage>
      <Search
        setRegion={setRegion}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setCountries={setCountries}
      />
      <Grid>
        {filtered.map((country) => {
          return (
            <StyledLink to={"/detail/" + country.name} key={country.name}>
              <Card>
                <img src={country.flag} alt="" />
                <div>
                  <h3>{country.name}</h3>
                  <p>
                    <span>Population: </span>
                    {country.population}
                  </p>
                  <p>
                    <span>Region: </span> {country.region}
                  </p>
                  <p>
                    <span>Capital: </span> {country.capital}
                  </p>
                </div>
              </Card>
            </StyledLink>
          );
        })}
      </Grid>

      {/* <Pagination
        postsPerPage={postsPerPage}
        totalCountries={filteredRegions.length}
        paginate={paginate}
      /> */}
    </StyledPage>
  );
};
const StyledPage = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  padding: 0 60px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
const Grid = styled.div`
  /* padding: 0 60px; */
  display: grid;
  justify-content: space-between;
  grid-gap: 70px;
  grid-template-columns: repeat(4, 230px);
  width: 100%;
`;

const Card = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  ${"" /* over-flow: hidden; */}
  ${"" /* border-radius: 10px; */}
  width: 230px;
  height: 270px;
  ${"" /* margin: 20px; */}
  -webkit-box-shadow: ${(props) => props.theme.boxShadowColor};
  -moz-box-shadow: ${(props) => props.theme.boxShadowColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};

  div {
    padding: 20px;
    height: 170px;
    background-color: ${(props) => props.theme.elementsColor};
    /* color: ${(props) => props.theme.textColor}; */
    h3 {
      margin-bottom: 12px;
      /* font-size: 110%; */
    }
    p {
      margin-top: 4px;
      font-size: 13px;
      span {
        font-weight: 600;
      }
    }
  }
  img {
    width: 230px;
    height: 120px;
    /* overflow: hidden !important; */
    /* background-size: cover; 
    background-repeat: no-repeat;
    background-position: center center; */
  }
`;
export default Countries;
