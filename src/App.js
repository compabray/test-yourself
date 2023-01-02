import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Rice from "./pages/Rice";
import Gym from "./pages/Gym";
import Purity from "./pages/Purity";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ricepurity" element={<Rice />} />
      <Route path="/gymbro" element={<Gym/>} />
      <Route path="/purity" element={<Purity/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
