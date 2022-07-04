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
        <footer>
          Coded by Hajarah and open-source code on{" "}
          <a href="https://app.netlify.com/sites/fluffy-lollipop-286547/overview"> netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
