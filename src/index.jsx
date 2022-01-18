import ReactDOM from "react-dom";
import React from "react";

//Global Style
import GlobalStyle from "./styles/GlobalStyle";
//반응형 style
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import Header from "./Components/Header";
import Padding from "./Components/Padding";
import TopBanner from "./Components/TopBanner";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Padding />
        <TopBanner />
      </ThemeProvider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
