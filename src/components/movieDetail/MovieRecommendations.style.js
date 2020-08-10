import styled from "styled-components";

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

    & > div {
      width: 80%;
      height: 100%;

      @media (max-width: 1199px) {
      }
      @media (max-width: 960px) {
      }
      @media (max-width: 600px) {
      }
    }
  }

  @media (max-width: 1199px) {
    padding: 0 5vw;
  }
`;

export { MovieMedia };
