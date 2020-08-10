import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { CloseOutlined } from "@ant-design/icons";
import * as S from "./NavBar.style";
import Search from "./Search";

function NavBar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [didScroll, setDidScroll] = useState(false);
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });

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

  return (
    <S.Nav isScroll={didScroll}>
      <S.Logo href="/">Movies</S.Logo>
      {!isTabletOrMobile ? (
        <S.RightMenu>
          <li className="search">
            <Search />
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
                <Search mobile />
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
