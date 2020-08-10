import axios from "axios";
import { API_URL, API_KEY } from "../config/config";
import { IMAGE_BASE_URL, YOUTUBE_URL } from "../config/config";

export const getData = async (type, language, query) => {
  const ko = language ? `&language=${language}` : "";
  const queryStr = query ? `&query=${query}` : "";
  const path = `${API_URL}${type}?api_key=${API_KEY}${ko}${queryStr}`;
  const result = await axios
    .get(path) //
    .then((response) => response.data);

  return result;
};

export const getMovieList = async () => {
  const result = (await getData("trending/movie/week", "ko")).results;
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
    poster_path: `${IMAGE_BASE_URL}w500${result.poster_path}`,
  };
};

export const getMovieCredits = async (id) => {
  const result = await getData(`movie/${id}/credits`);

  return {
    cast: result.cast.slice(0, 10),
    crew: result.crew.slice(0, 10),
  };
};

export const getMovieVideos = async (id) => {
  const result = await getData(`movie/${id}/videos`);
  const videos = result.results.map((video) => {
    if (video.site === "YouTube") {
      return {
        url: `${YOUTUBE_URL}${video.key}`,
        thumbnail: `https://img.youtube.com/vi/${video.key}/hqdefault.jpg`,
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

export const getMovieRecommendations = async (id) => {
  const result = await getData(`movie/${id}/recommendations`, "ko");
  let recommendations = result.results.slice(0, 8);
  recommendations = recommendations.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      vote_average: movie.vote_average,
      poster_path: `${IMAGE_BASE_URL}w500${movie.poster_path}`,
    };
  });

  return recommendations;
};

export const getAllLikeMovies = () => {
  let likeMovies = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    likeMovies.push(value);
  }
  return likeMovies;
};

export const getSearchResults = async (query) => {
  const result = (await getData(`search/movie`, "ko", query)).results;
  const searchResult = result.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      poster_path: `${IMAGE_BASE_URL}w500${movie.poster_path}`,
    };
  });

  return searchResult;
};
