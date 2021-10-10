import React from "react";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";

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

export default ContactList;
