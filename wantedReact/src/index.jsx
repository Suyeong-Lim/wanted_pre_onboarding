import ReactDOM from "react-dom";
import React from "react";

//Global Style
import GlobalStyle from "./Components/GlobalStyle";

import Header from "./Components/Header";
import Padding from "./Components/Padding";
import TopBanner from "./Components/TopBanner";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Padding />
      <TopBanner />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
