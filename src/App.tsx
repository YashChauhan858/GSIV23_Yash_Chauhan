import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { SearchComponent } from "./components";
import { AiFillHome } from "react-icons/ai";

function App() {
  return (
    <div className="">
      <div className="p-2 flex justify-between items-center px-5">
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
