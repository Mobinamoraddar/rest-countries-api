import { useState } from "react";
import { GrSearch } from "react-icons/gr";

const Search = () => {
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <GrSearch />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for a country..."
          value={search}
        />
      </div>
    </form>
  );
};

export default Search;
