import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

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
  console.log(detail);
  return (
    <div>
      <StyledLink to={"/"}>
        <StyledBackButton>
          <BiArrowBack />
          <p>Back</p>
        </StyledBackButton>
      </StyledLink>
      {detail.map((item) => {
        return (
          <Container key={item.name}>
            <img src={item.flag} alt={item.name} />
            <Details>
              <h1>{item.name}</h1>
              <DetailContent>
                <div>
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
                </div>
                <div>
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
              </DetailContent>
              <p>
                <span>Border Countries:</span>
                {item.borders &&
                  item.borders.map((border) => {
                    return <BorderButton>{border}</BorderButton>;
                  })}
              </p>
            </Details>
          </Container>
        );
      })}
    </div>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.textColor};
  width: 100vw;
  margin: 0 60px;
  display: flex;
  span {
    font-weight: 800;
  }

  /* justify-content: center; */
  img {
    width: 500px;
    margin-right: 120px;
  }
`;
const Details = styled.div`
  width: 400px;
  h1 {
    margin-bottom: 30px;
  }
`;
const DetailContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  p {
    margin-bottom: 8px;
  }
  span {
    font-weight: 600;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledBackButton = styled.button`
  border-radius: 5px;
  -webkit-box-shadow: ${(props) => props.theme.boxShadowColor};
  -moz-box-shadow: ${(props) => props.theme.boxShadowColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 60px;
  width: 100px;
  height: 40px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.elementsColor};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  p {
    margin-left: 8px;
  }
`;
const BorderButton = styled.button`
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  border-radius: 3px;
  -webkit-box-shadow: ${(props) => props.theme.boxShadowColor};
  -moz-box-shadow: ${(props) => props.theme.boxShadowColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* margin: 40px 60px; */
  width: 50px;
  height: 20px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.elementsColor};
  border: none;
  /* padding: 0; */
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export default Detail;
