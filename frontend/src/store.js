
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productDetailsReducer,
  ProductListReducer,
} from "./reducers/productReducer";
const reducer = combineReducers({
  productList: ProductListReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};
const middleWare = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

