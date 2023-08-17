import { useNavigate } from "react-router-dom";
import { env } from "../../environment";
import { IMovie } from "../../types/movei.type";
import { addMovieToSelectedState } from "../../store/Features/applicationSlice/applicationSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectMoveAndNavigate = () => {
    dispatch(addMovieToSelectedState(movie));
    navigate("/details");
  };

  return (
    <div
      className="w-44 rounded-md shadow-md shadow-[rgba(0,0,0,0.5)] cursor-pointer group"
      onClick={selectMoveAndNavigate}
    >
      <div className="h-40 overflow-hidden">
        <img
          src={`${env.IMAGE_PATH}/${movie.poster_path}`}
          alt="movie-poster"
          className="h-full w-full object-cover rounded-tr-md rounded-tl-md group-hover:scale-125 transition-all duration-200"
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
