import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MovieMedia, Menu, Thumbnail, PlayBtn } from "./MovieMedia.style";
import mediumZoom from "medium-zoom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function MovieCast() {
  const [mediaType, setMediaType] = useState("image");
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  const images = movieDetail.images;
  const videos = movieDetail.videos;

  useEffect(() => {
    mediumZoom(".imgThumbnail", {
      margin: 50,
      background: "rgba(20, 20, 20, .9)",
    });
  });

  const changeMediaType = (e) => {
    const target = e.currentTarget;
    const type = target.dataset.type;

    document.querySelectorAll(".media").forEach((el) => {
      el.classList.remove("active");
    });
    target.classList.add("active");
    setMediaType(type);
  };

  return (
    <MovieMedia>
      <h2>미디어</h2>
      <Menu>
        <li //
          className="media active"
          onClick={changeMediaType}
          data-type="image"
        >
          이미지
        </li>
        <li //
          className="media"
          onClick={changeMediaType}
          data-type="video"
        >
          동영상
        </li>
      </Menu>
      <Slider {...settings}>
        {mediaType === "image"
          ? images.map((image, index) => (
              <React.Fragment key={index}>
                <Thumbnail>
                  <img //
                    className="imgThumbnail"
                    src={image}
                    alt={`${movieDetail.title} 이미지`}
                  />
                </Thumbnail>
              </React.Fragment>
            ))
          : videos.map((video, index) => (
              <React.Fragment key={index}>
                <Thumbnail>
                  <a //
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={video.thumbnail} alt={`${movieDetail.title} 영상`} />
                    <PlayBtn />
                  </a>
                </Thumbnail>
              </React.Fragment>
            ))}
      </Slider>
    </MovieMedia>
  );
}

export default MovieCast;
