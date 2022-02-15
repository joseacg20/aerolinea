import { createStore } from "redux";
import reducer from "../reducers";
import { loadState, saveState } from "../services/localStorage";

const initialData = loadState();

const store = createStore(reducer, initialData);
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
