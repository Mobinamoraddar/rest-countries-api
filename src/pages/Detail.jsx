import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [detail, setDetail] = useState([]);
  let { name } = useParams();

  useEffect(() => {
    getDetail(name);
  }, [name]);
  const getDetail = async () => {
    const data = await fetch(
      // `https://restcountries.com/v2/name/${name}`
      `https://restcountries.com/v2/name/${name}?fullText=true`
    );
    const countryDetail = await data.json();
    setDetail(countryDetail);
  };

  return (
    <div>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      {detail.map((item) => {
        return (
          <div key={item.name}>
            <img src={item.flag} alt={item.name} />
            <div>
              <h1>{item.name}</h1>
              <p>
                <span>Native Name: </span>
                {item.nativeName}
              </p>
              <p>
                <span>Population: </span>
                {item.population}
              </p>
              <p>
                <span>Region: </span>
                {item.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {item.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {item.capital}
              </p>
              <p>
                <span>Top Level Domain: </span>
                {item.TopLevelDomain}
              </p>
              <p>
                <span>Currencies: </span>
                {item.currencies[0].name}
              </p>
              <p>
                <span>Languages: </span>
                {item.languages[0].name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
