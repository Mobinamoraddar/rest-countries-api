import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Countries = () => {
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
      {countries.map((country) => {
        return (
          <Card key={country.name}>
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
