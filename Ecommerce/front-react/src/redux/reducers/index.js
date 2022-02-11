// import counterReducer from "./counter";
// import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducter";

// premier essai counter
// const allReducers = combineReducers({
//   counter: counterReducer,
//   isLogged: loggedReducer,
// });

// {--------------------------------------------}
// pour le store
// {--------------------------------------------}

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
// export default allReducers;
