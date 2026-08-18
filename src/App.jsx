import { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/  ContactList/  ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    // name: "",
    // number: "",
    // id: "",
    filter: "",
  };

  hendelSend = (e) => {
    e.preventDefault();

    


    const itemFil = this.state.contacts.filter((item) => item.name === e.currentTarget.elements.name.value)

    console.log(itemFil.length)
    if(itemFil.length >= 1){
     alert('Не можно додавати однакова імя')
         e.currentTarget.reset();
     return
    }

    const item = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
      id: nanoid(),
    };

    this.state.contacts.push(item);

    this.setState({
      contacts: this.state.contacts,
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
      // id: this.id
    });

    e.currentTarget.reset();
  };

  hedlelInput = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    })
  };

  deleteItem = (id ) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((item) => item.id !== id)
    }))
  }

  render() {
    const { contacts, name, number,  filter } = this.state;

    const itemFilter = contacts.filter((item) => item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    
    // console.log(itemFilter)

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm hendelSend={this.hendelSend}/>

        <h2>Contacts</h2>


        <Filter hedlelInput={this.hedlelInput}/>
       <ContactList itemFilter={itemFilter} deleteItem={this.deleteItem}/>
      </>
    );
  }
}

export default App;
