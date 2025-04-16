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

const SaibaMaisPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <AltHeader />
      <section className="bg-white text-gray-800 py-16 pt-26">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6 text-center text-green-700"
          >
            Uma Nova Era da Medicina Personalizada
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
            className="text-lg text-justify mb-12 max-w-4xl mx-auto"
          >
            A <strong>Clínica Okazaki</strong> acredita que saúde vai além da prevenção — é sobre entender profundamente o que nos torna únicos. Por meio da genética, abrimos caminhos para diagnósticos precisos, tratamentos personalizados e decisões informadas.
          </motion.p>

          {/* Blocos visuais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {[
              {
                icon: "ri-search-line",
                title: "Diagnóstico de Precisão",
                desc: "Detecção precoce de predisposições genéticas para doenças como câncer, diabetes e Alzheimer.",
              },
              {
                icon: "ri-heart-pulse-line",
                title: "Tratamento Personalizado",
                desc: "Orientações médicas baseadas no seu DNA para terapias mais eficazes e seguras.",
              },
              {
                icon: "ri-user-smile-line",
                title: "Qualidade de Vida",
                desc: "Planejamento de hábitos e estilo de vida com base no seu perfil genético exclusivo.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={i + 2}
                className="bg-gray-100 rounded-xl p-6 text-center shadow-md"
              >
                <i className={`${item.icon} text-4xl text-green-600 mb-4`} />
                <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mais sobre genética e medicina */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={5}
            className="mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-700">Genética: a chave para um futuro mais saudável</h2>
            <p className="text-lg text-gray-700 mb-4">
              A análise genética permite identificar riscos muito antes de qualquer sintoma se manifestar. Isso nos dá a oportunidade de agir de forma preventiva, protegendo gerações futuras e promovendo longevidade com qualidade.
            </p>
            <p className="text-lg text-gray-700">
              Na Clínica Okazaki, cada paciente é tratado com cuidado e respeito às suas individualidades biológicas. Nossos exames são interpretados por especialistas e entregues com clareza para que você entenda cada resultado.
            </p>
          </motion.div>

          {/* Ilustração */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={6}
            className="mb-16"
          >
            
  
          </motion.div>

          {/* Diferenciais */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={7}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Nossos Diferenciais</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg max-w-3xl mx-auto">
              <li>✅ Interpretação humanizada dos exames</li>
              <li>✅ Suporte pós-exame com equipe médica</li>
              <li>✅ Ambiente acolhedor e tecnologia de ponta</li>
              <li>✅ Parcerias com laboratórios internacionais</li>
            </ul>
          </motion.div>

          {/* FAQ básico */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={8}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6 max-w-3xl mx-auto text-gray-700 text-lg">
              <div>
                <p className="font-semibold">📌 Como é feito o exame genético?</p>
                <p>Na maioria dos casos, com uma simples amostra de saliva ou sangue. O procedimento é rápido, indolor e seguro.</p>
              </div>
              <div>
                <p className="font-semibold">📌 Os resultados são confidenciais?</p>
                <p>Sim. Seguimos protocolos rígidos de segurança e privacidade. Seus dados genéticos são protegidos por lei.</p>
              </div>
              <div>
                <p className="font-semibold">📌 Quanto tempo leva para receber o resultado?</p>
                <p>O prazo varia conforme o exame, mas normalmente entre 15 e 30 dias úteis.</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action final */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={9}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-700">Pronto para desvendar seu DNA?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Agende sua consulta e descubra como a genética pode transformar seu futuro. Estamos prontos para te receber!
            </p>
            <button className="btn py-3 px-6 text-lg">
              Agendar Consulta
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SaibaMaisPage;
