import thunk from "redux-thunk";
import { rootReducer } from "./reducer/rootReducer";
import { createStore, applyMiddleware, compose } from 'redux';

// https://www.npmjs.com/package/redux-thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer, /* preloadedState, */ 
    composeEnhancers(applyMiddleware(thunk)
));