import styled from "styled-components";
import { PlayCircleFilled } from "@ant-design/icons";

const MovieMedia = styled.section`
  position: relative;
  color: white;
  padding: 0 12vw;
  margin-bottom: 10vh;
  h2 {
    color: white;
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 20px;

    display: inline-block;
  }
  div > button {
    z-index: 2;
    width: auto;
    height: auto;
  }
  div > button:before {
    font-size: 35px;
  }
  .slick-track {
    margin: 0;
  }
  .slick-slide {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1199px) {
    padding: 0 5vw;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: inline-flex;
  padding: 0;
  margin: 0;
  margin-left: 10px;

  li {
    cursor: pointer;
    font-size: 1.1rem;
    padding: 3px;
    margin: 0 5px;
  }
  li.active {
    border-bottom: 2px solid firebrick;
  }
`;

const Thumbnail = styled.div`
  width: 22vw;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1199px) {
    width: 25vw;
  }
  @media (max-width: 960px) {
    width: 40vw;
  }
  @media (max-width: 767px) {
    width: 80vw;
  }
`;

const PlayBtn = styled(PlayCircleFilled)`
  position: absolute;
  top: calc(50% - (3rem / 2));
  left: calc(50% - (3rem / 2));
  font-size: 3rem;
`;

export { MovieMedia, Menu, Thumbnail, PlayBtn };
