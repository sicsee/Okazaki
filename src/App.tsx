import Header from "./components/Header";
import SectionHome from "./components/SectionHome";
import SectionSobre from "./components/SectionSobre";
import SectionContato from "./components/SectionContato";
import SectionServicos from "./components/SectionServicos";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <SectionHome />
      <SectionServicos />
      <SectionSobre />
      <SectionContato />
      <Footer />
    </div>
  );
};

export default App;
