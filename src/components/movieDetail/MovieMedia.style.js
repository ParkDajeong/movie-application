import styled from "styled-components";
import { PlayCircleFilled } from "@ant-design/icons";
import { Section } from "./movieDetail.common.style";

const MediaSection = styled.section`
  ${Section}
  h2 {
    display: inline-block;
  }
  .slick-list {
    height: 100%;
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

const NoData = styled.div`
  font-size: 1.2em;
  padding: 5px 8px;
  color: #ccc;
`;

export { MediaSection, Menu, Thumbnail, PlayBtn, NoData };
