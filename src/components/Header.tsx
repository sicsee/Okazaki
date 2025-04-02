import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState(hash);

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.replace("#", ""))?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [hash]);

  // Monitorar o scroll para determinar a seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "servicos", "sobre", "contato"];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
            setActiveSection(`#${section}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex items-center gap-6 p-4 bg-white shadow-md fixed w-full top-0 z-50 justify-between h-20">
      <div className="flex items-center gap-1">
        <i className="ri-dna-line text-green-700 text-xl"></i>
        <h1 className="font-play text-2xl text-green-700 font-extrabold">
          Clínica Okazaki
        </h1>
      </div>
      <nav className="flex items-center gap-6">
        <Link
          to="#home"
          className={`relative px-3 py-1 transition-all ${
            activeSection === "#home"
              ? "text-green-700"
              : "text-gray-400 hover:text-green-700"
          }`}
        >
          Home
          {activeSection === "#home" && (
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-green-700 transition-all" />
          )}
        </Link>

        <Link
          to="#servicos"
          className={`relative px-3 py-1 transition-all ${
            activeSection === "#servicos"
              ? "text-green-700"
              : "text-gray-400 hover:text-green-700"
          }`}
        >
          Serviços
          {activeSection === "#servicos" && (
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-green-700 transition-all" />
          )}
        </Link>

        <Link
          to="#sobre"
          className={`relative px-3 py-1 transition-all ${
            activeSection === "#sobre"
              ? "text-green-700"
              : "text-gray-400 hover:text-green-700"
          }`}
        >
          Sobre
          {activeSection === "#sobre" && (
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-green-700 transition-all" />
          )}
        </Link>

        <Link
          to="#contato"
          className={`relative px-3 py-1 transition-all ${
            activeSection === "#contato"
              ? "text-green-700"
              : "text-gray-400 hover:text-green-700"
          }`}
        >
          Contato
          {activeSection === "#contato" && (
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-green-700 transition-all" />
          )}
        </Link>
      </nav>

      <div>
        <button className="btn">
          <a href="#">Agende sua consulta</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
