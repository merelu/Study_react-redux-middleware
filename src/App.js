import React from "react";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import { Route } from "react-router";
import CounterContainer from "./containers/CounterContainer";
import SagaCounterContainer from "./containers/Saga-CounterContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
      <hr />
      <SagaCounterContainer />
      <hr />
    </>
  );
}

export default App;
