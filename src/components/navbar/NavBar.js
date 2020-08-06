import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "antd/dist/antd.css";
import * as S from "./NavBar.style";

function NavBar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [didScroll, setDidScroll] = useState(false);
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  let inputRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollTop = e.srcElement.scrollingElement.scrollTop;
      if (scrollTop >= 80) {
        setDidScroll(true);
      } else {
        setDidScroll(false);
      }
    });
  });

  const openMenu = () => setmenuOpen(!menuOpen);
  const closeSearchForm = () => setSearchOpen(!searchOpen);

  const showSearchForm = () => {
    setSearchOpen(!searchOpen);
    inputRef.current.focus();
  };

  return (
    <S.Nav isScroll={didScroll}>
      <S.Logo href="/">Movies</S.Logo>
      {!isTabletOrMobile ? (
        <S.RightMenu>
          <li className="search">
            <S.SearchForm //
              ref={inputRef}
              size="large"
              placeholder="Search"
              prefix={<SearchOutlined />}
              isSearchOpen={searchOpen}
              onBlur={closeSearchForm}
            />
            {searchOpen ? ( //
              <CloseOutlined onClick={closeSearchForm} />
            ) : (
              <SearchOutlined onClick={showSearchForm} />
            )}
          </li>
          <li>
            <a href="/mymovie">나의 영화</a>
          </li>
        </S.RightMenu>
      ) : (
        <React.Fragment>
          <S.MenuIcon onClick={openMenu} />
          {/* 모바일 뒤로가기 버튼으로도 작동하게 구현하기 */}
          <S.PageCover //
            onClick={openMenu}
            isMenuOpen={menuOpen}
          />
          <S.MobileNav isMenuOpen={menuOpen}>
            <S.CloseBtn>
              <CloseOutlined onClick={openMenu} />
            </S.CloseBtn>
            <S.MobileRightMenu>
              <li>
                <Input //
                  size="large"
                  placeholder="Search"
                  prefix={<SearchOutlined />}
                />
              </li>
              <li>
                <a href="/mymovie">나의 영화</a>
              </li>
            </S.MobileRightMenu>
          </S.MobileNav>
        </React.Fragment>
      )}
    </S.Nav>
  );
}

export default NavBar;
