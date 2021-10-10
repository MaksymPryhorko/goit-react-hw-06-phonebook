import { createAction } from "@reduxjs/toolkit";
const addContact = createAction("contacts/add");
const deleteContact = createAction("contacts/delete");
const changeFilter = createAction("contacts/changeFilter");
const firstLoadContact = createAction("contacts/firstLoad");

export default { addContact, deleteContact, changeFilter, firstLoadContact };
