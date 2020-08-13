import styled, { css } from "styled-components";

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
  ${commonFlex}
  justify-content: space-between;
  position: fixed;
  background-color: ${(props) => (props.isScroll ? "rgba(20,20,20,0.95);" : "")};
  transition: background-color 0.3s linear;
  padding: 20px 40px;
  height: 70px;
  width: 100%;
  z-index: 4;
`;
/*color: #eeeeee;
  text-shadow: 4px 0px #939599; */

const LeftSection = styled.section`
  ${(props) =>
    !props.mobile
      ? css`
          ${commonFlex}
        `
      : css`
          display: flex;
          align-items: center;
          height: 100%;
        `}

  & > a {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

const LeftMenu = styled.ul`
  ${commonUl}
  color: white;
  font-size: 1.2em;
  ${(props) =>
    !props.mobile
      ? css`
          ${commonFlex}
          margin-left: 15px;
          li {
            ${commonFlex}
            padding-left: 18px;
            a:hover {
              font-weight: 600;
            }
          }
          .nav_menu {
            display: none;
          }
        `
      : css`
          flex-direction: column;
          margin-left: 1.7rem;
          height: 25px;
          text-align: center;
          li {
          }
          .nav_menu {
            cursor: pointer;
            width: ${(props) => (props.menuOpen ? "27%" : "100%")};
            margin-bottom: 30px;
            span {
              font-size: small;
            }
            & + li {
              border-top: 2px solid white;
            }
          }
          li:not(.nav_menu) {
            display: ${(props) => (props.menuOpen ? "" : "none")};
            background-color: rgba(20, 20, 20, 0.9);
            transform: translateX(-38%);
          }
          li > a {
            width: 100%;
            padding: 13px 50px;
            display: inline-block;
            &:hover {
              background-color: rgba(100, 100, 100, 0.5);
            }
          }
        `}
`;

const TopArrow = styled.div`
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -9px;
  margin: 0 auto;
  width: 0;
  height: 0;
  border-bottom: 7px solid white;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
`;

export { Nav, LeftSection, LeftMenu, TopArrow };
