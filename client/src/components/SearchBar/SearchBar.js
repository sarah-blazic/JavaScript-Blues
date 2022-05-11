import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ResultListComponent from "../ResultList/ResultList";
import axios from "axios";
import './SearchBar.scss';

const SearchBarComponent = ({onAdd}) => {
  const [query, setQuery] = useState("");
  const [dataList, setDataList] = useState([]);

  const style = {
    marginRight: "auto",
    marginLeft: "auto",
    width: "50%"
  }

  const searchProducts = () => {
    axios.get("/api/products/search/" + query)
    .then((res) => {
      if (res === undefined) {
        setDataList(["No products found!"])
      } else setDataList(res.data.rows);
    })
    .catch((e) => {
      console.log(e);
    });
  };

  return (
    <div style={style}>
      <h2>Search for products</h2>
      <Box sx={{mt : "1rem", display : "block"}}>
        <TextField id="outlined-search" label="Search field" type="search" onChange={e => setQuery(e.target.value)} />
        <Button onClick={searchProducts}>
          Search
        </Button>
      </Box>
      <Box sx={{display : "flex", flexDirection: "row"}}>
        <ResultListComponent onAdd={onAdd} items={dataList} />
      </Box>
    </div>
  );
};

export default SearchBarComponent;
