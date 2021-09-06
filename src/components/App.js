import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const find = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (find) {
      alert(`${name} is already in contacts`);
      return false;
    }
    const arrContacts = [...contacts];
    arrContacts.push({
      id: uuidv4(),
      name,
      number,
    });
    setContacts(arrContacts);
    return true;
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={s.section}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
