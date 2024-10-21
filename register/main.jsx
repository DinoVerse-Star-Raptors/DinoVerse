import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
// import App from "./App";

function App() {
  return <div>Hello World!</div>;
}

const root = createRoot(document.querySelector("#app"));
root && root.render(<App />);
// ReactDOM.createRoot(document.getElementById("app")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.querySelector("#app")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// document.querySelector("#app").innerHTML = (() => {
//   return `Register in main.js`;
// })();

// Usage
// In the browser
// import { createRoot } from 'react-dom/client';

// function App() {
//   return <div>Hello World</div>;
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
// On the server
// import { renderToPipeableStream } from 'react-dom/server';

// function App() {
//   return <div>Hello World</div>;
// }

// function handleRequest(res) {
//   // ... in your server handler ...
//   const stream = renderToPipeableStream(<App />, {
//     onShellReady() {
//       res.statusCode = 200;
//       res.setHeader('Content-type', 'text/html');
//       stream.pipe(res);
//     },
//     // ...
//   });
// }
