import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";
import { selectedProductReducer } from "./productReducer";
const reducers = combineReducers({
  allProduct: productsReducer,
  product: selectedProductReducer,
});

export default reducers;
