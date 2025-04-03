import { useEffect, useState } from "react";

const SectionHome = () => {
  const [, setIsVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const servicesSection = document.getElementById("servicos");

      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.9);
      }

      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        setServicesVisible(rect.top < window.innerHeight * 0.85);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        id="servicos"
        className={`flex flex-col h-screen items-center pt-25 p-15 space-y-3 transition-all duration-900 ease-out ${
          servicesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        <h1 className="text-5xl text-lime-800 font-play font-bold text-center animate-fadeInUp">
          Nossos Serviços
        </h1>
        <p className="text-md text-center mb-5 animate-fadeIn delay-200">
          Realizamos sequenciamento genético preciso para identificar
          predisposições a doenças, oferecendo insights para um cuidado
          preventivo e personalizado.
        </p>
        <div className="flex mb-5 gap-5 border-2 border-green-800 rounded-xl items-center">
          <div className="card p-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${servicesVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}">
            <div className="bg-green-700 p-3 rounded-full inline-block mb-4">
              <i className="ri-dna-fill text-white text-4xl"></i>
            </div>
            <div className="text-xl font-jett font-bold text-center mb-2 text-green-700">
              <h2>Sequenciamento Genético Completo</h2>
            </div>
            <div className="text-md text-center text-gray-600">
              Analisamos seu DNA para fornecer um panorama completo de suas
              características genéticas, ajudando a entender melhor sua saúde.
            </div>
          </div>
          <span className="w-[2px] h-60 bg-green-800 items-center"></span>
          <div className="card p-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out delay-100 ${servicesVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}">
            <div className="bg-green-700 p-3 rounded-full inline-block mb-4">
              <i className="ri-microscope-fill text-white text-4xl"></i>
            </div>
            <div className="text-xl font-jett font-bold text-center mb-2 text-green-700">
              <h2>Identificação de Predisposições Genéticas</h2>
            </div>
            <div className="text-md text-center text-gray-600">
              Detectamos riscos genéticos para doenças, permitindo a adoção de
              medidas preventivas personalizadas.
            </div>
          </div>
          <span className="w-[2px] h-60 bg-green-800 items-center"></span>
          <div className="card p-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out delay-200 ${servicesVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}">
            <div className="bg-green-700 p-3 rounded-full inline-block mb-4">
              <i className="ri-syringe-fill text-white text-4xl"></i>
            </div>
            <div className="text-xl font-jett font-bold text-center mb-2 text-green-700">
              <h2>Medicina Personalizada</h2>
            </div>
            <div className="text-md text-center text-gray-600">
              Com base no seu sequenciamento genético, oferecemos recomendações
              de tratamentos e estilo de vida adaptados às suas necessidades.
            </div>
          </div>
        </div>
        <button className="btn w-50 h-30 animate-bounce delay-500">
          Saiba Mais
        </button>
      </section>
    </>
  );
};

export default SectionHome;
