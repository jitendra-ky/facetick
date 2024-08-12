import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import Featured from './components/Featured';
import Skill from './components/Skill';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function App() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (<>
    <Background />
    <div className="App">
      <header className="App-header" id='header'>
        <Header scrollIntoView={scrollToSection} />
      </header>
      <main>
        <section id="banner"><Banner /></section>
        <section id="featured"><Featured /></section>
        <section id="skills"><Skill /></section>
        <section id='projects'></section>
      </main>
      <footer id='footer'>
        <Footer />
      </footer>
      <div className='back-to-top' onClick={() => scrollToSection('header')}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  </>);
}

export default App;
