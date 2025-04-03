import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SectionContato: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("sayHi");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contato");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col h-screen px-30"
    >
      <div className="font-Jett text-3xl font-medium text-black bg-gray-200 w-fit px-4 rounded-xl mb-5">
        <h1>Contate-nos</h1>
      </div>
      <motion.div
        className="w-full rounded-xl h-130 bg-gray-200 p-10 flex"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-1/2 flex flex-col justify-center h-full">
          <div className="flex items-center gap-4 mb-10">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactOption"
                value="sayHi"
                checked={selectedOption === "sayHi"}
                onChange={() => setSelectedOption("sayHi")}
                className="hidden"
              />
              <span
                className={`w-4 h-4 border-2 border-gray-800 rounded-full flex items-center justify-center ${
                  selectedOption === "sayHi" ? "bg-green-400 " : ""
                }`}
              ></span>
              Diga oi
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactOption"
                value="getQuote"
                checked={selectedOption === "getQuote"}
                onChange={() => setSelectedOption("getQuote")}
                className="hidden"
              />
              <span
                className={`w-4 h-4 border-2 border-gray-800 rounded-full flex items-center justify-center ${
                  selectedOption === "getQuote" ? "bg-green-400" : ""
                }`}
              ></span>
              Faça uma Pergunta
            </label>
          </div>

          <form className="space-y-4">
            <label className="block">
              <span>Nome</span>
              <input
                type="text"
                className="w-full border rounded p-2"
                placeholder="Nome"
              />
            </label>

            {selectedOption === "sayHi" ? (
              <>
                <label className="block">
                  <span>Email*</span>
                  <input
                    type="email"
                    className="w-full border rounded p-2"
                    placeholder="Email"
                    required
                  />
                </label>
                <label className="block">
                  <span>Mensagem*</span>
                  <textarea
                    className="w-full border rounded p-2"
                    placeholder="Mensagem"
                    required
                  />
                </label>
              </>
            ) : (
              <label className="block">
                <span>Pergunta*</span>
                <textarea
                  className="w-full border rounded p-2"
                  placeholder="Digite sua pergunta..."
                  required
                />
              </label>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded hover:bg-zinc-900 cursor-pointer transition-all ease-linear hover:scale-102"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
        <motion.div
          className="relative flex justify-end items-center w-1/2 h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="./images/desenho2.svg"
            alt="Ilustração Contato"
            className="max-w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SectionContato;
