import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./modules/index";
import "./scss/main.scss";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, applyMiddleware(thunk));
if (process.env.NODE_ENV === "development") {
  store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
}

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
