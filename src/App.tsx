import Header from "./components/Header";
import SectionHome from "./components/SectionHome";
import SectionSobre from "./components/SectionSobre";
import SectionContato from "./components/SectionContato";
import SectionServicos from "./components/SectionServicos";

const App = () => {
  return (
    <div>
      <Header />
      <SectionHome />
      <SectionServicos />
      <SectionSobre />
      <SectionContato />
    </div>
  );
};

export default App;
