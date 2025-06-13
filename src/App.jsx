import "./App.css";
import Title from "./components/Title/Title";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

// import { useLocalStorage } from "./hooks/useLocalStorage";

import { nanoid } from "nanoid";
import { useDebounce } from "use-debounce";
import { useEffect, useMemo, useState } from "react";

const initialNames = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // { id: "id-5", name: "Victor Stone", number: "334-22-18" },
  // { id: "id-6", name: "Luna Lovegood", number: "911-23-33" },
  // { id: "id-7", name: "Clark Kent", number: "800-45-90" },
  // { id: "id-8", name: "Bruce Wayne", number: "120-54-78" },
  // { id: "id-9", name: "Diana Prince", number: "670-34-29" },
  // { id: "id-10", name: "Barry Allen", number: "556-29-41" },
  // { id: "id-11", name: "Peter Parker", number: "321-67-98" },
  // { id: "id-12", name: "Tony Stark", number: "111-22-33" },
  // { id: "id-13", name: "Natasha Romanoff", number: "144-55-66" },
  // { id: "id-14", name: "Steve Rogers", number: "198-88-77" },
  // { id: "id-15", name: "Wanda Maximoff", number: "432-10-98" },
  // { id: "id-16", name: "Stephen Strange", number: "323-45-67" },
  // { id: "id-17", name: "Gamora Zen", number: "543-12-09" },
  // { id: "id-18", name: "Scott Lang", number: "222-33-44" },
  // { id: "id-19", name: "Hope Van Dyne", number: "765-23-89" },
  // { id: "id-20", name: "Nick Fury", number: "999-99-99" },
];

function App() {
  const [names, setNames] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || initialNames;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(names));
  }, [names]);

  // const [names, setNames] = useState(initialNames);
  const [inputValue, setInputValue] = useState("");
  const [debounceInputValue] = useDebounce(inputValue, 300);

  const visibleNames = useMemo(() => {
    return names.filter((contact) =>
      contact.name.toLowerCase().includes(debounceInputValue.toLowerCase())
    );
  }, [debounceInputValue, names]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    setNames([...names, newContact]);
  };

  const deleteContact = (id) => {
    setNames(names.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <Title />
      <ContactForm addContact={addContact} />
      <SearchBox text={inputValue} onChange={setInputValue} />
      <ContactList visibleNames={visibleNames} deleteContact={deleteContact} />
    </>
  );
}

export default App;
