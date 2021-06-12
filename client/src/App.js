import "./App.css";
import React from "react";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Thankyou from "./form handler/thankyou";
import Error from "./form handler/error";
import Exist from "./form handler/exists";
import { applyMiddleware } from "redux";
import { appMiddleware } from "./form handler/middlewares/app";
import { apiMiddleware } from "./form handler/middlewares/core";
import reducer from "./form handler/reducer";
import { createStore } from "redux";
const createStoreWithMiddleware = applyMiddleware(
  appMiddleware,
  apiMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/thank-you">
              <Thankyou />
            </Route>
            <Route path="/error">
              <Error />
            </Route>
            <Route path="/exists">
              <Exist />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
