import { Fragment } from "react";
import { fetchAllUpComingMovies } from "../network";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieCard } from "../components";
import { IResponse } from "../types/movei.type";
import { useEffect, useRef } from "react";

const Home = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery<IResponse>({
    queryKey: ["upcoming-movies"],
    getNextPageParam: (lastPage) => {
      const { page, total_pages } = (lastPage as any).data;
      return page < total_pages ? page + 1 : undefined;
    },
    queryFn: ({ pageParam = 1 }) => fetchAllUpComingMovies(pageParam),
  });

  const loadMoreButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!hasNextPage) {
      return;
    }
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      })
    );
    const el = loadMoreButtonRef && loadMoreButtonRef.current;
    if (!el) {
      return;
    }
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [loadMoreButtonRef.current, hasNextPage]);

  return (
    <div className="">
      <div className="w-[60%] mx-auto grid grid-rows-4 grid-cols-5 gap-5 pb-8">
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
      <button
        ref={loadMoreButtonRef}
        type="button"
        onClick={() => fetchNextPage()}
        style={{ visibility: "hidden" }}
      ></button>
    </div>
  );
};

export default Home;
