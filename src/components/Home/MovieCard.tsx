import { env } from "../../environment";

const MovieCard = ({ movie }: { movie: any }) => {
  return (
    <div className="w-44 rounded-md shadow-md shadow-[rgba(0,0,0,0.5)]">
      <div className="h-40">
        <img
          src={`${env.IMAGE_PATH}/${movie.poster_path}`}
          alt="movie-poster"
          className="h-full w-full object-cover rounded-tr-md rounded-tl-md"
        />
      </div>
      <div className="flex flex-col p-1">
        <div className="flex items-center justify-between pr-2">
          <p className="text-xs text-gray-500 font-bold">
            {movie?.title ?? "-"}
          </p>
          <p className="text-xs text-gray-500 font-semibold">
            {movie?.vote_average ?? "-"}
          </p>
        </div>
        <p className="overflow-hidden line-clamp-2 text-xs my-2 text-gray-500">
          {movie?.overview ?? "-"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
