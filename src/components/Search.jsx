import { useState } from "react";
import { GrSearch } from "react-icons/gr";

const Search = ({ searchTerm, setSearchTerm }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  console.log(searchTerm);
  return (
    <form onSubmit={submitHandler}>
      <div>
        <GrSearch />
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
        />
      </div>
    </form>
  );
};

export default Search;
