import { GET_TICKETS, SET_TICKETS } from "../types";

export const initialState = {
  ticket: [],
};

export function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TICKETS: {
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        places: [...state.places, action.payload],
      };
    }
    case GET_TICKETS: {
      return {
        ...state,
        origin: [action.payload],
      };
    }
    default:
      return state;
  }
}
