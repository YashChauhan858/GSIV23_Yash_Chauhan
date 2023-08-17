import { Routes, Route } from "react-router-dom";
import { Details, Home } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
