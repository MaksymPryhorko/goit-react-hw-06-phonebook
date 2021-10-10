import { connect } from "react-redux";
import contactsActions from "../../redux/contacts-actions";
import ContactList from "./ContactList";

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
