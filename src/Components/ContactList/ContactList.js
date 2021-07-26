import React from 'react';
import './ContactList.css';
import PropTypes from 'prop-types';
const ContactList = ({ contacts , onDeleteContact}) => (
   <ul className="ContactList">
      {contacts.map(contact =>
         <li key={contact.id} >
            <p>{contact.name}: {contact.number}</p>
            <button onClick={()=>onDeleteContact(contact.id)}>Удалить</button>
         </li>
      )}
    </ul> 
);
ContactList.defaultProps = {
    contacts: [],
};
ContactList.propTypes = {
    contacts: PropTypes.array,
    inputChange: PropTypes.func,
};
export default ContactList;