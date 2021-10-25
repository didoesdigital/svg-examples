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

        <div style={{ minHeight: '100vh' }}>
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
      <p><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes">Basic shapes</a>:</p>
      {/* Default is: width="300" height="150" */}
      <svg>
        <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
        <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

        <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
        <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

        <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
        <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
            stroke="orange" fill="transparent" stroke-width="5"/>

        <polygon points="150,60 155,80 170,80 160,90 165,105 150,95 135,105 140,90 130,80 145,80"
            stroke="green" fill="transparent" stroke-width="5"/>

        <path d="M120,130 Q140,105 150,130 T190,130" fill="none" stroke="blue" stroke-width="5"/>

        <text x="120" y="0" dy="1.5em" fill="#3C3941" font-size="1.4em" font-weight="600">text</text>
      </svg>
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

