import axios from "axios";
import { API_URL, API_KEY } from "../config/config";

export const getData = async (type) => {
  const path = `${API_URL}${type}?api_key=${API_KEY}&language=ko`;
  const result = await axios
    .get(path) //
    .then((response) => response.data);

  return result;
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
