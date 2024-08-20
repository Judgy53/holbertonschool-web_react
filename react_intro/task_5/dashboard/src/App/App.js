import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </div>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <form>
          <label>
            Email:
            <input type="email" autoComplete="email" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button type="button">
            Ok
          </button>
        </form>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
