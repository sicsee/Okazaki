const SectionServicos = () => {
  return (
    <section
      id="servicos"
      className="flex flex-col h-screen items-center pt-25 p-15 space-y-3"
    >
      <h1 className="text-5xl text-lime-800 font-play font-bold text-center">
        Nossos Serviços
      </h1>
      <p className="text-md text-center mb-5">
        Realizamos sequenciamento genético preciso para identificar
        predisposições a doenças, oferecendo insights para um cuidado preventivo
        e personalizado.
      </p>
      <div className="flex mb-5 gap-5 border-2 border-green-800 rounded-xl items-center">
        <div className="card p-4 rounded-lg shadow-lg">
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
        <div className="card p-4 rounded-lg shadow-lg">
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
        <div className="card p-4 rounded-lg shadow-lg">
          <div className="bg-green-700 p-3 rounded-full inline-block mb-4">
            <i className="ri-syringe-fill text-white text-4xl"></i>
          </div>
          <div className="text-xl font-jett font-bold text-center mb-2 text-green-700">
            <h2>Medicina Personalizada</h2>
          </div>
          <div className="text-md text-center text-gray-600">
            Com base no seu sequenciamento genético, oferecemos recomendações de
            tratamentos e estilo de vida adaptados às suas necessidades.
          </div>
        </div>
      </div>

      <button className="btn w-50 h-30">Saiba Mais</button>
    </section>
  );
};

export default SectionServicos;
