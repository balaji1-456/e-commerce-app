import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { ProductListReducer } from './reducers/productListReducer'
const reducer = combineReducers({
  productList: ProductListReducer,
})

const initialState = {}
const middleWare = [thunk]
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)),
)
