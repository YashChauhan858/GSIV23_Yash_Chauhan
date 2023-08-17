import { AiFillHome } from "react-icons/ai";
import { SearchComponent } from "..";

const Header = () => {
  return (
    <header className="p-2 flex justify-between items-center px-5 shadow-md shadow-[rgba(0,0,0,0.2)]">
      <SearchComponent />
      <AiFillHome size={25} className="cursor-pointer" />
    </header>
  );
};

export default Header;
