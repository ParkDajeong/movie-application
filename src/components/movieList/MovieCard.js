import React from "react";
import { Col } from "antd";
import { Poster, Info } from "./MovieCard.style";
import Rate from "./Rate";

function MovieCard(props) {
  return (
    <Col xl={4} lg={6} md={8} sm={12} xs={24}>
      <Poster>
        <a href={`/movie/${props.movieId}`}>
          <img //
            src={props.img}
            alt={props.title}
          />
          <Info>
            <span>{props.title}</span>
            <Rate rate={props.rate} />
          </Info>
        </a>
      </Poster>
    </Col>
  );
}

export default MovieCard;
