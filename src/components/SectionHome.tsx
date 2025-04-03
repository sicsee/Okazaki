import { useEffect, useState } from "react";

const SectionHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("home");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.85);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className={`flex h-screen pt-20 p-15 transition-all duration-1100 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      <div className="flex flex-col justify-center w-1/2 items-center space-y-8">
        <h1 className="text-6xl text-lime-800 font-play font-bold max-w-[550px] text-center animate-fadeInUp">
          A Revolução Genética ao Seu Alcance
        </h1>
        <p className="text-lg text-justify animate-fadeIn delay-200">
          Através do sequenciamento genético, oferecemos cuidados
          personalizados, ajudando a prevenir doenças antes que se manifestem.
          Utilizamos as tecnologias mais avançadas para aplicar a medicina de
          precisão, focando nas necessidades individuais de cada paciente.
        </p>
        <button className="btn w-fit animate-bounce delay-500">
          Saiba Mais
        </button>
      </div>
      <div className="flex items-center ml-40 animate-zoomIn delay-300">
        <img
          src="/images/Illustration.svg"
          alt="Ilustração Home"
          className="w-110 h-110 drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default SectionHome;
