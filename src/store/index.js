import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";
import { loadState, saveState } from "../services/localStorage";

const initialData = loadState();

const store = createStore(reducer, initialData, composeWithDevTools());
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
