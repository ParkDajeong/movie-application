import styled from "styled-components";
import { Section } from "./movieDetail.common.style";

const SimilarSection = styled.section`
  ${Section}
  h2 {
    display: inline-block;
  }
  .slick-slide {
    & > div {
      width: 80%;
      height: 100%;
    }
  }
`;

export { SimilarSection };
