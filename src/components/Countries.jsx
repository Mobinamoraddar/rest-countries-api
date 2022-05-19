import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Countries = ({ searchTerm }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const data = await fetch("https://restcountries.com/v2/all");
    const countriesData = await data.json();
    setCountries(countriesData);
    console.log(countriesData);
  };

  return (
    <Grid>
      {countries
        .filter((country) => {
          if (searchTerm == "") {
            return country;
          } else if (
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return country;
          }
        })
        .map((country) => {
          return (
            <Link to={"/detail/" + country.name} key={country.name}>
              <Card>
                <img src={country.flag} alt="" />
                <div>
                  <h3>{country.name}</h3>
                  <p>
                    <span>Population: </span>
                    {country.population}
                  </p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </div>
              </Card>
            </Link>
          );
        })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-gap: 70px;
  grid-template-columns: repeat(4, 200px);
  width: 100%;
`;

const Card = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  ${"" /* over-flow: hidden; */}
  ${"" /* border-radius: 10px; */}
  width: 200px;
  height: 250px;
  ${"" /* margin: 20px; */}
  -webkit-box-shadow: 0px 4px 5px -1px rgba(153, 153, 153, 0.3);
  -moz-box-shadow: 0px 4px 5px -1px rgba(153, 153, 153, 0.3);
  box-shadow: 0px 4px 5px -1px rgba(153, 153, 153, 0.3);
  div {
    padding: 0 20px;
    height: 150px;
    background-color: white;
  }
  img {
    width: 200px;
    height: 100px;
    ${"" /* box-shadow: 0 4px 2px -2px rgba(153, 153, 153, 0.3); */}
  }
`;
export default Countries;
