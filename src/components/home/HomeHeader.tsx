import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = ["home", "servicos", "sobre", "contato"];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);

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
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <i className="ri-dna-line text-green-700 text-xl"></i>
          <h1 className="font-play text-2xl text-green-700 font-extrabold">
            Clínica Okazaki
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 ">
          <NavLink
            onClick={() => handleNavClick("home")}
            label="Home"
            active={activeSection === "#home"}
          />
          <NavLink
            onClick={() => handleNavClick("servicos")}
            label="Serviços"
            active={activeSection === "#servicos"}
          />
          <NavLink
            onClick={() => handleNavClick("sobre")}
            label="Sobre"
            active={activeSection === "#sobre"}
          />
          <NavLink
            onClick={() => handleNavClick("contato")}
            label="Contato"
            active={activeSection === "#contato"}
          />
        </nav>

        <div className="hidden md:block">
          <button className="btn">
            <a href="#">Agende sua consulta</a>
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="ri-menu-line text-2xl text-green-700"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4 shadow-md items-center">
          <NavLink
            onClick={() => handleNavClick("home")}
            label="Home"
            active={activeSection === "#home"}
          />
          <NavLink
            onClick={() => handleNavClick("servicos")}
            label="Serviços"
            active={activeSection === "#servicos"}
          />
          <NavLink
            onClick={() => handleNavClick("sobre")}
            label="Sobre"
            active={activeSection === "#sobre"}
          />
          <NavLink
            onClick={() => handleNavClick("contato")}
            label="Contato"
            active={activeSection === "#contato"}
          />
          <button className="btn w-fit">
            <a href="#">Agende sua consulta</a>
          </button>
        </div>
      )}
    </header>
  );
};

type NavLinkProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

const NavLink = ({ label, active = false, onClick }: NavLinkProps) => (
  <button
    onClick={onClick}
    className={`relative transition-all hover:cursor-pointer ${
      active
        ? "text-green-700 font-semibold"
        : "text-gray-600 hover:text-green-700"
    }`}
  >
    {label}
    {active && (
      <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-green-700" />
    )}
  </button>
);

export default HomeHeader;
