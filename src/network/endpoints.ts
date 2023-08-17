export const tmdbBaseUrl = "https://api.themoviedb.org/3/movie";

export const upComingMovies = (page: number) =>
  `/upcoming?language=en-US&page=${page}`;
