import { css } from "styled-components";

const Section = css`
  position: relative;
  color: white;
  padding: 0 12vw;
  margin-bottom: 10vh;
  h2 {
    color: white;
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 20px;
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
  @media (max-width: 1400px) {
    padding: 0 8vw;
  }
`;

export { Section };
