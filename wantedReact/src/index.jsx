import ReactDOM from "react-dom";
import React from "react";

//Global Style
import GlobalStyle from "./Components/GlobalStyle";

import Header from "./Components/Header";
import Padding from "./Components/Padding";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Padding />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
