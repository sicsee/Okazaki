const SectionHome = () => {
  return (
    <section id="home" className="flex h-screen pt-20 p-15 ">
      <div className="flex flex-col justify-center w-1/2 items-center space-y-8">
        <h1 className="text-6xl text-lime-800 font-play font-bold max-w-[550px] text-center">
          A Revolução Genética ao Seu Alcance
        </h1>
        <p className="text-lg  text-justify">
          Através do sequenciamento genético, oferecemos cuidados
          personalizados, ajudando a prevenir doenças antes que se manifestem.
          Utilizamos as tecnologias mais avançadas para aplicar a medicina de
          precisão, focando nas necessidades individuais de cada paciente.
        </p>
        <button className="btn w-fit">Saiba Mais</button>
      </div>
      <div className="flex items-center ml-40">
        <img
          src="/images/img1.jpeg"
          alt="Descrição da imagem"
          className="w-90 h-90 object-cover rounded-full shadow-xl"
        />
      </div>
    </section>
  );
};

export default SectionHome;
