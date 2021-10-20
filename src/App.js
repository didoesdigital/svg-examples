import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'space-between' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example-one">Example one</Link>
          </li>
          <li>
            <Link to="/example-two">Example two</Link>
          </li>
          <li>
            <Link to="/example-three">Example three</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/example-one">
            <ExampleOne />
          </Route>
          <Route path="/example-two">
            <ExampleTwo />
          </Route>
          <Route path="/example-three">
            <ExampleThree />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function ExampleOne() {
  return (
    <div>
      <h2>Example one</h2>
    </div>
  );
}

function ExampleTwo() {
  return (
    <div>
      <h2>Example two</h2>
    </div>
  );
}

function ExampleThree() {
  return (
    <div>
      <h2>Example three</h2>
    </div>
  );
}

