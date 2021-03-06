import {
  GET_PLACES,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  TOTAL_CART,
} from "../types";

export const getPlaces = (places) => ({ type: GET_PLACES, payload: places });

export const addToCart = (id, fligth) => ({
  type: ADD_TO_CART,
  payload: { id: id, fligth: fligth },
});

export const deleteFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });

export const totalCart = () => ({ type: TOTAL_CART });
