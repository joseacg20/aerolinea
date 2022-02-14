import {
  SET_ORIGIN,
  SET_DESTINATION,
  SET_PERSONS,
  SET_DATE,
  CLEAR_DATA,
} from "../types";

export const initialState = {
  origin: [],
  destination: [],
  persons: [],
  date: [],
};

export function flightReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORIGIN: {
      return {
        ...state,
        origin: action.payload,
      };
    }
    case SET_DESTINATION: {
      return {
        ...state,
        destination: action.payload,
      };
    }
    case SET_PERSONS: {
      return {
        ...state,
        persons: action.payload,
      };
    }
    case SET_DATE: {
      return {
        ...state,
        date: action.payload,
      };
    }
    case CLEAR_DATA:
      return initialState;
    default:
      return state;
  }
}
