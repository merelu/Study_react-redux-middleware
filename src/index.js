import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  //loger를 사용하는 경우, logger가 가장 마지막에 와야한다.
  composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware, logger))
); //여러개의 미들웨어를 적용 할 수 있다.

sagaMiddleware.run(rootSaga); //루트 사가를 실행해준다.
//스토어 생성이 된 다음에 위 코드를 실행해야한다.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
