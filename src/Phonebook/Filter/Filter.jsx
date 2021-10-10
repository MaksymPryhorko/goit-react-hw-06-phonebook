import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import style from "./Filter.module.css";
import contactsActions from "../../redux/contacts-actions";

function Filter({ filter, onChange }) {
  return (
    <div className={style.filterContainer}>
      <label className={style.labelFilter}>
        <input
          className={style.inputFilter}
          type="text"
          value={filter}
          onChange={onChange}
        />
        Find contacts by name
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = ({ contacts }) => {
  return {
    filter: contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
