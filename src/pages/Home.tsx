import { Fragment } from "react";
import { fetchAllUpComingMovies } from "../network";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieCard } from "../components";
import { IResponse } from "../types/movei.type";

const Home = () => {
  const { data /* fetchNextPage */ } = useInfiniteQuery<IResponse>({
    queryKey: ["upcoming-movies"],
    getNextPageParam: (lastPage) => {
      const { page, total_pages } = (lastPage as any).data;
      return page < total_pages ? page + 1 : undefined;
    },
    queryFn: ({ pageParam = 1 }) => fetchAllUpComingMovies(pageParam),
  });

  return (
    <div className="">
      <div className="w-[90%] mx-auto grid grid-rows-3 grid-cols-7 gap-5 pb-8">
        {!!data &&
          data.pages.map((page: any) => (
            <Fragment key={page.data.page}>
              {!!page &&
                page.data.results.length !== 0 &&
                page.data.results.map((movie: any) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </Fragment>
          ))}
      </div>
      {/* <button type="button" onClick={() => fetchNextPage()}>
        fetch
      </button> */}
    </div>
  );
};

export default Home;
