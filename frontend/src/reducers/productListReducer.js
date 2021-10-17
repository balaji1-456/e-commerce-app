import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
} from './../constants/productConstants'

export const ProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { products: [], loading: true }
    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload, loading: false }
    case PRODUCT_LIST_FAILURE:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}
