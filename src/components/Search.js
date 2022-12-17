import React from "react";

function Search({query, setQuery}) {

  const handleChange = (e) => {
    setQuery(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={query} onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
