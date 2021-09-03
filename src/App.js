import "./App.scss";
import React from "react";
import Todoslist from "./components/todoslist";
import TodosForm from "./components/todosForm";
import ShowMoreBtn from "./components/showMoreBtn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodosItemList } from "./components/todosItemList";
import Loading from "./components/loading";
import TodoFormBottom from "./components/todoFormBottom";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <TodosForm />
            <Todoslist />
            <Loading />
            <TodoFormBottom />
            <ShowMoreBtn />
          </Route>
          <Route path="/:name" component={TodosItemList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
