import { fetchAllUpComingMovies } from "../network";
import { useInfiniteQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["upcoming-movies"],
    getNextPageParam: (lastPage) => {
      const { page, total_pages } = (lastPage as any).data;
      return page < total_pages ? page + 1 : undefined;
    },
    queryFn: ({ pageParam = 1 }) => fetchAllUpComingMovies(pageParam),
  });

  console.log({ data });

  return (
    <div>
      Home
      <button type="button" onClick={() => fetchNextPage()}>
        fetch
      </button>
    </div>
  );
};

export default Home;
