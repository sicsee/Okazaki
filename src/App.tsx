import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicosPage from "./pages/Servicos";
import SaibaMaisPage from "./pages/SaibaMais";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/saibamais" element={<SaibaMaisPage />} />
      </Routes>
    </>
  );
};

export default App;
