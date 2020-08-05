import axios from "axios";

export const getMovies = async (path) => {
  const data = await axios.get(path);
  const result = JSON.parse(data.request.response);

  console.log(result);
  return result;
};

export const getRandomMovie = (num) => {
  return Math.floor(Math.random() * num);
};
