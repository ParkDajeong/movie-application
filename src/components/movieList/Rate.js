import React from "react";
import styled from "styled-components";
import { StarFilled } from "@ant-design/icons";

function Rate(props) {
  return (
    <StarRating>
      <BackStars>
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
      </BackStars>
      <FrontStars percent={props.rate}>
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
      </FrontStars>
    </StarRating>
  );
}

const StarRating = styled.div`
  display: flex;
  position: relative;
  margin-top: ${(props) => (props.detailpage ? "8px" : "15px;")};
  width: fit-content;
`;

const BackStars = styled.div`
  display: flex;
  position: relative;
`;

const FrontStars = styled.div`
  width: ${(props) => (props.percent ? props.percent * 10 + "%" : "0%")};
  display: flex;
  color: #ffbc0b;
  overflow: hidden;
  position: absolute;
  text-shadow: 2px 2px 5px #d29b09;
  top: 0;
  transition: all 0.5s;
`;

export default React.memo(Rate);
