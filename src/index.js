import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// A store is the library which holds "x" amount of states (reducers)
// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // after creating a store, we must make sure to "provide" it to
  // our parent 
  // <Provider store={store}>
    <App />
  // </Provider>
  ,
  document.querySelector("#root")
);
