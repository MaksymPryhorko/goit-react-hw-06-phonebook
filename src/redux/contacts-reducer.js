import { combineReducers } from "redux";
import actionTypes from "./contacts-types";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case actionTypes.FIRST_LOAD:
      return [...state, ...payload];

    case actionTypes.DELETE:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
