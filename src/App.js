import React, { Component} from 'react';
import './App.css';
import Section from './Components/Section';
import Form from './Components/Form';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import shortid from 'shortid'
class App extends Component {
  state = {
    contacts: [
    {id: 'id-0', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-1', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-2', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-3', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: ''
  };

  formSabmitData = ({ name, number }) => {
    const temp = {
      name,
      number,
      id: `id-${shortid.generate()}`
    };
    if (this.state.contacts.filter(e => e.name === temp.name).length === 0) {
      this.setState(prevState => ({ contacts: [...prevState.contacts, temp], }));
    }
    else {
      alert(`${name} уже существует в контактах!`);
    }
  };
  
  inputChange = e => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value});
  };

  filterContacts = name => {
   return this.state.contacts.filter(e => e.name.toLowerCase().includes(name.toLowerCase()) );
    
  };

  deleteContact = id => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id),}));
  };
  
  render() {
    return (
      <div className="App">
        <Section title="Телефонная книга">
          <Form onSubmit={this.formSabmitData}/>
        </Section>
        <Section title="Контакты">
          <Filter filter={this.state.filter} inputChange={this.inputChange}/>
          <ContactList contacts={this.filterContacts(this.state.filter)} onDeleteContact={this.deleteContact}/>
        </Section>
      </div>
    );
   }
}

export default App;
