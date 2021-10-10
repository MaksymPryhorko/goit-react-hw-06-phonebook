import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";
import contactsActions from "../../redux/contacts-actions";

function ContactList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className={style.contactListItem}>
          <button
            className={style.btnDeleteContact}
            type="button"
            onClick={() => onDelete(item.id)}
          >
            delete
          </button>
          {item.name}: <span className={style.numberPhone}>{item.number}</span>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts }) => {
  const { items, filter } = contacts;
  const visibleContacts = getVisibleContacts(items, filter);

  return {
    items: visibleContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
