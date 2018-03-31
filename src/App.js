import React from "react";
import ReactDOM from "react-dom";
import './style.scss';

import Main from "./components/Main";

const App = () => (
  <div>
    <Main />
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));
