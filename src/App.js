import logo from './logo.svg';
import dfinityLogo from './dfinity-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dfinityLogo} className="dfinity-logo" alt="logo" />
        +
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dfinity测试网站部署
        </p>
        </a>
      </header>
    </div>
  );
}

export default App;
