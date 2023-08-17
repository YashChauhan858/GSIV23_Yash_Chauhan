import { Fragment } from "react";
import { fetchAllUpComingMovies } from "../network";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieCard, SearchComponent } from "../components";
import { AiFillHome } from "react-icons/ai";

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
    <div className="flex flex-col">
      <div className="p-2 flex justify-between items-center px-5">
        <SearchComponent />
        <AiFillHome size={25} />
      </div>
      <div>
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
      <button type="button" onClick={() => fetchNextPage()}>
        fetch
      </button>
    </div>
  );
};

export default Home;
