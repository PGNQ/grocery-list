import { FETCH_PRODUCT, ADD_TO_CART } from '../actions/index';
import _ from "lodash";

export default function(state = {cart:[]}, action) {
  switch (action.type) {
      case FETCH_PRODUCT:
        return {...state, items: action.payload.items };
      case ADD_TO_CART:
        return {...state, cart: [...state.cart, action.payload]};
        
      default:
        return state;
  }
}
