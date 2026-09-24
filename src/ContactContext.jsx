import { useState, useEffect, createContext , useRef} from "react";
import { nanoid } from "nanoid";

export const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState(() => {
    const localItem = window.localStorage.getItem("users");
    const jsonItem = JSON.parse(localItem);

    if (jsonItem !== null) {
      return jsonItem;
    }

    return [];
  });

    const inputId = useRef(null)


  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(contacts));
  }, [contacts]);

  const deleteItem = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

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

    inputId.current.focus()
  };

  const hedlelInput = (e) => {
    setFilter(e.currentTarget.value);
  };

  const itemFilter = contacts.filter((item) =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  return (
    <ContactContext.Provider
      value={{ contacts, deleteItem, hendelSend, hedlelInput, itemFilter, inputId }}
    >
      {children}
    </ContactContext.Provider>
  );
}
