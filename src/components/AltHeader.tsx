import "remixicon/fonts/remixicon.css";
import { useNavigate } from "react-router-dom";

const AltHeader = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/", { state: { scrollTo: "home" } });
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <i className="ri-dna-line text-green-700 text-xl"></i>
          <h1 className="font-play text-2xl text-green-700 font-extrabold">
            Clínica Okazaki
          </h1>
        </div>

        <button
          onClick={goHome}
          className="text-green-700 hover:underline text-lg font-medium hover:cursor-pointer"
        >
          ← Voltar para o início
        </button>

      </div>
    </header>
  );
};

export default AltHeader;
