var React = require("react");
var ReactDOM = require("react-dom");
import App from "./components/Main";
import { BrowserRouter, HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./components/store/index";

// inside your render function
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
