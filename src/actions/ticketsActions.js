import { GET_TICKETS, SET_TICKETS } from "../types";

export const getTickets = (tickets) => ({
  type: GET_TICKETS,
  payload: tickets,
});

export const setTickets = (tickets) => ({
  type: SET_TICKETS,
  payload: tickets,
});
