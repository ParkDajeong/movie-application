import React, { useRef, useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import queryStirng from "query-string";
import { getSearchData } from "../../store/modules/search";
import { SearchBox, SearchForm, SearchBtn } from "./Search.style";
import { SearchOutlined } from "@ant-design/icons";
import useDebounce from "../../hooks/useDebouce";
import "antd/dist/antd.css";

function Search() {
  let inputRef = useRef(null);
  const checkFirstSearch = useRef(true);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);
  const [searchData, setSearchData] = useState("");
  const debouncedSearchTerm = useDebounce(searchData, 800);

  useEffect(() => {
    const { search, pathname } = location;
    const { q: data } = queryStirng.parse(search);

    if (pathname.includes("search") && data) {
      openSearchBox();
      setSearchData(data);
    }
    console.log("일번");
    console.log(history);
  }, []);

  useEffect(() => {
    const { search, pathname } = location;
    const { q: data } = queryStirng.parse(search);

    if (debouncedSearchTerm) {
      const path = `/search?q=${debouncedSearchTerm}`;
      if (checkFirstSearch.current) {
        history.push(path);
        checkFirstSearch.current = false;
        console.log("push니?");
      } else {
        history.replace(path);
        console.log("아님 replace?");
      }
      dispatch(getSearchData(debouncedSearchTerm));
      console.log("첫번째 큰 if문 빠져나오기");
    } else if (debouncedSearchTerm === "") {
      if (!checkFirstSearch.current) {
        history.goBack();
        checkFirstSearch.current = true;
      } else {
        history.push("/movie");
      }
      console.log("else if문");
    }

    console.log("이번");
    console.log(history);
  }, [debouncedSearchTerm]);

  const openSearchBox = () => {
    setIsSearching(true);
    inputRef.current.focus();
  };

  const closeSearchBox = () => {
    const { pathname } = location;
    const { q: data } = queryStirng.parse(location.search);
    if (pathname.includes("search") && data) {
      setIsSearching(true);
      return;
    }
    setIsSearching(false);
    setSearchData("");
  };

  const toggleSearchBtn = () => {
    !isSearching ? openSearchBox() : closeSearchBox();
  };

  return (
    <SearchBox onBlur={toggleSearchBtn}>
      <SearchForm //
        ref={inputRef}
        value={searchData}
        placeholder="Search"
        prefix={<SearchOutlined />}
        searchopen={isSearching ? 1 : 0}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <SearchBtn //
        searchopen={isSearching ? 1 : 0}
        onClick={toggleSearchBtn}
      >
        <SearchOutlined />
      </SearchBtn>
    </SearchBox>
  );
}

export default React.memo(Search);
