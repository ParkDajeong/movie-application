import styled, { css } from "styled-components";
import { Input } from "antd";

const SearchBox = styled.div`
  position: relative;
  font-size: 1.4rem;
  color: white;
`;

const SearchForm = styled(Input)`
  width: ${(props) => (props.searchopen ? "250px" : "10px")};
  opacity: ${(props) => (props.searchopen ? "1" : "0")};
  position: absolute;
  right: -15px;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  border-color: white;
  background-color: rgba(20, 20, 20, 0.9);
  transition: width 0.7s, opacity 0.7s ease;
  &:hover {
    border-color: white;
  }
  span {
    color: white;
    font-size: 1.4rem;
  }
  input {
    background-color: rgba(20, 20, 20, 0);
    color: white;
    font-size: 1.1em;
    margin: 0 5px;
  }
`;

const SearchBtn = styled.button`
  position: relative;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 5;
  ${(props) =>
    props.searchopen
      ? css`
          opacity: 0;
          margin-right: 15px;
          transition: opacity 0.1s ease, margin-right 0.5s ease;
          pointer-events: none;
        `
      : css`
          opacity: 1;
          margin-right: 0px;
          transition: opacity 0.5s ease 0.1s, margin-right 0.5s ease;
        `};
`;

export { SearchBox, SearchForm, SearchBtn };
