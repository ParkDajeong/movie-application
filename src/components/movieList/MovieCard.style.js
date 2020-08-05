import styled from "styled-components";

const GridWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 30px 50px 10px;
`;

const Poster = styled.div`
  position: relative;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

const Info = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(20, 20, 20, 0);
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 0 5px;

  span {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    opacity: 0;
    transition: all 0.5s ease;
  }
  div {
    opacity: 0;
  }
  &:hover {
    background-color: rgb(20, 20, 20, 0.6);
    span {
      opacity: 1;
    }
    div {
      opacity: 1;
    }
  }
`;

export { GridWrapper, Poster, Info };
