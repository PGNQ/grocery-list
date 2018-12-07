import { FETCH_PRODUCT, ADD_TO_CART } from '../actions/index';
import _ from "lodash";

export default function(state = {cart:[]}, action) {
  switch (action.type) {
      case FETCH_PRODUCT:
        return {...state, items: action.payload.items };
      case ADD_TO_CART:
      console.log(state);
        return state.cart.concat(action.payload);
      default:
        return state;
  }
}
