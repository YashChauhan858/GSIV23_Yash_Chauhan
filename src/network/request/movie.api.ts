import { tmdbService } from "../axiosInstance";
import { upComingMovies } from "../endpoints";

export const fetchAllUpComingMovies = async (page: number) => {
  return await tmdbService.get(upComingMovies, {
    params: {
      language: "en-US",
      page,
    },
  });
};
