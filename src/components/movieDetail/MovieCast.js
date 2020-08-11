import React from "react";
import { useSelector } from "react-redux";
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
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
  const casts = useSelector((state) => state.movie.movieDetail.casts);

  return (
    <S.MovieCast>
      <h2>출연</h2>
      <Slider {...settings}>
        {casts.map((cast, index) => (
          <React.Fragment key={index}>
            <Avatar //
              size={150}
              src={cast.profile_path}
              icon={!cast.profile_path && <UserOutlined />}
            />
            <S.CastInfo>
              <span>{cast.name}</span>
              <span>{cast.character}</span>
            </S.CastInfo>
          </React.Fragment>
        ))}
      </Slider>
    </S.MovieCast>
  );
}

export default MovieCast;
