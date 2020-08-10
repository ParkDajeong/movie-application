import React from "react";
import { useSelector } from "react-redux";
import { MovieMedia } from "./MovieRecommendations.style";
import { Poster, Info } from "../movieList/MovieCard.style";
import { useMediaQuery } from "react-responsive";
import Rate from "../movieList/Rate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

function MovieCast() {
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  const recommendations = useSelector((state) => state.movie.movieDetail.recommendations);

  return (
    <MovieMedia>
      <h2>비슷한 영화</h2>
      <Slider {...settings}>
        {recommendations.map((movie, index) => (
          <React.Fragment key={index}>
            <Poster>
              <a href={`/movie/${movie.id}`}>
                <img //
                  src={movie.poster_path}
                  alt={movie.title}
                />
                <Info mobile={isTabletOrMobile ? 1 : 0}>
                  <span>{movie.title}</span>
                  <Rate rate={movie.vote_average} />
                </Info>
              </a>
            </Poster>
          </React.Fragment>
        ))}
      </Slider>
    </MovieMedia>
  );
}

export default MovieCast;
