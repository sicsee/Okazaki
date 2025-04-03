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
    <section id="sobre" className="relative flex px-10 h-screen items-center">
      <div className="relative flex justify-center items-center mr-20">
        <div>
          <img src="./images/pana.svg" alt="Mobile Img" />
        </div>
      </div>
      <div
        className={`flex flex-col w-1/2 space-y-6 transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl text-green-800 font-play font-bold text-center">
          Sobre Nós
        </h1>
        <p className="text-justify">
          Somos uma clínica especializada em sequenciamento genético, unindo
          tecnologia avançada e ciência para oferecer diagnósticos precisos.
          Nosso compromisso é proporcionar insights genéticos que ajudam na
          prevenção e no cuidado personalizado com a saúde.
        </p>
        <h1 className="text-5xl text-green-800 font-play font-bold text-center">
          Nossa Missão
        </h1>
        <p className="text-justify">
          Acreditamos que conhecer seu DNA é o primeiro passo para um futuro
          mais saudável. Trabalhamos com ética e inovação para garantir
          segurança, precisão e privacidade em cada análise realizada.
        </p>
      </div>
    </section>
  );
};

export default SectionSobre;
