import React, { useRef, useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchData } from "../../store/modules/search";
import { SearchBox, SearchForm, SearchBtn } from "./Search.style";
import { SearchOutlined } from "@ant-design/icons";
import useDebounce from "../../hooks/useDebouce";
import useLoading from "../../hooks/useLoading";
import "antd/dist/antd.css";

function Search() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const checkFirstSearch = useRef(true);
  const [openSearchForm, setOpenSearchForm] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchData, setSearchData] = useState("");
  const debouncedSearch = useDebounce(searchData, 800);

  useEffect(() => {
    const { pathname } = location;

    if (pathname.includes("search") && !openSearchForm) {
      history.replace("/movie");
    }
    if (!pathname.includes("search") && !pathname.includes("/movie/")) {
      setOpenSearchForm(false);
      setSearchData("");
      setIsSearching(false);
    }
  }, [location]);

  const loadSearchResult = useCallback(async () => {
    if (!openSearchForm) return;
    if (debouncedSearch) {
      if (checkFirstSearch.current) {
        history.push("/search");
        checkFirstSearch.current = false;
      } else {
        history.replace("/search");
      }
      dispatch(await getSearchData(debouncedSearch));
      setIsSearching(true);
    } else if (debouncedSearch === "") {
      if (!checkFirstSearch.current) {
        history.goBack();
        checkFirstSearch.current = true;
      } else {
        history.push("/movie");
      }
      setIsSearching(false);
    }
  }, [debouncedSearch]);

  useLoading(loadSearchResult);

  const onChange = (e) => {
    setSearchData(e.target.value);
  };

  const openSearchBox = () => {
    setOpenSearchForm(true);
    inputRef.current.focus();
  };

  const closeSearchBox = () => {
    if (!isSearching) {
      setOpenSearchForm(false);
      setSearchData("");
    }
  };

  const toggleSearchBtn = () => {
    !openSearchForm ? openSearchBox() : closeSearchBox();
  };

  return (
    <SearchBox onBlur={toggleSearchBtn}>
      <SearchForm //
        ref={inputRef}
        value={searchData}
        placeholder="Search"
        prefix={<SearchOutlined />}
        searchopen={openSearchForm ? 1 : 0}
        onChange={onChange}
      />
      <SearchBtn //
        searchopen={openSearchForm ? 1 : 0}
        onClick={toggleSearchBtn}
      >
        <SearchOutlined />
      </SearchBtn>
    </SearchBox>
  );
}

export default React.memo(Search);
