import { getData } from "./getData";
import { IMAGE_BASE_URL, YOUTUBE_URL } from "../../config/config";

export const getMovieList = async (path) => {
  const result = (await getData(path, "ko")).results;
  const movieList = result.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      poster_path: `${IMAGE_BASE_URL}w500${movie.poster_path}`,
    };
  });

  return movieList;
};

export const getMainBannerData = async (id) => {
  const result = await getData(`movie/${id}`, "ko");

  return {
    id: Number(id),
    title: result.title,
    original_title: result.original_title,
    tagline: result.tagline,
    backdrop_path: `${IMAGE_BASE_URL}original${result.backdrop_path}`,
  };
};

export const getMovieDetail = async (id) => {
  const result = await getData(`movie/${id}`, "ko");
  const genres = result.genres.map((genre) => genre.name).join(", ");

  return {
    id: Number(id),
    title: result.title,
    original_title: result.original_title,
    overview: result.overview,
    genres: genres,
    runtime: result.runtime,
    vote_average: result.vote_average,
    backdrop_path: `${IMAGE_BASE_URL}original${result.backdrop_path}`,
    poster_path: result.poster_path //
      ? `${IMAGE_BASE_URL}w500${result.poster_path}`
      : null,
  };
};

export const getMovieCast = async (id) => {
  const result = await getData(`movie/${id}/credits`);
  let casts = result.cast.slice(0, 10);
  casts = casts.map((cast) => {
    return {
      cast_id: cast.id,
      character: cast.character,
      name: cast.name,
      profile_path: cast.profile_path //
        ? `${IMAGE_BASE_URL}w200${cast.profile_path}`
        : null,
    };
  });

  return casts;
};

export const getMovieVideos = async (id) => {
  const result = await getData(`movie/${id}/videos`);
  const videos = result.results.map((video) => {
    if (video.site === "YouTube") {
      return {
        url: `${YOUTUBE_URL}${video.key}`,
        thumbnail: `https://img.youtube.com/vi/${video.key}/mqdefault.jpg`,
      };
    }
  });

  return videos;
};

export const getMovieImages = async (id) => {
  const result = await getData(`movie/${id}/images`);
  const images = result.backdrops.map((backdrop) => {
    return `${IMAGE_BASE_URL}original${backdrop.file_path}`;
  });

  return images;
};

export const getSimilarMovies = async (id) => {
  const result = await getData(`movie/${id}/similar`, "ko");
  let similarMovies = result.results.slice(0, 8);
  similarMovies = similarMovies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      vote_average: movie.vote_average,
      poster_path: `${IMAGE_BASE_URL}w500${movie.poster_path}`,
    };
  });

  return similarMovies;
};
