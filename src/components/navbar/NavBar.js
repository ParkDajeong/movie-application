import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Nav, LeftSection, LeftMenu, TopArrow } from "./NavBar.style";
import Search from "./Search";

function NavBar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [didScroll, setDidScroll] = useState(false);
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  let menuContainer = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollTop = e.srcElement.scrollingElement.scrollTop;
      if (scrollTop >= 80) {
        setDidScroll(true);
      } else {
        setDidScroll(false);
      }
    });
    window.addEventListener("click", onClickOutsideHandler);
  });

  const onClickOutsideHandler = (e) => {
    if (menuOpen && !menuContainer.current.contains(e.target)) {
      setmenuOpen(false);
    }
  };

  const toggleMenu = () => setmenuOpen(!menuOpen);

  return (
    <Nav isScroll={didScroll}>
      <LeftSection mobile={isTabletOrMobile}>
        <Link to="/">Movies</Link>
        <LeftMenu //
          ref={menuContainer}
          mobile={isTabletOrMobile}
          menuOpen={menuOpen}
        >
          <li //
            className="nav_menu"
            onClick={toggleMenu}
          >
            메뉴
            <span>▼</span>
          </li>
          <li>
            <TopArrow />
            <Link to="/list/trend" onClick={toggleMenu}>
              인기순
            </Link>
          </li>
          <li>
            <Link to="/list/latest" onClick={toggleMenu}>
              최신순
            </Link>
          </li>
          <li>
            <Link to="/list/rated" onClick={toggleMenu}>
              평점순
            </Link>
          </li>
          <li>
            <Link to="/mymovie" onClick={toggleMenu}>
              나의 영화
            </Link>
          </li>
        </LeftMenu>
      </LeftSection>
      <Search />
    </Nav>
  );
}

export default NavBar;
