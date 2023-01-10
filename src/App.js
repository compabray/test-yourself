import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Rice from "./pages/Rice";
import Gym from "./pages/Gym";
import Purity from "./pages/Purity";
import GymBoy from "./pages/GymBoy";
import GymGirl from "./pages/GymGirl";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ricepurity" element={<Rice />} />
      <Route path="/gym" element={<Gym/>} />
      <Route path="/purity" element={<Purity/>} />
      <Route path="/gym/girl" element={<GymGirl/>} />
      <Route path="/gym/boy" element={<GymBoy/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
