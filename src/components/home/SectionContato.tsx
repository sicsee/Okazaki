import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const SectionContato: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("sayHi");
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        "service_8mjp58f",
        "template_3lrz5tl",
        form,
        "AONFFeo19T-t1SBdP"
      )
      .then(() => {
        setMessage("Mensagem enviada com sucesso!");
        form.reset();
      })
      .catch(() => setMessage("Erro ao enviar a mensagem."));

    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col min-h-screen px-6 md:px-20 py-10"
    >
      <div className="font-Jett text-3xl font-medium text-black bg-gray-200 w-fit px-4 rounded-xl mb-5">
        <h1>Contate-nos</h1>
      </div>

      <motion.div
        className="w-full rounded-xl bg-gray-200 p-6 md:p-10 flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
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

          <form className="space-y-4" onSubmit={sendEmail}>
            <label className="block">
              <span>Nome</span>
              <input
                type="text"
                name="name"
                className="w-full border rounded p-2"
                placeholder="Nome"
                required
              />
            </label>

            {selectedOption === "sayHi" ? (
              <>
                <label className="block">
                  <span>Email*</span>
                  <input
                    type="email"
                    name="email"
                    className="w-full border rounded p-2"
                    placeholder="Email"
                    required
                  />
                </label>
                <label className="block">
                  <span>Mensagem*</span>
                  <textarea
                    name="message"
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
                  name="message"
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

          {message && (
            <p className="text-center mt-4 text-green-500">{message}</p>
          )}
        </div>

        <motion.div
          className="relative flex justify-center items-center w-full md:w-1/2"
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
