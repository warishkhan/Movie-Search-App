import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";


// Use the rootReducer from the reducers file
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
