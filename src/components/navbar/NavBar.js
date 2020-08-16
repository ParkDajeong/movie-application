import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Nav, LeftSection, LeftMenu, TopArrow } from "./NavBar.style";
import Search from "./Search";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [didScroll, setDidScroll] = useState(false);
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  let menuContainer = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollTop = e.srcElement.scrollingElement.scrollTop;
      if (scrollTop >= 50) {
        setDidScroll(true);
      } else {
        setDidScroll(false);
      }
    });
    window.addEventListener("click", onClickOutsideHandler);
  });

  const onClickOutsideHandler = (e) => {
    if (mobileMenuOpen && !menuContainer.current.contains(e.target)) {
      setMobileMenuOpen(false);
    }
  };

  const onToggleMobileMenu = () => {
    if (!isTabletOrMobile) return;
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Nav isScroll={didScroll}>
      <LeftSection mobile={isTabletOrMobile}>
        <Link to="/movie">Movies</Link>
        <LeftMenu //
          ref={menuContainer}
          mobile={isTabletOrMobile}
          menuOpen={mobileMenuOpen}
        >
          <li //
            className="nav_menu"
            onClick={onToggleMobileMenu}
          >
            메뉴
            <span>▼</span>
          </li>
          <li>
            <TopArrow />
            <Link to="/list/latest" onClick={onToggleMobileMenu}>
              최신순
            </Link>
          </li>
          <li>
            <Link to="/list/trend" onClick={onToggleMobileMenu}>
              인기순
            </Link>
          </li>
          <li>
            <Link to="/list/rated" onClick={onToggleMobileMenu}>
              평점순
            </Link>
          </li>
          <li>
            <Link to="/mymovie" onClick={onToggleMobileMenu}>
              나의 영화
            </Link>
          </li>
        </LeftMenu>
      </LeftSection>
      <Search />
    </Nav>
  );
}

export default React.memo(NavBar);
