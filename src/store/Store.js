// where all the redux happens
//weher state lives, recieve action and dispatch them to reducers to update state

import { compose, createStore, applyMiddleware } from "redux";
//logger allows to see the state before the action is dispatched, state after the action and also the action
import logger from "redux-logger";
import { RootReducer } from "./Root-Reducer";

// middleware runs before the action hits the reducer
const middleware = [logger];

// compose allows to pass multiple functions left to right
const composedEnhancers = compose(applyMiddleware(...middleware));

export const stores = createStore(RootReducer, undefined, composedEnhancers);
