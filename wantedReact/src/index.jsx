import ReactDOM from "react-dom";
import React from "react";

function App() {
  const name = "TaeHee";

  return <h1>Hello {name}</h1>;
}

ReactDOM.render(<App />, document.getElementById("app"));
