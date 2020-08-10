import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchData } from "../../store/modules/movie";
import { SearchForm } from "./Search.style";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "antd/dist/antd.css";

function Search({ mobile }) {
  const dispatch = useDispatch();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchData, setSearchData] = useState("");

  let inputRef = useRef(null);
  const history = useHistory();
  //console.log("서치", history);

  const clearSearchForm = () => {
    setSearchOpen(!searchOpen);
    setSearchData("");
  };

  const closeSearch = () => {
    if (!history.location.pathname.includes("search")) {
      clearSearchForm();
    }
  };

  const clickCloseBtn = () => {
    clearSearchForm();
    if (history.location.pathname.includes("search")) {
      history.push("/");
    }
  };

  const showSearchForm = () => {
    setSearchOpen(!searchOpen);
    inputRef.current.focus();
  };

  const startSearching = () => {
    dispatch(getSearchData(searchData));
    history.push(`/search/${searchData}`);
  };

  if (!mobile) {
    return (
      <React.Fragment>
        <SearchForm //
          ref={inputRef}
          value={searchData}
          size="large"
          placeholder="Search"
          prefix={<SearchOutlined />}
          searchopen={searchOpen ? 1 : 0}
          onBlur={closeSearch}
          onPressEnter={startSearching}
          onChange={(e) => setSearchData(e.target.value)}
        />
        {searchOpen ? ( //
          <CloseOutlined onClick={clickCloseBtn} />
        ) : (
          <SearchOutlined onClick={showSearchForm} />
        )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Input //
          ref={inputRef}
          value={searchData}
          size="large"
          placeholder="Search"
          prefix={<SearchOutlined />}
          searchopen={searchOpen ? 1 : 0}
          onPressEnter={startSearching}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </React.Fragment>
    );
  }
}

export default Search;
