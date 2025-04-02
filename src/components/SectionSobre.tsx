const SectionSobre = () => {
  return (
    <section
      id="sobre"
      className="flex flex-col items-center pt-25 p-15 space-y-3"
    >
      <h1 className="text-5xl text-lime-800 font-play font-bold text-center">
        Sobre Nós
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 w-fit mt-10">
        <div className="cardSobre bg-green-700">
          <div className="flex flex-col ">
            <span className=" tituloCard text-white bg-dark">
              Quem Somos
              <i className="ri-hospital-line ml-1"></i>
            </span>
            <div className="mt-10">
              <p className="text-white text-lg text-justify">
                Somos uma clínica especializada em sequenciamento genético,
                ajudando você a entender seu DNA e tomar decisões informadas
                sobre sua saúde.
              </p>
            </div>
          </div>
        </div>

        <div className="cardSobre bg-dark">
          <div className="flex flex-col ">
            <span className=" tituloCard text-black bg-white">
              Tecnologia de Ponta
              <i className="ri-computer-line ml-1"></i>
            </span>
            <div className="mt-10">
              <p className="text-white text-lg text-justify">
                Utilizamos equipamentos de última geração e inteligência
                artificial para fornecer resultados genéticos com extrema
                precisão e segurança.
              </p>
            </div>
          </div>
        </div>

        <div className="cardSobre bg-white">
          <div className="flex flex-col ">
            <span className=" tituloCard text-white bg-green-700">
              Especialistas Qualificados
            </span>
            <div className="mt-10">
              <p className="text-black text-lg text-justify">
                Nossa equipe conta com geneticistas, biomédicos e profissionais
                altamente capacitados, prontos para oferecer atendimento
                humanizado e personalizado.
              </p>
            </div>
          </div>
        </div>

        <div className="cardSobre bg-green-700">
          <div className="flex flex-col ">
            <span className=" tituloCard text-white bg-dark">
              Sigilo e Proteção de Dados
              <i className="ri-lock-line ml-1"></i>
            </span>
            <div className="mt-5">
              <p className="text-white text-lg text-justify">
                Somos uma clínica especializada em sequenciamento genético,
                ajudando você a entender seu DNA e tomar decisões informadas
                sobre sua saúde.
              </p>
            </div>
          </div>
        </div>

        <div className="cardSobre bg-dark">
          <div className="flex flex-col ">
            <span className=" tituloCard text-white bg-green-700">
              Missão e Valores
              <i className="ri-earth-fill ml-1"></i>
            </span>
            <div className="mt-10">
              <p className="text-white text-lg text-justify">
                Promovemos a medicina de precisão, inovando para melhorar a
                qualidade de vida e oferecer soluções personalizadas para cada
                paciente.
              </p>
            </div>
          </div>
        </div>

        <div className="cardSobre bg-white">
          <div className="flex flex-col ">
            <span className=" tituloCard text-white bg-dark">
              Agende sua Consulta
              <i className="ri-calendar-line ml-1"></i>
            </span>
            <div className="mt-10">
              <p className="text-black text-lg text-justify">
                Pronto para conhecer mais sobre sua saúde? Entre em contato e
                descubra como o sequenciamento genético pode transformar sua
                vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSobre;
