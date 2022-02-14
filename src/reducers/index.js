import { combineReducers } from "redux";
import { flightReducer } from "./flightReducer";
import { shoppingReducer } from "./shoppingReducer";
import { ticketReducer } from "./ticketReducer";

const reducer = combineReducers({
  flight: flightReducer,
  shopping: shoppingReducer,
  ticket: ticketReducer,
});

export default reducer;
