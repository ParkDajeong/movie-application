import styled, { css } from "styled-components";
import { HeartFilled } from "@ant-design/icons";

const GridWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 30px 50px 10px;
  ${(props) => props.nobanner && "padding-top: 100px; margin-top: 0;"}
  h2 {
    color: white;
    font-size: 1.7rem;
    font-weight: 600;
    border-bottom: 1px solid #eee;
    padding: 0 15px 15px;
    margin-bottom: 30px;
  }
`;

const Poster = styled.div`
  position: relative;
  height: ${(props) => (props.mobile ? "40em" : "100%")};
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #eee;
  }
  &:hover {
    & > span {
      opacity: 1;
    }
    & > span:hover {
      transform: scale(1.15);
    }
    & > a > div {
      background-color: rgb(20, 20, 20, 0.7);
      span {
        opacity: 1;
      }
      div {
        opacity: 1;
      }
    }
  }
`;

const Like = styled(HeartFilled)`
  ${(props) =>
    !props.detailpage &&
    css`
      position: absolute;
      top: 0;
      right: 0;
    `}

  font-size: 2.2rem;
  padding: 15px 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  ${(props) => (props.liked ? "color: #ff7875;" : "color: #eee;")}
  ${(props) => (props.mobile ? "opacity: 1; " : "opacity: 0;")}
  svg {
    filter: drop-shadow(1px 0px 2px rgba(0, 0, 0, 0.4));
  }
`;

const Info = styled.div`
  ${(props) =>
    props.mobile //
      ? css`
          bottom: 0;
          height: auto;
          background-color: rgb(20, 20, 20, 0.7);
          padding: 8px 5px 12px;
          span,
          div {
            opacity: 1;
          }
        `
      : css`
          top: 0;
          height: 100%;
          padding: 0 5px;
          background-color: rgb(20, 20, 20, 0);
          transition: all 0.5s ease;
          span,
          div {
            opacity: 0;
            transition: all 0.5s ease;
          }
        `}
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  span {
    text-align: center;
    font-weight: 700;
    font-size: 1.45rem;
  }
`;

export { GridWrapper, Poster, Info, Like };
