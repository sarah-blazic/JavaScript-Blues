import React, { useState } from "react";
import _ from "lodash";
import ResultListComponent from "../ResultList/ResultList";
import { Axios } from "axios";
import './SearchBar.scss';

const SearchBarComponent = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState({});
  const [dataList, setDataList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const onChange = ({ target: { value } }) => {
    setQuery(value);

    const search = _.debounce(sendQuery, 300);

    setSearchQuery((prevSearch) => {
      if (prevSearch.cancel) {
        prevSearch.cancel();
      }
      return search;
    });

    search(value);
  };

  const fetchData = (value) => {
    try {
      const { data } = Axios.get(`api/search/${value}`);
      console.log(data);
      if (data === undefined) {
          return "No products found!";
      }
      return { result: data };
    } catch (err) {
      return [err];
    }
  };

  /**
   * In charge to send the value
   * to the API.
   * @param {*} value
   */
  const sendQuery = (value) => {
    const result = fetchData(value);

    if (result.Response === "True") {
      setDataList(result.Search);
      setErrorMsg("");
    } else {
      setDataList([]);
      setErrorMsg(result.Error);
    }
  };

  return (
    <div>
      <div>
        <p>Type to search!</p>
        <input
          type="text"
          value={query}
          placeholder="Search for products..."
          onChange={onChange}
        />
      </div>
      <div>
        <ResultListComponent items={dataList} />
        {errorMsg}
      </div>
    </div>
  );
};

export default SearchBarComponent;
