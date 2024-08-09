import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Background from './components/Background';
import Header from './components/Header';

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
        <section><Banner /></section>
        <section><Banner /></section>
        <section><Banner /></section>
      </main>
      <footer id='sample'>
        Footer
      </footer>
      <div className='back-to-top' onClick={() => scrollToSection('header')}>🔝</div>
    </div>
  </>);
}

export default App;
