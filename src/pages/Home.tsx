import { fetchAllUpComingMovies } from "../network";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieCard } from "../components";
import { IResponse } from "../types/movei.type";
import { useEffect, useRef } from "react";
import { initializeList } from "../store/Features/applicationSlice/applicationSlice";
import { useDispatch } from "react-redux";
import { Selector } from "../store";
import { BiLoaderAlt } from "react-icons/bi";

const Home = () => {
  const dispatch = useDispatch();
  const list = Selector((state) => state.applicationSlice.list);
  const searchState = Selector((state) => state.applicationSlice.searchState);

  const filteredList = list.filter((e) =>
    e.title.toLocaleLowerCase().includes(searchState.toLocaleLowerCase())
  );

  const validList = filteredList.length !== 0 ? filteredList : [];

  const { hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<IResponse>({
      queryKey: ["upcoming-movies"],
      getNextPageParam: (lastPage) => {
        const { page, total_pages } = (lastPage as any).data;
        return page < total_pages ? page + 1 : undefined;
      },
      refetchOnWindowFocus: false,
      queryFn: ({ pageParam = 1 }) => fetchAllUpComingMovies(pageParam),
      onSuccess: (data) => {
        if (data.pages.at(-1))
          dispatch(initializeList(data?.pages?.at(-1)?.data?.results ?? []));
      },
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
        {!!validList &&
          validList.length !== 0 &&
          validList.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      {isFetchingNextPage && (
        <div className="text-lg w-full pb-10 flex justify-center items-center">
          <p className="flex items-center gap-2">
            Loading
            <BiLoaderAlt size={25} className="animate-spin" />
          </p>
        </div>
      )}
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
