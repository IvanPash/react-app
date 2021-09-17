import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import MyContext from "./context";

let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <MyContext.Provider value={store}>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </MyContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireThree(store.getState());

store.subscribe(() => {
  rerenderEntireThree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
