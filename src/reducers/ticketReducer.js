import { GET_TICKETS, SET_TICKETS } from "../types";

export const initialState = {
  ticket: [],
};

export function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TICKETS: {
      return {
        ...state,
        ticket: [...state.ticket, action.payload],
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
