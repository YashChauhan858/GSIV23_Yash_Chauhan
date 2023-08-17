import { Navigate } from "react-router-dom";
import { env } from "../environment";
import { Selector } from "../store";

const Details = () => {
  const movie = Selector((state) => state.applicationSlice.currMovie);
  if (!movie) return <Navigate to="/" />;
  return (
    <div className="flex gap-2 w-[70%] mx-auto">
      <div className="h-60 w-56">
        <img
          src={`${env.IMAGE_PATH}/${movie.poster_path}`}
          alt="movie-poster"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col p-1">
        <div className="flex items-center pr-2 gap-2">
          <p className="text-base text-gray-500 font-bold">
            {movie?.title ?? "-"}
          </p>
          <p className="text-base text-gray-500 font-semibold">
            ({movie?.vote_average ?? "-"})
          </p>
        </div>
        <p className="text-xs mt-2 text-gray-500 font-bold">
          {movie.release_date.split("-")[0]}
        </p>
        <p className="overflow-hidden text-xs my-2 text-gray-500">
          Description: {movie?.overview ?? "-"}
        </p>
      </div>
    </div>
  );
};

export default Details;
