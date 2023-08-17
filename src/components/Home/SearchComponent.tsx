import { BiSearchAlt2 } from "react-icons/bi";

const SearchComponent = () => {
  return (
    <div className="flex items-center gap-3 bg-gray-500 p-2 w-fit rounded-sm">
      <BiSearchAlt2 size={25} className="text-gray-400" />
      <input
        type="text"
        className="bg-transparent outline-none placeholder:font-semibold text-white w-80"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchComponent;
