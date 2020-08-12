import styled from "styled-components";
import { Button } from "antd";

const MainBanner = styled.article`
  position: relative;
  background: radial-gradient(rgba(20, 20, 20, 0) 30%, rgba(20, 20, 20, 0.1) 60%, rgba(20, 20, 20, 0.7) 95%),
    ${(props) => props.image && `url(${props.image}) `} no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 750px;
`;

const BannerCover = styled.div`
  width: 100%;
  height: 800px;
  top: 0;
  left: 0;
  background: linear-gradient(
    /* */ to bottom,
    rgba(20, 20, 20, 0) 0%,
    rgba(20, 20, 20, 0.5) 65%,
    rgba(20, 20, 20, 0.75) 83%,
    rgba(20, 20, 20, 1) 92%
  );
`;

const MovieDetail = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 40px 60px;
  h2,
  p {
    color: white;
  }
  h2 {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 13px;
  }
  p {
    padding-left: 2px;
    font-size: 1.3rem;
  }
`;

const MoreBtn = styled(Button)`
  background-color: rgba(109, 109, 110, 0.8);
  height: auto;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 8px 1.8rem;
  font-size: 1.2rem;
  &:hover {
    color: white;
    background-color: rgba(109, 109, 110, 0.5);
  }
`;

export {
  MainBanner, //
  MovieDetail,
  BannerCover,
  MoreBtn,
};
