import { createGlobalStyle, CreateGlobalstyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
ul {
  padding: 0;
  border: 0;
  list-style: none;
}

button,
input {
  outline: none;
  cursor: pointer;
  overflow: hidden;
}
button,
select {
  text-transform: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  font-weight: normal;
  line-height: 1.5em;
}
button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-family: inherit;
  line-height: inherit;
  font-size: inherit;
}
/* Default CSS */
body {
  font-family: sans-serif;
  font-size: 18px;
  margin: 0;
  background-color: #fff;
  color: #222;
}

`;

export default GlobalStyle;
