import styled from "styled-components";
import { Input } from "antd";

const SearchForm = styled(Input)`
  width: ${(props) => (props.searchopen ? "300px" : "10px")};
  opacity: ${(props) => (props.searchopen ? "1" : "0")};
  margin-right: 10px;
  border-radius: 8px;
  transition: width 1s, opacity 0.5s linear;
  span {
    font-size: 1.4rem;
  }
`;

export { SearchForm };
