import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import logo from './logo.svg';
import './App.css';
import { scaleOrdinal } from "d3-scale";
import { arc, pie } from "d3-shape";

SyntaxHighlighter.registerLanguage('jsx', jsx);

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
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'space-between', marginRight: "16px" }}>
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
        </nav>

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
    <main>
      <h2>Home</h2>
      <div style={{maxWidth: "650px", width: "100%", textAlign: "left", margin: "0 auto" }}>
        <p>Some resources:</p>
        <ul style={{ lineHeight: "1.5em" }}>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG">MDN docs: SVG</a></li>
          <li><a href="https://caniuse.com/?search=svg">CanIUse SVG…</a></li>
          <li><a href="https://wattenberger.com/guide/scaling-svg">Scaling SVG Elements: Getting an understanding of viewBox by Amelia Wattenberger</a></li>
          <li><a href="https://css-tricks.com/accessible-svgs/">Accessible SVGs</a></li>
          <li><a href="https://svgtojsx.com/">SVG-to-JSX</a></li>
          <li><a href="https://transform.tools/">Transform SVG to jsx</a></li>
          <li><a href="https://www.figma.com/community/plugin/749818562498396194/SVG-to-JSX">Figma SVG to JSX</a></li>
          <li><a href="https://react-svgr.com/docs/getting-started">React SVGR</a></li>
          <li><a href="https://gregberge.com/blog/svg-to-react-component-with-svgr">SVG to React component with SVGR by Greg Bergé</a></li>
          <li><a href="https://svg-path-visualizer.netlify.app">Path visualizer</a></li>
          <li><a href="https://stackoverflow.com/questions/18467982/are-svg-parameters-such-as-xmlns-and-version-needed">Stack Overflow: Are SVG parameters such as 'xmlns' and 'version' needed?</a></li>
        </ul>
      </div>
    </main>
  );
}

function ExampleOne() {
  return (
    <main>
      <h2>Example one</h2>
      <p><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes">Basic shapes</a>:</p>
      {/* Default is: width="300" height="150" */}
      {/* <svg viewBox="0 0 300 150" style={{ maxWidth: "300px" }}> */}
      <svg aria-labelledby="my-title">
        <title id="my-title">Silly SVG example</title>

        <rect role="presentation" x="10" y="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5"/>
        <rect role="presentation" x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5"/>

        <circle role="presentation" cx="25" cy="75" r="20" stroke="red" fill="transparent" strokeWidth="5"/>
        <ellipse role="presentation" cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" strokeWidth="5"/>

        <line role="presentation" x1="10" x2="50" y1="110" y2="150" stroke="orange" strokeWidth="5"/>
        <polyline role="presentation" points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
            stroke="orange" fill="transparent" strokeWidth="5"/>

        <polygon role="presentation" points="150,60 155,80 170,80 160,90 165,105 150,95 135,105 140,90 130,80 145,80"
            stroke="green" fill="transparent" strokeWidth="5"/>

        <path role="presentation" d="M120,130 Q140,105 150,130 T190,130" fill="none" stroke="blue" strokeWidth="5"/>

        <text x="120" y="0" dy="1.5em" fill="#3C3941" fontSize="1.4em" fontWeight="600">text</text>
      </svg>
    </main>
  );
}

// <svg>
//   <rect
//     role="presentation"
//     x={10}
//     y={10}
//     width={30}
//     height={30}
//     stroke="black"
//     fill="transparent"
//     strokeWidth={5}
//   />
//   <rect
//     role="presentation"
//     x={60}
//     y={10}
//     rx={10}
//     ry={10}
//     width={30}
//     height={30}
//     stroke="black"
//     fill="transparent"
//     strokeWidth={5}
//   />
//   <circle
//     role="presentation"
//     cx={25}
//     cy={75}
//     r={20}
//     stroke="red"
//     fill="transparent"
//     strokeWidth={5}
//   />
//   <ellipse
//     role="presentation"
//     cx={75}
//     cy={75}
//     rx={20}
//     ry={5}
//     stroke="red"
//     fill="transparent"
//     strokeWidth={5}
//   />
//   <line
//     role="presentation"
//     x1={10}
//     x2={50}
//     y1={110}
//     y2={150}
//     stroke="currentColor"
//     strokeWidth={5}
//   />
//   <polyline
//     role="presentation"
//     points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
//     stroke="currentColor"
//     fill="transparent"
//     strokeWidth={5}
//   />
//   <polygon
//     role="presentation"
//     points="150,60 155,80 170,80 160,90 165,105 150,95 135,105 140,90 130,80 145,80"
//     stroke="green"
//     fill="transparent"
//     strokeWidth={5}
//   />
//   <path
//     role="presentation"
//     d="M120,130 Q140,105 150,130 T190,130"
//     fill="none"
//     stroke="blue"
//     strokeWidth={5}
//   />
//   <text
//     x={120}
//     y={0}
//     dy="1.5em"
//     fill="#3C3941"
//     fontSize="1.4em"
//     fontWeight={600}
//   >
//     {"text"}
//   </text>
// </svg>

function updateFavicon() {
  const favicon = document.querySelector("link[rel~='icon']")
  favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎉</text></svg>'
  setTimeout(restoreFavicon, 3000);
}

function restoreFavicon() {
  document.querySelector("link[rel~='icon']").href = process.env.PUBLIC_URL + "/favicon.ico"
}

function ExampleTwo() {
  const codeString = `<link
  rel="icon"
  type="image/svg+xml"
  href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎉</text></svg>'
  >`
  return (
    <main>
      <h2>Example two</h2>

      <button onClick={() => updateFavicon()}>Update favicon</button>
      <SyntaxHighlighter language="jsx" style={coy} wrapLongLines={true}>
        {codeString}
      </SyntaxHighlighter>

    </main>
  );
}

function ExampleThree() {
  const data = [
    { category: "Mobile", count: 60 },
    { category: "Tablet", count: 1 },
    { category: "Desktop", count: 39 },
  ];

  const color = scaleOrdinal()
    .domain(data.map(d => d.category))
    .range(['#9880C2', '#E17547', '#09A573'])

  const width = 300;
  const height = 300;
  const radius = Math.min(width, height) / 2;

  const pieGenerator = pie()
    .padAngle(0.005)
    .value(d => d.count);

  const arcs = pieGenerator(data);

  const arcGenerator = arc()
    .innerRadius(radius * 0.46)
    .outerRadius(radius * 0.8);

  return (
    <main>
      <h2>Example three</h2>
      <svg viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`} style={{ maxWidth: `${width}px` }} aria-labelledby="my-donut">
        <title id="my-donut">Device donut chart</title>

        {arcs.map((d) => (
          <React.Fragment key={d.data.category}>
            <path
              id={`arc-${d.data.category}`}
              fill={color(d.data.category)}
              d={arcGenerator(d)}
              role="presentation"
            />
            <text dy="-0.5em" fill="#676170" opacity={d.data.count < 5 ? 0 : 1}>
              <textPath
                startOffset="25%"
                style={{textAnchor: "middle"}}
                href={`#arc-${d.data.category}`}
              >
                {`${d.data.category} ${d.data.count}%`}
              </textPath>
            </text>
          </React.Fragment>
        ))}
      </svg>
    </main>
  );
}

