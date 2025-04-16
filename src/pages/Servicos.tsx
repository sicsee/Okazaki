import { useEffect } from "react";
import { motion } from "framer-motion";
import AltHeader from "../components/AltHeader";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ServicosPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sections = [
    {
      title: "🔬 Sequenciamento de DNA Completo",
      desc: "Leitura integral do seu código genético para identificar predisposições a doenças e orientar decisões clínicas personalizadas.",
    },
    {
      title: "🧬 Sequenciamento de Exoma",
      desc: "Análise das regiões codificadoras do DNA — onde ocorrem a maioria das mutações genéticas. Uma abordagem eficiente e estratégica para diagnósticos.",
    },
    {
      title: "🧪 Painéis Genéticos Personalizados",
      desc: "Análise de grupos específicos de genes para diferentes condições:",
      list: [
        "Câncer hereditário",
        "Doenças cardiovasculares",
        "Transtornos neurológicos",
        "Infertilidade",
        "Entre outros",
      ],
    },
    {
      title: "🤰 Testes Pré-Natais Não Invasivos (NIPT)",
      desc: "A partir do sangue materno, analisamos o DNA fetal para identificar alterações cromossômicas com alta precisão e sem riscos ao bebê.",
    },
    {
      title: "💊 Farmacogenética",
      desc: "Com base no seu DNA, indicamos quais medicamentos funcionam melhor para o seu organismo — promovendo tratamentos mais eficazes e seguros.",
    },
    {
      title: "❤️‍🩹 Testes de Compatibilidade Genética",
      desc: "Ideal para casais que desejam ter filhos, esse exame detecta riscos genéticos recessivos que podem ser transmitidos aos descendentes.",
    },
    {
      title: "🌍 Testes de Ancestralidade Genética",
      desc: "Descubra sua origem genética e conexões globais com populações do mundo todo. Uma viagem às suas raízes.",
    },
  ];

  return (
    <>
      <AltHeader />
      <section className="bg-white text-gray-800 py-16 pt-26">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6 text-center text-green-700"
          >
            Análises Genéticas Avançadas
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
            className="text-lg text-justify mb-12 max-w-4xl mx-auto"
          >
            Na <strong>Clínica Okazaki</strong>, oferecemos uma gama completa de exames genéticos que colocam a medicina de precisão ao seu alcance. Com tecnologia de ponta e um time especializado, traduzimos seu DNA em informações valiosas para sua saúde e bem-estar.
          </motion.p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={index + 2}
              >
                <h2 className="text-2xl font-semibold mb-2 text-green-700">{section.title}</h2>
                <p className="text-gray-700 mb-2">{section.desc}</p>
                {section.list && (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={sections.length + 2}
            className="mt-16 border-t border-gray-200 pt-12"
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
              Por que escolher a Clínica Okazaki?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg max-w-3xl mx-auto mb-6">
              <li>✔️ Tecnologia de última geração</li>
              <li>✔️ Equipe especializada em genética médica</li>
              <li>✔️ Atendimento humanizado e personalizado</li>
              <li>✔️ Resultados claros e interpretados por especialistas</li>
            </ul>
            <p className="text-center text-gray-700 text-lg">
              <strong>Agende sua consulta</strong> ou entre em contato para descobrir qual exame é ideal para você. Estamos aqui para te ajudar a cuidar da sua saúde a partir do que te torna único: o seu DNA.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicosPage;
