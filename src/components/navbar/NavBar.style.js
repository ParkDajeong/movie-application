import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";
import { Input } from "antd";

/* Common */
const commonUl = `
  list-style: none;
  padding: 0;
  margin: 0;
`;

const commonFlex = `
  display: flex;
  align-items: center;
`;

/* Desktop */
const Nav = styled.nav`
  background-color: ${(props) => (props.isScroll ? "#141414" : "")};
  transition: background-color 0.5s linear;
  position: fixed;
  ${commonFlex}
  justify-content: space-between;
  padding: 20px 30px;
  height: 80px;
  width: 100%;
  z-index: 2;
  & > span {
    color: white;
  }
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
`;
/*color: #eeeeee;
  text-shadow: 4px 0px #939599; */

const RightMenu = styled.ul`
  ${commonUl}
  ${commonFlex}
  font-size: 1.2rem;
  color: white;
  li {
    ${commonFlex}
    padding-left: 15px;
    &:first-child {
      font-size: 1.4rem;
      cursor: pointer;
    }
    a:hover {
      font-weight: 600;
    }
  }
`;

const SearchForm = styled(Input)`
  width: ${(props) => (props.isSearchOpen ? "300px" : "10px")};
  opacity: ${(props) => (props.isSearchOpen ? "1" : "0")};
  margin-right: 10px;
  border-radius: 8px;
  transition: width 1s, opacity 0.6s linear;
  span {
    font-size: 1.4rem;
  }
`;

/* Mobile */
const MenuIcon = styled(MenuOutlined)`
  font-size: 1.9rem;
  cursor: pointer;
`;

const MobileNav = styled.div`
  background-color: #202020;
  width: 280px;
  height: 100%;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isMenuOpen ? "0px" : "-282px")};
  z-index: 10;
  border: 1px solid #353535;
  transition: All 0.5s ease;
`;

const PageCover = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 4;
  display: ${(props) => (props.isMenuOpen ? "block" : "none")};
`;

const CloseBtn = styled.div`
  text-align: right;
  font-size: 1.8rem;
  span {
    color: #595959;
    padding: 5px;
    cursor: pointer;
  }
`;

const MobileRightMenu = styled.ul`
  ${commonUl}
  flex-direction: column;
  font-size: 1.1rem;
  li {
    margin: 8px 0 15px;
    a {
      display: block;
      padding: 5px 10px;
      color: gray;
    }
    a:hover {
      background-color: #131313;
      font-weight: normal;
    }
  }
`;

export {
  Nav, //
  Logo,
  RightMenu,
  MobileNav,
  CloseBtn,
  MobileRightMenu,
  PageCover,
  SearchForm,
  MenuIcon,
};
