import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Pages({ data }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Grid>
        {currentItems.map((country) => {
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
      <StyledPaginateContainer>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </StyledPaginateContainer>
    </>
  );
}
const media = {
  mobile: "@media(max-width:480px)",
  tablet: "@media(max-width:1000px)",
};
const StyledPaginateContainer = styled.div`
  /* margin: auto 0; */
  .pagination {
    margin: 50px 0 40px 0;
    /* width: 500px; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    list-style: none;
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
    /* background-color: ${(props) => props.theme.pageBa}; */
  }
  .page-num {
    border-radius: 3px;
    padding: 8px 13px;
    background-color: ${(props) => props.theme.elementsColor};
    opacity: 0.5;
    ${media.mobile} {
      padding: 6px;
    }
  }
  .page-num:hover {
    background-color: ${(props) => props.theme.elementsColor};
    opacity: 1;
  }
  .active {
    border-color: transparent;
    background-color: ${(props) => props.theme.elementsColor};
    color: ${(props) => props.theme.textColor};
    -webkit-box-shadow: ${(props) => props.theme.boxShadowColor};
    -moz-box-shadow: ${(props) => props.theme.boxShadowColor};
    box-shadow: ${(props) => props.theme.boxShadowColor};
    opacity: 1;
  }
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
  ${media.tablet} {
    grid-template-columns: repeat(3, 210px);
    grid-gap: 25px;
  }
  ${media.mobile} {
    grid-template-columns: repeat(1, 230px);
    justify-content: center;
  }
`;

const Card = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  ${"" /* over-flow: hidden; */}
  ${"" /* border-radius: 10px; */}
   border-radius: 4px;
  overflow: hidden;
  width: 230px;
  height: 270px;
  ${"" /* margin: 20px; */}
  -webkit-box-shadow: ${(props) => props.theme.boxShadowColor};
  -moz-box-shadow: ${(props) => props.theme.boxShadowColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};
  ${media.tablet} {
    width: 210px;
  }
  &:hover {
    opacity: 0.85;
  }
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
    /* background-size: cimport { Link } from 'react-router-dom';
over; 
    background-repeat: no-repeat;
    background-position: center center; */
  }
`;
export default Pages;
