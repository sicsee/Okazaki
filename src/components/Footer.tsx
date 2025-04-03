export default function Footer() {
  return (
    <>
      <section className="px-30 mt-10">
        <footer className="w-full rounded-xl bg-dark p-10 flex flex-col">
          <div className="flex items-center w-full justify-between mb-10">
            <div className="flex items-center gap-1">
              <i className="ri-dna-line text-white text-xl"></i>
              <h1 className="font-play text-2xl text-white font-extrabold">
                Clínica Okazaki
              </h1>
            </div>

            <ul className="flex items-center gap-4 text-gray-300 underline">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <a href="#">
                <i className="rede ri-linkedin-line"></i>
              </a>
              <a href="#">
                <i className="rede ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i className="rede ri-twitter-fill"></i>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex  flex-col space-y-4 text-white">
              <span className="font-Jett text-md font-medium text-black bg-green-700 w-fit px-4 rounded-md">
                Contate-nos
              </span>
              <span>Email: info@positivus.com</span>
              <span>Phone: 555-567-8901</span>
              <span className="w-80">
                Address: 1234 Main St Moonstone City, Stardust State 12345
              </span>
            </div>

            <div className="flex bg-[#292A32] items-center justify-center text-center w-120 h-40 rounded-xl gap-5">
              <input
                type="email"
                name="Email"
                id="1"
                className="p-3 border border-white rounded-xl text-white"
                placeholder="Email"
              />
              <button className="btn py-3 px-7">Receba Avisos</button>
            </div>
          </div>
          <div className="w-full border-white border mt-10"></div>
          <div className="text-white mt-10 flex text-center w-full items-center justify-center gap-4">
            <p>&copy; 2025 Todos os direitos reservados.</p>
            <div className="items-center flex">
              <p>Site made by</p>
              <a
                href="https://github.com/sicsee"
                className="font-jett text-xl text-purple-400 ml-1 animate-pulse"
                target="_blank"
              >
                Sics
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
