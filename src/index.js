import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import reduces from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reduces)}>
    <App />,
  </Provider>,
  document.querySelector("#root")
);
