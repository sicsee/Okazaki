import { useEffect, useState } from "react";

const SectionSobre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("sobre");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="sobre"
      className={`flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 min-h-screen transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl text-green-800 font-play font-bold">
          Sobre Nós
        </h1>
        <p className="text-justify">
          Somos uma clínica especializada em sequenciamento genético, unindo
          tecnologia avançada e ciência para oferecer diagnósticos precisos.
          Nosso compromisso é proporcionar insights genéticos que ajudam na
          prevenção e no cuidado personalizado com a saúde.
        </p>
        <h1 className="text-4xl md:text-5xl text-green-800 font-play font-bold">
          Nossa Missão
        </h1>
        <p className="text-justify">
          Acreditamos que conhecer seu DNA é o primeiro passo para um futuro
          mais saudável. Trabalhamos com ética e inovação para garantir
          segurança, precisão e privacidade em cada análise realizada.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="./images/pana.svg"
          alt="Mobile Img"
          className="max-w-[300px] md:max-w-[450px] h-auto drop-shadow-md"
        />
      </div>
    </section>
  );
};

export default SectionSobre;
