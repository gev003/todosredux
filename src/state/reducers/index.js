import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  loading: loadingReducer,
});

export default rootReducer;
