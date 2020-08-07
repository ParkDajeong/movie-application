import React from "react";
import * as S from "./MovieCast.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function MovieCast() {
  const test = [];
  for (let i = 0; i < 10; i++) {
    test.push(i);
  }

  return (
    <S.MovieCast>
      <h2>출연</h2>
      <Slider {...settings}>
        {test.map((movie, index) => (
          <React.Fragment key={index}>
            <Avatar size={140} icon={<UserOutlined />} />
            <S.CastInfo>
              <span>배역</span>
              <span>배우 이름</span>
            </S.CastInfo>
          </React.Fragment>
        ))}
      </Slider>
    </S.MovieCast>
  );
}

export default MovieCast;
