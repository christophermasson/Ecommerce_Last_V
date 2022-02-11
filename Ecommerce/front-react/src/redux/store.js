import { createStore } from "redux";
import reducers from "./reducers/index";
import counterReducer from "../redux/actions/index";

const store = createStore(
  reducers,
  { counter: counterReducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
