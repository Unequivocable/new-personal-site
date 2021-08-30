import React, { useEffect, useState } from "react";
import getSearchResults from "../../database/fakeSearch";


const Autocomplete = () => {
  const [searchTerm, updateSearchTerm] = useState("");
  const [searchResults, updateSearchResults] = useState([]);
  const [filteredResults, updateFilteredResults] = useState([]);

  useEffect(() => {
    const flattenArray = (arr) => {
      return arr.reduce((flatArray, element) => {
        return Array.isArray(element)
          ? [...flatArray, ...flattenArray(element)]
          : [...flatArray, element];
      }, []);
    };

//Notes:  Pull 20 records from DB on first character--on third character do a new pull -- display symbol with company.

    const pullSearchResults = async () => {
      const searchResultsResponse = await getSearchResults();
      const newResults = flattenArray(
        searchResultsResponse.map((a) => [Object.values(a)])
      );
      updateSearchResults(newResults);
    };
    pullSearchResults();
  }, []);

  const updateSearch = (e) => {
    updateSearchTerm(e.target.value);
    updateFilteredResults(
      searchResults.filter((result) =>
        result.match(new RegExp(e.target.value, "gi"))
      )
    );
  };

  const SearchResults = () => {
    const Message = ({ text }) => (
      <div className="message">
        <h2>{text}</h2>
        <hr />
      </div>
    );

    if (!searchResults.length) {
      return <Message text="Loading search results" />;
    }

    if (!searchTerm) {
      return <Message text="Try to search for something..." />;
    }

    if (!filteredResults.length) {
      return <Message text="We couldn't find anything for your search term." />;
    }

    return (
      <ul className="search-results">
        {filteredResults.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    );
  };

  return (
    <section className="search">
      <h1>Search {searchTerm.length ? `results for: ${searchTerm}` : null}</h1>
      <input
        type="text"
        placeholder="Search by symbol or company name..."
        onKeyUp={updateSearch}
      />
      <SearchResults />
    </section>
  );
};

export default Autocomplete;
