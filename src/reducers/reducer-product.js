import { FETCH_PRODUCT, ADD_TO_CART } from '../actions/index';
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
      case FETCH_PRODUCT:
        return {...state, items: action.payload.items };
      case ADD_TO_CART:
        return state.product.cart.concat(action.payload);
      default:
        return state;
  }
}
