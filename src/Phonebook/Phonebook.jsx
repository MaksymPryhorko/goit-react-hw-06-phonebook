import { connect } from "react-redux";
import { useEffect } from "react";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import style from "./Phonebook.module.css";
import contactsActions from "../redux/contacts-actions";

function Phonebook({ items, sendContactsToStateOfLocalStorage }) {
  const contactsOfLocStor = JSON.parse(window.localStorage.getItem("contacts"));

  useEffect(() => {
    if (contactsOfLocStor.length === 0) {
      return;
    }
    sendContactsToStateOfLocalStorage(contactsOfLocStor);
  }, []);

  useEffect(() => {
    if (contactsOfLocStor.length === items.length) {
      return;
    }
    localStorage.setItem("contacts", JSON.stringify(items));
  }, [items]);

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

const mapStateToProps = (state) => ({ items: state.contacts.items });

const mapDispatchToProps = (dispatch) => ({
  sendContactsToStateOfLocalStorage: (item) =>
    dispatch(contactsActions.firstLoadContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
