import {
  SET_DATE,
  SET_DESTINATION,
  SET_ORIGIN,
  SET_PERSONS,
  CLEAR_DATA,
} from "../types";

export const setOrigin = (id) => ({ type: SET_ORIGIN, payload: id });

export const setDestination = (id) => ({ type: SET_DESTINATION, payload: id });

export const setPersons = (persons) => ({
  type: SET_PERSONS,
  payload: parseInt(persons),
});

export const setDate = (date) => ({ type: SET_DATE, payload: date });

export const clearData = () => ({ type: CLEAR_DATA });
