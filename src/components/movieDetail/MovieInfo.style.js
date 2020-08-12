import styled from "styled-components";

const InfoSection = styled.section`
  position: relative;
  width: 100%;
  color: white;
  margin-bottom: 10vh;
`;

const BackgroundImg = styled.div`
  background: linear-gradient(rgba(20, 20, 20, 0.5) 0%, rgba(20, 20, 20, 0.5) 100%),
    ${(props) => props.image && `url(${props.image}) `}no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 510px;
`;

const MovieMeta = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.mobile ? "auto" : "480px")};
  padding: 0 12vw;
  margin-top: -210px;

  @media (max-width: 1400px) {
    padding: 0 8vw;
  }
  @media (max-width: 1199px) {
    padding: 0 5vw;
  }
`;

const Poster = styled.div`
  margin-right: 5px;
  height: 100%;
  img {
    width: auto;
    height: 100%;
    border-radius: 8px;
  }

  @media (max-width: 1199px) {
    height: 495px;
  }
`;

const Description = styled.div`
  padding: 40px 15px 0 30px;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > div > div:last-child {
    font-size: 2rem;
  }
  p {
    font-size: 1.15rem;
    margin-top: 55px;
    padding: 5px;
  }

  @media (max-width: 1199px) {
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    & > div > div:last-child {
      margin: 0 auto;
      margin-top: 15px;
    }
  }
`;

const Title = styled.div`
  h2 {
    display: inline-block;
    color: white;
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 13px;
  }
`;

const InfoData = styled.div`
  font-size: 1.1rem;
  span {
    margin: 0 8px;
  }
`;

export {
  InfoSection, //
  BackgroundImg,
  MovieMeta,
  Poster,
  Description,
  Title,
  InfoData,
};
