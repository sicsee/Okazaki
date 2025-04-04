import { useEffect, useState } from "react";

const SectionServicos = () => {
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
    <section
      id="servicos"
      className={`flex flex-col items-center pt-24 px-6 md:px-16 transition-all duration-900 ease-out ${
        servicesVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      }`}
    >
      <h1 className="text-5xl text-lime-800 font-play font-bold text-center animate-fadeInUp">
        Nossos Serviços
      </h1>

      <p className="text-md text-center mb-10 max-w-2xl animate-fadeIn delay-200">
        Realizamos sequenciamento genético preciso para identificar
        predisposições a doenças, oferecendo insights para um cuidado preventivo
        e personalizado.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
        {/* Card 1 */}
        <div
          className={`card p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${
            servicesVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="bg-green-700 p-3 rounded-full inline-block mb-4">
            <i className="ri-dna-fill text-white text-4xl"></i>
          </div>
          <h2 className="text-xl font-jett font-bold text-center mb-2 text-green-700">
            Sequenciamento Genético Completo
          </h2>
          <p className="text-md text-center text-gray-600">
            Analisamos seu DNA para fornecer um panorama completo de suas
            características genéticas, ajudando a entender melhor sua saúde.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className={`card p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out delay-100 ${
            servicesVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="bg-green-700 p-3 rounded-full inline-block mb-4">
            <i className="ri-microscope-fill text-white text-4xl"></i>
          </div>
          <h2 className="text-xl font-jett font-bold text-center mb-2 text-green-700">
            Identificação de Predisposições Genéticas
          </h2>
          <p className="text-md text-center text-gray-600">
            Detectamos riscos genéticos para doenças, permitindo a adoção de
            medidas preventivas personalizadas.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className={`card p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out delay-200 ${
            servicesVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="bg-green-700 p-3 rounded-full inline-block mb-4">
            <i className="ri-syringe-fill text-white text-4xl"></i>
          </div>
          <h2 className="text-xl font-jett font-bold text-center mb-2 text-green-700">
            Medicina Personalizada
          </h2>
          <p className="text-md text-center text-gray-600">
            Com base no seu sequenciamento genético, oferecemos recomendações de
            tratamentos e estilo de vida adaptados às suas necessidades.
          </p>
        </div>
      </div>

      <button className="btn animate-bounce delay-500 px-10">Saiba Mais</button>
    </section>
  );
};

export default SectionServicos;
