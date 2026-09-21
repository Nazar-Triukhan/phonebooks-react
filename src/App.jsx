
import { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/  ContactList/  ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem("users");
    return saveContacts ? JSON.parse(saveContacts) : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(contacts));
  }, [contacts]);

  const hendelSend = (e) => {
    e.preventDefault();

    const itemFil = contacts.filter(
      (item) => item.name === e.currentTarget.elements.name.value,
    );

    if (itemFil.length >= 1) {
      alert("Не можно додавати однакова імя");
      e.currentTarget.reset();
      return;
    }

    const item = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
      id: nanoid(),
    };

    setContacts((prev) => [...prev, item]);

    e.currentTarget.reset();
  };

  const deleteItem = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const hedlelInput = (e) => {
    setFilter(e.currentTarget.value);
  };

  const itemFilter = contacts.filter((item) =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm hendelSend={hendelSend} />

      <h2>Contacts</h2>

      <Filter hedlelInput={hedlelInput} />
      <ContactList itemFilter={itemFilter} deleteItem={deleteItem} />
    </>
  );
}

export default App;
