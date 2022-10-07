// All of the reducers react to every single action
import { createContext } from "react";
import { USER_ACTION_TYPES } from "./user.types";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
