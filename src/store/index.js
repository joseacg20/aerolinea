import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";
import { loadState, saveState } from "../services/initial";

const initialData = loadState();
const store = createStore(reducer, initialData, composeWithDevTools());
store.subscribe(function () {
  saveState(store.getState());
});

// const store = createStore(reducer, composeWithDevTools());
// store.subscribe(() => store);
export default store;
