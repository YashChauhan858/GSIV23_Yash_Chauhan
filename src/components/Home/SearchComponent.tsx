import { BiSearchAlt2 } from "react-icons/bi";
import { Selector } from "../../store";
import { useDispatch } from "react-redux";
import { search } from "../../store/Features/applicationSlice/applicationSlice";

const SearchComponent = () => {
  const searchState = Selector((state) => state.applicationSlice.searchState);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-3 bg-gray-500 p-2 w-fit rounded-sm">
      <BiSearchAlt2 size={25} className="text-gray-400" />
      <input
        type="text"
        className="bg-transparent outline-none placeholder:font-semibold text-white w-80"
        placeholder="Search"
        value={searchState}
        onChange={({ target: { value } }) =>
          dispatch(search(value.trimStart()))
        }
      />
    </div>
  );
};

export default SearchComponent;
