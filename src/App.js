import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Skill from './components/Skill';
import Projects from './components/Projects';

function App() {
  return (<>
    <header>
      <Header />
      <Banner />
    </header>
    <Skill />
    <Projects />
    <Footer />
  </>
  );
}

export default App;
