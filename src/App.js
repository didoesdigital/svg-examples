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
    <Router basename="/svg-examples">
      <div className="App">
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
            <li>
              <Link to="/example-four">Example four</Link>
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
            <Route path="/example-four">
              <ExampleFour />
            </Route>
          </Switch>
        </div>
        <footer className="App-footer">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </footer>
      </div>
    </Router>
  );
}

function Icon({title, titleId, hidden, props}) {
  return (
    <svg
      className="icon"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={hidden ? null : "img"}
      aria-labelledby={titleId}
      aria-hidden={hidden ? true : null}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.395 1a.5.5 0 00-.486.384l-4.762 20a.5.5 0 00.486.616h14.734a.5.5 0 00.486-.616l-2.216-9.308 1.87-2.137a2 2 0 10-1.434-1.399L17.07 9.689l-1.977-8.305A.5.5 0 0014.604 1h-5.21zm6.102 10.485l-1.906-8.1A.5.5 0 0013.104 3h-2.208a.5.5 0 00-.486.385l-2.824 12a.5.5 0 00.487.615h3.473l3.95-4.515zM14.204 16h1.724a.5.5 0 00.487-.614l-.355-1.507L14.204 16zm-7.559 3.386a.5.5 0 00.487.614h9.737a.5.5 0 00.487-.614l-.236-1a.5.5 0 00-.486-.386H7.367a.5.5 0 00-.487.386l-.235 1zM12 7a1 1 0 100-2 1 1 0 000 2zm.999 2a1 1 0 11-2 0 1 1 0 012 0zM12 13a1 1 0 100-2 1 1 0 000 2zm8-4.5a.5.5 0 100-1 .5.5 0 000 1z"
        fill="currentColor"
      />
    </svg>
  );
}

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div style={{maxWidth: "650px", width: "100%", textAlign: "left", margin: "0 auto" }}>
        <p>Some resources:</p>
        <ul style={{ lineHeight: "1.5em" }}>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG">MDN docs: SVG</a></li>
          <li><a href="https://www.youtube.com/watch?v=emFMHH2Bfvo&feature=youtu.be">SVG Explained in 100 Seconds by Fireship on YouTube</a></li>
          <li><a href="https://caniuse.com/?search=svg">CanIUse SVG… by Alexis Deveria and community</a></li>
          <li><a href="https://wattenberger.com/guide/scaling-svg">Scaling SVG Elements: Getting an understanding of viewBox by Amelia Wattenberger</a></li>
          <li><a href="https://www.sarasoueidan.com/blog/svg-coordinate-systems/">Understanding SVG Coordinate Systems and Transformations (Part 1) — The viewport, viewBox, and preserveAspectRatio by Sara Soueidan</a></li>
          <li><a href="https://css-tricks.com/accessible-svgs/">Accessible SVGs by Heather Migliorisi</a></li>
          <li><a href="https://jakearchibald.github.io/svgomg/">SVGOMG by Jake Archibald</a> powered by <a href="https://github.com/svg/svgo">SVGO</a></li>
          <li><a href="https://svgtojsx.com/">SVG-to-JSX by Vishnu Baliga</a></li>
          <li><a href="https://transform.tools/">Transform SVG to jsx by Ritesh Kumar</a></li>
          <li><a href="https://www.figma.com/community/plugin/749818562498396194/SVG-to-JSX">Figma SVG to JSX by Sara Vieira</a></li>
          <li><a href="https://react-svgr.com/docs/getting-started">React SVGR</a></li>
          <li><a href="https://gregberge.com/blog/svg-to-react-component-with-svgr">SVG to React component with SVGR by Greg Bergé</a></li>
          <li><a href="https://css-tricks.com/tips-aligning-icons-text/">Tips for Aligning Icons to Text by Geoff Graham</a></li>
          <li><a href="https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4">Align SVG Icons to Text and Say Goodbye to Font Icons by Elliot Dahl</a></li>
          <li><a href="https://svg-path-visualizer.netlify.app">Path visualizer by Mathieu Dutour</a></li>
          <li><a href="https://stackoverflow.com/questions/18467982/are-svg-parameters-such-as-xmlns-and-version-needed">Stack Overflow: Are SVG parameters such as 'xmlns' and 'version' needed?</a></li>
        </ul>
      </div>
    </main>
  );
}

function ExampleOne() {
  return (
    <main>
      <h1>Example one</h1>
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
      <h1>Example two</h1>

      <button onClick={() => updateFavicon()}>Update favicon</button>
      <SyntaxHighlighter language="jsx" style={coy} wrapLongLines={true}>
        {codeString}
      </SyntaxHighlighter>

    </main>
  );
}

function ExampleThree() {
  return (
    <main>
      <h1><Icon title="Metronome" hidden={true} /> Example three</h1>
      <a href="https://didoesdigital.com/typey-type/support#metronome" target="_blank" rel="noreferrer" aria-label="Metronome opens in new tab" style={{ backgroundColor: "#EAF2FA", padding: "0.5em 1em", borderRadius: "8px", textDecoration: "none", color: "#093B72" }}>
        <Icon title="Metronome" hidden={true} /> Typey Type metronome
      </a>
    </main>
  );
}

function ExampleFour() {
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
      <h1>Example three</h1>
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
