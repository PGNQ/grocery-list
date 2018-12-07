import axios from "axios";

const ROOT_URL = 'http://localhost:3000/data-corn-flakes.json';


export const FETCH_PRODUCT = "FETCH_PRODUCT";

export function fetchProduct(product) {
  const url = `${ROOT_URL}`;
  const request = axios.get(url)

  console.log('Request', request);

  return {
    type: FETCH_PRODUCT,
    payload: request
  };
}
