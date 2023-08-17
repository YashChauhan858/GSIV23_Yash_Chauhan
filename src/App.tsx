import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { SearchComponent } from "./components";
import { AiFillHome } from "react-icons/ai";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-2 flex justify-between items-center px-5 shadow-md shadow-[rgba(0,0,0,0.2)]">
        <SearchComponent />
        <AiFillHome size={25} className="cursor-pointer" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
