import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware,
      logger
    )
  )
); // 여러개의 미들웨어를 적용 할 수 있습니다.

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
