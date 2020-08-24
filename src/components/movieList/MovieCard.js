import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Poster, Info, Like } from "./MovieCard.style";
import { getLikeList } from "../../store/modules/like";
import noPoster from "../../images/no-poster.png";
import { Col } from "antd";
import Rate from "./Rate";

function MovieCard({ movieId, title, rate, poster, liked, slider, mymovie }) {
  const dispatch = useDispatch();
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  let isMobile = useMediaQuery({ query: "(max-width: 575px)" });
  const [isLike, setIsLike] = useState(liked);

  const addLike = () => {
    const likedMovie = {
      id: movieId,
      title,
      rate,
      poster,
    };
    localStorage.setItem(movieId, JSON.stringify(likedMovie));
  };

  const removeLike = () => {
    localStorage.removeItem(movieId);
  };

  const toggleLikeBtn = () => {
    isLike ? removeLike() : addLike();
    setIsLike(!isLike);
    if (mymovie) dispatch(getLikeList());
  };

  if (!slider) {
    return (
      <Col xl={4} lg={6} md={8} sm={12} xs={24}>
        <Poster //
          mobile={isMobile ? 1 : 0}
        >
          <Link to={`/movie/${movieId}`}>
            <img //
              src={poster ? poster : noPoster}
              alt={title}
            />
            <Info mobile={isTabletOrMobile ? 1 : 0}>
              <span>{title}</span>
              <Rate rate={rate} />
            </Info>
          </Link>
          <Like //
            onClick={toggleLikeBtn}
            liked={isLike ? 1 : 0}
            mobile={isTabletOrMobile ? 1 : 0}
          />
        </Poster>
      </Col>
    );
  } else {
    return (
      <Poster>
        <Link to={`/movie/${movieId}`}>
          <img //
            src={poster ? poster : noPoster}
            alt={title}
          />
          <Info mobile={isTabletOrMobile ? 1 : 0}>
            <span>{title}</span>
            <Rate rate={rate} />
          </Info>
        </Link>
      </Poster>
    );
  }
}

export default MovieCard;
