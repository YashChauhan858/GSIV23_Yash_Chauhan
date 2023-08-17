const MovieCard = ({ movie }: { movie: any }) => {
  console.log({ movie });
  return <div>{movie.title}</div>;
};

export default MovieCard;
