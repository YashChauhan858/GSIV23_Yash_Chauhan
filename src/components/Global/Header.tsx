import { AiFillHome } from "react-icons/ai";
import { SearchComponent } from "..";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="p-2 flex justify-between items-center px-5 shadow-md shadow-[rgba(0,0,0,0.2)] sticky top-0 z-10 bg-white">
      {location.pathname === "/details" ? (
        <p className="text-lg text-gray-500 font-semibold">Movie Details</p>
      ) : (
        <SearchComponent />
      )}
      <AiFillHome size={25} className="cursor-pointer" />
    </header>
  );
};

export default Header;
