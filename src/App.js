import books from "./books.png"
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={books}
            className="App-logo img-fluid text-center"
            alt="logo"
          />
        </header>
        <Dictionary defaultKeyword="Shopping" />
        <footer>Coded by Hajarah</footer>
      </div>
    </div>
  );
}

export default App;
