import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import SectionHero from "../components/home/SectionHero";
import SectionServicos from "../components/home/SectionServicos";
import SectionSobre from "../components/home/SectionSobre";
import SectionContato from "../components/home/SectionContato";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); 
      }
    }
  }, [location]);

  return (
    <main>
      <HomeHeader />
      <div id="home">
        <SectionHero />
      </div>
      <div id="servicos">
        <SectionServicos />
      </div>
      <div id="sobre">
        <SectionSobre />
      </div>
      <div id="contato">
        <SectionContato />
      </div>
      <HomeFooter />
    </main>
  );
};

export default Home;
