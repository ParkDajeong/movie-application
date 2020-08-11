import React, { useState } from "react";
import { Col } from "antd";
import { Poster, Info, Like } from "./MovieCard.style";
import { useMediaQuery } from "react-responsive";
import Rate from "./Rate";
import { getLikeList } from "../../store/modules/movie";
import { useSelector, useDispatch } from "react-redux";

function MovieCard(props) {
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  const likeList = useSelector((state) => state.movie.likeList);
  const likeMovieIdList = likeList.map((movie) => movie.id);
  const [isLike, setIsLike] = useState(likeMovieIdList.includes(props.movieId));
  const dispatch = useDispatch();

  const addLike = () => {
    const { movieId, rate, title, poster } = props;
    const likedMovie = {
      id: movieId,
      title,
      rate,
      poster,
    };
    localStorage.setItem(movieId, JSON.stringify(likedMovie));
  };

  const removeLike = () => {
    const { movieId } = props;
    localStorage.removeItem(movieId);
  };

  const toggleLikeBtn = () => {
    isLike ? removeLike() : addLike();
    !props.nobanner && setIsLike(!isLike);
    props.nobanner && dispatch(getLikeList());
  };

  return (
    <Col xl={4} lg={6} md={8} sm={12} xs={24}>
      <Poster>
        <a href={`/movie/${props.movieId}`}>
          <img //
            src={props.poster}
            alt={props.title}
          />
          <Info mobile={isTabletOrMobile ? 1 : 0}>
            <span>{props.title}</span>
            <Rate rate={props.rate} />
          </Info>
        </a>
        <Like //
          onClick={toggleLikeBtn}
          liked={isLike ? 1 : 0}
          mobile={isTabletOrMobile ? 1 : 0}
        />
      </Poster>
    </Col>
  );
}

export default MovieCard;
