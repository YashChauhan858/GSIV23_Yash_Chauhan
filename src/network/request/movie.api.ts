import { tmdbService } from "../axiosInstance";
import { upComingMovies } from "../endpoints";

export const fetchAllUpComingMovies = async () => {
  return await tmdbService.get(upComingMovies);
};
