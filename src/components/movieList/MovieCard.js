import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Poster, Info, Like } from "./MovieCard.style";
import { getLikeList } from "../../store/modules/like";
import noPoster from "../../images/no-poster.png";
import { Col } from "antd";
import Rate from "./Rate";

function MovieCard(props) {
  const dispatch = useDispatch();
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });
  let isMobile = useMediaQuery({ query: "(max-width: 575px)" });
  const [isLike, setIsLike] = useState(props.liked);

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
    setIsLike(!isLike);
    if (props.mymovie) dispatch(getLikeList());
  };

  if (!props.slider) {
    return (
      <Col xl={4} lg={6} md={8} sm={12} xs={24}>
        <Poster //
          mobile={isMobile ? 1 : 0}
        >
          <Link to={`/movie/${props.movieId}`}>
            <img //
              src={props.poster ? props.poster : noPoster}
              alt={props.title}
            />
            <Info mobile={isTabletOrMobile ? 1 : 0}>
              <span>{props.title}</span>
              <Rate rate={props.rate} />
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
        <Link to={`/movie/${props.id}`}>
          <img //
            src={props.poster ? props.poster : noPoster}
            alt={props.title}
          />
          <Info mobile={isTabletOrMobile ? 1 : 0}>
            <span>{props.title}</span>
            <Rate rate={props.rate} />
          </Info>
        </Link>
      </Poster>
    );
  }
}

export default MovieCard;
