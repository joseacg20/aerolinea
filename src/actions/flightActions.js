import {
  GET_PLACES,
  SET_DATE,
  SET_DESTINATION,
  SET_ORIGIN,
  SET_PERSONS,
} from "../types";

export const getPlaces = (places) => ({ type: GET_PLACES, payload: places });

export const setOrigin = (id) => ({ type: SET_ORIGIN, payload: id });

export const setDestination = (id) => ({ type: SET_DESTINATION, payload: id });

export const setPersons = (persons) => ({
  type: SET_PERSONS,
  payload: persons,
});

export const setDate = (date) => ({ type: SET_DATE, payload: date });
