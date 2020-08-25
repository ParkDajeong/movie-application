import axios from "axios";
import { API_URL, API_KEY } from "../../config/config";

export const getData = async (type, language, query) => {
  const ko = language ? `&language=${language}` : "";
  const queryStr = query ? `&query=${query}` : "";
  const path = `${API_URL}${type}?api_key=${API_KEY}${ko}${queryStr}`;
  const result = await axios
    .get(path) //
    .then((response) => response.data)
    .catch((err) => console.log(err));

  return result;
};
