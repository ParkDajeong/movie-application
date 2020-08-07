import styled from "styled-components";

const MovieCast = styled.section`
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
  div > button:before {
    font-size: 35px;
  }
  div > div > div > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }
`;

export { MovieCast, CastInfo };
