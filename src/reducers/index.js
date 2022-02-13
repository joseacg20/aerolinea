import { combineReducers } from "redux";
import { flightReducer } from "./flightReducer";
import { shoppingReducer } from "./shoppingReducer";

const reducer = combineReducers({
  flight: flightReducer,
  shopping: shoppingReducer,
});

export default reducer;
