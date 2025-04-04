import { useEffect, useState } from "react";

const SectionHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("home");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row items-center justify-between h-auto md:h-screen pt-24 px-6 md:px-16 transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      <div className="flex flex-col justify-center items-center  space-y-6 md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-lime-800 font-play font-bold max-w-xl animate-fadeInUp">
          A Revolução Genética ao Seu Alcance
        </h1>
        <p className="text-base md:text-lg animate-fadeIn delay-200 max-w-xl">
          Através do sequenciamento genético, oferecemos cuidados
          personalizados, ajudando a prevenir doenças antes que se manifestem.
          Utilizamos as tecnologias mais avançadas para aplicar a medicina de
          precisão, focando nas necessidades individuais de cada paciente.
        </p>
        <button className="btn animate-bounce delay-500">Saiba Mais</button>
      </div>

      <div className="mt-10 md:mt-0 animate-zoomIn delay-300">
        <img
          src="/images/Illustration.svg"
          alt="Ilustração Home"
          className="w-64 h-64 md:w-[440px] md:h-[440px] drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default SectionHome;
