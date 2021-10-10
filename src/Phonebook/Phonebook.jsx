import { connect } from "react-redux";
import Form from "./Form";
import PropTypes from "prop-types";
import ContactList from "./ContactList";
import Filter from "./Filter";
import style from "./Phonebook.module.css";
import contactsActions from "../redux/contacts-actions";

function Phonebook({ items, loadContactsOfLocStor }) {
  return (
    <section className={style.mainSection}>
      <h1>Phonebook</h1>
      <Form />

      <div className={style.containerContacts}>
        <h2>Contacts:</h2>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
}

Phonebook.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  loadContactsOfLocStor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ items: state.contacts.items });

const mapDispatchToProps = (dispatch) => ({
  loadContactsOfLocStor: (item) =>
    dispatch(contactsActions.firstLoadContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
