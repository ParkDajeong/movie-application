import React, { useRef, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import queryStirng from "query-string";
import { getSearchData } from "../../store/modules/search";
import { SearchBox, SearchForm, SearchBtn } from "./Search.style";
import { SearchOutlined } from "@ant-design/icons";
import useDebounce from "../../hooks/useDebouce";
import "antd/dist/antd.css";

function Search() {
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [checkFirst, setCheckFirst] = useState(true);

  let inputRef = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const debouncedSearchTerm = useDebounce(searchData, 800);

  useEffect(() => {
    const { search } = location;
    const { q: data } = queryStirng.parse(search);

    if (data) {
      openSearchBox();
      setSearchData(data);
      dispatch(getSearchData(data));
    } else {
      history.push("/movie");
      setIsSearching(false);
      closeSearchBox();
    }
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm === "" && !checkFirst) {
      history.goBack();
      setCheckFirst(true);
    }

    if (debouncedSearchTerm) {
      const path = `/search?q=${searchData}`;
      if (checkFirst) {
        history.push(path);
        setCheckFirst(false);
      } else {
        history.replace(path);
      }
    }
    dispatch(getSearchData(debouncedSearchTerm));
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (!location.pathname.includes("search")) {
      closeSearchBox();
      setCheckFirst(true);
    }
  }, [location.pathname]);

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
