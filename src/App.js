import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rice from "./pages/Rice";
import Gym from "./pages/Gym";
import Purity from "./pages/Purity";

function App() {
  return (
    <HashRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ricepurity" element={<Rice />} />
      <Route path="/gymbro" element={<Gym/>} />
      <Route path="/purity" element={<Purity/>} />
    </Routes>
      
    </HashRouter>
  );
}

export default App;
