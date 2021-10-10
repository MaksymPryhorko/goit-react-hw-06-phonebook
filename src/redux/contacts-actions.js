import actionTypes from "./contacts-types";

const addContact = (item) => ({
  type: actionTypes.ADD,
  payload: item,
});

const firstLoadContact = (item) => ({
  type: actionTypes.FIRST_LOAD,
  payload: item,
});

const deleteContact = (id) => ({
  type: actionTypes.DELETE,
  payload: id,
});

const changeFilter = (qwery) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: qwery,
});

export default { addContact, deleteContact, changeFilter, firstLoadContact };
