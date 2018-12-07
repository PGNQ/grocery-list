import { FETCH_PRODUCT } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
      case FETCH_PRODUCT:
        return [action.payload.items, ...state]
  }
  return state;
}
