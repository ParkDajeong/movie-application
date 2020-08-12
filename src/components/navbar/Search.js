import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchData } from "../../store/modules/search";
import { SearchBox, SearchForm, SearchBtn } from "./Search.style";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "antd/dist/antd.css";

function Search({ mobile }) {
  const dispatch = useDispatch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchData, setSearchData] = useState("");

  let inputRef = useRef(null);
  const history = useHistory();
  //console.log("서치", history);

  // const clearSearchForm = () => {
  //   setIsSearchOpen(!isSearchOpen);
  //   setSearchData("");
  // };

  // const closeSearch = () => {
  //   if (!history.location.pathname.includes("search")) {
  //     clearSearchForm();
  //   }
  // };

  // const clickCloseBtn = () => {
  //   clearSearchForm();
  //   if (history.location.pathname.includes("search")) {
  //     history.push("/");
  //   }
  // };

  // const showSearchForm = () => {
  //   setIsSearchOpen(!isSearchOpen);
  //   inputRef.current.focus();
  // };

  // const startSearching = () => {
  //   dispatch(getSearchData(searchData));
  //   history.push(`/search/${searchData}`);
  // };
  const openSearchBox = () => {
    setIsSearchOpen(true);
    inputRef.current.focus();
  };

  const closeSearchBox = () => {
    setIsSearchOpen(false);
    setSearchData("");
  };

  const toggleSearchBtn = () => {
    !isSearchOpen ? openSearchBox() : closeSearchBox();
  };

  //if (!mobile) {
  return (
    <SearchBox onBlur={toggleSearchBtn}>
      <SearchForm //
        ref={inputRef}
        value={searchData}
        placeholder="Search"
        prefix={<SearchOutlined />}
        searchopen={isSearchOpen ? 1 : 0}
        //={startSearching}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <SearchBtn //
        searchopen={isSearchOpen ? 1 : 0}
        onClick={toggleSearchBtn}
      >
        <SearchOutlined />
      </SearchBtn>
    </SearchBox>
  );
  // } else {
  //   return (
  //     <React.Fragment>
  //       <Input //
  //         ref={inputRef}
  //         value={searchData}
  //         size="large"
  //         placeholder="Search"
  //         prefix={<SearchOutlined />}
  //         searchopen={isSearchOpen ? 1 : 0}
  //         onPressEnter={startSearching}
  //         onChange={(e) => setSearchData(e.target.value)}
  //       />
  //     </React.Fragment>
  //   );
  // }
}

export default Search;
