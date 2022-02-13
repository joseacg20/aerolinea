import { SET_DATE, SET_DESTINATION, SET_ORIGIN, SET_PERSONS } from "../types";

export const initialState = {
  places: [
    { id: 1, city: "Acapulco", state: "Guerrero", country: "México" },
    { id: 2, city: "Barcelona", state: "Cataluña", country: "España" },
    { id: 3, city: "Belin", state: "Berlin", country: "Alemania" },
    { id: 4, city: "Cali", state: "Valle de Cauca", country: "Colombia" },
    {
      id: 5,
      city: "Ciudad de México",
      state: "México D.F",
      country: "México",
    },
  ],
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
        origin: [action.payload],
      };
    }
    case SET_DESTINATION: {
      return {
        ...state,
        destination: [action.payload],
      };
    }
    case SET_PERSONS: {
      return {
        ...state,
        persons: [action.payload],
      };
    }
    case SET_DATE: {
      return {
        ...state,
        date: [action.payload],
      };
    }
    default:
      return state;
  }
}
