import { useLocation, useNavigate } from "react-router-dom";

export default function HomeFooter() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = (id: string) => {
    if (isHome) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <section className="px-6 md:px-30 mt-10">
      <footer className="w-full rounded-xl bg-dark p-6 md:p-10 flex flex-col">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-2">
            <i className="ri-dna-line text-white text-xl"></i>
            <h1 className="font-play text-2xl text-white font-extrabold">
              Clínica Okazaki
            </h1>
          </div>

          <ul className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-300 underline">
            <li>
              <button onClick={() => handleNavClick("home")} className="hover:cursor-pointer">Home</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("sobre")} className="hover:cursor-pointer">Sobre</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("servicos")} className="hover:cursor-pointer">Serviços</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("contato")} className="hover:cursor-pointer">Contato</button>
            </li>
          </ul>

          {/* Redes sociais */}
          <div className="flex items-center gap-4">
            <a href="#">
              <i className="rede ri-linkedin-line text-dark text-xl"></i>
            </a>
            <a href="#">
              <i className="rede ri-facebook-fill text-dark text-xl"></i>
            </a>
            <a href="#">
              <i className="rede ri-twitter-fill text-dark text-xl"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="flex flex-col space-y-3 text-white">
            <span className="font-Jett text-md font-medium text-black bg-green-700 w-fit px-4 rounded-md">
              Contate-nos
            </span>
            <span>Email: info@positivus.com</span>
            <span>Phone: 555-567-8901</span>
            <span className="max-w-sm">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </span>
          </div>

          <div className="flex flex-col sm:flex-row bg-[#292A32] items-center justify-center text-center w-full sm:w-auto p-4 sm:p-6 rounded-xl gap-4">
            <input
              type="email"
              name="Email"
              className="p-3 border border-white rounded-xl text-white bg-transparent w-full sm:w-auto"
              placeholder="Email"
            />
            <button className="btn py-3 px-7 w-full sm:w-auto">
              Receba Avisos
            </button>
          </div>
        </div>

        <div className="w-full border-white border mt-10" />

        <div className="text-white mt-6 flex flex-col sm:flex-row text-center w-full items-center justify-center gap-2 sm:gap-4">
          <p>&copy; 2025 Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <p>Site made by</p>
            <a
              href="https://github.com/sicsee"
              className="font-jett text-xl text-purple-400 animate-pulse"
              target="_blank"
            >
              Sics
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
