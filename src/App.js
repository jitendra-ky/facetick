import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <main>
        <section><Banner /></section>
        <section><Banner /></section>
        <section><Banner /></section>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
