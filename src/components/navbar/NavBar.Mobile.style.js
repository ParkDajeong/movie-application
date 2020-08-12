import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";

/* Common */
const commonUl = `
  list-style: none;
  padding: 0;
  margin: 0;
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
  z-index: 6;
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

export { MobileNav, CloseBtn, MobileRightMenu, PageCover, MenuIcon };
