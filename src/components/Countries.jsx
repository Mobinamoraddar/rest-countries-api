import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import Pages from "./Pages";
import Footer from "./Footer";
// import Pagination from "../common/Pagination";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [filtered, setFiltered] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const data = await fetch("https://restcountries.com/v2/all");
    const countriesData = await data.json();
    setCountries(countriesData);
    setFiltered(countriesData);
  };

  //filter by region

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

  //search
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

  // // //Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <StyledPage>
        <Search
          setRegion={setRegion}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setCountries={setCountries}
        />
        <Pages data={filtered} />
      </StyledPage>
      <Footer />
    </>
  );
};
const media = {
  mobile: "@media(max-width:480px)",
  tablet: "@media(max-width:1200px)",
};
const StyledPage = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  padding: 0 60px;
  ${media.mobile} {
    padding: 0 10px;
  }
  ${media.tablet} {
    padding: 0 10px;
  }
`;

export default Countries;
