import axios from "axios";
import { cornFlakes } from '../data/data-corn-flakes';

const ROOT_URL = 'http://localhost:3000/data-corn-flakes.json';
// const ROOT_URL = 'http://api.upcitemdb.com/prod/trial/';

export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const ADD_TO_CART = 'ADD_TO_CART';

export function fetchProduct(query) {
  const url =`${ROOT_URL}search?s=${query}&match_mode=0&type=product`;
  // const request = axios.get(url)
  const request = cornFlakes;

  console.log('Request', request);

  return {
    type: FETCH_PRODUCT,
    payload: request
  };
}

export function addToCart(item) {

  return {
    type: ADD_TO_CART,
    payload: item
  };
}
