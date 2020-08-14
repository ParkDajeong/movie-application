import styled from "styled-components";
import { Section } from "./movieDetail.common.style";

const CastSection = styled.section`
  ${Section}
  .slick-list {
    text-align: center;
  }
  .slick-track {
    @media (min-width: 767px) {
      margin: 0;
    }
  }
`;

const CastInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;

  span:first-child {
    font-weight: 800;
    font-size: 17px;
  }
  span:last-child {
    font-size: 15px;
    color: #c7c7c7;
    text-align: center;
  }
`;

export { CastSection, CastInfo };
