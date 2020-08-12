import React from "react";
import { useSelector } from "react-redux";
import { SimilarSection } from "./SimilarMovies.style";
import MovieCard from "../../components/movieList/MovieCard";
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
  const similarMovies = useSelector((state) => state.movie.movieDetail.similarMovies);

  return (
    <React.Fragment>
      {similarMovies.length > 0 && (
        <SimilarSection>
          <h2>비슷한 영화</h2>
          <Slider {...settings}>
            {similarMovies.map((movie, index) => (
              <React.Fragment key={index}>
                <MovieCard //
                  id={movie.id}
                  title={movie.title}
                  rate={movie.vote_average}
                  poster={movie.poster_path ? movie.poster_path : null}
                  slider={"true"}
                />
              </React.Fragment>
            ))}
          </Slider>
        </SimilarSection>
      )}
    </React.Fragment>
  );
}

export default MovieCast;
