import React, { useRef, useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchData } from "../../store/modules/search";
import { SearchBox, SearchForm, SearchBtn } from "./Search.style";
import { SearchOutlined } from "@ant-design/icons";
import useDebounce from "../../hooks/useDebouce";
import "antd/dist/antd.css";
import useLoading from "../../hooks/useLoading";

function Search() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const checkFirstSearch = useRef(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchData, setSearchData] = useState("");
  const debouncedSearch = useDebounce(searchData, 800);

  useEffect(() => {
    const { pathname } = location;

    if (pathname.includes("search")) {
      history.replace("/movie");
    }
  }, []);

  const loadSearchResult = useCallback(async () => {
    if (!isSearching) return;
    if (debouncedSearch) {
      if (checkFirstSearch.current) {
        history.push("/search");
        checkFirstSearch.current = false;
      } else {
        history.replace("/search");
      }
      dispatch(await getSearchData(debouncedSearch));
    } else if (debouncedSearch === "") {
      if (!checkFirstSearch.current) {
        history.goBack();
        checkFirstSearch.current = true;
      } else {
        history.push("/movie");
      }
    }
  }, [debouncedSearch]);

  useLoading(loadSearchResult);

  const onChange = (e) => {
    setSearchData(e.target.value);
  };

  const openSearchBox = () => {
    setIsSearching(true);
    inputRef.current.focus();
  };

  const closeSearchBox = () => {
    const { pathname } = location;

    if (pathname.includes("search")) {
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
        onChange={onChange}
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
