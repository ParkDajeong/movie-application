export const getAllLikeMovies = () => {
  let likeMovies = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    likeMovies.push(value);
  }
  return likeMovies;
};
