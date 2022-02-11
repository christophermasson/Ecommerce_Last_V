import { ActionTypes } from "../constants/action-types";

export let artcileArray = [];

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProduct = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    payload: products,
  };
};

export const increment = (products) => {
  artcileArray.push(products);
  return {
    type: ActionTypes.INCREMENT,
    payload: products,
  };
};
